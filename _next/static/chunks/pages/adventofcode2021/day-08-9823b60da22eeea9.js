(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[183],{9389:function(n,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return c},default:function(){return f}});var e=r(2628),i=r(7812);function o(n,t){return n.filter((function(n){return t.includes(n)}))}var u=r(1023),a=r(5893),c=!0,f=function(n){var t=n.input,r=function(n){var t=function(n){var t={};return n.forEach((function(n){n.output.forEach((function(n){switch(n.length){case 2:t[1]=(t[1]||0)+1;break;case 3:t[7]=(t[7]||0)+1;break;case 4:t[4]=(t[4]||0)+1;break;case 7:t[8]=(t[8]||0)+1}}))})),t}(n);return[1,4,7,8].reduce((function(n,r){return n+(t[r]||0)}),0)}(t),c=t.map((function(n){var t=[].concat((0,i.Z)(n.input),(0,i.Z)(n.output)),r=t.find((function(n){return 2===n.length})),e=t.find((function(n){return 3===n.length})),u=t.find((function(n){return 4===n.length})),a=t.find((function(n){return 7===n.length}));if(!r||!u||!e||!a)throw new Error("Digits 1, 4, 7, and/or 8 not found. This cannot be...");var c=t.filter((function(n){return 5===n.length})),f=c.find((function(n){return r.split("").every((function(t){return n.includes(t)}))})),s=c.find((function(n){return 2===o(n.split(""),u.split("")).length})),l=c.find((function(n){return n!==f&&n!==s}));if(!f||!l||!s)throw new Error("Digits 2, 3, and/or 5 not found.");var d=t.filter((function(n){return 6===n.length})),h=d.find((function(n){return!r.split("").every((function(t){return n.includes(t)}))}));if(!h)throw new Error("Digit 6 not found.");var p=d.find((function(n){return n!==h&&!u.split("").every((function(t){return n.includes(t)}))}));if(!p)throw new Error("Digit 0 not found.");var v=d.find((function(n){return n!==h&&n!==p}));if(!v)throw new Error("Digit 9 not found.");var g=[p,r,s,f,u,l,h,e,a,v].map((function(n){return n.split("").sort()}));return Number(n.output.map((function(n){var t=n.split("").sort(),r=g.findIndex((function(n){return t.every((function(t){return n.includes(t)}))&&n.every((function(n){return t.includes(n)}))}));if(-1===r)throw new Error("Pattern not found for ".concat(n,"."));return r})).join(""))})).reduce((function(n,t){return n+t}));return(0,a.jsx)(u.Z,{title:"Day 8: Seven Segment Search",day:8,partOneTitle:"In the output values, how many times do digits 1, 4, 7, or 8 appear?",partOneContent:(0,a.jsxs)("p",{children:["The digits 1, 4, 7, and 8 appear"," ",(0,a.jsx)("strong",{children:(0,a.jsx)(e.Z,{text:r.toLocaleString()})})," ","times."]}),partTwoTitle:"What do you get if you add up all of the output values?",partTwoContent:(0,a.jsxs)("p",{children:["The sum of all the output values is"," ",(0,a.jsx)("strong",{children:(0,a.jsx)(e.Z,{text:c.toLocaleString()})}),"."]})})}},5237:function(n,t,r){"use strict";var e=r(1664),i=r.n(e),o=r(5893);t.Z=function(n){var t=n.href;return(0,o.jsx)(i(),{href:t,children:"\u2190 Back"})}},2628:function(n,t,r){"use strict";var e=r(4194),i=r(7294),o=r(5893),u=(0,e.Z)("span",{target:"e1y8lpzy0"})("cursor:pointer;font-size:inherit;position:relative;span{visibility:visible;}",(function(n){if(n.isHidden)return"\n      user-select: none;\n      span {\n        visibility: hidden;\n      }\n      "}),";");t.Z=function(n){var t=n.text,r=n.textColor,e=void 0===r?"inherit":r,a=n.hiddenColor,c=void 0===a?"currentColor":a,f=n.revealedColor,s=void 0===f?"transparent":f,l=n.ariaLabelShowText,d=void 0===l?"To reveal spoiler text click here.":l,h=n.ariaLabelHideText,p=void 0===h?"To hide spoiler text again click here.":h,v=(0,i.useState)(!0),g=v[0],y=v[1],m=function(){y(!g)},w="number"===typeof t?t.toLocaleString():t;return(0,o.jsx)(u,{isHidden:g,onClick:function(){m()},onKeyPress:function(n){" "!==n.key&&"Enter"!==n.key||(n.preventDefault(),m())},style:{backgroundColor:g?c:s},"aria-label":g?d:p,role:"button",tabIndex:0,children:(0,o.jsx)("span",{role:"alert",style:{color:e},children:g?w.split("").map((function(){return"X"})).join(""):w})})}},1023:function(n,t,r){"use strict";var e=r(5237),i=r(8223),o=r(5893);t.Z=function(n){var t=n.partOneContent,r=n.partOneTitle,u=n.partTwoContent,a=n.partTwoTitle,c=n.title,f=n.day,s=String(f);return(0,o.jsxs)(i.Z,{title:c,children:[(0,o.jsxs)("p",{children:["See problem at"," ",(0,o.jsx)("a",{href:"https://adventofcode.com/2021/day/".concat(s),rel:"noreferrer",target:"_blank",children:"adventofcode.com"}),"."]}),(0,o.jsxs)("h3",{children:["Part One: ",r]}),t,(0,o.jsxs)("h3",{children:["Part Two: ",a]}),u,(0,o.jsx)("p",{children:(0,o.jsx)("a",{href:"https://github.com/mdrayer/mdrayer.github.io/blob/main/source/helpers/day-".concat(1===s.length?"0"+s:s,"/util.ts"),children:"View the code."})}),(0,o.jsx)(e.Z,{href:"/adventofcode2021"})]})}},8223:function(n,t,r){"use strict";r.d(t,{Z:function(){return a}});var e=r(4194),i=r(6989),o=(0,e.Z)("main",{target:"e17wtwav0"})("margin-left:auto;margin-right:auto;max-width:",i.VY.md,";padding-left:",i.N_[2],";padding-right:",i.N_[2],";"),u=r(5893),a=function(n){var t=n.children,r=n.title;return(0,u.jsxs)(o,{children:[r&&(0,u.jsx)("h2",{children:r}),t]})}},3003:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/adventofcode2021/day-08",function(){return r(9389)}])},2587:function(n,t,r){"use strict";function e(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}r.d(t,{Z:function(){return e}})},7812:function(n,t,r){"use strict";r.d(t,{Z:function(){return o}});var e=r(2587);var i=r(2937);function o(n){return function(n){if(Array.isArray(n))return(0,e.Z)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||(0,i.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},2937:function(n,t,r){"use strict";r.d(t,{Z:function(){return i}});var e=r(2587);function i(n,t){if(n){if("string"===typeof n)return(0,e.Z)(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,e.Z)(n,t):void 0}}}},function(n){n.O(0,[774,888,179],(function(){return t=3003,n(n.s=t);var t}));var t=n.O();_N_E=t}]);