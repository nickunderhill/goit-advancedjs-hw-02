import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */function e(){return`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,"0")}`}const o=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");let t=null;function r(){o.disabled=!0,t=setInterval(()=>{document.body.style.backgroundColor=e()},1e3)}function a(){o.disabled=!1,clearInterval(t),t=null}o.addEventListener("click",r);n.addEventListener("click",a);
//# sourceMappingURL=commonHelpers.js.map