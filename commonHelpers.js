import"./assets/styles-235dede3.js";import{f as m,i as f}from"./assets/vendor-77e16229.js";import{i as h}from"./assets/icon-error-b7da2677.js";const a=document.querySelector("#datetime-picker"),o=document.querySelector("button[data-start]"),y=document.querySelector("span[data-days]"),p=document.querySelector("span[data-hours]"),S=document.querySelector("span[data-minutes]"),b=document.querySelector("span[data-seconds]");o.disabled=!0;let s=0,r=1,i;const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<=Date.now()?(o.disabled=!0,f.error({id:"myIziToast",title:"Error",titleColor:"rgb(255, 255, 255)",titleSize:"16",message:"Please choose a date in the future",messageColor:"rgb(255, 255, 255)",messageSize:"16",backgroundColor:"rgb(239, 64, 64)",position:"topRight",iconUrl:h})):(s=t[0].getTime(),o.disabled=!1)}};m(a,g);o.addEventListener("click",C);function C(t){a.disabled=!0,o.disabled=!0,i=setInterval(T,1e3,s)}function T(t){r=t-Date.now();const e=q(r);y.textContent=n(e.days),p.textContent=n(e.hours),S.textContent=n(e.minutes),b.textContent=n(e.seconds),r<1e3&&clearInterval(i)}function n(t){return String(t).padStart(2,"0")}function q(t){const c=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:c,hours:d,minutes:u,seconds:l}}
//# sourceMappingURL=commonHelpers.js.map