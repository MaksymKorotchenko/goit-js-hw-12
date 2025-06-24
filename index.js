import{a as $,S as M,i as l}from"./assets/vendor-DqB7j7Ix.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();async function g(r,t){const a=new URLSearchParams({key:"50854630-6377197e49f9883f109b83eb2",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:"15",page:t});return await $.get("https://pixabay.com/api/",{params:a}).then(o=>o.data)}const h=document.querySelector(".gallery"),y=document.querySelector(".loader"),u=document.querySelector(".load-button"),x=new M(".gallery a",{captionsData:"alt",captionDelay:250});function b(r){const t=r.map(({webformatURL:a,largeImageURL:o,tags:e,likes:s,views:n,comments:S,downloads:q})=>{const P=e.split(",").slice(0,3).join(",");return`<li class="gallery-item">
            <a class="gallery-link" href="${o}">
                <img
                    class="gallery-image"
                    src="${a}"
                    alt="${P}"/>
            </a>
            <div class="info-wrapper">
                <div class="attr-wrapper">
                    <span class="title">Likes</span>
                    <span class="text">${s}</span>
                </div>    
                <div class="attr-wrapper">
                    <span class="title">Views</span>
                    <span class="text">${n}</span>
                </div>    
                <div class="attr-wrapper">
                    <span class="title">Comments</span>
                    <span class="text">${S}</span>
                </div>    
                <div class="attr-wrapper">
                    <span class="title">Downloads</span>
                    <span class="text">${q}</span>
                </div>
            </div>        
        </li>`}).join("");h.insertAdjacentHTML("beforeend",t),x.refresh()}function C(){h.innerHTML=""}function v(){y.classList.remove("hidden")}function L(){y.classList.add("hidden")}function w(){u.classList.remove("hidden"),u.disabled=!1}function c(){u.classList.add("hidden")}const O=document.querySelector(".form"),f=document.querySelector(".load-button"),B=document.querySelector(".input"),m=document.querySelector(".button");let i=1,p=0,d="";function R(r){return Math.ceil(r.totalHits/r.hits.length)}c();O.addEventListener("submit",async r=>{if(r.preventDefault(),d=B.value.trim(),d===""){l.error({message:"Please, fill in the field",color:"#ef4040",messageColor:"#fff",position:"topRight"});return}i=1,m.disabled=!0,c(),C(),v();try{const t=await g(d,i);if(p=R(t),t.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",color:"#ef4040",messageColor:"#fff",position:"topRight"});return}b(t.hits),i<p?w():c()}catch(t){l.error({message:`${t}`})}finally{L(),m.disabled=!1}});f.addEventListener("click",T);async function T(){i+=1,f.disabled=!0,c(),v();try{const r=await g(d,i);b(r.hits);const a=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:a.height*2,behavior:"smooth"}),f.disabled=!1,i<p?w():(c(),l.info({message:"We're sorry, but you've reached the end of search results.",messageColor:"#fff",position:"topRight"}))}catch(r){l.error({message:`${r}`})}finally{L()}}
//# sourceMappingURL=index.js.map
