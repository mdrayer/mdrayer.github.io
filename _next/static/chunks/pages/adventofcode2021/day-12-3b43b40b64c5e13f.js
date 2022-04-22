(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[443],{3933:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return f}});var r=e(2628),i=e(7812),o="xx-end\nEG-xx\niy-FP\niy-qc\nAB-end\nyi-KG\nKG-xx\nstart-LS\nqe-FP\nqc-AB\nyi-start\nAB-iy\nFP-start\niy-LS\nyi-LS\nxx-AB\nend-KG\niy-KG\nqc-KG\nFP-xx\nLS-qc\nFP-yi",a="start";function c(n){return n.split(/\n/).map((function(n){return n.split("-")}))}function s(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=c(n),r=e.filter((function(n){return n.includes(a)})),o=e.filter((function(n){return!n.includes(a)})),s=0;function l(n,e,r,o,a,c){var d=n.filter((function(n){return n!==e}))[0],f=c.concat(d);if("end"!==d){var h=a.filter((function(n){return u(n,r,o,t)})),p=h.filter((function(n){return n.includes(d)})),v=(0,i.Z)(r);d===d.toLowerCase()&&(v.includes(d)&&!o&&(o=d),v.push(d)),p.forEach((function(n){l(n,d,v,o,h,f)}))}else s++}return r.forEach((function(n){l(n,a,[],null,o,[a])})),s}function u(n,t,e,r){return!(!r||e)||!n.some((function(n){return t.includes(n)}))}var l=e(1023),d=e(5893),f=function(){var n=s(o),t=s(o,!0);return(0,d.jsx)(l.Z,{title:"Day 12: Passage Pathing",day:12,partOneTitle:"How many paths through this cave system are there that visit small caves at most once?",partOneContent:(0,d.jsxs)("p",{children:["There are"," ",(0,d.jsx)("strong",{children:(0,d.jsx)(r.Z,{text:n})})," ","paths."]}),partTwoTitle:"Given these new rules, how many paths through this cave system are there?",partTwoContent:(0,d.jsxs)("p",{children:["There are"," ",(0,d.jsx)("strong",{children:(0,d.jsx)(r.Z,{text:t})})," ","paths."]})})}},5237:function(n,t,e){"use strict";var r=e(1664),i=e.n(r),o=e(5893);t.Z=function(n){var t=n.href;return(0,o.jsx)(i(),{href:t,children:"\u2190 Back"})}},2628:function(n,t,e){"use strict";var r=e(4194),i=e(7294),o=e(5893),a=(0,r.Z)("span",{target:"e1y8lpzy0"})("cursor:pointer;font-size:inherit;position:relative;span{visibility:visible;}",(function(n){if(n.isHidden)return"\n      user-select: none;\n      span {\n        visibility: hidden;\n      }\n      "}),";");t.Z=function(n){var t=n.text,e=n.textColor,r=void 0===e?"inherit":e,c=n.hiddenColor,s=void 0===c?"currentColor":c,u=n.revealedColor,l=void 0===u?"transparent":u,d=n.ariaLabelShowText,f=void 0===d?"To reveal spoiler text click here.":d,h=n.ariaLabelHideText,p=void 0===h?"To hide spoiler text again click here.":h,v=(0,i.useState)(!0),y=v[0],x=v[1],m=function(){x(!y)},g="number"===typeof t?t.toLocaleString():t;return(0,o.jsx)(a,{isHidden:y,onClick:function(){m()},onKeyPress:function(n){" "!==n.key&&"Enter"!==n.key||(n.preventDefault(),m())},style:{backgroundColor:y?s:l},"aria-label":y?f:p,role:"button",tabIndex:0,children:(0,o.jsx)("span",{role:"alert",style:{color:r},children:y?g.split("").map((function(){return"X"})).join(""):g})})}},1023:function(n,t,e){"use strict";var r=e(5237),i=e(8223),o=e(5893);t.Z=function(n){var t=n.partOneContent,e=n.partOneTitle,a=n.partTwoContent,c=n.partTwoTitle,s=n.title,u=n.day,l=String(u);return(0,o.jsxs)(i.Z,{title:s,children:[(0,o.jsxs)("p",{children:["See problem at"," ",(0,o.jsx)("a",{href:"https://adventofcode.com/2021/day/".concat(l),rel:"noreferrer",target:"_blank",children:"adventofcode.com"}),"."]}),(0,o.jsxs)("h3",{children:["Part One: ",e]}),t,(0,o.jsxs)("h3",{children:["Part Two: ",c]}),a,(0,o.jsx)("p",{children:(0,o.jsx)("a",{href:"https://github.com/mdrayer/mdrayer.github.io/blob/main/source/helpers/day-".concat(1===l.length?"0"+l:l,"/util.ts"),children:"View the code."})}),(0,o.jsx)(r.Z,{href:"/adventofcode2021"})]})}},8223:function(n,t,e){"use strict";e.d(t,{Z:function(){return c}});var r=e(4194),i=e(6989),o=(0,r.Z)("main",{target:"e17wtwav0"})("margin-left:auto;margin-right:auto;max-width:",i.VY.md,";padding-left:",i.N_[2],";padding-right:",i.N_[2],";"),a=e(5893),c=function(n){var t=n.children,e=n.title;return(0,a.jsxs)(o,{children:[e&&(0,a.jsx)("h2",{children:e}),t]})}},6428:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/adventofcode2021/day-12",function(){return e(3933)}])},2587:function(n,t,e){"use strict";function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}e.d(t,{Z:function(){return r}})},7812:function(n,t,e){"use strict";e.d(t,{Z:function(){return o}});var r=e(2587);var i=e(2937);function o(n){return function(n){if(Array.isArray(n))return(0,r.Z)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||(0,i.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},2937:function(n,t,e){"use strict";e.d(t,{Z:function(){return i}});var r=e(2587);function i(n,t){if(n){if("string"===typeof n)return(0,r.Z)(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?(0,r.Z)(n,t):void 0}}}},function(n){n.O(0,[774,888,179],(function(){return t=6428,n(n.s=t);var t}));var t=n.O();_N_E=t}]);