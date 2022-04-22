(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[595],{4346:function(n,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return d},default:function(){return h}});var e=r(2628),i=r(7812),o=r(6835),a="..#.#..#####.#.#.#.###.##.....###.##.#..###.####..#####..#....#..#..##..###..######.###...####..#..#####..##..#.#####...##.#.#..#.##..#.#......#.###.######.###.####...#.##.##..#..#..#####.....#.#....###..#.##......#.....#..#..#..##..#...##.######.####.####.#.#...#.......#..#.#.#...####.##.#......#..#...##.#.##..#...##.#.##..###.#......#.#.......#.#.#.####.###.##...#.....####.#..#..#.##.#....##..#.####....##...##..#...#......#.#.......#.......##..####..#...#.#.#...##..#.#..###..#####........#..####......#..#\n\n#..#.\n#....\n##..#\n..#..\n..###",u="#";function l(n){var t=n.split(/\n\n/),r=(0,o.Z)(t,2);return{imgEnhAlg:r[0],inputImage:r[1].split(/\n/)}}function c(n,t,r){var e=n[0]===u&&r%2===0?u:".",a=t[0].length,l=Array.from({length:a+4}).map((function(){return e})).join(""),c=[l,l].concat((0,i.Z)(t.map((function(n){return e+e+n+e+e}))),[l,l]),s=c.map((function(t,r){return t.split("").map((function(t,i){return function(n,t,r,e){var i=(0,o.Z)(n,2),a=i[0],l=i[1],c=[l-1,l,l+1].map((function(n){if(n<0||n>=r.length)return e+e+e;var t=r[n];return[a-1,a,a+1].map((function(n){return n<0||n>=t.length?e:t[n]})).join("")})).join("").replaceAll(".","0").replaceAll(u,"1"),s=parseInt(c,2);return t[s]}([i,r],n,c,e)})).join("")}));return s}var s=r(1023),f=r(5893),d=!0,h=function(n){var t=function(){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,t=l(arguments.length>0&&void 0!==arguments[0]?arguments[0]:a),r=t.imgEnhAlg,e=t.inputImage.slice(),i=0;i<n;i++)e=c(r,e,i+1);return(e.join("").match(new RegExp(u,"g"))||[]).length}(n.input);return(0,f.jsx)(s.Z,{title:"Day 20: Trench Map",day:20,partOneTitle:"How many pixels are lit in the resulting image?",partOneContent:(0,f.jsxs)("p",{children:[(0,f.jsx)("strong",{children:(0,f.jsx)(e.Z,{text:t})})," ","pixels are lit."]}),partTwoTitle:"How many pixels are lit in the resulting image?",partTwoContent:(0,f.jsxs)("p",{children:[(0,f.jsx)("strong",{children:(0,f.jsx)(e.Z,{text:18269})})," ","pixels are lit."]})})}},5237:function(n,t,r){"use strict";var e=r(1664),i=r.n(e),o=r(5893);t.Z=function(n){var t=n.href;return(0,o.jsx)(i(),{href:t,children:"\u2190 Back"})}},2628:function(n,t,r){"use strict";var e=r(4194),i=r(7294),o=r(5893),a=(0,e.Z)("span",{target:"e1y8lpzy0"})("cursor:pointer;font-size:inherit;position:relative;span{visibility:visible;}",(function(n){if(n.isHidden)return"\n      user-select: none;\n      span {\n        visibility: hidden;\n      }\n      "}),";");t.Z=function(n){var t=n.text,r=n.textColor,e=void 0===r?"inherit":r,u=n.hiddenColor,l=void 0===u?"currentColor":u,c=n.revealedColor,s=void 0===c?"transparent":c,f=n.ariaLabelShowText,d=void 0===f?"To reveal spoiler text click here.":f,h=n.ariaLabelHideText,p=void 0===h?"To hide spoiler text again click here.":h,v=(0,i.useState)(!0),m=v[0],y=v[1],g=function(){y(!m)},x="number"===typeof t?t.toLocaleString():t;return(0,o.jsx)(a,{isHidden:m,onClick:function(){g()},onKeyPress:function(n){" "!==n.key&&"Enter"!==n.key||(n.preventDefault(),g())},style:{backgroundColor:m?l:s},"aria-label":m?d:p,role:"button",tabIndex:0,children:(0,o.jsx)("span",{role:"alert",style:{color:e},children:m?x.split("").map((function(){return"X"})).join(""):x})})}},1023:function(n,t,r){"use strict";var e=r(5237),i=r(8223),o=r(5893);t.Z=function(n){var t=n.partOneContent,r=n.partOneTitle,a=n.partTwoContent,u=n.partTwoTitle,l=n.title,c=n.day,s=String(c);return(0,o.jsxs)(i.Z,{title:l,children:[(0,o.jsxs)("p",{children:["See problem at"," ",(0,o.jsx)("a",{href:"https://adventofcode.com/2021/day/".concat(s),rel:"noreferrer",target:"_blank",children:"adventofcode.com"}),"."]}),(0,o.jsxs)("h3",{children:["Part One: ",r]}),t,(0,o.jsxs)("h3",{children:["Part Two: ",u]}),a,(0,o.jsx)("p",{children:(0,o.jsx)("a",{href:"https://github.com/mdrayer/mdrayer.github.io/blob/main/source/helpers/day-".concat(1===s.length?"0"+s:s,"/util.ts"),children:"View the code."})}),(0,o.jsx)(e.Z,{href:"/adventofcode2021"})]})}},8223:function(n,t,r){"use strict";r.d(t,{Z:function(){return u}});var e=r(4194),i=r(6989),o=(0,e.Z)("main",{target:"e17wtwav0"})("margin-left:auto;margin-right:auto;max-width:",i.VY.md,";padding-left:",i.N_[2],";padding-right:",i.N_[2],";"),a=r(5893),u=function(n){var t=n.children,r=n.title;return(0,a.jsxs)(o,{children:[r&&(0,a.jsx)("h2",{children:r}),t]})}},948:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/adventofcode2021/day-20",function(){return r(4346)}])},2587:function(n,t,r){"use strict";function e(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}r.d(t,{Z:function(){return e}})},6835:function(n,t,r){"use strict";r.d(t,{Z:function(){return i}});var e=r(2937);function i(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var r=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var e,i,o=[],a=!0,u=!1;try{for(r=r.call(n);!(a=(e=r.next()).done)&&(o.push(e.value),!t||o.length!==t);a=!0);}catch(l){u=!0,i=l}finally{try{a||null==r.return||r.return()}finally{if(u)throw i}}return o}}(n,t)||(0,e.Z)(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},7812:function(n,t,r){"use strict";r.d(t,{Z:function(){return o}});var e=r(2587);var i=r(2937);function o(n){return function(n){if(Array.isArray(n))return(0,e.Z)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||(0,i.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},2937:function(n,t,r){"use strict";r.d(t,{Z:function(){return i}});var e=r(2587);function i(n,t){if(n){if("string"===typeof n)return(0,e.Z)(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,e.Z)(n,t):void 0}}}},function(n){n.O(0,[774,888,179],(function(){return t=948,n(n.s=t);var t}));var t=n.O();_N_E=t}]);