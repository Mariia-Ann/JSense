document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('.contact-form');
  const modal = document.getElementById('modal');
  const backdrop = document.getElementById('backdrop');
  const closeButton = document.querySelector('.close-button');
  const emailInput = contactForm.querySelector('#email');
  const messageInput = contactForm.querySelector('#message');

  const notificationContainer = document.createElement('div');
  notificationContainer.classList.add('notification-container');
  document.body.appendChild(notificationContainer);

  emailInput.addEventListener('focus', handleFocus);
  emailInput.addEventListener('blur', handleEmailBlur);
  messageInput.addEventListener('focus', handleFocus);
  messageInput.addEventListener('blur', handleMessageBlur);

  function handleFocus(event) {
    event.target.classList.remove('invalid');
  }

  function handleEmailBlur() {
    if (!emailInput.validity.valid) {
      emailInput.classList.add('invalid');
      showNotification('Invalid email address!', 'error');
    }
  }

  function handleMessageBlur() {
    if (!messageInput.value.trim()) {
      messageInput.classList.add('invalid');
      showNotification('Please enter a message.', 'error');
    }
  }

  contactForm.addEventListener('submit', async event => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const comment = messageInput.value.trim();

    if (!emailInput.validity.valid) {
      showNotification('Invalid email address!', 'error');
      return;
    }

    if (!comment) {
      showNotification('Please enter a message.', 'error');
      return;
    }

    const payload = { email, comment };
    console.log('Sending payload:', payload);

    try {
      const response = await fetch(
        'https://portfolio-js.b.goit.study/api/requests',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error('Server error occurred.');
      }

      openModal();
      contactForm.reset();
    } catch (error) {
      showNotification(
        error.message || 'Failed to send the message. Please try again.',
        'error'
      );
    }
  });

  closeButton.addEventListener('click', closeModal);
  backdrop.addEventListener('click', event => {
    if (event.target === backdrop) {
      closeModal();
    }
  });

  function openModal() {
    document.body.style.overflow = 'hidden';
    backdrop.classList.remove('is-hidden');
    document.addEventListener('keydown', handleKeyDown);
  }

  function closeModal() {
    backdrop.classList.add('is-hidden');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', handleKeyDown);
  }

  function handleKeyDown(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }

  function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.classList.add('notification', type);
    notification.textContent = message;
    notificationContainer.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 3000);
  }
});
