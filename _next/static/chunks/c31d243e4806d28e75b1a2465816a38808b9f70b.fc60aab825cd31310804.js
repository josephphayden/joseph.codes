(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery;return n||a&&(void 0!==o&&o)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var u=0,c=d.length;u<c;u++){var s=d[u];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var f=a.props[s],l=r[s]||new Set;l.has(f)?o=!1:(l.add(f),r[s]=l)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function v(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(u.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}v.rewind=function(){};var h=v;t.default=h},"9UkJ":function(e,t,n){e.exports={intro:"_3KL8QwwIJZcXf9f4yExSgn"}},B3wi:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("8Kt/"),i=n.n(o),u=n("nOHt"),c=n("MUXG"),s=n("YFqc"),f=n.n(s),l=[{name:"Home",path:"/"},{name:"Background",path:"/background"},{name:"Services",path:"/services"},{name:"Contact",path:"/contact"}],d=n("sq8H"),p=n.n(d),v=a.a.createElement,h=Object(u.withRouter)((function(e){var t=e.router.pathname,n=Object(c.useScrollYPosition)();return v("nav",{className:"".concat(p.a.nav," ").concat(n>10?p.a.floating:"")},v("ul",null,l.map((function(e){var n=e.name,r=e.path;return v("li",{key:"nav-link-".concat(r)},v(f.a,{href:r},v("a",{className:r===t?p.a.active:""},n)))}))))})),m=a.a.createElement;t.a=function(e){var t=e.title;return m(a.a.Fragment,null,m(i.a,null,m("title",null,"".concat(t," | Joseph Hayden")),m("link",{rel:"icon",href:"/favicons/favicon.ico"}),m("link",{rel:"icon",href:"/favicons/favicon-16x16",sizes:"16x16"}),m("link",{rel:"icon",href:"/favicons/favicon-32x32",sizes:"32x32"}),m("link",{rel:"apple-touch-icon",href:"/favicons/apple-touch-icon.png"}),m("link",{rel:"manifest",href:"/manifest.json"}),m("meta",{name:"theme-color",content:"#7afae3"}),m("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})),m(h,null))}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},MUXG:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("q1tI"),a="undefined"!==typeof window;function o(){return a?{x:window.pageXOffset,y:window.pageYOffset}:{x:0,y:0}}function i(){var e=r.useState(o()),t=e[0],n=e[1];return r.useEffect((function(){var e=null;function t(){a&&null===e&&(e=window.requestAnimationFrame((function(){n(o()),e=null})))}if(a)return window.addEventListener("scroll",t),function(){return window.removeEventListener("scroll",t)}}),[]),t}t.useScrollPosition=i,t.useScrollXPosition=function(){return i().x},t.useScrollYPosition=function(){return i().y}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},WMMs:function(e,t,n){e.exports={subheading:"_20n4lEjCNusy_aH_D2CsNk",background:"_37sDr8o79FoJfs5F0lMpCs"}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),i=n("PJYZ"),u=n("7W2i"),c=n("a1gu"),s=n("Nsbk");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),d=!1,p=function(e){u(n,e);var t=f(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,d&&o._hasHeadManager&&(o.props.headManager.mountedInstances.add(i(o)),o.emitChange()),o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=p},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o,i=a(n("q1tI")),u=n("g/15"),c=n("nOHt"),s=n("elyg");var f=new Map,l=window.IntersectionObserver,d={};var p=function(e,t){var n=o||(l?o=new l((function(e){e.forEach((function(e){if(f.has(e.target)){var t=f.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),f.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),f.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}f.delete(e)}):function(){}};function v(e,t,n,r){e.prefetch(t,n,r).catch((function(e){0})),d[t+"%"+n]=!0}function h(e,t,n,r,a,o,i){var c=e.currentTarget,s=c.nodeName,f=c.target;"A"===s&&(f&&"_self"!==f||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)||function(e){var t=(0,u.getLocationOrigin)();return new URL(e,t).origin===t}(n)&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}var m=function(e){var t=!1!==e.prefetch,n=i.default.useState(),a=r(n,2),o=a[0],u=a[1],f=(0,c.useRouter)(),m=f&&f.pathname||"/",y=i.default.useMemo((function(){var t=(0,s.resolveHref)(m,e.href);return{href:t,as:e.as?(0,s.resolveHref)(m,e.as):t}}),[m,e.href,e.as]),g=y.href,w=y.as;i.default.useEffect((function(){if(t&&l&&o&&o.tagName&&!d[g+"%"+w])return p(o,(function(){v(f,g,w)}))}),[t,o,g,w,f]);var b=e.children,M=e.replace,_=e.shallow,k=e.scroll;"string"===typeof b&&(b=i.default.createElement("a",null,b));var x=i.Children.only(b),E={ref:function(e){e&&u(e),x&&"object"===typeof x&&x.ref&&("function"===typeof x.ref?x.ref(e):"object"===typeof x.ref&&(x.ref.current=e))},onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||h(e,f,g,w,M,_,k)}};return t&&(E.onMouseEnter=function(e){x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),v(f,g,w,{priority:!0})}),!e.passHref&&("a"!==x.type||"href"in x.props)||(E.href=(0,s.addBasePath)(w)),i.default.cloneElement(x,E)};t.default=m},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},qBVL:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("9UkJ"),i=n.n(o),u=a.a.createElement;t.a=function(e){var t=e.children;return u("section",{className:i.a.intro},t)}},sq8H:function(e,t,n){e.exports={nav:"_2dvR28ErQThKVqSOqeoUF2",active:"_3Lvvyn5OrcutYCz79SC2__",floating:"KJ7DWSVJvQXUE9ECZavWV"}}}]);