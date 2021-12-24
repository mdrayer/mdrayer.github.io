(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[842],{9037:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return a},default:function(){return l}});var i=n(5793);var r=n(4845),o=n(5893),a=!0,l=function(t){var e=t.input,n=function(t){var e=0,n=0;return t.forEach((function(t){var i=t.direction,r=t.units;switch(i){case"down":e+=r;break;case"forward":n+=r;break;case"up":e-=r}})),{depth:e,horizontal:n}}(e),a=n.depth,l=n.horizontal,c=function(t){var e=0,n=0,i=0;return t.forEach((function(t){var r=t.direction,o=t.units;switch(r){case"down":e+=o;break;case"forward":i+=o,n+=e*o;break;case"up":e-=o}})),{aim:e,depth:n,horizontal:i}}(e);return(0,o.jsx)(r.Z,{day:2,title:"Day 2: Dive!",partOneTitle:"What do you get if you multiply your final horizontal position by your final depth?",partOneContent:(0,o.jsxs)("p",{children:["The final horizontal position is ",l.toLocaleString()," units and the final depth is ",a.toLocaleString()," units, multiplied to equal"," ",(0,o.jsx)("strong",{children:(0,o.jsx)(i.Z,{text:(l*a).toLocaleString()})})," ","units."]}),partTwoTitle:"What do you get if you multiply your final horizontal position by your final depth, accounting for aim?",partTwoContent:(0,o.jsxs)("p",{children:["The final horizontal is ",c.horizontal.toLocaleString(),", the final depth is ",c.depth.toLocaleString(),", and the final aim is"," ",c.aim.toLocaleString(),". Depth multiplied by horizontal equals"," ",(0,o.jsx)("strong",{children:(0,o.jsx)(i.Z,{text:(c.depth*c.horizontal).toLocaleString()})}),"."]})})}},5793:function(t,e,n){"use strict";var i=n(4194),r=n(7294),o=n(5893),a=(0,i.Z)("span",{target:"e1y8lpzy0"})("cursor:pointer;font-size:inherit;position:relative;span{visibility:visible;}",(function(t){if(t.isHidden)return"\n      user-select: none;\n      span {\n        visibility: hidden;\n      }\n      "}),";");e.Z=function(t){var e=t.text,n=t.textColor,i=void 0===n?"inherit":n,l=t.hiddenColor,c=void 0===l?"currentColor":l,s=t.revealedColor,d=void 0===s?"transparent":s,u=t.ariaLabelShowText,h=void 0===u?"To reveal spoiler text click here.":u,f=t.ariaLabelHideText,p=void 0===f?"To hide spoiler text again click here.":f,v=(0,r.useState)(!0),y=v[0],x=v[1],g=function(){x(!y)},b="number"===typeof e?e.toLocaleString():e;return(0,o.jsx)(a,{isHidden:y,onClick:function(){g()},onKeyPress:function(t){" "!==t.key&&"Enter"!==t.key||(t.preventDefault(),g())},style:{backgroundColor:y?c:d},"aria-label":y?h:p,role:"button",tabIndex:0,children:(0,o.jsx)("span",{role:"alert",style:{color:i},children:y?b.split("").map((function(){return"X"})).join(""):b})})}},4845:function(t,e,n){"use strict";var i=n(1664),r=n(1303),o=n(5893);e.Z=function(t){var e=t.partOneContent,n=t.partOneTitle,a=t.partTwoContent,l=t.partTwoTitle,c=t.title,s=t.day,d=String(s);return(0,o.jsxs)(r.Z,{title:c,children:[(0,o.jsxs)("p",{children:["See problem at"," ",(0,o.jsx)("a",{href:"https://adventofcode.com/2021/day/".concat(d),rel:"noreferrer",target:"_blank",children:"adventofcode.com"}),"."]}),(0,o.jsxs)("h3",{children:["Part One: ",n]}),e,(0,o.jsxs)("h3",{children:["Part Two: ",l]}),a,(0,o.jsx)("p",{children:(0,o.jsx)("a",{href:"https://github.com/mdrayer/mdrayer.github.io/blob/main/source/helpers/day-".concat(1===d.length?"0"+d:d,"/util.ts"),children:"View the code."})}),(0,o.jsx)(i.default,{href:"/adventofcode2021",children:"\u2190 Back"})]})}},1303:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var i=n(4194),r=n(1765),o=(0,i.Z)("main",{target:"e17wtwav0"})("margin-left:auto;margin-right:auto;max-width:",r.VY.md,";padding-left:",r.N_[2],";padding-right:",r.N_[2],";"),a=n(5893),l=function(t){var e=t.children,n=t.title;return(0,a.jsxs)(o,{children:[n&&(0,a.jsx)("h2",{children:n}),e]})}},3235:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/adventofcode2021/day-02",function(){return n(9037)}])}},function(t){t.O(0,[774,888,179],(function(){return e=3235,t(t.s=e);var e}));var e=t.O();_N_E=e}]);