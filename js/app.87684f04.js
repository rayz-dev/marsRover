(function(e){function t(t){for(var r,o,c=t[0],i=t[1],s=t[2],l=0,f=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function c(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"0241c1eb"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"296ff76f"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],d.parentNode.removeChild(d),n(u)},d.href=a;var b=document.getElementsByTagName("head")[0];b.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/marsRover/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2832:function(e,t,n){"use strict";n("d353")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t){var n=Object(r["z"])("router-view");return Object(r["s"])(),Object(r["e"])(r["b"],{name:"fade"},{default:Object(r["F"])((function(){return[Object(r["i"])(n)]})),_:1})}n("2832");var a=n("6b0d"),u=n.n(a);const c={},i=u()(c,[["render",o]]);var s=i,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),f={class:"home"};function d(e,t,n,o,a,u){var c=Object(r["z"])("TheLanding");return Object(r["s"])(),Object(r["g"])("div",f,[Object(r["i"])(c)])}var b=function(e){return Object(r["v"])("data-v-79498508"),e=e(),Object(r["t"])(),e},p={class:"landing"},h=b((function(){return Object(r["h"])("button",null,"Start the mission",-1)}));function m(e,t,n,o,a,u){var c=Object(r["z"])("router-link");return Object(r["s"])(),Object(r["g"])("div",p,[Object(r["h"])("h1",null,Object(r["B"])(a.title),1),Object(r["h"])("p",null,Object(r["B"])(a.text),1),Object(r["i"])(c,{to:"/game"},{default:Object(r["F"])((function(){return[h]})),_:1})])}var v={name:"TheLanding",data:function(){return{title:"Mars Rover Mission",text:"You're part of the team that explores Mars by sending remotely controlled vehicles to the surface \n        of the planet. Develop a software that translates the commands sent from earth to instructions\n        that are understood by the rover."}}};n("bbb2");const g=u()(v,[["render",m],["__scopeId","data-v-79498508"]]);var O=g,j={name:"Home",components:{TheLanding:O}};const y=u()(j,[["render",d]]);var w=y,_=[{path:"/",name:"Home",component:w},{path:"/game",name:"Game",component:function(){return n.e("about").then(n.bind(null,"7d36"))}}],x=Object(l["a"])({history:Object(l["b"])(),routes:_}),P=x;Object(r["d"])(s).use(P).mount("#app")},bbb2:function(e,t,n){"use strict";n("e494")},d353:function(e,t,n){},e494:function(e,t,n){}});
//# sourceMappingURL=app.87684f04.js.map