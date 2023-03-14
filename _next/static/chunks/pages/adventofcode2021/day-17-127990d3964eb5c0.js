(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[196],{186:function(t,r,e){"use strict";e.r(r),e.d(r,{__N_SSG:function(){return s},default:function(){return l}});var n=e(5793),i=e(6835);function o(t){for(var r=function(t){var r=t.match(/x=(-?\d+)..(-?\d+)/),e=t.match(/y=(-?\d+)..(-?\d+)/);if(null===r||null===e)throw new Error("No matches found in string.");return{x:[Number(r[1]),Number(r[2])],y:[Number(e[1]),Number(e[2])]}}(t),e=r.x[1],n=r.y[0],o=[],u=[],c=0;c<=e;c++){for(var s=0;s<=100;s++){var l=a(c,s,r),h=l.hit,d=l.highestY;h&&(o.push([c,s]),u.push(d))}for(var f=0;f>=n;f--){var p=a(c,f,r),v=p.hit,y=p.highestY;v&&(o.push([c,f]),u.push(y))}}var x=new Set(o.map((function(t){var r=(0,i.Z)(t,2),e=r[0],n=r[1];return"".concat(e,",").concat(n)}))).size;return{pt1:Math.max.apply(Math,u),pt2:x}}function a(t,r,e){for(var n=[0,0],i={x:t,y:r},o=n[1],a=!1,u=!1;!a||!u;){if(n[0]=n[0]+i.x,n[1]=n[1]+i.y,n[1]>o&&(o=n[1]),n[0]>=e.x[0]&&n[0]<=e.x[1]&&n[1]>=e.y[0]&&n[1]<=e.y[1]){a=!0;break}if(n[0]>e.x[1]||n[1]<e.y[0]){u=!0;break}i={x:i.x>0?i.x-1:i.x<0?i.x+1:0,y:i.y-1}}return{hit:a,highestY:o}}var u=e(4845),c=e(5893),s=!0,l=function(t){var r=o(t.input),e=r.pt1,i=r.pt2;return(0,c.jsx)(u.Z,{title:"Day 17: Trick Shot",day:17,partOneTitle:"What is the highest y position it reaches on this trajectory?",partOneContent:(0,c.jsxs)("p",{children:["The highest y position is"," ",(0,c.jsx)("strong",{children:(0,c.jsx)(n.Z,{text:e})}),"."]}),partTwoTitle:"How many distinct initial velocity values cause the probe to be within the target area after any step?",partTwoContent:(0,c.jsxs)("p",{children:["There are"," ",(0,c.jsx)("strong",{children:(0,c.jsx)(n.Z,{text:i})})," ","distinct initial velocity values."]})})}},5249:function(t,r,e){"use strict";var n=e(1664),i=e.n(n),o=e(5893);r.Z=function(t){var r=t.href;return(0,o.jsx)(i(),{href:r,children:"\u2190 Back"})}},5793:function(t,r,e){"use strict";var n=e(4194),i=e(7294),o=e(5893),a=(0,n.Z)("span",{target:"e1y8lpzy0"})("cursor:pointer;font-size:inherit;position:relative;span{visibility:visible;}",(function(t){if(t.isHidden)return"\n      user-select: none;\n      span {\n        visibility: hidden;\n      }\n      "}),";");r.Z=function(t){var r=t.text,e=t.textColor,n=void 0===e?"inherit":e,u=t.hiddenColor,c=void 0===u?"currentColor":u,s=t.revealedColor,l=void 0===s?"transparent":s,h=t.ariaLabelShowText,d=void 0===h?"To reveal spoiler text click here.":h,f=t.ariaLabelHideText,p=void 0===f?"To hide spoiler text again click here.":f,v=(0,i.useState)(!0),y=v[0],x=v[1],b=function(){x(!y)},m="number"===typeof r?r.toLocaleString():r;return(0,o.jsx)(a,{isHidden:y,onClick:function(){b()},onKeyPress:function(t){" "!==t.key&&"Enter"!==t.key||(t.preventDefault(),b())},style:{backgroundColor:y?c:l},"aria-label":y?d:p,role:"button",tabIndex:0,children:(0,o.jsx)("span",{role:"alert",style:{color:n},children:y?m.split("").map((function(){return"X"})).join(""):m})})}},4845:function(t,r,e){"use strict";var n=e(5249),i=e(1303),o=e(5893);r.Z=function(t){var r=t.partOneContent,e=t.partOneTitle,a=t.partTwoContent,u=t.partTwoTitle,c=t.title,s=t.day,l=String(s);return(0,o.jsxs)(i.Z,{title:c,children:[(0,o.jsxs)("p",{children:["See problem at"," ",(0,o.jsx)("a",{href:"https://adventofcode.com/2021/day/".concat(l),rel:"noreferrer",target:"_blank",children:"adventofcode.com"}),"."]}),(0,o.jsxs)("h3",{children:["Part One: ",e]}),r,(0,o.jsxs)("h3",{children:["Part Two: ",u]}),a,(0,o.jsx)("p",{children:(0,o.jsx)("a",{href:"https://github.com/mdrayer/mdrayer.github.io/blob/main/source/helpers/day-".concat(1===l.length?"0"+l:l,"/util.ts"),children:"View the code."})}),(0,o.jsx)(n.Z,{href:"/adventofcode2021"})]})}},1303:function(t,r,e){"use strict";e.d(r,{Z:function(){return u}});var n=e(4194),i=e(1765),o=(0,n.Z)("main",{target:"e17wtwav0"})("margin-left:auto;margin-right:auto;max-width:",i.VY.md,";padding-left:",i.N_[2],";padding-right:",i.N_[2],";"),a=e(5893),u=function(t){var r=t.children,e=t.title;return(0,a.jsxs)(o,{children:[e&&(0,a.jsx)("h2",{children:e}),r]})}},9482:function(t,r,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/adventofcode2021/day-17",function(){return e(186)}])},2587:function(t,r,e){"use strict";function n(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}e.d(r,{Z:function(){return n}})},6835:function(t,r,e){"use strict";e.d(r,{Z:function(){return i}});var n=e(2937);function i(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,i,o=[],a=!0,u=!1;try{for(e=e.call(t);!(a=(n=e.next()).done)&&(o.push(n.value),!r||o.length!==r);a=!0);}catch(c){u=!0,i=c}finally{try{a||null==e.return||e.return()}finally{if(u)throw i}}return o}}(t,r)||(0,n.Z)(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},2937:function(t,r,e){"use strict";e.d(r,{Z:function(){return i}});var n=e(2587);function i(t,r){if(t){if("string"===typeof t)return(0,n.Z)(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?(0,n.Z)(t,r):void 0}}}},function(t){t.O(0,[774,888,179],(function(){return r=9482,t(t.s=r);var r}));var r=t.O();_N_E=r}]);