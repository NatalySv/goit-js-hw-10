import"./assets/styles-1b3f128e.js";import{f as m,i as f}from"./assets/vendor-77e16229.js";const h="/goit-js-hw-10/assets/icon-error-433b5e5d.svg",a=document.querySelector("#datetime-picker"),o=document.querySelector("button[data-start]");let y=document.querySelector("span[data-days]"),g=document.querySelector("span[data-hours]"),p=document.querySelector("span[data-minutes]"),b=document.querySelector("span[data-seconds]");o.disabled=!0;let s=0,r=1,i;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]<=Date.now()?(o.disabled=!0,f.error({id:"myIziToast",title:"Error",titleColor:"rgb(255, 255, 255)",titleSize:"16",message:"Please choose a date in the future",messageColor:"rgb(255, 255, 255)",messageSize:"16",backgroundColor:"rgb(239, 64, 64)",position:"topRight",iconUrl:h})):(s=e[0].getTime(),o.disabled=!1)}};m(a,S);o.addEventListener("click",C);function C(e){a.disabled=!0,o.disabled=!0,i=setInterval(v,1e3,s)}function v(e){r=e-Date.now();const t=T(r);y.textContent=n(t.days),g.textContent=n(t.hours),p.textContent=n(t.minutes),b.textContent=n(t.seconds),r<1e3&&clearInterval(i)}function n(e){return String(e).padStart(2,"0")}function T(e){const d=Math.floor(e/864e5),c=Math.floor(e%864e5/36e5),u=Math.floor(e%864e5%36e5/6e4),l=Math.floor(e%864e5%36e5%6e4/1e3);return{days:d,hours:c,minutes:u,seconds:l}}
//# sourceMappingURL=commonHelpers.js.map
