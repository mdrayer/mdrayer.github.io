(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[88],{3579:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=i.default,a=(null==t?void 0:t.suspense)?{}:{loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?a.loader=function(){return e}:"function"===typeof e?a.loader=e:"object"===typeof e&&(a=n({},a,e));!1;(a=n({},a,t)).suspense&&(delete a.ssr,delete a.loading);a.loadableGenerated&&delete(a=n({},a,a.loadableGenerated)).loadableGenerated;if("boolean"===typeof a.ssr&&!a.suspense){if(!a.ssr)return delete a.ssr,o(r,a);delete a.ssr}return r(a)},t.noSSR=o;var n=r(6495).Z,a=r(2648).Z,i=(a(r(7294)),a(r(3668)));function o(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3982:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var n=(0,r(2648).Z)(r(7294)).default.createContext(null);t.LoadableContext=n},3668:function(e,t,r){"use strict";var n=r(3227),a=r(8361);function i(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return u=e.done,e},e:function(e){l=!0,i=e},f:function(){try{u||null==r.return||r.return()}finally{if(l)throw i}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(6495).Z,l=(0,r(2648).Z)(r(7294)),s=r(3982),c=r(7294).useSyncExternalStore,d=[],f=[],h=!1;function p(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}var y=function(){function e(t,r){n(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=u({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function m(e){return function(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=l.default.lazy(r.loader));var n=null;function a(){if(!n){var t=new y(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!h){var o=r.webpack?r.webpack():r.modules;o&&f.push((function(e){var t,r=i(o);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(-1!==e.indexOf(n))return a()}}catch(u){r.e(u)}finally{r.f()}}))}function d(){a();var e=l.default.useContext(s.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach((function(t){e(t)}))}var p=r.suspense?function(e,t){return d(),l.default.createElement(r.lazy,u({},e,{ref:t}))}:function(e,t){d();var a=c(n.subscribe,n.getCurrentValue,n.getCurrentValue);return l.default.useImperativeHandle(t,(function(){return{retry:n.retry}}),[]),l.default.useMemo((function(){return a.loading||a.error?l.default.createElement(r.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:n.retry}):a.loaded?l.default.createElement((t=a.loaded)&&t.__esModule?t.default:t,e):null;var t}),[e,a])};return p.preload=function(){return a()},p.displayName="LoadableComponent",l.default.forwardRef(p)}(p,e)}function v(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return v(e,t)}))}m.preloadAll=function(){return new Promise((function(e,t){v(d).then(e,t)}))},m.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return h=!0,t()};v(f,e).then(r,r)}))},window.__NEXT_PRELOADREADY=m.preloadReady;var x=m;t.default=x},2369:function(e,t,r){"use strict";function n(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}r.r(t),r.d(t,{default:function(){return A}});for(var a,i,o=r(6835),u=r(5152),l=r.n(u),s=r(7294),c=r(5249),d=r(3930),f=r(1303),h=r(5893),p=l()((function(){return Promise.all([r.e(879),r.e(708),r.e(237)]).then(r.bind(r,237))}),{loading:function(){return(0,h.jsx)("p",{children:"..."})},ssr:!1,loadableGenerated:{webpack:function(){return[237]}}}),y=[],m=0;m<=4;m++)y.push(m);var v=20,x=5,b=10,j=22+400+b,_=v+600+x;function g(e,t,r,n,a){return(r*(t-a)+n*(a-e))/(t-e)}function w(e){var t=[4,0],r=[0,400];return g(t[0],t[1],r[0],r[1],e)}function k(e,t){var r=e.map((function(e,r){var n=4*e,a=function(e,t){var r=[0,t],n=[0,600];return g(r[0],r[1],n[0],n[1],e)}(r,t);return{coords:[a,w(n)],i:r,value:n}}));return r}var Z=1e3;function S(e){return Number.isInteger(e)?String(e):"".concat(e.toFixed(10),"...")}function O(e){var t=e.color,r=e.value,n=e.text,a=void 0===n?String(r):n,i=e.useDasharray,o=void 0===i||i;return(0,h.jsxs)("g",{transform:"translate(0,".concat(w(r),")"),children:[(0,h.jsx)("text",{alignmentBaseline:"middle",fontSize:"0.825rem",stroke:t,textAnchor:"end",x:-7,children:a}),(0,h.jsx)("line",{stroke:t||"grey",strokeDasharray:o?"5, 5":void 0,x1:-5,x2:600+x,y1:0,y2:0})]})}var A=function(){var e=(0,s.useState)(25),t=e[0],r=e[1],u=function(e){for(var t=0,r=[],n=0;n<=e;n++)t+=Math.pow(-1,n)/(2*n+1),r.push(t);return r}(t),l=k(u,t),m=function(e){var t="";return e.forEach((function(e,r){var n=(0,o.Z)(e,2),a=n[0],i=n[1];t+="".concat(0===r?"M":"L").concat(a,",").concat(i)})),t}(l.map((function(e){return e.coords})));return(0,h.jsxs)(f.Z,{children:[(0,h.jsx)("h2",{style:{textAlign:"center"},children:"Calculating Pi - Infinite Series"}),(0,h.jsxs)("div",{children:[(0,h.jsx)(d.Z,{children:(0,h.jsxs)("p",{children:["The"," ",(0,h.jsx)("a",{href:"https://en.wikipedia.org/wiki/Leibniz_formula_for_%CF%80",children:"Leibniz formula for \u03c0"})," ","states that"]})}),(0,h.jsx)(d.Z,{children:(0,h.jsx)(p,{tex:String.raw(a||(a=n(["1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \frac{1}{9} cdots = \frac{pi}{4}"],["1 - \\frac{1}{3} + \\frac{1}{5} - \\frac{1}{7} + \\frac{1}{9} \\cdots = \\frac{\\pi}{4}"])))})}),(0,h.jsx)(d.Z,{children:(0,h.jsx)("p",{children:"Which can be represented as"})}),(0,h.jsx)(d.Z,{children:(0,h.jsx)(p,{tex:String.raw(i||(i=n(["sum_{n=0}^{infty} \frac{(-1)^n}{2n + 1} = \frac{pi}{4}"],["\\sum_{n=0}^{\\infty} \\frac{(-1)^n}{2n + 1} = \\frac{\\pi}{4}"])))})}),(0,h.jsx)(d.Z,{children:(0,h.jsx)("svg",{style:{height:j,width:_},viewBox:"0 0 ".concat(_," ").concat(j),children:(0,h.jsxs)("g",{transform:"translate(".concat(v,",").concat(b,")"),children:[(0,h.jsxs)("g",{children:[(0,h.jsx)("line",{stroke:"grey",strokeDasharray:"5, 5",x1:0,x2:0,y1:w(4),y2:w(0)}),y.map((function(e){return(0,h.jsx)(O,{value:e},e)}))]}),(0,h.jsx)(O,{color:"red",value:Math.PI,text:"\u03c0",useDasharray:!1}),(0,h.jsx)("path",{d:m,fill:"none",stroke:"black",opacity:.75}),0===t&&l.map((function(e,t){var r=(0,o.Z)(e.coords,2),n=r[0],a=r[1];return(0,h.jsx)("g",{transform:"translate(".concat(n,",").concat(a,")"),children:(0,h.jsx)("circle",{r:2,fill:"black",stroke:"black"})},t)})),(0,h.jsx)("g",{transform:"translate(0,".concat(400,")"),children:(0,h.jsx)("text",{dx:-6,y:5,dy:"1rem",children:"n\u2794"})})]})})}),(0,h.jsx)(d.Z,{children:(0,h.jsxs)("label",{htmlFor:"limit",children:["Limit:",(0,h.jsx)("input",{id:"limit",name:"limit",type:"number",min:0,max:Z,onChange:function(e){var t=Number(e.target.value),n=t<0?0:t>Z?Z:Math.round(t);r(n)},step:1,value:t})]})}),(0,h.jsx)(d.Z,{children:(0,h.jsxs)("table",{cellSpacing:20,children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{scope:"col",children:"n"}),(0,h.jsx)("th",{scope:"col",children:"sum"}),(0,h.jsx)("th",{scope:"col",children:"sum * 4"})]})}),(0,h.jsxs)("tbody",{children:[u.map((function(e,t){var r=4*e;return(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{scope:"row",children:t}),(0,h.jsx)("td",{children:S(e)}),(0,h.jsx)("td",{children:S(r)})]},t)})),(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"..."}),(0,h.jsx)("td",{align:"center",children:"..."}),(0,h.jsx)("td",{align:"center",children:"..."})]}),(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{scope:"row",children:"\u221e"}),(0,h.jsx)("td",{children:S(Math.PI/4)}),(0,h.jsx)("td",{children:S(Math.PI)})]})]})]})})]}),(0,h.jsx)(c.Z,{href:"/charts"})]})}},5249:function(e,t,r){"use strict";var n=r(1664),a=r.n(n),i=r(5893);t.Z=function(e){var t=e.href;return(0,i.jsx)(a(),{href:t,children:"\u2190 Back"})}},3930:function(e,t,r){"use strict";var n=r(5893);t.Z=function(e){var t=e.children;return(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:t})}},1303:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(4194),a=r(1765),i=(0,n.Z)("main",{target:"e17wtwav0"})("margin-left:auto;margin-right:auto;max-width:",a.VY.md,";padding-left:",a.N_[2],";padding-right:",a.N_[2],";"),o=r(5893),u=function(e){var t=e.children,r=e.title;return(0,o.jsxs)(i,{children:[r&&(0,o.jsx)("h2",{children:r}),t]})}},7068:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/pi-infinite-series",function(){return r(2369)}])},5152:function(e,t,r){e.exports=r(3579)},2587:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{Z:function(){return n}})},6835:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(2937);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,i=[],o=!0,u=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(l){u=!0,a=l}finally{try{o||null==r.return||r.return()}finally{if(u)throw a}}return i}}(e,t)||(0,n.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},2937:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(2587);function a(e,t){if(e){if("string"===typeof e)return(0,n.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(e,t):void 0}}}},function(e){e.O(0,[774,888,179],(function(){return t=7068,e(e.s=t);var t}));var t=e.O();_N_E=t}]);