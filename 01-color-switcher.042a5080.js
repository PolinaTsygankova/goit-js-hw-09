const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");let l=null;e.setAttribute("disabled",""),console.log(e),console.log("message"),e.addEventListener("click",(function(){o.removeAttribute("disabled"),console.log("Таймер запущено"),l=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),o.addEventListener("click",(function(){clearInterval(l),console.log("Таймер зупинено")}));
//# sourceMappingURL=01-color-switcher.042a5080.js.map
