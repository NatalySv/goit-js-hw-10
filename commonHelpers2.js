import"./assets/styles-235dede3.js";import{i as s}from"./assets/vendor-77e16229.js";import{i as u}from"./assets/icon-error-b7da2677.js";const a="/goit-js-hw-10/assets/icon-ok-2e1ddc32.svg",o=document.querySelector(".form"),m=o.querySelector('input[name="delay"]'),c=o.querySelector('input[value="fulfilled"]'),d=o.querySelector('input[value="rejected"]');let t=null;o.addEventListener("submit",p);function p(r){r.preventDefault(),!(!c.checked&&!d.checked)&&(c.checked?t=!0:t=!1,f(t),o.reset())}function f(r){const i=m.value;new Promise((e,n)=>{setTimeout(()=>{r?e(`${i}`):n(`${i}`)},i)}).then(e=>{s.error({...l,message:`Fulfilled promise in ${e}ms`,backgroundColor:"rgb(89, 161, 13)",iconUrl:a})}).catch(e=>{s.error({...l,message:`Rejected promise in ${e}ms`,backgroundColor:"rgb(239, 64, 64)",iconUrl:u})})}const l={id:"myIziToast",title:"Error",titleColor:"rgb(255, 255, 255)",titleSize:"16",messageColor:"rgb(255, 255, 255)",messageSize:"16",position:"topRight"};
//# sourceMappingURL=commonHelpers2.js.map