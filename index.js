import{a as b,S,i as n}from"./assets/vendor-DqB7j7Ix.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();async function p(s,t){const o=new URLSearchParams({key:"50854630-6377197e49f9883f109b83eb2",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:"15",page:t});return await b.get("https://pixabay.com/api/",{params:o}).then(a=>a.data)}const m=document.querySelector(".gallery"),h=document.querySelector(".loader"),u=document.querySelector(".load-button"),$=new S(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){const t=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:r,views:i,comments:L,downloads:v})=>{const w=e.split(",").slice(0,3).join(",");return`<li class="gallery-item">
            <a class="gallery-link" href="${a}">
                <img
                    class="gallery-image"
                    src="${o}"
                    alt="${w}"/>
            </a>
            <div class="info-wrapper">
                <div class="attr-wrapper">
                    <span class="title">Likes</span>
                    <span class="text">${r}</span>
                </div>    
                <div class="attr-wrapper">
                    <span class="title">Views</span>
                    <span class="text">${i}</span>
                </div>    
                <div class="attr-wrapper">
                    <span class="title">Comments</span>
                    <span class="text">${L}</span>
                </div>    
                <div class="attr-wrapper">
                    <span class="title">Downloads</span>
                    <span class="text">${v}</span>
                </div>
            </div>        
        </li>`}).join("");m.insertAdjacentHTML("beforeend",t),$.refresh()}function q(){m.innerHTML=""}function x(){h.classList.remove("hidden")}function g(){h.classList.add("hidden")}function M(){u.classList.remove("hidden"),u.disabled=!1}function f(){u.classList.add("hidden")}const P=document.querySelector(".form"),O=document.querySelector(".load-button"),C=document.querySelector(".input");let d=1,c="",l=0;f();P.addEventListener("submit",async s=>{if(d=1,l=0,c=C.value.trim(),s.preventDefault(),c===""){n.error({message:"Please, fill in the field",color:"#ef4040",messageColor:"#fff",position:"topRight"});return}q(),x();try{const t=await p(c,d);if(t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",color:"#ef4040",messageColor:"#fff",position:"topRight"});return}l+=t.hits.length,y(t.hits),l>=t.totalHits&&f(),M()}catch(t){n.error({message:`${t}`})}finally{g()}});O.addEventListener("click",D);async function D(){d+=1;try{const s=await p(c,d);y(s.hits),l+=s.hits.length,l>=s.totalHits&&(f(),n.info({message:"We're sorry, but you've reached the end of search results.",messageColor:"#fff",position:"topRight"}))}catch(s){n.error({message:`${s}`})}finally{g()}}
//# sourceMappingURL=index.js.map
