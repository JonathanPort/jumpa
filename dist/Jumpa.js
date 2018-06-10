!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Jumpa=t():e.Jumpa=t()}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var u=t[o]={i:o,l:!1,exports:{}};return e[o].call(u.exports,u,u.exports,n),u.l=!0,u.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(o,u,function(t){return e[t]}.bind(null,u));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.moduleName="Jumpa.js",this.defaults={duration:800,easing:"easeInOutQuint",callback:null},this.supportedEasings=["linear","easeInQuad","easeOutQuad","easeInOutQuad","easeInCubic","easeOutCubic","easeInOutCubic","easeInQuart","easeOutQuart","easeInOutQuart","easeInQuint","easeOutQuint","easeInOutQuint"]}return u(e,[{key:"automatic",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=document.querySelectorAll("[data-jumpa]");n.length>0?(t=t?this._setOptions(t):this.defaults,n.forEach(function(n){n.addEventListener("click",function(o){var u=n.getAttribute("data-jumpa-target");if(u){var a=document.querySelector(u);a?e._jumpToTarget(a,t):console.warn(e.moduleName+": Target element not found")}else console.warn(e.moduleName+": Target not set")})})):console.trace(this.moduleName+": No jumpa's found in the document.")}},{key:"semiAutomatic",value:function(e,t){var n=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;(e=document.querySelector(e))?(t=document.querySelector(t))?(o=o?this._setOptions(o):this.defaults,e.addEventListener("click",function(e){n._jumpToTarget(t,o)})):console.error(this.moduleName+": Target element not found."):console.error(this.moduleName+": jumpa element not found.")}},{key:"manual",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;(e=document.querySelector(e))?(t=t?this._setOptions(t):this.defaults,this._jumpToTarget(e,t)):console.error(this.moduleName+": Target element not found.")}},{key:"_setOptions",value:function(e){if("object"==(void 0===e?"undefined":o(e))){if(e.duration?"number"!=typeof e.duration&&(console.warn(this.moduleName+": The Duration option needs to be an integer. Reverting to default option."),e.duration=this.defaults.duration):e.duration=this.defaults.duration,e.easing)if("string"!=typeof e.easing)console.warn(this.moduleName+": The Easing option needs to be a string. Reverting to default option."),e.easing=this.defaults.easing;else{var t=!1;this.supportedEasings.forEach(function(n){n==e.easing&&(t=!0)}),t||(console.warn(this.moduleName+": This Easing option isn't supported by this plugin, reverting to defaults. You can see a list of supported easings at https://github.com/JonathanPort. If you think your easing code is sound and you would like it added, Submit a request to my Github and i'll add it in."),e.easing=this.defaults.easing)}else e.easing=this.defaults.easing;e.callback?"function"!=typeof e.callback&&(console.warn(this.moduleName+": The Callback option needs to be a function. Reverting to default option."),e.callback=this.defaults.callback):e.callback=this.defaults.callback}else console.warn(this.moduleName+": Options passed not an object. Reverting to defaults."),e=this.defaults;return e}},{key:"_getEasing",value:function(e,t){return{linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}}[e](t)}},{key:"_jumpToTarget",value:function(e,t){var n=t.duration,o=t.easing,u=t.callback,a=window.pageYOffset,i="now"in window.performance?performance.now():(new Date).getTime(),r=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),s=window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName("body")[0].clientHeight,l="number"==typeof e?e:e.offsetTop,c=Math.round(r-l<s?r-s:l);if("requestAnimationFrame"in window==!1)return window.scroll(0,c),void(u&&u());var d=this;!function e(){var t="now"in window.performance?performance.now():(new Date).getTime(),r=Math.min(1,(t-i)/n),s=d._getEasing(o,r);window.scroll(0,Math.ceil(s*(c-a)+a)),window.pageYOffset!==c?requestAnimationFrame(e):u&&u()}()}}]),e}();t.default=new a}]).default});