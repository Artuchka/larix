(()=>{var t={203:(t,e,a)=>{a(55),t.exports=function(t){return""+'<template data-searchFieldList><ul class="search-field__list"> </ul></template><template data-searchFieldListItem><li class="search-field__list__item"><img class="image" data-image alt="image for product"><div class="properties"><h4 class="title" data-title></h4><div class="price" data-price></div><div class="size" data-size></div></div></li></template>'}},184:(t,e,a)=>{a(55),t.exports=function(t){var e;return""+(null==(e=a(203).call(this,t))?"":e)}},349:(t,e,a)=>{var i=a(55);t.exports=function(t){var e,s="",r={};r.button=e=function(t="click me",a="button",r="#",c){this&&this.block,this&&this.attributes,s="submit"==c?s+"<button"+(i.attr("class",i.classes(["button",a],[!1,!0]),!1,!0)+i.attr("type",c,!0,!0))+">"+i.escape(null==(e=t)?"":e)+"</button>":s+"<button"+(i.attr("class",i.classes(["button",a],[!1,!0]),!1,!0)+i.attr("type",c,!0,!0))+"><a"+i.attr("href",r,!0,!0)+">"+i.escape(null==(e=t)?"":e)+"</a></button>"},r.card=e=function(t="",a="Доска обрезная",c="Лиственница",n=9e3,l,o){this&&this.block,this&&this.attributes,s+='<div class="card"> ',r.image(t,"card__image"),s=s+'<div class="card__title">'+i.escape(null==(e=a)?"":e)+'</div><div class="card__type">'+i.escape(null==(e=c)?"":e)+'</div><div class="card__flexy"><div class="card__price">'+i.escape(null==(e=n)?"":e)+'</div><div class="card__actions"> ',r.button("Перейти","button--full",o),l&&(s+='<span class="discount">-20%</span>'),s+="</div></div></div>"};const c=["","",""],n=["#4E9F3D","green","#1E5128"];r.accordion=e=function(t,e=0){this&&this.block,this&&this.attributes,s+='<div class="accordion" data-accordion>',r.accordion_list(t,0),s+="</div>"},r.accordion_list=e=function(t,a){this&&this.block,this&&this.attributes,s+='<div class="accordion__list">',function(){var l=t;if("number"==typeof l.length)for(var o=0,d=l.length;o<d;o++){var p=l[o];s=s+'<div class="accordion__item"'+i.attr("data-after",c[a],!0,!0)+'><label class="label"'+i.attr("for",p.title,!0,!0)+'><input type="checkbox"'+i.attr("id",p.title,!0,!0)+"><span"+i.attr("style",i.style(`--coloritto: ${n[a]}`),!0,!0)+">"+i.escape(null==(e=p.title)?"":e)+"</span>",void 0!==p.types&&r.accordion_list(p.types,a+1),s+="</label></div>"}else for(var o in d=0,l)d++,p=l[o],s=s+'<div class="accordion__item"'+i.attr("data-after",c[a],!0,!0)+'><label class="label"'+i.attr("for",p.title,!0,!0)+'><input type="checkbox"'+i.attr("id",p.title,!0,!0)+"><span"+i.attr("style",i.style(`--coloritto: ${n[a]}`),!0,!0)+">"+i.escape(null==(e=p.title)?"":e)+"</span>",void 0!==p.types&&r.accordion_list(p.types,a+1),s+="</label></div>"}.call(this),s+="</div>"},r.accordionInfo_list=e=function(t){this&&this.block,this&&this.attributes,s+='<div class="accordion__list accordion-info__list">',function(){var a=t;if("number"==typeof a.length)for(var c=0,n=a.length;c<n;c++){var l=a[c];s=s+'<div class="accordion__item"><label class="label"'+i.attr("for",l.title,!0,!0)+'><input type="checkbox"'+i.attr("id",l.title,!0,!0)+"><span"+(i.attr("data-after-unfold","+",!0,!0)+i.attr("data-after-fold","-",!0,!0))+">"+i.escape(null==(e=l.title)?"":e)+"</span>",r.infoCard(l.imgSrc,l.text),s+="</label></div>"}else for(var c in n=0,a)n++,l=a[c],s=s+'<div class="accordion__item"><label class="label"'+i.attr("for",l.title,!0,!0)+'><input type="checkbox"'+i.attr("id",l.title,!0,!0)+"><span"+(i.attr("data-after-unfold","+",!0,!0)+i.attr("data-after-fold","-",!0,!0))+">"+i.escape(null==(e=l.title)?"":e)+"</span>",r.infoCard(l.imgSrc,l.text),s+="</label></div>"}.call(this),s+="</div>"},r.searchField=e=function(t){this&&this.block,this&&this.attributes,s=s+"<div"+(i.attr("class",i.classes(["search-field",t],[!1,!0]),!1,!0)+i.attr("data-searchField",!0,!0,!0))+'><input type="text">',r.image("header/search.svg"),s+="</div>"},r.modal=e=function(){this&&this.block,this&&this.attributes,s+='<div class="modal__bg" data-modal-bg></div><div class="modal" data-modal> ',r.image("modal/main.png"),s+='<form class="form"> <div class="form__close" data-close-modal-btn><span> </span><span> </span></div><div class="form__title">Заполните форму и  мы поможем вам с покупкой</div><div class="form__input-container"><input class="form__input" type="text" placeholder="Имя"><input class="form__input" type="tel" placeholder="Телефон"><input class="form__input" type="email" placeholder="E-mail"><textarea class="form__textarea" placeholder="Ваш комментарий"></textarea></div>',r.button("отправить","button--half button--padding","#","submit"),s+="</form></div>",r.notification()},r.notification=e=function(){this&&this.block,this&&this.attributes,s+='<div class="notification" data-notification>',r.image("modal/success.svg"),s+='<div class="text"> <div class="title">Отлично!</div><div class="subtitle">Мы скоро позвоним вам</div></div></div>'},r.image=e=function(t,e){this&&this.block,this&&this.attributes,s=s+"<img"+(i.attr("class",i.classes([e],[!0]),!1,!0)+i.attr("src",a(327)(`./${t}`),!0,!0))+' alt="altik">'},r.infoCard=e=function(t,a){this&&this.block,this&&this.attributes,s+='<div class="info-card"> ',r.image(t),s=s+'<div class="text">'+i.escape(null==(e=a)?"":e)+"</div>",r.button("Перейти","btn--padding btn--full","#"),s+="</div>"},s=s+'<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>larix</title></head><body> '+(null==(e=a(184).call(this,t))?"":e),r.modal();const l=[{href:"/catalog.html",text:"Каталог"},{href:"#",text:"Акции"},{href:"#",text:"Кубатурник"},{href:"#",text:"Доставка"},{href:"/about.html",text:"О нас"},{href:"#",text:"Контакты"}],o=[{img1:"header/action_whatsapp.svg",img2:"header/action_tg.svg",text:"+7 (939) 777-70-90"},{img1:"header/action_phone.svg",img2:"header/action_phone2.svg",text:"Заказать звонок"}];s+='<header class="header"><div class="burger" data-nav-open><span></span><span></span><span></span></div><div class="logo"> <span>лого</span>',r.image("header/logo.svg"),s+='</div><nav class="nav" data-nav><div class="nav__close" data-nav-close> <span></span><span></span></div><ul class="nav__list"> ',function(){var t=l;if("number"==typeof t.length)for(var a=0,r=t.length;a<r;a++){var c=t[a];s=s+'<li class="nav__item"> <a class="nav__link"'+i.attr("href",c.href,!0,!0)+">"+i.escape(null==(e=c.text)?"":e)+"</a></li>"}else for(var a in r=0,t)r++,c=t[a],s=s+'<li class="nav__item"> <a class="nav__link"'+i.attr("href",c.href,!0,!0)+">"+i.escape(null==(e=c.text)?"":e)+"</a></li>"}.call(this),s+="</ul>",r.searchField("nav__search-field"),s+='<div class="nav__action-list"> ',function(){var t=o;if("number"==typeof t.length)for(var a=0,c=t.length;a<c;a++){var n=t[a];s+='<div class="nav__action-item">',r.image(n.img1),r.image(n.img2),s=s+"<span>"+i.escape(null==(e=n.text)?"":e)+"</span></div>"}else for(var a in c=0,t)c++,n=t[a],s+='<div class="nav__action-item">',r.image(n.img1),r.image(n.img2),s=s+"<span>"+i.escape(null==(e=n.text)?"":e)+"</span></div>"}.call(this),s+='</div></nav><div class="search">',r.image("header/search.svg"),s+='</div></header><main class="main">';const d=[{title:"Доска сухая",type:"Лиственница",price:9e3,href:"productCard.html"},{title:"Доска сухая",type:"Лиственница",price:9e3,href:"productCard.html"},{title:"Доска сухая",type:"Лиственница",price:9e3,href:"productCard.html"},{title:"Доска сухая",type:"Лиственница",price:9e3,href:"productCard.html"}],p="products/1.png";s+='<div class="text-content"><div class="title">Наша продукция</div><div class="subtitle">Компания «Лиственница опт» предлагает купить пиломатериалы со склада производителя, оптом и в розницу, доску обрезную, брус, вагонку, блок-хаус, фанеру, дешево, с доставкой своим спецавтопарком по Москве и Московской области.</div></div><div class="workspace"><aside class="sidebar">',r.accordion([{title:"Брус обрезной",types:[{title:"Брус сухой обрезной",types:[{title:"new type1"},{title:"new type2"},{title:"new type3"}]},{title:"Брус сухой строганый"},{title:"Брус строганый"},{title:"Брус клееный"},{title:"Брус профилированный"},{title:"Профбрус камерной сушки"}]},{title:"Доска",types:[{title:"Брус сухой обрезной"},{title:"Брус сухой строганый"},{title:"Брус строганый"},{title:"Брус клееный"},{title:"Брус профилированный"},{title:"Профбрус камерной сушки"}]},{title:"Брусок"},{title:"Фанера"},{title:"Фасадный планкен"}]),s+='</aside><div class="products-grid"> ',function(){var t=[1,2,3,4,5,6];if("number"==typeof t.length)for(var e=0,a=t.length;e<a;e++)(function(){var t=d;if("number"==typeof t.length)for(var e=0,a=t.length;e<a;e++){var i=t[e];r.card.call({block:function(){s+="  "}},p,i.title,i.type,i.price,!1,`/${i.href}`)}else for(var e in a=0,t)a++,i=t[e],r.card.call({block:function(){s+="  "}},p,i.title,i.type,i.price,!1,`/${i.href}`)}).call(this);else for(var e in a=0,t)a++,function(){var t=d;if("number"==typeof t.length)for(var e=0,a=t.length;e<a;e++){var i=t[e];r.card.call({block:function(){s+="  "}},p,i.title,i.type,i.price,!1,`/${i.href}`)}else for(var e in a=0,t)a++,i=t[e],r.card.call({block:function(){s+="  "}},p,i.title,i.type,i.price,!1,`/${i.href}`)}.call(this)}.call(this),s+="</div></div></main>";const f=[{href:"#",text:"Каталог"},{href:"#",text:"Акции"},{href:"#",text:"Кубатурник"},{href:"#",text:"Доставка"},{href:"#",text:"О нас"},{href:"#",text:"Контакты"}],u=[{img1:"header/action_whatsapp.svg",img2:"header/action_tg.svg",text:"+7 (939) 777-70-90"},{img1:"header/action_phone.svg",img2:"header/action_phone2.svg",text:"Заказать звонок"}];return s+='<footer class="footer"><div class="footer__wrapper"><div class="footer__nav"><ul class="nav__list"> ',function(){var t=f;if("number"==typeof t.length)for(var a=0,r=t.length;a<r;a++){var c=t[a];s=s+'<li class="nav__item"> <a class="nav__link"'+i.attr("href",c.href,!0,!0)+">"+i.escape(null==(e=c.text)?"":e)+"</a></li>"}else for(var a in r=0,t)r++,c=t[a],s=s+'<li class="nav__item"> <a class="nav__link"'+i.attr("href",c.href,!0,!0)+">"+i.escape(null==(e=c.text)?"":e)+"</a></li>"}.call(this),s+='</ul></div><div class="footer__logo logo"> <span>лого</span><div class="rights">Все права защищены</div><div class="to-start">В начало</div></div><div class="footer__action-list"> ',r.searchField("footer__search-field"),function(){var t=u;if("number"==typeof t.length)for(var a=0,c=t.length;a<c;a++){var n=t[a];s+='<div class="footer__action-item">',r.image(n.img1),r.image(n.img2),s=s+"<span>"+i.escape(null==(e=n.text)?"":e)+"</span></div>"}else for(var a in c=0,t)c++,n=t[a],s+='<div class="footer__action-item">',r.image(n.img1),r.image(n.img2),s=s+"<span>"+i.escape(null==(e=n.text)?"":e)+"</span></div>"}.call(this),s+="</div></div></footer></body></html>"}},55:(t,e,a)=>{"use strict";var i=Object.prototype.hasOwnProperty;function s(t,e){return Array.isArray(t)?function(t,e){for(var a,i="",r="",c=Array.isArray(e),n=0;n<t.length;n++)(a=s(t[n]))&&(c&&e[n]&&(a=l(a)),i=i+r+a,r=" ");return i}(t,e):t&&"object"==typeof t?function(t){var e="",a="";for(var s in t)s&&t[s]&&i.call(t,s)&&(e=e+a+s,a=" ");return e}(t):t||""}function r(t){if(!t)return"";if("object"==typeof t){var e="";for(var a in t)i.call(t,a)&&(e=e+a+":"+t[a]+";");return e}return t+""}function c(t,e,a,i){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(i?t:t+'="'+t+'"');var s=typeof e;return"object"!==s&&"function"!==s||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),a||-1===e.indexOf('"'))?(a&&(e=l(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}e.merge=function t(e,a){if(1===arguments.length){for(var i=e[0],s=1;s<e.length;s++)i=t(i,e[s]);return i}for(var c in a)if("class"===c){var n=e[c]||[];e[c]=(Array.isArray(n)?n:[n]).concat(a[c]||[])}else if("style"===c){n=(n=r(e[c]))&&";"!==n[n.length-1]?n+";":n;var l=r(a[c]);l=l&&";"!==l[l.length-1]?l+";":l,e[c]=n+l}else e[c]=a[c];return e},e.classes=s,e.style=r,e.attr=c,e.attrs=function(t,e){var a="";for(var n in t)if(i.call(t,n)){var l=t[n];if("class"===n){a=c(n,l=s(l),!1,e)+a;continue}"style"===n&&(l=r(l)),a+=c(n,l,!1,e)}return a};var n=/["&<>]/;function l(t){var e=""+t,a=n.exec(e);if(!a)return t;var i,s,r,c="";for(i=a.index,s=0;i<e.length;i++){switch(e.charCodeAt(i)){case 34:r="&quot;";break;case 38:r="&amp;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}s!==i&&(c+=e.substring(s,i)),s=i+1,c+=r}return s!==i?c+e.substring(s,i):c}e.escape=l,e.rethrow=function t(e,i,s,r){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&i||r))throw e.message+=" on line "+s,e;try{r=r||a(835).readFileSync(i,"utf8")}catch(a){t(e,null,s)}var c=3,n=r.split("\n"),l=Math.max(s-c,0),o=Math.min(n.length,s+c);throw c=n.slice(l,o).map((function(t,e){var a=e+l+1;return(a==s?"  > ":"    ")+a+"| "+t})).join("\n"),e.path=i,e.message=(i||"Pug")+":"+s+"\n"+c+"\n\n"+e.message,e}},327:(t,e,a)=>{var i={"./about.png":951,"./about/1.png":470,"./about/2.png":990,"./about/3.png":319,"./header/action_phone.svg":167,"./header/action_phone2.svg":3,"./header/action_tg.svg":797,"./header/action_whatsapp.svg":199,"./header/logo.svg":833,"./header/search.svg":152,"./header/search_light.svg":826,"./modal/main.png":816,"./modal/success.svg":726,"./products/1.png":545,"./products/2.png":928,"./products/3.png":44,"./services/1.png":456,"./services/2.png":124,"./services/3.png":812,"./services/4.png":158,"./showcase.png":178};function s(t){var e=r(t);return a(e)}function r(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=r,t.exports=s,s.id=327},951:(t,e,a)=>{"use strict";t.exports=a.p+"./img/about.2e5470279cc466081066.png"},470:(t,e,a)=>{"use strict";t.exports=a.p+"./img/1.271c1a8fa9201cd479b7.png"},990:(t,e,a)=>{"use strict";t.exports=a.p+"./img/2.532b5da71abc0bf3675f.png"},319:(t,e,a)=>{"use strict";t.exports=a.p+"./img/3.70ded6f205f203d27e12.png"},167:(t,e,a)=>{"use strict";t.exports=a.p+"./img/action_phone.c4d773757692ba9c4861.svg"},3:(t,e,a)=>{"use strict";t.exports=a.p+"./img/action_phone2.58bfe8db9048ab38e53c.svg"},797:(t,e,a)=>{"use strict";t.exports=a.p+"./img/action_tg.eff30f2a8af94e49d18f.svg"},199:(t,e,a)=>{"use strict";t.exports=a.p+"./img/action_whatsapp.9f34f959af8c5ca9fd6b.svg"},833:(t,e,a)=>{"use strict";t.exports=a.p+"./img/logo.fa538e42e54615e7ddfa.svg"},152:(t,e,a)=>{"use strict";t.exports=a.p+"./img/search.dff8de023c4ff0165fbe.svg"},826:(t,e,a)=>{"use strict";t.exports=a.p+"./img/search_light.1a91f14072960a2e04e6.svg"},816:(t,e,a)=>{"use strict";t.exports=a.p+"./img/main.98846acf737c8ff0f504.png"},726:(t,e,a)=>{"use strict";t.exports=a.p+"./img/success.099cf09d297b330d7b17.svg"},545:(t,e,a)=>{"use strict";t.exports=a.p+"./img/1.3458a5467c329ea8734f.png"},928:(t,e,a)=>{"use strict";t.exports=a.p+"./img/2.843c65823cbfbe138fe4.png"},44:(t,e,a)=>{"use strict";t.exports=a.p+"./img/3.498ebbdf28002ff1c025.png"},456:(t,e,a)=>{"use strict";t.exports=a.p+"./img/1.b372cc9fa86f6fac7f4f.png"},124:(t,e,a)=>{"use strict";t.exports=a.p+"./img/2.d252abeba0a3701ded85.png"},812:(t,e,a)=>{"use strict";t.exports=a.p+"./img/3.858bb45f6f46c5e62090.png"},158:(t,e,a)=>{"use strict";t.exports=a.p+"./img/4.24bc5de14f7f9eba1053.png"},178:(t,e,a)=>{"use strict";t.exports=a.p+"./img/showcase.8fbf61db8d7050b64e3f.png"},835:()=>{}},e={};function a(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,a),r.exports}a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;a.g.importScripts&&(t=a.g.location+"");var e=a.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var i=e.getElementsByTagName("script");i.length&&(t=i[i.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=t})(),(()=>{"use strict";function t(t){if(t.stopPropagation(),t.preventDefault(),this.classList.contains("accordion-info"))return void function(t,a){let i;t.matches("label.label")&&(i=t.querySelector("input")),t.matches("span[data-after-unfold][data-after-fold]")&&(i=t.parentNode.querySelector("input")),e(i,a)}(t.target,this);let a;(t.target.matches("label.label")||t.target.matches(".accordion__item[data-after]")&&!t.target.querySelector("input").checked)&&(a=t.target.querySelector("input")),t.target.matches("span")&&(a=t.target.parentNode.querySelector("input")),e(a)}function e(t,e){t&&(t.checked?t.checked=!1:(function(t){t&&Array.from(t.children[0].children).forEach((t=>{t.querySelector("label > input").checked=!1}))}(e),t.checked=!0))}a(349);const i=document.querySelector("[data-searchFieldList]"),s=document.querySelector("[data-searchFieldListItem]"),r=document.querySelector("[data-searchField]"),c=document.querySelector("[data-modal]"),n=document.querySelector("[data-modal-bg]"),l=c.querySelector("[data-close-modal-btn]"),o=c.querySelector("form.form"),d=document.querySelector("[data-notification]");function p(){c.classList.add("show"),n.classList.add("show")}function f(){c.classList.remove("show"),n.classList.remove("show")}var u;l.addEventListener("click",f),o.addEventListener("submit",(function(){event.preventDefault(),f(),d.classList.add("show"),setTimeout((()=>{d.classList.remove("show")}),3e3)})),document.querySelectorAll("[data-accordion]").forEach((e=>{!function(e){e&&e.addEventListener("click",t)}(e)})),u=document.body,Array.from(u.querySelectorAll("[data-modal-open-btn]")).forEach((t=>t.addEventListener("click",p))),document.querySelector("[data-searchField]").querySelector("input").addEventListener("input",(function(){Array.from(r.querySelectorAll(".search-field__list")).forEach((t=>t.remove())),function(t){const e=i.content.cloneNode(!0).querySelector("ul");r.append(e),[{imgSrc:"../img/products/1.png",title:"Террасная доска",price:"18500",size:"20*40*6000"},{imgSrc:"../img/products/1.png",title:"Террасная доска",price:"18500",size:"20*40*6000"},,{imgSrc:"../img/products/1.png",title:"Террасная доска",price:"18500",size:"20*40*6000"}].forEach((t=>{e.append(function({imgSrc:t,title:e,price:a,size:i}){const r=s.content.cloneNode(!0);return r.querySelector("[data-image]").src=t,r.querySelector("[data-title]").textContent=e,r.querySelector("[data-price]").textContent=a,r.querySelector("[data-size]").textContent=i,r}(t))}))}()}))})()})();
//# sourceMappingURL=catalog.js.map