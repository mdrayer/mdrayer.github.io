(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[807],{7942:function(e,t,r){"use strict";var n=r(3038);t.default=void 0;var a,o=(a=r(7294))&&a.__esModule?a:{default:a},u=r(4957),l=r(9898),i=r(639);var c={};function s(e,t,r,n){if(e&&u.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[t+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,a=l.useRouter(),f=o.default.useMemo((function(){var t=u.resolveHref(a,e.href,!0),r=n(t,2),o=r[0],l=r[1];return{href:o,as:e.as?u.resolveHref(a,e.as):l||o}}),[a,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,m=e.shallow,g=e.scroll,w=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var y=(t=o.default.Children.only(v))&&"object"===typeof t&&t.ref,_=i.useIntersection({rootMargin:"200px"}),L=n(_,2),b=L[0],x=L[1],E=o.default.useCallback((function(e){b(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,b]);o.default.useEffect((function(){var e=x&&r&&u.isLocalURL(d),t="undefined"!==typeof w?w:a&&a.locale,n=c[d+"%"+p+(t?"%"+t:"")];e&&!n&&s(a,d,p,{locale:t})}),[p,d,x,w,r,a]);var T={ref:E,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,l,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(r))&&(e.preventDefault(),null==l&&n.indexOf("#")>=0&&(l=!1),t[a?"replace":"push"](r,n,{shallow:o,locale:i,scroll:l}))}(e,a,d,p,h,m,g,w)},onMouseEnter:function(e){u.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s(a,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var j="undefined"!==typeof w?w:a&&a.locale,C=a&&a.isLocaleDomain&&u.getDomainLocale(p,j,a&&a.locales,a&&a.domainLocales);T.href=C||u.addBasePath(u.addLocale(p,j,a&&a.defaultLocale))}return o.default.cloneElement(t,T)};t.default=f},639:function(e,t,r){"use strict";var n=r(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!u,i=a.useRef(),c=a.useState(!1),s=n(c,2),f=s[0],d=s[1],p=a.useCallback((function(e){i.current&&(i.current(),i.current=void 0),r||f||e&&e.tagName&&(i.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=l.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,o=n.observer,u=n.elements;return u.set(e,t),o.observe(e),function(){u.delete(e),o.unobserve(e),0===u.size&&(o.disconnect(),l.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,f]);return a.useEffect((function(){if(!u&&!f){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[f]),[p,f]};var a=r(7294),o=r(6286),u="undefined"!==typeof IntersectionObserver;var l=new Map},2928:function(e,t,r){"use strict";function n(e,t,r,n){for(var a=0,o=0,u=0,l=t;l<r;l++){var i=n(e,l),c=n(e,l-1);i>c?o++:i<c?u++:a++}return{equal:a,larger:o,smaller:u}}r.r(t),r.d(t,{__N_SSG:function(){return i},default:function(){return c}});var a=Array.from({length:3}).map((function(e,t){return t})),o=function(e,t){return e+t};var u=r(4845),l=r(5893),i=!0,c=function(e){var t,r=e.input,i=n(t=r,1,t.length,(function(e,t){return e[t]})),c=function(e){return n(e,1,e.length-2,(function(e,t){return a.map((function(r){return e[t+r]})).reduce(o)}))}(r);return(0,l.jsx)(u.Z,{title:"Day 1: Sonar Sweep",partOneTitle:"How many measurements are larger than the previous measurement?",partOneContent:(0,l.jsxs)("p",{children:["There were ",(0,l.jsx)("strong",{children:i.larger.toLocaleString()})," larger measurements. Additionally, there were ",i.equal.toLocaleString()," ","equal measurements and ",i.smaller.toLocaleString()," smaller measurements."]}),partTwoTitle:"How many sums are larger than the previous sum?",partTwoContent:(0,l.jsxs)("p",{children:["There were ",(0,l.jsx)("strong",{children:c.larger.toLocaleString()})," larger sums. Additionally, there were ",c.equal.toLocaleString()," equal sums and ",c.smaller.toLocaleString()," smaller sums."]})})}},4845:function(e,t,r){"use strict";var n=r(1664),a=r(1303),o=r(5893);t.Z=function(e){var t=e.partOneContent,r=e.partOneTitle,u=e.partTwoContent,l=e.partTwoTitle,i=e.title;return(0,o.jsxs)(a.Z,{title:i,children:[(0,o.jsxs)("h3",{children:["Part One: ",r]}),t,(0,o.jsxs)("h3",{children:["Part Two: ",l]}),u,(0,o.jsx)(n.default,{href:"/adventofcode2021",children:"Back"})]})}},1303:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(4194),a=r(1765),o=(0,n.Z)("main",{target:"e17wtwav0"})("margin-left:auto;margin-right:auto;max-width:",a.VY.md,";padding-left:",a.N_[2],";padding-right:",a.N_[2],";"),u=r(5893),l=function(e){var t=e.children,r=e.title;return(0,u.jsxs)(o,{children:[r&&(0,u.jsx)("h2",{children:r}),t]})}},2025:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/adventofcode2021/day-01",function(){return r(2928)}])},1664:function(e,t,r){e.exports=r(7942)}},function(e){e.O(0,[774,888,179],(function(){return t=2025,e(e.s=t);var t}));var t=e.O();_N_E=t}]);