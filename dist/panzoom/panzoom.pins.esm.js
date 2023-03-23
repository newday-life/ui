const t=(e,...s)=>{const n=s.length;for(let i=0;i<n;i++){const n=s[i]||{};Object.entries(n).forEach((([s,n])=>{const i=Array.isArray(n)?[]:{};var r;e[s]||Object.assign(e,{[s]:i}),"object"==typeof(r=n)&&null!==r&&r.constructor===Object&&"[object Object]"===Object.prototype.toString.call(r)?Object.assign(e[s],t(i,n)):Array.isArray(n)?Object.assign(e,{[s]:[...n]}):Object.assign(e,{[s]:n})}))}return e},e=function(t,e){return t.split(".").reduce(((t,e)=>"object"==typeof t?t[e]:void 0),e)};class s{constructor(t={}){Object.defineProperty(this,"options",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"events",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),this.setOptions(t);for(const t of Object.getOwnPropertyNames(Object.getPrototypeOf(this)))t.startsWith("on")&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}setOptions(e){this.options=e?t({},this.constructor.defaults,e):{};for(const[t,e]of Object.entries(this.option("on")||{}))this.on(t,e)}option(t,...s){let n=e(t,this.options);return n&&"function"==typeof n&&(n=n.call(this,this,...s)),n}optionFor(t,s,n,...i){let r=e(s,t);var o;"string"!=typeof(o=r)||isNaN(o)||isNaN(parseFloat(o))||(r=parseFloat(r)),"true"===r&&(r=!0),"false"===r&&(r=!1),r&&"function"==typeof r&&(r=r.call(this,this,t,...i));let a=e(s,this.options);return a&&"function"==typeof a?r=a.call(this,this,t,...i,r):void 0===r&&(r=a),void 0===r?n:r}cn(t){const e=this.options.classes;return e&&e[t]||""}localize(t,e=[]){t=String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g,((t,e,s)=>{let n="";return s?n=this.option(`${e[0]+e.toLowerCase().substring(1)}.l10n.${s}`):e&&(n=this.option(`l10n.${e}`)),n||(n=t),n}));for(let s=0;s<e.length;s++)t=t.split(e[s][0]).join(e[s][1]);return t=t.replace(/\{\{(.*?)\}\}/g,((t,e)=>e))}on(t,e){let s=[];"string"==typeof t?s=t.split(" "):Array.isArray(t)&&(s=t),this.events||(this.events=new Map),s.forEach((t=>{let s=this.events.get(t);s||(this.events.set(t,[]),s=[]),s.includes(e)||s.push(e),this.events.set(t,s)}))}off(t,e){let s=[];"string"==typeof t?s=t.split(" "):Array.isArray(t)&&(s=t),s.forEach((t=>{const s=this.events.get(t);if(Array.isArray(s)){const t=s.indexOf(e);t>-1&&s.splice(t,1)}}))}emit(t,...e){[...this.events.get(t)||[]].forEach((t=>t(this,...e))),"*"!==t&&this.emit("*",t,...e)}}Object.defineProperty(s,"version",{enumerable:!0,configurable:!0,writable:!0,value:"5.0.11"}),Object.defineProperty(s,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{}});class n extends s{constructor(t,e){super(e),Object.defineProperty(this,"instance",{enumerable:!0,configurable:!0,writable:!0,value:t})}attach(){}detach(){}}class i extends n{constructor(){super(...arguments),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"pins",{enumerable:!0,configurable:!0,writable:!0,value:[]})}onTransform(t){for(const s of this.pins){if(!((e=s)&&null!==e&&e instanceof Element&&"nodeType"in e))continue;const{fitWidth:n,fitHeight:i,fullWidth:r,fullHeight:o}=t.contentRect,a=s.dataset.x||"",c=s.dataset.y||"";let l=0,f=0;l=a.includes("%")?n*(parseFloat(a)/100):parseFloat(a)/r*n,l-=.5*n,f=c.includes("%")?i*(parseFloat(c)/100):parseFloat(c)/o*i,f-=.5*i;const h=new DOMPoint(l,f).matrixTransform(t.getMatrix());s.style.transform=`translate3d(${h.x||0}px, ${h.y||0}px, 0)`}var e}attach(){this.pins=Array.from(this.instance.container.querySelectorAll("[data-panzoom-pin]")),this.pins.length&&(this.instance.container.classList.add("has-pins"),this.instance.on("afterTransform",this.onTransform))}detach(){this.pins=[],this.instance.container.classList.remove("has-pins"),this.instance.off("afterTransform",this.onTransform)}}Object.defineProperty(i,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{}});export{i as Pins};
