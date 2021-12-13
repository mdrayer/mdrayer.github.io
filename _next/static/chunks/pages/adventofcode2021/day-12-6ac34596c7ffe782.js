(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[443],{6693:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return f}});var r=e(5793),i=e(1451),o="xx-end\nEG-xx\niy-FP\niy-qc\nAB-end\nyi-KG\nKG-xx\nstart-LS\nqe-FP\nqc-AB\nyi-start\nAB-iy\nFP-start\niy-LS\nyi-LS\nxx-AB\nend-KG\niy-KG\nqc-KG\nFP-xx\nLS-qc\nFP-yi",a="start";function c(t){return t.split(/\n/).map((function(t){return t.split("-")}))}function s(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=c(t),r=e.filter((function(t){return t.includes(a)})),o=e.filter((function(t){return!t.includes(a)})),s=0;function l(t,e,r,o,a,c){var d=t.filter((function(t){return t!==e}))[0],f=c.concat(d);if("end"!==d){var h=a.filter((function(t){return u(t,r,o,n)})),p=h.filter((function(t){return t.includes(d)})),v=(0,i.Z)(r);d===d.toLowerCase()&&(v.includes(d)&&!o&&(o=d),v.push(d)),p.forEach((function(t){l(t,d,v,o,h,f)}))}else s++}return r.forEach((function(t){l(t,a,[],null,o,[a])})),s}function u(t,n,e,r){return!(!r||e)||!t.some((function(t){return n.includes(t)}))}var l=e(4845),d=e(5893),f=function(){var t=s(o),n=s(o,!0);return(0,d.jsx)(l.Z,{title:"Day 12: Passage Pathing",day:12,partOneTitle:"How many paths through this cave system are there that visit small caves at most once?",partOneContent:(0,d.jsxs)("p",{children:["There are"," ",(0,d.jsx)("strong",{children:(0,d.jsx)(r.Z,{text:t})})," ","paths."]}),partTwoTitle:"Given these new rules, how many paths through this cave system are there?",partTwoContent:(0,d.jsxs)("p",{children:["There are"," ",(0,d.jsx)("strong",{children:(0,d.jsx)(r.Z,{text:n})})," ","paths."]})})}},5793:function(t,n,e){"use strict";var r=e(4194),i=e(7294),o=e(5893),a=(0,r.Z)("span",{target:"e1y8lpzy0"})("cursor:pointer;font-size:inherit;position:relative;span{visibility:visible;}",(function(t){if(t.isHidden)return"\n      user-select: none;\n      span {\n        visibility: hidden;\n      }\n      "}),";");n.Z=function(t){var n=t.text,e=t.textColor,r=void 0===e?"inherit":e,c=t.hiddenColor,s=void 0===c?"currentColor":c,u=t.revealedColor,l=void 0===u?"transparent":u,d=t.ariaLabelShowText,f=void 0===d?"To reveal spoiler text click here.":d,h=t.ariaLabelHideText,p=void 0===h?"To hide spoiler text again click here.":h,v=(0,i.useState)(!0),y=v[0],x=v[1],m=function(){x(!y)},g="number"===typeof n?n.toLocaleString():n;return(0,o.jsx)(a,{isHidden:y,onClick:function(){m()},onKeyPress:function(t){" "!==t.key&&"Enter"!==t.key||(t.preventDefault(),m())},style:{backgroundColor:y?s:l},"aria-label":y?f:p,role:"button",tabIndex:0,children:(0,o.jsx)("span",{role:"alert",style:{color:r},children:y?g.split("").map((function(){return"X"})).join(""):g})})}},4845:function(t,n,e){"use strict";var r=e(1664),i=e(1303),o=e(5893);n.Z=function(t){var n=t.partOneContent,e=t.partOneTitle,a=t.partTwoContent,c=t.partTwoTitle,s=t.title,u=t.day,l=String(u);return(0,o.jsxs)(i.Z,{title:s,children:[(0,o.jsxs)("p",{children:["See problem at"," ",(0,o.jsx)("a",{href:"https://adventofcode.com/2021/day/".concat(l),rel:"noreferrer",target:"_blank",children:"adventofcode.com"}),"."]}),(0,o.jsxs)("h3",{children:["Part One: ",e]}),n,(0,o.jsxs)("h3",{children:["Part Two: ",c]}),a,(0,o.jsx)("p",{children:(0,o.jsx)("a",{href:"https://github.com/mdrayer/mdrayer.github.io/blob/main/source/helpers/day-".concat(1===l.length?"0"+l:l,"/util.ts"),children:"View the code."})}),(0,o.jsx)(r.default,{href:"/adventofcode2021",children:"\u2190 Back"})]})}},1303:function(t,n,e){"use strict";e.d(n,{Z:function(){return c}});var r=e(4194),i=e(1765),o=(0,r.Z)("main",{target:"e17wtwav0"})("margin-left:auto;margin-right:auto;max-width:",i.VY.md,";padding-left:",i.N_[2],";padding-right:",i.N_[2],";"),a=e(5893),c=function(t){var n=t.children,e=t.title;return(0,a.jsxs)(o,{children:[e&&(0,a.jsx)("h2",{children:e}),n]})}},6428:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/adventofcode2021/day-12",function(){return e(6693)}])},907:function(t,n,e){"use strict";function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}e.d(n,{Z:function(){return r}})},1451:function(t,n,e){"use strict";e.d(n,{Z:function(){return o}});var r=e(907);var i=e(181);function o(t){return function(t){if(Array.isArray(t))return(0,r.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,i.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},181:function(t,n,e){"use strict";e.d(n,{Z:function(){return i}});var r=e(907);function i(t,n){if(t){if("string"===typeof t)return(0,r.Z)(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?(0,r.Z)(t,n):void 0}}}},function(t){t.O(0,[774,888,179],(function(){return n=6428,t(t.s=n);var n}));var n=t.O();_N_E=n}]);