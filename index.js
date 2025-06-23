import{a as $,S as x,i as n}from"./assets/vendor-DqB7j7Ix.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();async function h(s,t){const a=new URLSearchParams({key:"50854630-6377197e49f9883f109b83eb2",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:"15",page:t});return await $.get("https://pixabay.com/api/",{params:a}).then(o=>o.data)}const y=document.querySelector(".gallery"),g=document.querySelector(".loader"),u=document.querySelector(".load-button"),M=new x(".gallery a",{captionsData:"alt",captionDelay:250});function b(s){const t=s.map(({webformatURL:a,largeImageURL:o,tags:e,likes:r,views:i,comments:w,downloads:S})=>{const q=e.split(",").slice(0,3).join(",");return`<li class="gallery-item">
            <a class="gallery-link" href="${o}">
                <img
                    class="gallery-image"
                    src="${a}"
                    alt="${q}"/>
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
                    <span class="text">${w}</span>
                </div>    
                <div class="attr-wrapper">
                    <span class="title">Downloads</span>
                    <span class="text">${S}</span>
                </div>
            </div>        
        </li>`}).join("");y.insertAdjacentHTML("beforeend",t),M.refresh()}function P(){y.innerHTML=""}function v(){g.classList.remove("hidden")}function L(){g.classList.add("hidden")}function C(){u.classList.remove("hidden"),u.disabled=!1}function p(){u.classList.add("hidden")}const O=document.querySelector(".form"),f=document.querySelector(".load-button"),B=document.querySelector(".input"),m=document.querySelector(".button");let d=1,c="",l=0;p();O.addEventListener("submit",async s=>{if(d=1,l=0,c=B.value.trim(),s.preventDefault(),m.disabled=!0,c===""){n.error({message:"Please, fill in the field",color:"#ef4040",messageColor:"#fff",position:"topRight"});return}P(),v();try{const t=await h(c,d);if(t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",color:"#ef4040",messageColor:"#fff",position:"topRight"});return}m.disabled=!1,l+=t.hits.length,b(t.hits),l<t.totalHits?C():p()}catch(t){n.error({message:`${t}`})}finally{L()}});f.addEventListener("click",R);async function R(){v(),d+=1,f.disabled=!0;try{const s=await h(c,d);b(s.hits);const a=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:a.height*2,behavior:"smooth"}),l+=s.hits.length,f.disabled=!1,l>=s.totalHits&&(p(),n.info({message:"We're sorry, but you've reached the end of search results.",messageColor:"#fff",position:"topRight"}))}catch(s){n.error({message:`${s}`})}finally{L()}}
//# sourceMappingURL=index.js.map
