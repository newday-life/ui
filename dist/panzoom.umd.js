// @fancyapps/ui/Panzoom v4.0.30
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).window=t.window||{})}(this,(function(t){"use strict";function e(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function i(t){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?e(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e,i){return e&&r(t.prototype,e),i&&r(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return l(t)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,n=c(t);if(e){var o=c(this).constructor;i=Reflect.construct(n,arguments,o)}else i=n.apply(this,arguments);return u(this,i)}}function d(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==i)return;var n,o,r=[],s=!0,a=!1;try{for(i=i.call(t);!(s=(n=i.next()).done)&&(r.push(n.value),!e||r.length!==e);s=!0);}catch(t){a=!0,o=t}finally{try{s||null==i.return||i.return()}finally{if(a)throw o}}return r}(t,e)||p(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t){return function(t){if(Array.isArray(t))return g(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||p(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){if(t){if("string"==typeof t)return g(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?g(t,e):void 0}}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function m(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=p(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,a=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return s=t.done,t},e:function(t){a=!0,r=t},f:function(){try{s||null==i.return||i.return()}finally{if(a)throw r}}}}var y=function(t){return"object"===n(t)&&null!==t&&t.constructor===Object&&"[object Object]"===Object.prototype.toString.call(t)},b=function t(){for(var e=!1,i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];"boolean"==typeof o[0]&&(e=o.shift());var s=o[0];if(!s||"object"!==n(s))throw new Error("extendee must be an object");for(var a=o.slice(1),c=a.length,h=0;h<c;h++){var l=a[h];for(var u in l)if(l.hasOwnProperty(u)){var f=l[u];if(e&&(Array.isArray(f)||y(f))){var d=Array.isArray(f)?[]:{};s[u]=t(!0,s.hasOwnProperty(u)?s[u]:d,f)}else s[u]=f}}return s},w=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e4;return t=parseFloat(t)||0,Math.round((t+Number.EPSILON)*e)/e},x=function t(e){return!!(e&&"object"===n(e)&&e instanceof Element&&e!==document.body)&&(!e.__Panzoom&&(function(t){var e=getComputedStyle(t)["overflow-y"],i=getComputedStyle(t)["overflow-x"],n=("scroll"===e||"auto"===e)&&Math.abs(t.scrollHeight-t.clientHeight)>1,o=("scroll"===i||"auto"===i)&&Math.abs(t.scrollWidth-t.clientWidth)>1;return n||o}(e)?e:t(e.parentNode)))},P="undefined"!=typeof window&&window.ResizeObserver||function(){function t(e){o(this,t),this.observables=[],this.boundCheck=this.check.bind(this),this.boundCheck(),this.callback=e}return s(t,[{key:"observe",value:function(t){if(!this.observables.some((function(e){return e.el===t}))){var e={el:t,size:{height:t.clientHeight,width:t.clientWidth}};this.observables.push(e)}}},{key:"unobserve",value:function(t){this.observables=this.observables.filter((function(e){return e.el!==t}))}},{key:"disconnect",value:function(){this.observables=[]}},{key:"check",value:function(){var t=this.observables.filter((function(t){var e=t.el.clientHeight,i=t.el.clientWidth;if(t.size.height!==e||t.size.width!==i)return t.size.height=e,t.size.width=i,!0})).map((function(t){return t.el}));t.length>0&&this.callback(t),window.requestAnimationFrame(this.boundCheck)}}]),t}(),O=s((function t(e){o(this,t),this.id=self.Touch&&e instanceof Touch?e.identifier:-1,this.pageX=e.pageX,this.pageY=e.pageY,this.clientX=e.clientX,this.clientY=e.clientY})),k=function(t,e){return e?Math.sqrt(Math.pow(e.clientX-t.clientX,2)+Math.pow(e.clientY-t.clientY,2)):0},S=function(t,e){return e?{clientX:(t.clientX+e.clientX)/2,clientY:(t.clientY+e.clientY)/2}:t},E=function(t){return"changedTouches"in t},_=function(){function t(e){var i=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.start,s=void 0===r?function(){return!0}:r,a=n.move,c=void 0===a?function(){}:a,h=n.end,l=void 0===h?function(){}:h;o(this,t),this._element=e,this.startPointers=[],this.currentPointers=[],this._pointerStart=function(t){if(!(t.buttons>0&&0!==t.button)){var e=new O(t);i.currentPointers.some((function(t){return t.id===e.id}))||i._triggerPointerStart(e,t)&&(window.addEventListener("mousemove",i._move),window.addEventListener("mouseup",i._pointerEnd))}},this._touchStart=function(t){for(var e=0,n=Array.from(t.changedTouches||[]);e<n.length;e++){var o=n[e];i._triggerPointerStart(new O(o),t)}},this._move=function(t){var e,n=i.currentPointers.slice(),o=E(t)?Array.from(t.changedTouches).map((function(t){return new O(t)})):[new O(t)],r=[],s=m(o);try{var a=function(){var t=e.value,n=i.currentPointers.findIndex((function(e){return e.id===t.id}));if(n<0)return"continue";r.push(t),i.currentPointers[n]=t};for(s.s();!(e=s.n()).done;)a()}catch(t){s.e(t)}finally{s.f()}i._moveCallback(n,i.currentPointers.slice(),t)},this._triggerPointerEnd=function(t,e){var n=i.currentPointers.findIndex((function(e){return e.id===t.id}));return!(n<0)&&(i.currentPointers.splice(n,1),i.startPointers.splice(n,1),i._endCallback(t,e),!0)},this._pointerEnd=function(t){t.buttons>0&&0!==t.button||i._triggerPointerEnd(new O(t),t)&&(window.removeEventListener("mousemove",i._move,{passive:!1}),window.removeEventListener("mouseup",i._pointerEnd,{passive:!1}))},this._touchEnd=function(t){for(var e=0,n=Array.from(t.changedTouches||[]);e<n.length;e++){var o=n[e];i._triggerPointerEnd(new O(o),t)}},this._startCallback=s,this._moveCallback=c,this._endCallback=l,this._element.addEventListener("mousedown",this._pointerStart,{passive:!1}),this._element.addEventListener("touchstart",this._touchStart,{passive:!1}),this._element.addEventListener("touchmove",this._move,{passive:!1}),this._element.addEventListener("touchend",this._touchEnd),this._element.addEventListener("touchcancel",this._touchEnd)}return s(t,[{key:"stop",value:function(){this._element.removeEventListener("mousedown",this._pointerStart,{passive:!1}),this._element.removeEventListener("touchstart",this._touchStart,{passive:!1}),this._element.removeEventListener("touchmove",this._move,{passive:!1}),this._element.removeEventListener("touchend",this._touchEnd),this._element.removeEventListener("touchcancel",this._touchEnd),window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)}},{key:"_triggerPointerStart",value:function(t,e){return!!this._startCallback(t,e)&&(this.currentPointers.push(t),this.startPointers.push(t),!0)}}]),t}(),A=function(t,e){return t.split(".").reduce((function(t,e){return t&&t[e]}),e)},T=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(this,t),this.options=b(!0,{},e),this.plugins=[],this.events={};for(var i=0,n=["on","once"];i<n.length;i++)for(var r=n[i],s=0,a=Object.entries(this.options[r]||{});s<a.length;s++){var c=a[s];this[r].apply(this,v(c))}}return s(t,[{key:"option",value:function(t,e){t=String(t);var i=A(t,this.options);if("function"==typeof i){for(var n,o=arguments.length,r=new Array(o>2?o-2:0),s=2;s<o;s++)r[s-2]=arguments[s];i=(n=i).call.apply(n,[this,this].concat(r))}return void 0===i?e:i}},{key:"localize",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t=(t=String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g,(function(t,n,o){var r="";o?r=e.option("".concat(n[0]+n.toLowerCase().substring(1),".l10n.").concat(o)):n&&(r=e.option("l10n.".concat(n))),r||(r=t);for(var s=0;s<i.length;s++)r=r.split(i[s][0]).join(i[s][1]);return r}))).replace(/\{\{(.*)\}\}/,(function(t,e){return e}))}},{key:"on",value:function(t,e){var i=this;if(y(t)){for(var n=0,o=Object.entries(t);n<o.length;n++){var r=o[n];this.on.apply(this,v(r))}return this}return String(t).split(" ").forEach((function(t){var n=i.events[t]=i.events[t]||[];-1==n.indexOf(e)&&n.push(e)})),this}},{key:"once",value:function(t,e){var i=this;if(y(t)){for(var n=0,o=Object.entries(t);n<o.length;n++){var r=o[n];this.once.apply(this,v(r))}return this}return String(t).split(" ").forEach((function(t){var n=function n(){i.off(t,n);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];e.call.apply(e,[i,i].concat(r))};n._=e,i.on(t,n)})),this}},{key:"off",value:function(t,e){var i=this;if(!y(t))return t.split(" ").forEach((function(t){var n=i.events[t];if(!n||!n.length)return i;for(var o=-1,r=0,s=n.length;r<s;r++){var a=n[r];if(a&&(a===e||a._===e)){o=r;break}}-1!=o&&n.splice(o,1)})),this;for(var n=0,o=Object.entries(t);n<o.length;n++){var r=o[n];this.off.apply(this,v(r))}}},{key:"trigger",value:function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];var o,r=m(v(this.events[t]||[]).slice());try{for(r.s();!(o=r.n()).done;){var s=o.value;if(s&&!1===s.call.apply(s,[this,this].concat(i)))return!1}}catch(t){r.e(t)}finally{r.f()}var a,c=m(v(this.events["*"]||[]).slice());try{for(c.s();!(a=c.n()).done;){var h=a.value;if(h&&!1===h.call.apply(h,[this,t,this].concat(i)))return!1}}catch(t){c.e(t)}finally{c.f()}return!0}},{key:"attachPlugins",value:function(t){for(var e={},i=0,n=Object.entries(t||{});i<n.length;i++){var o=d(n[i],2),r=o[0],s=o[1];!1===this.options[r]||this.plugins[r]||(this.options[r]=b({},s.defaults||{},this.options[r]),e[r]=new s(this))}for(var a=0,c=Object.entries(e);a<c.length;a++){var h=d(c[a],2);h[0],h[1].attach(this)}return this.plugins=Object.assign({},this.plugins,e),this}},{key:"detachPlugins",value:function(){for(var t in this.plugins){var e=void 0;(e=this.plugins[t])&&"function"==typeof e.detach&&e.detach(this)}return this.plugins={},this}}]),t}(),j={touch:!0,zoom:!0,pinchToZoom:!0,panOnlyZoomed:!1,lockAxis:!1,friction:.64,decelFriction:.88,zoomFriction:.74,bounceForce:.2,baseScale:1,minScale:1,maxScale:2,step:.5,textSelection:!1,click:"toggleZoom",wheel:"zoom",wheelFactor:42,wheelLimit:5,draggableClass:"is-draggable",draggingClass:"is-dragging",ratio:1},M=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}(n,t);var e=f(n);function n(t){var i,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(this,n),(i=e.call(this,b(!0,{},j,r))).state="init",i.$container=t;for(var s=0,a=["onLoad","onWheel","onClick"];s<a.length;s++){var c=a[s];i[c]=i[c].bind(l(i))}return i.initLayout(),i.resetValues(),i.attachPlugins(n.Plugins),i.trigger("init"),i.updateMetrics(),i.attachEvents(),i.trigger("ready"),!1===i.option("centerOnStart")?i.state="ready":i.panTo({friction:0}),t.__Panzoom=l(i),i}return s(n,[{key:"initLayout",value:function(){var t=this.$container;if(!(t instanceof HTMLElement))throw new Error("Panzoom: Container not found");var e=this.option("content")||t.querySelector(".panzoom__content");if(!e)throw new Error("Panzoom: Content not found");this.$content=e;var i,n=this.option("viewport")||t.querySelector(".panzoom__viewport");n||!1===this.option("wrapInner")||((n=document.createElement("div")).classList.add("panzoom__viewport"),(i=n).append.apply(i,v(t.childNodes)),t.appendChild(n));this.$viewport=n||e.parentNode}},{key:"resetValues",value:function(){this.updateRate=this.option("updateRate",/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)?250:24),this.container={width:0,height:0},this.viewport={width:0,height:0},this.content={origWidth:0,origHeight:0,width:0,height:0,x:this.option("x",0),y:this.option("y",0),scale:this.option("baseScale")},this.transform={x:0,y:0,scale:1},this.resetDragPosition()}},{key:"onLoad",value:function(t){this.updateMetrics(),this.panTo({scale:this.option("baseScale"),friction:0}),this.trigger("load",t)}},{key:"onClick",value:function(t){if(!(t.defaultPrevented||document.activeElement&&document.activeElement.closest("[contenteditable]")))if(!this.option("textSelection")||!window.getSelection().toString().length||t.target&&t.target.hasAttribute("data-fancybox-close")){var e=this.$content.getClientRects()[0];if("ready"!==this.state&&(this.dragPosition.midPoint||Math.abs(e.top-this.dragStart.rect.top)>1||Math.abs(e.left-this.dragStart.rect.left)>1))return t.preventDefault(),void t.stopPropagation();!1!==this.trigger("click",t)&&this.option("zoom")&&"toggleZoom"===this.option("click")&&(t.preventDefault(),t.stopPropagation(),this.zoomWithClick(t))}else t.stopPropagation()}},{key:"onWheel",value:function(t){!1!==this.trigger("wheel",t)&&this.option("zoom")&&this.option("wheel")&&this.zoomWithWheel(t)}},{key:"zoomWithWheel",value:function(t){void 0===this.changedDelta&&(this.changedDelta=0);var e=Math.max(-1,Math.min(1,-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail)),i=this.content.scale,n=i*(100+e*this.option("wheelFactor"))/100;if(e<0&&Math.abs(i-this.option("minScale"))<.01||e>0&&Math.abs(i-this.option("maxScale"))<.01?(this.changedDelta+=Math.abs(e),n=i):(this.changedDelta=0,n=Math.max(Math.min(n,this.option("maxScale")),this.option("minScale"))),!(this.changedDelta>this.option("wheelLimit"))&&(t.preventDefault(),n!==i)){var o=this.$content.getBoundingClientRect(),r=t.clientX-o.left,s=t.clientY-o.top;this.zoomTo(n,{x:r,y:s})}}},{key:"zoomWithClick",value:function(t){var e=this.$content.getClientRects()[0],i=t.clientX-e.left,n=t.clientY-e.top;this.toggleZoom({x:i,y:n})}},{key:"attachEvents",value:function(){var t=this;this.$content.addEventListener("load",this.onLoad),this.$container.addEventListener("wheel",this.onWheel,{passive:!1}),this.$container.addEventListener("click",this.onClick,{passive:!1}),this.initObserver();var e=new _(this.$container,{start:function(i,n){if(!t.option("touch"))return!1;if(t.velocity.scale<0)return!1;var o=n.composedPath()[0];if(!e.currentPointers.length){if(-1!==["BUTTON","TEXTAREA","OPTION","INPUT","SELECT","VIDEO"].indexOf(o.nodeName))return!1;if(t.option("textSelection")&&function(t,e,i){for(var n=t.childNodes,o=document.createRange(),r=0;r<n.length;r++){var s=n[r];if(s.nodeType===Node.TEXT_NODE){o.selectNodeContents(s);var a=o.getBoundingClientRect();if(e>=a.left&&i>=a.top&&e<=a.right&&i<=a.bottom)return s}}return!1}(o,i.clientX,i.clientY))return!1}return!x(o)&&(!1!==t.trigger("touchStart",n)&&("mousedown"===n.type&&n.preventDefault(),t.state="pointerdown",t.resetDragPosition(),t.dragPosition.midPoint=null,t.dragPosition.time=Date.now(),!0))},move:function(i,n,o){if("pointerdown"===t.state)if(!1!==t.trigger("touchMove",o)){if(!(n.length<2&&!0===t.option("panOnlyZoomed")&&t.content.width<=t.viewport.width&&t.content.height<=t.viewport.height&&t.transform.scale<=t.option("baseScale"))&&(!(n.length>1)||t.option("zoom")&&!1!==t.option("pinchToZoom"))){var r=S(i[0],i[1]),s=S(n[0],n[1]),a=s.clientX-r.clientX,c=s.clientY-r.clientY,h=k(i[0],i[1]),l=k(n[0],n[1]),u=h&&l?l/h:1;t.dragOffset.x+=a,t.dragOffset.y+=c,t.dragOffset.scale*=u,t.dragOffset.time=Date.now()-t.dragPosition.time;var f=1===t.dragStart.scale&&t.option("lockAxis");if(f&&!t.lockAxis){if(Math.abs(t.dragOffset.x)<6&&Math.abs(t.dragOffset.y)<6)return void o.preventDefault();var d=Math.abs(180*Math.atan2(t.dragOffset.y,t.dragOffset.x)/Math.PI);t.lockAxis=d>45&&d<135?"y":"x"}if("xy"===f||"y"!==t.lockAxis){if(o.preventDefault(),o.stopPropagation(),o.stopImmediatePropagation(),t.lockAxis&&(t.dragOffset["x"===t.lockAxis?"y":"x"]=0),t.$container.classList.add(t.option("draggingClass")),t.transform.scale===t.option("baseScale")&&"y"===t.lockAxis||(t.dragPosition.x=t.dragStart.x+t.dragOffset.x),t.transform.scale===t.option("baseScale")&&"x"===t.lockAxis||(t.dragPosition.y=t.dragStart.y+t.dragOffset.y),t.dragPosition.scale=t.dragStart.scale*t.dragOffset.scale,n.length>1){var v=S(e.startPointers[0],e.startPointers[1]),p=v.clientX-t.dragStart.rect.x,g=v.clientY-t.dragStart.rect.y,m=t.getZoomDelta(t.content.scale*t.dragOffset.scale,p,g),y=m.deltaX,b=m.deltaY;t.dragPosition.x-=y,t.dragPosition.y-=b,t.dragPosition.midPoint=s}else t.setDragResistance();t.transform={x:t.dragPosition.x,y:t.dragPosition.y,scale:t.dragPosition.scale},t.startAnimation()}}}else o.preventDefault()},end:function(n,o){if("pointerdown"===t.state)if(t._dragOffset=i({},t.dragOffset),e.currentPointers.length)t.resetDragPosition();else if(t.state="decel",t.friction=t.option("decelFriction"),t.recalculateTransform(),t.$container.classList.remove(t.option("draggingClass")),!1!==t.trigger("touchEnd",o)&&"decel"===t.state){var r=t.option("minScale");if(t.transform.scale<r)t.zoomTo(r,{friction:.64});else{var s=t.option("maxScale");if(t.transform.scale-s>.01){var a=t.dragPosition.midPoint||n,c=t.$content.getClientRects()[0];t.zoomTo(s,{friction:.64,x:a.clientX-c.left,y:a.clientY-c.top})}else;}}}});this.pointerTracker=e}},{key:"initObserver",value:function(){var t=this;this.resizeObserver||(this.resizeObserver=new P((function(){t.updateTimer||(t.updateTimer=setTimeout((function(){var e=t.$container.getBoundingClientRect();e.width&&e.height?((Math.abs(e.width-t.container.width)>1||Math.abs(e.height-t.container.height)>1)&&(t.isAnimating()&&t.endAnimation(!0),t.updateMetrics(),t.panTo({x:t.content.x,y:t.content.y,scale:t.option("baseScale"),friction:0})),t.updateTimer=null):t.updateTimer=null}),t.updateRate))})),this.resizeObserver.observe(this.$container))}},{key:"resetDragPosition",value:function(){this.lockAxis=null,this.friction=this.option("friction"),this.velocity={x:0,y:0,scale:0};var t=this.content,e=t.x,n=t.y,o=t.scale;this.dragStart={rect:this.$content.getBoundingClientRect(),x:e,y:n,scale:o},this.dragPosition=i(i({},this.dragPosition),{},{x:e,y:n,scale:o}),this.dragOffset={x:0,y:0,scale:1,time:0}}},{key:"updateMetrics",value:function(t){!0!==t&&this.trigger("beforeUpdate");var e,n=this.$container,o=this.$content,r=this.$viewport,s=o instanceof HTMLImageElement,a=this.option("zoom"),c=this.option("resizeParent",a),h=this.option("width"),l=this.option("height"),u=h||(e=o,Math.max(parseFloat(e.naturalWidth||0),parseFloat(e.width&&e.width.baseVal&&e.width.baseVal.value||0),parseFloat(e.offsetWidth||0),parseFloat(e.scrollWidth||0))),f=l||function(t){return Math.max(parseFloat(t.naturalHeight||0),parseFloat(t.height&&t.height.baseVal&&t.height.baseVal.value||0),parseFloat(t.offsetHeight||0),parseFloat(t.scrollHeight||0))}(o);Object.assign(o.style,{width:h?"".concat(h,"px"):"",height:l?"".concat(l,"px"):"",maxWidth:"",maxHeight:""}),c&&Object.assign(r.style,{width:"",height:""});var d=this.option("ratio");h=u=w(u*d),l=f=w(f*d);var v=o.getBoundingClientRect(),p=r.getBoundingClientRect(),g=r==n?p:n.getBoundingClientRect(),m=Math.max(r.offsetWidth,w(p.width)),y=Math.max(r.offsetHeight,w(p.height)),b=window.getComputedStyle(r);if(m-=parseFloat(b.paddingLeft)+parseFloat(b.paddingRight),y-=parseFloat(b.paddingTop)+parseFloat(b.paddingBottom),this.viewport.width=m,this.viewport.height=y,a){if(Math.abs(u-v.width)>.1||Math.abs(f-v.height)>.1){var x=function(t,e,i,n){var o=Math.min(i/t||0,n/e);return{width:t*o||0,height:e*o||0}}(u,f,Math.min(u,v.width),Math.min(f,v.height));h=w(x.width),l=w(x.height)}Object.assign(o.style,{width:"".concat(h,"px"),height:"".concat(l,"px"),transform:""})}if(c&&(Object.assign(r.style,{width:"".concat(h,"px"),height:"".concat(l,"px")}),this.viewport=i(i({},this.viewport),{},{width:h,height:l})),s&&a&&"function"!=typeof this.options.maxScale){var P=this.option("maxScale");this.options.maxScale=function(){return this.content.origWidth>0&&this.content.fitWidth>0?this.content.origWidth/this.content.fitWidth:P}}this.content=i(i({},this.content),{},{origWidth:u,origHeight:f,fitWidth:h,fitHeight:l,width:h,height:l,scale:1,isZoomable:a}),this.container={width:g.width,height:g.height},!0!==t&&this.trigger("afterUpdate")}},{key:"zoomIn",value:function(t){this.zoomTo(this.content.scale+(t||this.option("step")))}},{key:"zoomOut",value:function(t){this.zoomTo(this.content.scale-(t||this.option("step")))}},{key:"toggleZoom",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.option("maxScale"),i=this.option("baseScale"),n=this.content.scale>i+.5*(e-i)?i:e;this.zoomTo(n,t)}},{key:"zoomTo",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.option("baseScale"),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.x,n=void 0===i?null:i,o=e.y,r=void 0===o?null:o;t=Math.max(Math.min(t,this.option("maxScale")),this.option("minScale"));var s=w(this.content.scale/(this.content.width/this.content.fitWidth),1e7);null===n&&(n=this.content.width*s*.5),null===r&&(r=this.content.height*s*.5);var a=this.getZoomDelta(t,n,r),c=a.deltaX,h=a.deltaY;n=this.content.x-c,r=this.content.y-h,this.panTo({x:n,y:r,scale:t,friction:this.option("zoomFriction")})}},{key:"getZoomDelta",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=this.content.fitWidth*this.content.scale,o=this.content.fitHeight*this.content.scale,r=e>0&&n?e/n:0,s=i>0&&o?i/o:0,a=this.content.fitWidth*t,c=this.content.fitHeight*t,h=(a-n)*r,l=(c-o)*s;return{deltaX:h,deltaY:l}}},{key:"panTo",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.x,n=void 0===e?this.content.x:e,o=t.y,r=void 0===o?this.content.y:o,s=t.scale,a=t.friction,c=void 0===a?this.option("friction"):a,h=t.ignoreBounds,l=void 0!==h&&h;if(s=s||this.content.scale||1,!l){var u=this.getBounds(s),f=u.boundX,d=u.boundY;f&&(n=Math.max(Math.min(n,f.to),f.from)),d&&(r=Math.max(Math.min(r,d.to),d.from))}this.friction=c,this.transform=i(i({},this.transform),{},{x:n,y:r,scale:s}),c?(this.state="panning",this.velocity={x:(1/this.friction-1)*(n-this.content.x),y:(1/this.friction-1)*(r-this.content.y),scale:(1/this.friction-1)*(s-this.content.scale)},this.startAnimation()):this.endAnimation()}},{key:"startAnimation",value:function(){var t=this;this.rAF?cancelAnimationFrame(this.rAF):this.trigger("startAnimation"),this.rAF=requestAnimationFrame((function(){return t.animate()}))}},{key:"animate",value:function(){var t=this;if(this.setEdgeForce(),this.setDragForce(),this.velocity.x*=this.friction,this.velocity.y*=this.friction,this.velocity.scale*=this.friction,this.content.x+=this.velocity.x,this.content.y+=this.velocity.y,this.content.scale+=this.velocity.scale,this.isAnimating())this.setTransform();else if("pointerdown"!==this.state)return void this.endAnimation();this.rAF=requestAnimationFrame((function(){return t.animate()}))}},{key:"getBounds",value:function(t){var e=this.boundX,i=this.boundY;if(void 0!==e&&void 0!==i)return{boundX:e,boundY:i};e={from:0,to:0},i={from:0,to:0},t=t||this.transform.scale;var n=this.content.fitWidth*t,o=this.content.fitHeight*t,r=this.viewport.width,s=this.viewport.height;if(n<r){var a=w(.5*(r-n));e.from=a,e.to=a}else e.from=w(r-n);if(o<s){var c=.5*(s-o);i.from=c,i.to=c}else i.from=w(s-o);return{boundX:e,boundY:i}}},{key:"setEdgeForce",value:function(){if("decel"===this.state){var t,e,i,n,o=this.option("bounceForce"),r=this.getBounds(Math.max(this.transform.scale,this.content.scale)),s=r.boundX,a=r.boundY;if(s&&(t=this.content.x<s.from,e=this.content.x>s.to),a&&(i=this.content.y<a.from,n=this.content.y>a.to),t||e){var c=((t?s.from:s.to)-this.content.x)*o,h=this.content.x+(this.velocity.x+c)/this.friction;h>=s.from&&h<=s.to&&(c+=this.velocity.x),this.velocity.x=c,this.recalculateTransform()}if(i||n){var l=((i?a.from:a.to)-this.content.y)*o,u=this.content.y+(l+this.velocity.y)/this.friction;u>=a.from&&u<=a.to&&(l+=this.velocity.y),this.velocity.y=l,this.recalculateTransform()}}}},{key:"setDragResistance",value:function(){if("pointerdown"===this.state){var t,e,i,n,o=this.getBounds(this.dragPosition.scale),r=o.boundX,s=o.boundY;if(r&&(t=this.dragPosition.x<r.from,e=this.dragPosition.x>r.to),s&&(i=this.dragPosition.y<s.from,n=this.dragPosition.y>s.to),(t||e)&&(!t||!e)){var a=t?r.from:r.to,c=a-this.dragPosition.x;this.dragPosition.x=a-.3*c}if((i||n)&&(!i||!n)){var h=i?s.from:s.to,l=h-this.dragPosition.y;this.dragPosition.y=h-.3*l}}}},{key:"setDragForce",value:function(){"pointerdown"===this.state&&(this.velocity.x=this.dragPosition.x-this.content.x,this.velocity.y=this.dragPosition.y-this.content.y,this.velocity.scale=this.dragPosition.scale-this.content.scale)}},{key:"recalculateTransform",value:function(){this.transform.x=this.content.x+this.velocity.x/(1/this.friction-1),this.transform.y=this.content.y+this.velocity.y/(1/this.friction-1),this.transform.scale=this.content.scale+this.velocity.scale/(1/this.friction-1)}},{key:"isAnimating",value:function(){return!(!this.friction||!(Math.abs(this.velocity.x)>.05||Math.abs(this.velocity.y)>.05||Math.abs(this.velocity.scale)>.05))}},{key:"setTransform",value:function(t){var e,n,o,r,s;(t?(e=w(this.transform.x),n=w(this.transform.y),o=this.transform.scale,this.content=i(i({},this.content),{},{x:e,y:n,scale:o})):(e=w(this.content.x),n=w(this.content.y),o=this.content.scale/(this.content.width/this.content.fitWidth),this.content=i(i({},this.content),{},{x:e,y:n})),this.trigger("beforeTransform"),e=w(this.content.x),n=w(this.content.y),t&&this.option("zoom"))?(r=w(this.content.fitWidth*o),s=w(this.content.fitHeight*o),this.content.width=r,this.content.height=s,this.transform=i(i({},this.transform),{},{width:r,height:s,scale:o}),Object.assign(this.$content.style,{width:"".concat(r,"px"),height:"".concat(s,"px"),maxWidth:"none",maxHeight:"none",transform:"translate3d(".concat(e,"px, ").concat(n,"px, 0) scale(1)")})):this.$content.style.transform="translate3d(".concat(e,"px, ").concat(n,"px, 0) scale(").concat(o,")");this.trigger("afterTransform")}},{key:"endAnimation",value:function(t){cancelAnimationFrame(this.rAF),this.rAF=null,this.velocity={x:0,y:0,scale:0},this.setTransform(!0),this.state="ready",this.handleCursor(),!0!==t&&this.trigger("endAnimation")}},{key:"handleCursor",value:function(){var t=this.option("draggableClass");t&&this.option("touch")&&(1==this.option("panOnlyZoomed")&&this.content.width<=this.viewport.width&&this.content.height<=this.viewport.height&&this.transform.scale<=this.option("baseScale")?this.$container.classList.remove(t):this.$container.classList.add(t))}},{key:"detachEvents",value:function(){this.$content.removeEventListener("load",this.onLoad),this.$container.removeEventListener("wheel",this.onWheel,{passive:!1}),this.$container.removeEventListener("click",this.onClick,{passive:!1}),this.pointerTracker&&(this.pointerTracker.stop(),this.pointerTracker=null),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)}},{key:"destroy",value:function(){"destroy"!==this.state&&(this.state="destroy",clearTimeout(this.updateTimer),this.updateTimer=null,cancelAnimationFrame(this.rAF),this.rAF=null,this.detachEvents(),this.detachPlugins(),this.resetDragPosition())}}]),n}(T);M.version="4.0.30",M.Plugins={},t.Panzoom=M}));
