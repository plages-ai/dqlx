(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{100:function(e,t,a){"use strict";var n=a(0),r=a(112);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},110:function(e,t,a){"use strict";var n=a(0),r=a(111);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},111:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)(void 0);t.a=r},112:function(e,t,a){"use strict";var n=a(0);const r=a.n(n).a.createContext(void 0);t.a=r},113:function(e,t,a){"use strict";var n=a(0),r=a(8);const c=()=>({scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0});t.a=(e,t=[])=>{const a=Object(n.useRef)(c()),r=()=>{const t=c();e&&e(t,a.current),a.current=t};Object(n.useEffect)((()=>{const e={passive:!0};return r(),window.addEventListener("scroll",r,e),()=>window.removeEventListener("scroll",r,e)}),t)}},114:function(e,t,a){"use strict";var n=a(0);t.a=function(e=!0){Object(n.useEffect)((()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"})),[e])}},115:function(e,t,a){"use strict";a.d(t,"b",(function(){return c}));var n=a(0),r=a(8);const c={desktop:"desktop",mobile:"mobile"};t.a=function(){const e=r.a.canUseDOM;function t(){if(e)return window.innerWidth>996?c.desktop:c.mobile}const[a,l]=Object(n.useState)(t);return Object(n.useEffect)((()=>{if(e)return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a);function a(){l(t())}}),[]),a}},116:function(e,t,a){"use strict";var n=a(3),r=a(0),c=a.n(r),l=a(94),o=a(117),s=a(96),i=a(16),u=a(90);t.a=e=>{const{isClient:t}=Object(i.default)(),{navbar:{title:a,logo:r={src:""}}}=Object(u.useThemeConfig)(),{imageClassName:m,titleClassName:d,...b}=e,f=Object(s.a)(r.href||"/"),v={light:Object(s.a)(r.src),dark:Object(s.a)(r.srcDark||r.src)};return c.a.createElement(l.a,Object(n.a)({to:f},b,r.target&&{target:r.target}),r.src&&c.a.createElement(o.a,{key:t,className:m,sources:v,alt:r.alt||a||"Logo"}),null!=a&&c.a.createElement("strong",{className:d},a))}},117:function(e,t,a){"use strict";var n=a(3),r=a(0),c=a.n(r),l=a(92),o=a(16),s=a(100),i=a(64),u=a.n(i);t.a=e=>{const{isClient:t}=Object(o.default)(),{isDarkTheme:a}=Object(s.a)(),{sources:r,className:i,alt:m="",...d}=e,b=t?a?["dark"]:["light"]:["light","dark"];return c.a.createElement(c.a.Fragment,null,b.map((e=>c.a.createElement("img",Object(n.a)({key:e,src:r[e],alt:m,className:Object(l.a)(u.a.themedImage,u.a[`themedImage--${e}`],i)},d)))))}},118:function(e,t,a){"use strict";var n=a(3),r=a(0),c=a.n(r);t.a=({width:e=30,height:t=30,className:a,...r})=>c.a.createElement("svg",Object(n.a)({"aria-label":"Menu",className:a,width:e,height:t,viewBox:"0 0 30 30",role:"img",focusable:"false"},r),c.a.createElement("title",null,"Menu"),c.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))},133:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return i}));var n=a(3),r=a(0),c=a.n(r),l=a(98),o=a(95),s=a(90);function i({label:e,to:t,docsPluginId:a,...r}){var i;const u=Object(o.useActiveVersion)(a),{preferredVersion:m}=Object(s.useDocsPreferredVersion)(a),d=Object(o.useLatestVersion)(a),b=null!==(i=null!=u?u:m)&&void 0!==i?i:d,f=null!=e?e:b.label,v=null!=t?t:(e=>e.docs.find((t=>t.id===e.mainDocId)))(b).path;return c.a.createElement(l.a,Object(n.a)({},r,{label:f,to:v}))}},134:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(3),r=a(0),c=a.n(r),l=a(98),o=a(95),s=a(90);const i=e=>e.docs.find((t=>t.id===e.mainDocId));function u({mobile:e,docsPluginId:t,dropdownActiveClassDisabled:a,dropdownItemsBefore:r,dropdownItemsAfter:u,...m}){var d,b;const f=Object(o.useActiveDocContext)(t),v=Object(o.useVersions)(t),h=Object(o.useLatestVersion)(t),{preferredVersion:g,savePreferredVersionName:E}=Object(s.useDocsPreferredVersion)(t);const O=null!==(d=null!==(b=f.activeVersion)&&void 0!==b?b:g)&&void 0!==d?d:h,j=e?"Versions":O.label,p=e?void 0:i(O).path;return c.a.createElement(l.a,Object(n.a)({},m,{mobile:e,label:j,to:p,items:function(){const e=v.map((e=>{const t=(null==f?void 0:f.alternateDocVersions[e.name])||i(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===(null==f?void 0:f.activeVersion),onClick:()=>{E(e.name)}}})),t=[...r,...e,...u];if(!(t.length<=1))return t}(),isActive:a?()=>!1:void 0}))}},135:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(3),r=a(0),c=a.n(r),l=a(98),o=a(95),s=a(92),i=a(90);function u({docId:e,activeSidebarClassName:t,label:a,docsPluginId:r,...u}){var m;const{activeVersion:d,activeDoc:b}=Object(o.useActiveDocContext)(r),{preferredVersion:f}=Object(i.useDocsPreferredVersion)(r),v=Object(o.useLatestVersion)(r),h=null!==(m=null!=d?d:f)&&void 0!==m?m:v,g=h.docs.find((t=>t.id===e));if(!g){const t=h.docs.map((e=>e.id)).join("\n- ");throw new Error(`DocNavbarItem: couldn't find any doc with id=${e} in version ${h.name}.\nAvailable docIds=\n- ${t}`)}return c.a.createElement(l.a,Object(n.a)({exact:!0},u,{className:Object(s.a)(u.className,{[t]:b&&b.sidebar===g.sidebar}),label:null!=a?a:g.id,to:g.path}))}},98:function(e,t,a){"use strict";var n=a(3),r=a(0),c=a.n(r),l=a(92),o=a(94),s=a(96),i=a(23),u=a(90);function m({activeBasePath:e,activeBaseRegex:t,to:a,href:r,label:l,activeClassName:i="navbar__link--active",prependBaseUrlToHref:u,...m}){const d=Object(s.a)(a),b=Object(s.a)(e),f=Object(s.a)(r,{forcePrependBaseUrl:!0});return c.a.createElement(o.a,Object(n.a)({},r?{href:u?f:r}:{isNavLink:!0,activeClassName:i,to:d,...e||t?{isActive:(e,a)=>t?new RegExp(t).test(a.pathname):a.pathname.startsWith(b)}:null},m),l)}function d({items:e,position:t,className:a,...o}){var s;const i=Object(r.useRef)(null),u=Object(r.useRef)(null),[d,b]=Object(r.useState)(!1);Object(r.useEffect)((()=>{const e=e=>{i.current&&!i.current.contains(e.target)&&b(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[i]);const f=(e,t=!1)=>Object(l.a)({"navbar__item navbar__link":!t,dropdown__link:t},e);return e?c.a.createElement("div",{ref:i,className:Object(l.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t,"dropdown--show":d})},c.a.createElement(m,Object(n.a)({className:f(a)},o,{onClick:o.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),b(!d))}}),null!==(s=o.children)&&void 0!==s?s:o.label),c.a.createElement("ul",{ref:u,className:"dropdown__menu"},e.map((({className:t,...a},r)=>c.a.createElement("li",{key:r},c.a.createElement(m,Object(n.a)({onKeyDown:t=>{if(r===e.length-1&&"Tab"===t.key){t.preventDefault(),b(!1);const e=i.current.nextElementSibling;e&&e.focus()}},activeClassName:"dropdown__link--active",className:f(t,!0)},a))))))):c.a.createElement(m,Object(n.a)({className:f(a)},o))}function b({items:e,className:t,position:a,...o}){var s,d,b;const f=Object(r.useRef)(null),{pathname:v}=Object(i.useLocation)(),[h,g]=Object(r.useState)((()=>{var t;return null===(t=!(null!=e&&e.some((e=>Object(u.isSamePath)(e.to,v)))))||void 0===t||t})),E=(e,t=!1)=>Object(l.a)("menu__link",{"menu__link--sublist":t},e);if(!e)return c.a.createElement("li",{className:"menu__list-item"},c.a.createElement(m,Object(n.a)({className:E(t)},o)));const O=null!==(s=f.current)&&void 0!==s&&s.scrollHeight?`${null===(d=f.current)||void 0===d?void 0:d.scrollHeight}px`:void 0;return c.a.createElement("li",{className:Object(l.a)("menu__list-item",{"menu__list-item--collapsed":h})},c.a.createElement(m,Object(n.a)({role:"button",className:E(t,!0)},o,{onClick:e=>{e.preventDefault(),g((e=>!e))}}),null!==(b=o.children)&&void 0!==b?b:o.label),c.a.createElement("ul",{className:"menu__list",ref:f,style:{height:h?void 0:O}},e.map((({className:e,...t},a)=>c.a.createElement("li",{className:"menu__list-item",key:a},c.a.createElement(m,Object(n.a)({activeClassName:"menu__link--active",className:E(e)},t,{onClick:o.onClick})))))))}t.a=function({mobile:e=!1,...t}){const a=e?b:d;return c.a.createElement(a,t)}},99:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(92),l=a(93),o=a(23),s=a(60),i=a.n(s);function u(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var m=function(){const e=Object(n.useRef)(null),t=Object(o.useLocation)();return Object(n.useEffect)((()=>{!t.hash&&e.current&&u(e.current)}),[t.pathname]),r.a.createElement("div",{ref:e},r.a.createElement("a",{href:"#main",className:i.a.skipToContent,onClick:e=>{e.preventDefault();const t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&u(t)}},r.a.createElement(l.a,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},d=a(90),b=a(110),f=a(61),v=a.n(f);var h=function(){const{isAnnouncementBarClosed:e,closeAnnouncementBar:t}=Object(b.a)(),{announcementBar:a}=Object(d.useThemeConfig)();if(!a)return null;const{content:n,backgroundColor:o,textColor:s,isCloseable:i}=a;return!n||i&&e?null:r.a.createElement("div",{className:v.a.announcementBar,style:{backgroundColor:o,color:s},role:"banner"},r.a.createElement("div",{className:Object(c.a)(v.a.announcementBarContent,{[v.a.announcementBarCloseable]:i}),dangerouslySetInnerHTML:{__html:n}}),i?r.a.createElement("button",{type:"button",className:v.a.announcementBarClose,onClick:t,"aria-label":Object(l.b)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},g=a(3),E=()=>null,O=a(16),j=a(62),p=a.n(j);const k=({icon:e,style:t})=>r.a.createElement("span",{className:Object(c.a)(p.a.toggle,p.a.dark),style:t},e),_=({icon:e,style:t})=>r.a.createElement("span",{className:Object(c.a)(p.a.toggle,p.a.light),style:t},e),C=Object(n.memo)((({className:e,icons:t,checked:a,disabled:l,onChange:o})=>{const[s,i]=Object(n.useState)(a),[u,m]=Object(n.useState)(!1),d=Object(n.useRef)(null);return r.a.createElement("div",{className:Object(c.a)("react-toggle",e,{"react-toggle--checked":s,"react-toggle--focus":u,"react-toggle--disabled":l}),role:"button",tabIndex:-1,onClick:e=>{const t=d.current;if(t)return e.target!==t?(e.preventDefault(),t.focus(),void t.click()):void i(null==t?void 0:t.checked)}},r.a.createElement("div",{className:"react-toggle-track"},r.a.createElement("div",{className:"react-toggle-track-check"},t.checked),r.a.createElement("div",{className:"react-toggle-track-x"},t.unchecked)),r.a.createElement("div",{className:"react-toggle-thumb"}),r.a.createElement("input",{ref:d,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:o,onFocus:()=>m(!0),onBlur:()=>m(!1)}))}));var N=function(e){const{colorMode:{switchConfig:{darkIcon:t,darkIconStyle:a,lightIcon:n,lightIconStyle:c}}}=Object(d.useThemeConfig)(),{isClient:l}=Object(O.default)();return r.a.createElement(C,Object(g.a)({disabled:!l,icons:{checked:r.a.createElement(k,{icon:t,style:a}),unchecked:r.a.createElement(_,{icon:n,style:c})}},e))},w=a(100),y=a(113);var L=e=>{const t=Object(o.useLocation)(),[a,r]=Object(n.useState)(e),c=Object(n.useRef)(!1),[l,s]=Object(n.useState)(0),i=Object(n.useCallback)((e=>{null!==e&&s(e.getBoundingClientRect().height)}),[]);return Object(y.a)((({scrollY:t},{scrollY:a})=>{if(!e)return;if(t<l)return void r(!0);if(c.current)return c.current=!1,void r(!1);a&&0===t&&r(!0);const n=document.documentElement.scrollHeight-l,o=window.innerHeight;a&&t>=a?r(!1):t+o<n&&r(!0)}),[l,c]),Object(n.useEffect)((()=>{e&&r(!0)}),[t.pathname]),Object(n.useEffect)((()=>{e&&t.hash&&(c.current=!0)}),[t.hash]),{navbarRef:i,isNavbarVisible:a}},S=a(114),D=a(115),T=a(98);var A=({width:e=20,height:t=20,...a})=>r.a.createElement("svg",Object(g.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:e,height:t},a),r.a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}));function x({mobile:e,dropdownItemsBefore:t,dropdownItemsAfter:a,...n}){const{i18n:{currentLocale:c,locales:l,localeConfigs:o}}=Object(O.default)(),s=Object(d.useAlternatePageUtils)();function i(e){return o[e].label}const u=[...t,...l.map((e=>{const t=`pathname://${s.createUrl({locale:e,fullyQualified:!1})}`;return{isNavLink:!0,label:i(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===c?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...a],m=e?"Languages":i(c);return r.a.createElement(T.a,Object(g.a)({},n,{href:"#",mobile:e,label:r.a.createElement("span",null,r.a.createElement(A,{style:{verticalAlign:"text-bottom",marginRight:5}}),r.a.createElement("span",null,m)),items:u}))}var I=a(63),B=a.n(I);function V({mobile:e}){return e?null:r.a.createElement("div",{className:B.a.searchWrapper},r.a.createElement(E,null))}const M={default:()=>T.a,localeDropdown:()=>x,search:()=>V,docsVersion:()=>a(133).default,docsVersionDropdown:()=>a(134).default,doc:()=>a(135).default};function P({type:e,...t}){const a=((e="default")=>{const t=M[e];if(!t)throw new Error(`No NavbarItem component found for type=${e}.`);return t()})(e);return r.a.createElement(a,t)}var U=a(116),R=a(118),H=a(65),$=a.n(H);const z="right";var G=function(){const{navbar:{items:e,hideOnScroll:t,style:a},colorMode:{disableSwitch:l}}=Object(d.useThemeConfig)(),[o,s]=Object(n.useState)(!1),{isDarkTheme:i,setLightTheme:u,setDarkTheme:m}=Object(w.a)(),{navbarRef:b,isNavbarVisible:f}=L(t);Object(S.a)(o);const v=Object(n.useCallback)((()=>{s(!0)}),[s]),h=Object(n.useCallback)((()=>{s(!1)}),[s]),O=Object(n.useCallback)((e=>e.target.checked?m():u()),[u,m]),j=Object(D.a)();Object(n.useEffect)((()=>{j===D.b.desktop&&s(!1)}),[j]);const p=e.some((e=>"search"===e.type)),{leftItems:k,rightItems:_}=function(e){return{leftItems:e.filter((e=>{var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:z)})),rightItems:e.filter((e=>{var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:z)}))}}(e);return r.a.createElement("nav",{ref:b,className:Object(c.a)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===a,"navbar--primary":"primary"===a,"navbar-sidebar--show":o,[$.a.navbarHideable]:t,[$.a.navbarHidden]:t&&!f})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=e&&0!==e.length&&r.a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",type:"button",tabIndex:0,onClick:v,onKeyDown:v},r.a.createElement(R.a,null)),r.a.createElement(U.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(c.a)("navbar__title")}),k.map(((e,t)=>r.a.createElement(P,Object(g.a)({},e,{key:t}))))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},_.map(((e,t)=>r.a.createElement(P,Object(g.a)({},e,{key:t})))),!l&&r.a.createElement(N,{className:$.a.displayOnlyInLargeViewport,checked:i,onChange:O}),!p&&r.a.createElement(E,null))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:h}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(U.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:h}),!l&&o&&r.a.createElement(N,{checked:i,onChange:O})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},e.map(((e,t)=>r.a.createElement(P,Object(g.a)({mobile:!0},e,{onClick:h,key:t})))))))))},F=a(94),W=a(96),K=a(66),Y=a.n(K),Q=a(117);function q({to:e,href:t,label:a,prependBaseUrlToHref:n,...c}){const l=Object(W.a)(e),o=Object(W.a)(t,{forcePrependBaseUrl:!0});return r.a.createElement(F.a,Object(g.a)({className:"footer__link-item"},t?{href:n?o:t}:{to:l},c),a)}const J=({sources:e,alt:t})=>r.a.createElement(Q.a,{className:"footer__logo",alt:t,sources:e});var X=function(){const{footer:e}=Object(d.useThemeConfig)(),{copyright:t,links:a=[],logo:n={}}=e||{},l={light:Object(W.a)(n.src),dark:Object(W.a)(n.srcDark||n.src)};return e?r.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===e.style})},r.a.createElement("div",{className:"container"},a&&a.length>0&&r.a.createElement("div",{className:"row footer__links"},a.map(((e,t)=>r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(q,e))))):null)))),(n||t)&&r.a.createElement("div",{className:"footer__bottom text--center"},n&&(n.src||n.srcDark)&&r.a.createElement("div",{className:"margin-bottom--sm"},n.href?r.a.createElement(F.a,{href:n.href,className:Y.a.footerLogoLink},r.a.createElement(J,{alt:n.alt,sources:l})):r.a.createElement(J,{alt:n.alt,sources:l})),t?r.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null},Z=a(8);const ee=Object(d.createStorageSlot)("theme"),te="light",ae="dark",ne=e=>e===ae?ae:te,re=e=>{Object(d.createStorageSlot)("theme").set(ne(e))};var ce=()=>{const{colorMode:{defaultMode:e,disableSwitch:t,respectPrefersColorScheme:a}}=Object(d.useThemeConfig)(),[r,c]=Object(n.useState)((e=>Z.a.canUseDOM?ne(document.documentElement.getAttribute("data-theme")):ne(e))(e)),l=Object(n.useCallback)((()=>{c(te),re(te)}),[]),o=Object(n.useCallback)((()=>{c(ae),re(ae)}),[]);return Object(n.useEffect)((()=>{document.documentElement.setAttribute("data-theme",ne(r))}),[r]),Object(n.useEffect)((()=>{if(!t)try{const e=ee.get();null!==e&&c(ne(e))}catch(e){console.error(e)}}),[c]),Object(n.useEffect)((()=>{t&&!a||window.matchMedia("(prefers-color-scheme: dark)").addListener((({matches:e})=>{c(e?ae:te)}))}),[]),{isDarkTheme:r===ae,setLightTheme:l,setDarkTheme:o}},le=a(112);var oe=function(e){const{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}=ce();return r.a.createElement(le.a.Provider,{value:{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}},e.children)};const se="docusaurus.tab.";var ie=()=>{const[e,t]=Object(n.useState)({}),a=Object(n.useCallback)(((e,t)=>{Object(d.createStorageSlot)(`docusaurus.tab.${e}`).set(t)}),[]);return Object(n.useEffect)((()=>{try{const e={};for(const t of Object(d.listStorageKeys)())if(t.startsWith(se)){e[t.substring(se.length)]=Object(d.createStorageSlot)(t).get()}t(e)}catch(e){console.error(e)}}),[]),{tabGroupChoices:e,setTabGroupChoices:(e,n)=>{t((t=>({...t,[e]:n}))),a(e,n)}}};const ue=Object(d.createStorageSlot)("docusaurus.announcement.dismiss"),me=Object(d.createStorageSlot)("docusaurus.announcement.id");var de=()=>{const{announcementBar:e}=Object(d.useThemeConfig)(),[t,a]=Object(n.useState)(!0),r=Object(n.useCallback)((()=>{ue.set("true"),a(!0)}),[]);return Object(n.useEffect)((()=>{if(!e)return;const{id:t}=e;let n=me.get();"annoucement-bar"===n&&(n="announcement-bar");const r=t!==n;me.set(t),r&&ue.set("false"),(r||"false"===ue.get())&&a(!1)}),[]),{isAnnouncementBarClosed:t,closeAnnouncementBar:r}},be=a(111);var fe=function(e){const{tabGroupChoices:t,setTabGroupChoices:a}=ie(),{isAnnouncementBarClosed:n,closeAnnouncementBar:c}=de();return r.a.createElement(be.a.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:a,isAnnouncementBarClosed:n,closeAnnouncementBar:c}},e.children)};function ve({children:e}){return r.a.createElement(oe,null,r.a.createElement(fe,null,r.a.createElement(d.DocsPreferredVersionContextProvider,null,e)))}var he=a(25);function ge({locale:e,version:t,tag:a}){return r.a.createElement(he.a,null,e&&r.a.createElement("meta",{name:"docusaurus_locale",content:`${e}`}),t&&r.a.createElement("meta",{name:"docusaurus_version",content:t}),a&&r.a.createElement("meta",{name:"docusaurus_tag",content:a}))}var Ee=a(119);function Oe(){const{i18n:{defaultLocale:e,locales:t}}=Object(O.default)(),a=Object(d.useAlternatePageUtils)();return r.a.createElement(he.a,null,t.map((e=>r.a.createElement("link",{key:e,rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:e}))),r.a.createElement("link",{rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:"x-default"}))}function je({permalink:e}){const{siteConfig:{url:t}}=Object(O.default)(),a=function(){const{siteConfig:{url:e}}=Object(O.default)(),{pathname:t}=Object(o.useLocation)();return e+Object(W.a)(t)}(),n=e?`${t}${e}`:a;return r.a.createElement(he.a,null,r.a.createElement("meta",{property:"og:url",content:n}),r.a.createElement("link",{rel:"canonical",href:n}))}function pe(e){const{siteConfig:{favicon:t,themeConfig:{metadatas:a}},i18n:{currentLocale:n,localeConfigs:c}}=Object(O.default)(),{title:l,description:o,image:s,keywords:i,searchMetadatas:u}=e,m=Object(W.a)(t),b=Object(d.useTitleFormatter)(l),f=n,v=c[n].direction;return r.a.createElement(r.a.Fragment,null,r.a.createElement(he.a,null,r.a.createElement("html",{lang:f,dir:v}),t&&r.a.createElement("link",{rel:"shortcut icon",href:m}),r.a.createElement("title",null,b),r.a.createElement("meta",{property:"og:title",content:b})),r.a.createElement(Ee.a,{description:o,keywords:i,image:s}),r.a.createElement(je,null),r.a.createElement(Oe,null),r.a.createElement(ge,Object(g.a)({tag:d.DEFAULT_SEARCH_TAG,locale:n},u)),r.a.createElement(he.a,null,a.map(((e,t)=>r.a.createElement("meta",Object(g.a)({key:`metadata_${t}`},e))))))}a(67);var ke=function(){Object(n.useEffect)((()=>{const e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),()=>{document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};a(68);t.a=function(e){const{children:t,noFooter:a,wrapperClassName:n,pageClassName:l}=e;return ke(),r.a.createElement(ve,null,r.a.createElement(pe,e),r.a.createElement(m,null),r.a.createElement(h,null),r.a.createElement(G,null),r.a.createElement("div",{className:Object(c.a)(d.ThemeClassNames.wrapper.main,n,l)},t),!a&&r.a.createElement(X,null))}}}]);