(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[804],{4681:function(t,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return s},default:function(){return f}});var e=r(5793),o=r(6854);function i(t){return t.split(/\n/).map((function(t){return t.split("").map(Number)}))}var a=function(t){var n=(0,o.Z)(t,2),r=n[0],e=n[1];return"".concat(r,",").concat(e)};function u(t){var n=t[0].length,r=t.length,e=n-1,i=r-1,u={},l=[0,0],c=[e,i],s=Array.from({length:r}).map((function(){return Array.from({length:n}).map((function(){return 1/0}))})),f=Array.from({length:r}).map((function(){return Array.from({length:n}).map((function(){return!1}))}));function h(n){return t[n[1]][n[0]]}function d(t){return s[t[1]][t[0]]}function p(t,n){s[t[1]][t[0]]=n}function v(t,n){f[t[1]][t[0]]=n}p(l,0),v(l,!0);for(var y=[l],m=function(){for(var t=y[0],n=0;n<y.length;n++)d(y[n])<d(t)&&(t=y[n]);if(y=y.filter((function(n){return n[0]!==t[0]||n[1]!==t[1]})),t[0]===c[0]&&t[1]===c[1]){for(var r=0,l=t;u[a(l)];)r+=h(l),l=u[a(l)];return{v:r}}(function(t){var n=(0,o.Z)(t,2),r=n[0],a=n[1],u=[];return r>0&&u.push([r-1,a]),r<e&&u.push([r+1,a]),a>0&&u.push([r,a-1]),a<i&&u.push([r,a+1]),u})(t).forEach((function(n){if(!1===f[(e=n)[1]][e[0]]){var r=h(n)+d(t);r<d(n)&&(p(n,r),u[a(n)]=t),v(n,!0),y.push(n)}var e}))};y.length>0;){var g=m();if("object"===typeof g)return g.v}}var l=r(4845),c=r(5893),s=!0,f=function(t){var n=function(t){return u(i(t))}(t.input);return(0,c.jsx)(l.Z,{title:"Day 15: Chiton",day:15,partOneTitle:"What is the lowest total risk of any path from the top left to the bottom right?",partOneContent:n&&(0,c.jsxs)("p",{children:["The lowest total risk value is"," ",(0,c.jsx)("strong",{children:(0,c.jsx)(e.Z,{text:n})}),"."]}),partTwoTitle:"Using the full map, what is the lowest total risk of any path from the top left to the bottom right?",partTwoContent:(0,c.jsxs)("p",{children:["The lowest total risk value is"," ",(0,c.jsx)("strong",{children:(0,c.jsx)(e.Z,{text:2907})}),"."]})})}},5793:function(t,n,r){"use strict";var e=r(4194),o=r(7294),i=r(5893),a=(0,e.Z)("span",{target:"e1y8lpzy0"})("cursor:pointer;font-size:inherit;position:relative;span{visibility:visible;}",(function(t){if(t.isHidden)return"\n      user-select: none;\n      span {\n        visibility: hidden;\n      }\n      "}),";");n.Z=function(t){var n=t.text,r=t.textColor,e=void 0===r?"inherit":r,u=t.hiddenColor,l=void 0===u?"currentColor":u,c=t.revealedColor,s=void 0===c?"transparent":c,f=t.ariaLabelShowText,h=void 0===f?"To reveal spoiler text click here.":f,d=t.ariaLabelHideText,p=void 0===d?"To hide spoiler text again click here.":d,v=(0,o.useState)(!0),y=v[0],m=v[1],g=function(){m(!y)},b="number"===typeof n?n.toLocaleString():n;return(0,i.jsx)(a,{isHidden:y,onClick:function(){g()},onKeyPress:function(t){" "!==t.key&&"Enter"!==t.key||(t.preventDefault(),g())},style:{backgroundColor:y?l:s},"aria-label":y?h:p,role:"button",tabIndex:0,children:(0,i.jsx)("span",{role:"alert",style:{color:e},children:y?b.split("").map((function(){return"X"})).join(""):b})})}},4845:function(t,n,r){"use strict";var e=r(1664),o=r(1303),i=r(5893);n.Z=function(t){var n=t.partOneContent,r=t.partOneTitle,a=t.partTwoContent,u=t.partTwoTitle,l=t.title,c=t.day,s=String(c);return(0,i.jsxs)(o.Z,{title:l,children:[(0,i.jsxs)("p",{children:["See problem at"," ",(0,i.jsx)("a",{href:"https://adventofcode.com/2021/day/".concat(s),rel:"noreferrer",target:"_blank",children:"adventofcode.com"}),"."]}),(0,i.jsxs)("h3",{children:["Part One: ",r]}),n,(0,i.jsxs)("h3",{children:["Part Two: ",u]}),a,(0,i.jsx)("p",{children:(0,i.jsx)("a",{href:"https://github.com/mdrayer/mdrayer.github.io/blob/main/source/helpers/day-".concat(1===s.length?"0"+s:s,"/util.ts"),children:"View the code."})}),(0,i.jsx)(e.default,{href:"/adventofcode2021",children:"\u2190 Back"})]})}},1303:function(t,n,r){"use strict";r.d(n,{Z:function(){return u}});var e=r(4194),o=r(1765),i=(0,e.Z)("main",{target:"e17wtwav0"})("margin-left:auto;margin-right:auto;max-width:",o.VY.md,";padding-left:",o.N_[2],";padding-right:",o.N_[2],";"),a=r(5893),u=function(t){var n=t.children,r=t.title;return(0,a.jsxs)(i,{children:[r&&(0,a.jsx)("h2",{children:r}),n]})}},8259:function(t,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/adventofcode2021/day-15",function(){return r(4681)}])},907:function(t,n,r){"use strict";function e(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}r.d(n,{Z:function(){return e}})},6854:function(t,n,r){"use strict";r.d(n,{Z:function(){return o}});var e=r(181);function o(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var e,o,i=[],a=!0,u=!1;try{for(r=r.call(t);!(a=(e=r.next()).done)&&(i.push(e.value),!n||i.length!==n);a=!0);}catch(l){u=!0,o=l}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(t,n)||(0,e.Z)(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},181:function(t,n,r){"use strict";r.d(n,{Z:function(){return o}});var e=r(907);function o(t,n){if(t){if("string"===typeof t)return(0,e.Z)(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,e.Z)(t,n):void 0}}}},function(t){t.O(0,[774,888,179],(function(){return n=8259,t(t.s=n);var n}));var n=t.O();_N_E=n}]);