(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[869],{1450:function(t,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return l},default:function(){return s}});var e=r(2628),o=r(7812),i=r(6835);function a(t){var n=[];return t.forEach((function(r,e){r.forEach((function(r,o){(function(t,n,r){var e=r[t][n],o=t>0?r[t-1][n]:10,i=t<r.length-1?r[t+1][n]:10,a=n>0?r[t][n-1]:10,u=n<r[t].length-1?r[t][n+1]:10;return e<o&&e<i&&e<a&&e<u})(e,o,t)&&n.push({value:r,coords:[e,o]})}))})),n}var u=r(1023),c=r(5893),l=!0,s=function(t){var n=t.input,r=a(n).reduce((function(t,n){return t+(n.value+1)}),0),l=function(t){var n=t.length,r=t[0].length;return a(t).map((function(e){var a=[],u=[e.coords],c=!0;function l(n){9===t[n[0]][n[1]]||a.some((function(t){return t[0]===n[0]&&t[1]===n[1]}))||u.some((function(t){return t[0]===n[0]&&t[1]===n[1]}))||u.push(n)}for(;c;)a.forEach((function(t){var e=(0,i.Z)(t,2),o=e[0],a=e[1];o>0&&l([o-1,a]),o<n-1&&l([o+1,a]),a>0&&l([o,a-1]),a<r-1&&l([o,a+1])})),0===u.length?c=!1:(a.push.apply(a,(0,o.Z)(u)),u=[]);return a})).map((function(t){return t.length})).sort((function(t,n){return n-t})).slice(0,3).reduce((function(t,n){return t*n}),1)}(n);return(0,c.jsx)(u.Z,{title:"Day 9: Smoke Basin",day:9,partOneTitle:"What is the sum of the risk levels of all low points on your heightmap?",partOneContent:(0,c.jsxs)("p",{children:["The sum is"," ",(0,c.jsx)("strong",{children:(0,c.jsx)(e.Z,{text:r.toLocaleString()})}),"."]}),partTwoTitle:"What do you get if you multiply together the sizes of the three largest basins?",partTwoContent:(0,c.jsxs)("p",{children:["The product of the three largest basins is"," ",(0,c.jsx)("strong",{children:(0,c.jsx)(e.Z,{text:l.toLocaleString()})}),"."]})})}},2628:function(t,n,r){"use strict";var e=r(4194),o=r(7294),i=r(5893),a=(0,e.Z)("span",{target:"e1y8lpzy0"})("cursor:pointer;font-size:inherit;position:relative;span{visibility:visible;}",(function(t){if(t.isHidden)return"\n      user-select: none;\n      span {\n        visibility: hidden;\n      }\n      "}),";");n.Z=function(t){var n=t.text,r=t.textColor,e=void 0===r?"inherit":r,u=t.hiddenColor,c=void 0===u?"currentColor":u,l=t.revealedColor,s=void 0===l?"transparent":l,f=t.ariaLabelShowText,d=void 0===f?"To reveal spoiler text click here.":f,h=t.ariaLabelHideText,p=void 0===h?"To hide spoiler text again click here.":h,v=(0,o.useState)(!0),y=v[0],m=v[1],g=function(){m(!y)},b="number"===typeof n?n.toLocaleString():n;return(0,i.jsx)(a,{isHidden:y,onClick:function(){g()},onKeyPress:function(t){" "!==t.key&&"Enter"!==t.key||(t.preventDefault(),g())},style:{backgroundColor:y?c:s},"aria-label":y?d:p,role:"button",tabIndex:0,children:(0,i.jsx)("span",{role:"alert",style:{color:e},children:y?b.split("").map((function(){return"X"})).join(""):b})})}},1023:function(t,n,r){"use strict";var e=r(1664),o=r.n(e),i=r(8223),a=r(5893);n.Z=function(t){var n=t.partOneContent,r=t.partOneTitle,e=t.partTwoContent,u=t.partTwoTitle,c=t.title,l=t.day,s=String(l);return(0,a.jsxs)(i.Z,{title:c,children:[(0,a.jsxs)("p",{children:["See problem at"," ",(0,a.jsx)("a",{href:"https://adventofcode.com/2021/day/".concat(s),rel:"noreferrer",target:"_blank",children:"adventofcode.com"}),"."]}),(0,a.jsxs)("h3",{children:["Part One: ",r]}),n,(0,a.jsxs)("h3",{children:["Part Two: ",u]}),e,(0,a.jsx)("p",{children:(0,a.jsx)("a",{href:"https://github.com/mdrayer/mdrayer.github.io/blob/main/source/helpers/day-".concat(1===s.length?"0"+s:s,"/util.ts"),children:"View the code."})}),(0,a.jsx)(o(),{href:"/adventofcode2021",children:"\u2190 Back"})]})}},8223:function(t,n,r){"use strict";r.d(n,{Z:function(){return u}});var e=r(4194),o=r(6989),i=(0,e.Z)("main",{target:"e17wtwav0"})("margin-left:auto;margin-right:auto;max-width:",o.VY.md,";padding-left:",o.N_[2],";padding-right:",o.N_[2],";"),a=r(5893),u=function(t){var n=t.children,r=t.title;return(0,a.jsxs)(i,{children:[r&&(0,a.jsx)("h2",{children:r}),n]})}},6662:function(t,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/adventofcode2021/day-09",function(){return r(1450)}])},2587:function(t,n,r){"use strict";function e(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}r.d(n,{Z:function(){return e}})},6835:function(t,n,r){"use strict";r.d(n,{Z:function(){return o}});var e=r(2937);function o(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var e,o,i=[],a=!0,u=!1;try{for(r=r.call(t);!(a=(e=r.next()).done)&&(i.push(e.value),!n||i.length!==n);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(t,n)||(0,e.Z)(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},7812:function(t,n,r){"use strict";r.d(n,{Z:function(){return i}});var e=r(2587);var o=r(2937);function i(t){return function(t){if(Array.isArray(t))return(0,e.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,o.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},2937:function(t,n,r){"use strict";r.d(n,{Z:function(){return o}});var e=r(2587);function o(t,n){if(t){if("string"===typeof t)return(0,e.Z)(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,e.Z)(t,n):void 0}}}},function(t){t.O(0,[774,888,179],(function(){return n=6662,t(t.s=n);var n}));var n=t.O();_N_E=n}]);