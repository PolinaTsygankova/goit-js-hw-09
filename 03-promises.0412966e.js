function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var u=o("7Y9D8");refs={form:document.querySelector(".form"),submitBtn:document.querySelector("button[type]"),delayInp:document.querySelector('input[name="delay"]'),stepInp:document.querySelector('input[name="step"]'),amountInp:document.querySelector('input[name="amount"]')};let i=0;function l(t,n){const r=Math.random()>.3;new Promise(((o,i)=>{r?setTimeout((()=>{e(u).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)}),n):setTimeout((()=>{e(u).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}),n)}))}refs.form.addEventListener("submit",(function(e){e.preventDefault();const t=Number(refs.delayInp.value),n=Number(refs.stepInp.value),r=Number(refs.amountInp.value);for(let e=1;e<=r;e+=1)1===e?(i+=t,l(e,i)):(i+=n,l(e,i));i=0}));
//# sourceMappingURL=03-promises.0412966e.js.map
