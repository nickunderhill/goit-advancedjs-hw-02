import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */function a(){return`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,"0")}`}const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let o=null;function n(){t.disabled=!t.disabled,e.disabled=!e.disabled}function r(){n(),o=setInterval(()=>{document.body.style.backgroundColor=a()},1e3)}function l(){n(),clearInterval(o),o=null}t.addEventListener("click",r);e.addEventListener("click",l);
//# sourceMappingURL=commonHelpers.js.map
