import{A as O,S as b,N as T,K as j,i as D}from"./assets/vendor-BNqUg-2H.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const l=document.querySelector(".header-menu-list"),g=document.querySelector(".header-menu-link"),f=document.querySelector(".header-burger-menu"),K=document.querySelector(".header-burger-btn"),V=document.querySelector(".header-burger-menu-list"),N=document.querySelector(".header-burger-order-btn"),$=document.querySelector(".header-close-btn");l.addEventListener("click",L);K.addEventListener("click",W);V.addEventListener("click",p);N.addEventListener("click",p);$.addEventListener("click",p);g.addEventListener("click",L);g.addEventListener("click",()=>{g.blur()});document.body.addEventListener("click",t=>{!l.classList.contains("visually-hidden")&&!t.target.classList.contains("header-menu-link")&&L()});document.addEventListener("keydown",t=>{t.key==="Escape"&&f.classList.contains("is-open-header")&&p()});const x=new KeyframeEffect(l,[{opacity:"0",transform:"translateY(-100%)"},{opacity:"1",transform:"translateY(0)"}],{duration:500}),F=new KeyframeEffect(l,[{opacity:"1",transform:"translateY(0)"},{opacity:"0",transform:"translateY(-100%)"}],{duration:500}),R=new Animation(x,document.timeline),z=new Animation(F,document.timeline),Y=new KeyframeEffect(f,[{transform:"translateX(100%)"},{transform:"translateX(0)"}],{duration:500}),X=new KeyframeEffect(f,[{transform:"translateX(0)"},{transform:"translateX(100%)"}],{duration:500}),U=new Animation(Y,document.timeline),H=new Animation(X,document.timeline);function L(){if(l.classList.contains("visually-hidden")){R.play(),l.classList.remove("visually-hidden");return}z.play(),setTimeout(()=>{l.classList.add("visually-hidden")},500)}function W(){f.classList.add("is-open-header"),U.play(),document.body.style.overflow="hidden"}function p(){H.play(),setTimeout(()=>{f.classList.remove("is-open-header")},500),document.body.style.overflow=""}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".hero"),o=document.querySelectorAll(".color-option"),s=document.querySelector(".color-menu-btn"),n=document.querySelector(".color-picker"),e={red:"./img/hero/hero-1.webp",green:"./img/hero/hero-2.webp",blue:"./img/hero/hero-3.webp",orange:"./img/hero/hero-5.webp",khaki:"./img/hero/hero-4.webp",yellow:"./img/hero/hero-6.webp"},r=localStorage.getItem("selectedBg");r&&(t.style.backgroundImage=`url('${r}')`),s.addEventListener("click",()=>{n.classList.toggle("visible")}),o.forEach(c=>{c.addEventListener("click",()=>{const u=c.getAttribute("data-color"),h=e[u];t.style.backgroundImage=`url('${h}')`,localStorage.setItem("selectedBg",h),n.classList.remove("visible")})});const i=localStorage.getItem("selectedTheme");i&&document.body.classList.add(i),o.forEach(c=>{c.addEventListener("click",()=>{const u=`theme-${c.getAttribute("data-color")}`;document.body.classList.remove("theme-red","theme-green","theme-blue","theme-orange","theme-khaki","theme-yellow"),document.body.classList.add(u),localStorage.setItem("selectedTheme",u)})})});document.addEventListener("DOMContentLoaded",()=>{new O(".faq-item",{openOnInit:[]}),document.querySelectorAll(".faq-item").forEach(o=>{o.querySelector(".faq-container").addEventListener("click",()=>{const n=o.querySelector(".faq-text"),e=o.querySelector(".faq-vector-icon");n.classList.contains("hidden")?(n.classList.remove("hidden"),e.classList.add("open")):(n.classList.add("hidden"),e.classList.remove("open"))})})});document.addEventListener("DOMContentLoaded",()=>{new O(".information-item",{openOnInit:[]}),document.querySelectorAll(".information-item").forEach(o=>{o.querySelector(".about-button").addEventListener("click",()=>{const n=o.querySelector(".inform-block"),e=o.querySelector(".about-icon");n.classList.contains("visually-hidden")?(n.classList.remove("visually-hidden"),e.classList.add("open")):(n.classList.add("visually-hidden"),e.classList.remove("open"))})})});const k=document.querySelector(".skills-slider");k&&new b(k,{modules:[T,j],loop:!0,slidesPerView:2,grabCursor:!0,simulateTouch:!0,touchRatio:1,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,speed:500,navigation:{nextEl:".skills-button"},breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},centeredSlidesBounds:!0});const w=document.querySelector(".btn-scroll-top");window.addEventListener("scroll",()=>{window.scrollY>300?w.classList.remove("is-btnshow-hide"):w.classList.add("is-btnshow-hide")});w.onclick=()=>{window.scrollTo({top:0,behavior:"smooth"})};const B=document.querySelector(".project-arrow-left"),I=document.querySelector(".project-arrow-right"),P=new b(".swiper-container",{slidesPerView:1,spaceBetween:20,breakpoints:{375:{spaceBetween:20},768:{spaceBetween:35},1440:{spaceBetween:40}},speed:900,effect:"slide",navigation:{nextEl:".project-arrow-right",prevEl:".project-arrow-left"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0}});function J(){P.isBeginning?B.disabled=!0:B.disabled=!1,P.isEnd?I.disabled=!0:I.disabled=!1}J();const _=document.querySelector(".container"),G=document.querySelector(".reviews-list"),A=document.querySelector(".not-found");function M(){const t=_.clientWidth;if(t===320)return 1;if(t===375)return 1;if(t===768)return 2;if(t===1440)return 4}const C=new b(".swiper2",{direction:"horizontal",slidesPerView:M(),spaceBetween:16,scrollbar:{el:".swiper-scrollbar",hide:!0},navigation:{nextEl:".right-btn2",prevEl:".left-btn2"},speed:750,keyboard:{enabled:!0},grabCursor:!0,simulateTouch:!0});function Q(){C.params.slidesPerView=M(),C.update()}window.addEventListener("resize",Q);async function Z(){try{const t=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!t.ok)throw new Error(`Error ${t.status}`);const o=await t.json();ee(o),A.classList.add("visually-hidden")}catch{A.classList.remove("visually-hidden"),D.error({title:"Error",message:"Failed to fetch reviews from server",position:"bottomRight"})}}const ee=t=>{t.forEach(o=>{const s=`<li class="reviews-item swiper-slide">
      <img class="img-reviews" src="${o.avatar_url}" alt="reviews" loading="lazy" width="48" height="48"/>
      <h3 class="reviews-head">${o.author}</h3>
      <p class="reviews-text">${o.review}</p>  
    </li>`;G.insertAdjacentHTML("beforeend",s)})};Z();document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".covers"),o=document.querySelectorAll(".marquee"),s=new IntersectionObserver(n=>{n.forEach(e=>{e.isIntersecting?o.forEach(r=>{r.style.animationPlayState="running"}):o.forEach(r=>{r.style.animationPlayState="paused"})})},{threshold:.2});t&&s.observe(t)});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".contact-form");document.getElementById("modal");const o=document.getElementById("backdrop"),s=document.querySelector(".close-button"),n=t.querySelector("#email"),e=t.querySelector("#message"),r=document.createElement("div");r.classList.add("notification-container"),document.body.appendChild(r),n.addEventListener("focus",i),n.addEventListener("blur",c),e.addEventListener("focus",i),e.addEventListener("blur",u);function i(a){a.target.classList.remove("invalid")}function c(){n.validity.valid||(n.classList.add("invalid"),m("Invalid email address!","error"))}function u(){e.value.trim()||(e.classList.add("invalid"),m("Please enter a message.","error"))}t.addEventListener("submit",async a=>{a.preventDefault();const v=n.value.trim(),d=e.value.trim();if(!n.validity.valid){m("Invalid email address!","error");return}if(!d){m("Please enter a message.","error");return}const S={email:v,comment:d};console.log("Sending payload:",S);try{if(!(await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(S)})).ok)throw new Error("Server error occurred.");h(),t.reset()}catch(q){m(q.message||"Failed to send the message. Please try again.","error")}}),s.addEventListener("click",y),o.addEventListener("click",a=>{a.target===o&&y()});function h(){document.body.style.overflow="hidden",o.classList.remove("is-hidden"),document.addEventListener("keydown",E)}function y(){o.classList.add("is-hidden"),document.body.style.overflow="",document.removeEventListener("keydown",E)}function E(a){a.key==="Escape"&&y()}function m(a,v="info"){const d=document.createElement("div");d.classList.add("notification",v),d.textContent=a,r.appendChild(d),setTimeout(()=>{d.remove()},3e3)}});
//# sourceMappingURL=index.js.map
