(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+iuc":function(t,e,n){n("wgeU"),n("FlQf"),n("bBy9"),n("B9jh"),n("dL40"),n("xvv9"),n("V+O7"),t.exports=n("WEpk").Set},"/0+H":function(t,e,n){"use strict";var r=n("hfKm"),o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};r(e,"__esModule",{value:!0});var i=o(n("q1tI")),a=n("lwAK");function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,i=t.hasQuery;return n||o&&(void 0!==i&&i)}e.isInAmpMode=u,e.useAmp=function(){return u(i.default.useContext(a.AmpStateContext))}},"/h46":function(t,e,n){n("cHUd")("Map")},"0tVQ":function(t,e,n){n("FlQf"),n("VJsP"),t.exports=n("WEpk").Array.from},"2PDY":function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"8Kt/":function(t,e,n){"use strict";var r=n("ttDY"),o=n("hfKm"),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};o(e,"__esModule",{value:!0});var a=i(n("q1tI")),u=i(n("Xuae")),c=n("lwAK"),s=n("FYa8"),f=n("/0+H");function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[a.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),e}function p(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===a.default.Fragment?t.concat(a.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=l;var v=["name","httpEquiv","charSet","itemProp"];function h(t,e){return t.reduce((function(t,e){var n=a.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(p,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new r,e=new r,n=new r,o={};return function(i){var a=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var u=i.key.slice(i.key.indexOf("$")+1);t.has(u)?a=!1:t.add(u)}switch(i.type){case"title":case"base":e.has(i.type)?a=!1:e.add(i.type);break;case"meta":for(var c=0,s=v.length;c<s;c++){var f=v[c];if(i.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?a=!1:n.add(f);else{var l=i.props[f],p=o[f]||new r;p.has(l)?a=!1:(p.add(l),o[f]=p)}}}return a}}()).reverse().map((function(t,e){var n=t.key||e;return a.default.cloneElement(t,{key:n})}))}var d=u.default();function m(t){var e=t.children;return a.default.createElement(c.AmpStateContext.Consumer,null,(function(t){return a.default.createElement(s.HeadManagerContext.Consumer,null,(function(n){return a.default.createElement(d,{reduceComponentsToState:h,handleStateChange:n,inAmpMode:f.isInAmpMode(t)},e)}))}))}m.rewind=d.rewind,e.default=m},"8iia":function(t,e,n){var r=n("QMMT"),o=n("RRc/");t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return o(this)}}},"9UkJ":function(t,e,n){t.exports={intro:"_3KL8QwwIJZcXf9f4yExSgn"}},B3wi:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("8Kt/"),a=n.n(i),u=n("nOHt"),c=n("MUXG"),s=n("YFqc"),f=n.n(s),l=[{name:"Home",path:"/"},{name:"Background",path:"/background"},{name:"Services",path:"/services"},{name:"Contact",path:"/contact"}],p=n("sq8H"),v=n.n(p),h=o.a.createElement,d=Object(u.withRouter)((function(t){var e=t.router.pathname,n=Object(c.useScrollYPosition)();return h("nav",{className:"".concat(v.a.nav," ").concat(n>10?v.a.floating:"")},h("ul",null,l.map((function(t){var n=t.name,r=t.path;return h("li",{key:"nav-link-".concat(r)},h(f.a,{href:r},h("a",{className:r===e?v.a.active:""},n)))}))))})),m=o.a.createElement;e.a=function(t){var e=t.title;return m(o.a.Fragment,null,m(a.a,null,m("title",null,"".concat(e," | Joseph Hayden")),m("link",{rel:"icon",href:"/favicons/favicon.ico"}),m("link",{rel:"icon",href:"/favicons/favicon-16x16",sizes:"16x16"}),m("link",{rel:"icon",href:"/favicons/favicon-32x32",sizes:"32x32"}),m("link",{rel:"apple-touch-icon",href:"/favicons/apple-touch-icon.png"}),m("link",{rel:"manifest",href:"/manifest.json"}),m("meta",{name:"theme-color",content:"#7afae3"}),m("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})),m(d,null))}},B9jh:function(t,e,n){"use strict";var r=n("Wu5q"),o=n("n3ko");t.exports=n("raTm")("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(o(this,"Set"),t=0===t?0:t,t)}},r)},IP1Z:function(t,e,n){"use strict";var r=n("2faE"),o=n("rr1i");t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},LX0d:function(t,e,n){t.exports=n("UDep")},MUXG:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("q1tI"),o="undefined"!==typeof window;function i(){return o?{x:window.pageXOffset,y:window.pageYOffset}:{x:0,y:0}}function a(){var t=r.useState(i()),e=t[0],n=t[1];return r.useEffect((function(){var t=null;function e(){o&&null===t&&(t=window.requestAnimationFrame((function(){n(i()),t=null})))}if(o)return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),e}e.useScrollPosition=a,e.useScrollXPosition=function(){return a().x},e.useScrollYPosition=function(){return a().y}},PQJW:function(t,e,n){var r=n("d04V"),o=n("yLu3");t.exports=function(t){if(o(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return r(t)}},"RRc/":function(t,e,n){var r=n("oioR");t.exports=function(t,e){var n=[];return r(t,!1,n.push,n,e),n}},TbGu:function(t,e,n){var r=n("fGSI"),o=n("PQJW"),i=n("2PDY");t.exports=function(t){return r(t)||o(t)||i()}},UDep:function(t,e,n){n("wgeU"),n("FlQf"),n("bBy9"),n("g33z"),n("XLbu"),n("/h46"),n("dVTT"),t.exports=n("WEpk").Map},"V+O7":function(t,e,n){n("aPfg")("Set")},VJsP:function(t,e,n){"use strict";var r=n("2GTP"),o=n("Y7ZC"),i=n("JB68"),a=n("sNwI"),u=n("NwJ3"),c=n("tEej"),s=n("IP1Z"),f=n("fNZA");o(o.S+o.F*!n("TuGD")((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,o,l,p=i(t),v="function"==typeof this?this:Array,h=arguments.length,d=h>1?arguments[1]:void 0,m=void 0!==d,y=0,_=f(p);if(m&&(d=r(d,h>2?arguments[2]:void 0,2)),void 0==_||v==Array&&u(_))for(n=new v(e=c(p.length));e>y;y++)s(n,y,m?d(p[y],y):p[y]);else for(l=_.call(p),n=new v;!(o=l.next()).done;y++)s(n,y,m?a(l,d,[o.value,y],!0):o.value);return n.length=y,n}})},WMMs:function(t,e,n){t.exports={subheading:"_20n4lEjCNusy_aH_D2CsNk",background:"_37sDr8o79FoJfs5F0lMpCs"}},Wu5q:function(t,e,n){"use strict";var r=n("2faE").f,o=n("oVml"),i=n("XJU/"),a=n("2GTP"),u=n("EXMj"),c=n("oioR"),s=n("MPFp"),f=n("UO39"),l=n("TJWN"),p=n("jmDH"),v=n("6/1s").fastKey,h=n("n3ko"),d=p?"_s":"size",m=function(t,e){var n,r=v(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,s){var f=t((function(t,r){u(t,f,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[d]=0,void 0!=r&&c(r,n,t[s],t)}));return i(f.prototype,{clear:function(){for(var t=h(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[d]=0},delete:function(t){var n=h(this,e),r=m(n,t);if(r){var o=r.n,i=r.p;delete n._i[r.i],r.r=!0,i&&(i.n=o),o&&(o.p=i),n._f==r&&(n._f=o),n._l==r&&(n._l=i),n[d]--}return!!r},forEach:function(t){h(this,e);for(var n,r=a(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!m(h(this,e),t)}}),p&&r(f.prototype,"size",{get:function(){return h(this,e)[d]}}),f},def:function(t,e,n){var r,o,i=m(t,e);return i?i.v=n:(t._l=i={i:o=v(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[d]++,"F"!==o&&(t._i[o]=i)),t},getEntry:m,setStrong:function(t,e,n){s(t,e,(function(t,n){this._t=h(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?f(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,f(1))}),n?"entries":"values",!n,!0),l(e)}}},XLbu:function(t,e,n){var r=n("Y7ZC");r(r.P+r.R,"Map",{toJSON:n("8iia")("Map")})},Xuae:function(t,e,n){"use strict";var r=n("/HRN"),o=n("ZDA2"),i=n("/+P4"),a=n("K47E"),u=n("WaGi"),c=n("N9n2"),s=n("TbGu"),f=n("ttDY");n("hfKm")(e,"__esModule",{value:!0});var l=n("q1tI"),p=!1;e.default=function(){var t,e=new f;function n(n){t=n.props.reduceComponentsToState(s(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return function(s){function f(t){var u;return r(this,f),u=o(this,i(f).call(this,t)),p&&(e.add(a(u)),n(a(u))),u}return c(f,s),u(f,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),u(f,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),f}(l.Component)}},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var r=n("8+Nu"),o=n("/HRN"),i=n("WaGi"),a=n("ZDA2"),u=n("/+P4"),c=n("N9n2"),s=n("LX0d"),f=n("KI45"),l=n("5Uuq");e.__esModule=!0,e.default=void 0;var p,v=l(n("q1tI")),h=n("CxY0"),d=n("g/15"),m=f(n("nOHt"));function y(t){return t&&"object"===typeof t?(0,d.formatWithValidation)(t):t}var _=new s,w=window.IntersectionObserver,g={};function k(){return p||(w?p=new w((function(t){t.forEach((function(t){if(_.has(t.target)){var e=_.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(p.unobserve(t.target),_.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var x=function(t){function e(t){var n;return o(this,e),(n=a(this,u(e).call(this,t))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(t){var e=null,n=null,r=null;return function(o,i){if(r&&o===e&&i===n)return r;var a=t(o,i);return e=o,n=i,r=a,a}}((function(t,e){return{href:y(t),as:e?y(e):e}})),n.linkClicked=function(t){var e=t.currentTarget,r=e.nodeName,o=e.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),a=i.href,u=i.as;if(function(t){var e=(0,h.parse)(t,!1,!0),n=(0,h.parse)((0,d.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(a)){var c=window.location.pathname;a=(0,h.resolve)(c,a),u=u?(0,h.resolve)(c,u):a,t.preventDefault();var s=n.props.scroll;null==s&&(s=u.indexOf("#")<0),m.default[n.props.replace?"replace":"push"](a,u,{shallow:n.props.shallow}).then((function(t){t&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==t.prefetch,n}return c(e,t),i(e,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,o=(0,h.resolve)(t,n);return[o,r?(0,h.resolve)(t,r):o]}},{key:"handleRef",value:function(t){var e=this,n=g[this.getPaths()[0]];this.p&&w&&t&&t.tagName&&(this.cleanUpListeners(),n||(this.cleanUpListeners=function(t,e){var n=k();return n?(n.observe(t),_.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}_.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths(),n=r(e,2),o=n[0],i=n[1];m.default.prefetch(o,i,t),g[o]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof e&&(e=v.default.createElement("a",null,e));var i=v.Children.only(e),a={ref:function(e){t.handleRef(e),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(e):"object"===typeof i.ref&&(i.ref.current=e))},onMouseEnter:function(e){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),v.default.cloneElement(i,a)}}]),e}(v.Component);e.default=x},d04V:function(t,e,n){t.exports=n("0tVQ")},dL40:function(t,e,n){var r=n("Y7ZC");r(r.P+r.R,"Set",{toJSON:n("8iia")("Set")})},dVTT:function(t,e,n){n("aPfg")("Map")},fGSI:function(t,e,n){var r=n("p0XB");t.exports=function(t){if(r(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},g33z:function(t,e,n){"use strict";var r=n("Wu5q"),o=n("n3ko");t.exports=n("raTm")("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=r.getEntry(o(this,"Map"),t);return e&&e.v},set:function(t,e){return r.def(o(this,"Map"),0===t?0:t,e)}},r,!0)},lwAK:function(t,e,n){"use strict";var r=n("hfKm"),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};r(e,"__esModule",{value:!0});var i=o(n("q1tI"));e.AmpStateContext=i.createContext({})},qBVL:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("9UkJ"),a=n.n(i),u=o.a.createElement;e.a=function(t){var e=t.children;return u("section",{className:a.a.intro},e)}},sq8H:function(t,e,n){t.exports={nav:"_2dvR28ErQThKVqSOqeoUF2",active:"_3Lvvyn5OrcutYCz79SC2__",floating:"KJ7DWSVJvQXUE9ECZavWV"}},ttDY:function(t,e,n){t.exports=n("+iuc")},xvv9:function(t,e,n){n("cHUd")("Set")}}]);