(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[807],{2928:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return u},default:function(){return c}});var n=t(5793);function i(e,r,t,n){for(var i=0,a=0,o=0,l=r;l<t;l++){var s=n(e,l),u=n(e,l-1);s>u?a++:s<u?o++:i++}return{equal:i,larger:a,smaller:o}}var a=Array.from({length:3}).map((function(e,r){return r})),o=function(e,r){return e+r};var l=t(4845),s=t(5893),u=!0,c=function(e){var r,t=e.input,u=i(r=t,1,r.length,(function(e,r){return e[r]})),c=function(e){return i(e,1,e.length-2,(function(e,r){return a.map((function(t){return e[r+t]})).reduce(o)}))}(t);return(0,s.jsx)(l.Z,{day:1,title:"Day 1: Sonar Sweep",partOneTitle:"How many measurements are larger than the previous measurement?",partOneContent:(0,s.jsxs)("p",{children:["There were"," ",(0,s.jsx)("strong",{children:(0,s.jsx)(n.Z,{text:u.larger.toLocaleString()})})," ","larger measurements. Additionally, there were"," ",u.equal.toLocaleString()," equal measurements and"," ",u.smaller.toLocaleString()," smaller measurements."]}),partTwoTitle:"How many sums are larger than the previous sum?",partTwoContent:(0,s.jsxs)("p",{children:["There were"," ",(0,s.jsx)("strong",{children:(0,s.jsx)(n.Z,{text:c.larger.toLocaleString()})})," ","larger sums. Additionally, there were"," ",c.equal.toLocaleString()," equal sums and"," ",c.smaller.toLocaleString()," smaller sums."]})})}},5249:function(e,r,t){"use strict";var n=t(1664),i=t.n(n),a=t(5893);r.Z=function(e){var r=e.href;return(0,a.jsx)(i(),{href:r,children:"\u2190 Back"})}},5793:function(e,r,t){"use strict";var n=t(4194),i=t(7294),a=t(5893),o=(0,n.Z)("span",{target:"e1y8lpzy0"})("cursor:pointer;font-size:inherit;position:relative;span{visibility:visible;}",(function(e){if(e.isHidden)return"\n      user-select: none;\n      span {\n        visibility: hidden;\n      }\n      "}),";");r.Z=function(e){var r=e.text,t=e.textColor,n=void 0===t?"inherit":t,l=e.hiddenColor,s=void 0===l?"currentColor":l,u=e.revealedColor,c=void 0===u?"transparent":u,d=e.ariaLabelShowText,h=void 0===d?"To reveal spoiler text click here.":d,f=e.ariaLabelHideText,p=void 0===f?"To hide spoiler text again click here.":f,m=(0,i.useState)(!0),v=m[0],g=m[1],x=function(){g(!v)},w="number"===typeof r?r.toLocaleString():r;return(0,a.jsx)(o,{isHidden:v,onClick:function(){x()},onKeyPress:function(e){" "!==e.key&&"Enter"!==e.key||(e.preventDefault(),x())},style:{backgroundColor:v?s:c},"aria-label":v?h:p,role:"button",tabIndex:0,children:(0,a.jsx)("span",{role:"alert",style:{color:n},children:v?w.split("").map((function(){return"X"})).join(""):w})})}},4845:function(e,r,t){"use strict";var n=t(5249),i=t(1303),a=t(5893);r.Z=function(e){var r=e.partOneContent,t=e.partOneTitle,o=e.partTwoContent,l=e.partTwoTitle,s=e.title,u=e.day,c=String(u);return(0,a.jsxs)(i.Z,{title:s,children:[(0,a.jsxs)("p",{children:["See problem at"," ",(0,a.jsx)("a",{href:"https://adventofcode.com/2021/day/".concat(c),rel:"noreferrer",target:"_blank",children:"adventofcode.com"}),"."]}),(0,a.jsxs)("h3",{children:["Part One: ",t]}),r,(0,a.jsxs)("h3",{children:["Part Two: ",l]}),o,(0,a.jsx)("p",{children:(0,a.jsx)("a",{href:"https://github.com/mdrayer/mdrayer.github.io/blob/main/source/helpers/day-".concat(1===c.length?"0"+c:c,"/util.ts"),children:"View the code."})}),(0,a.jsx)(n.Z,{href:"/adventofcode2021"})]})}},1303:function(e,r,t){"use strict";t.d(r,{Z:function(){return l}});var n=t(4194),i=t(1765),a=(0,n.Z)("main",{target:"e17wtwav0"})("margin-left:auto;margin-right:auto;max-width:",i.VY.md,";padding-left:",i.N_[2],";padding-right:",i.N_[2],";"),o=t(5893),l=function(e){var r=e.children,t=e.title;return(0,o.jsxs)(a,{children:[t&&(0,o.jsx)("h2",{children:t}),r]})}},8712:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/adventofcode2021/day-01",function(){return t(2928)}])}},function(e){e.O(0,[774,888,179],(function(){return r=8712,e(e.s=r);var r}));var r=e.O();_N_E=r}]);