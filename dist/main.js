/*! For license information please see main.js.LICENSE.txt */
/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var e,t,r={
/***/214:
/***/function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=a(r(294)),s=r(818),c=i(r(321));t.default=function(){return l.createElement(s.BrowserRouter,null,l.createElement(s.Routes,null,l.createElement(s.Route,{path:"/",element:l.createElement(c.default,null)})))}},
/***/321:
/***/function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var i=a(r(294));t.default=function(){return i.createElement(i.Fragment,null,"일단 되는지 확인부터 해보자")}},
/***/818:
/***/(e,t,r)=>{
// ESM COMPAT FLAG
r.r(t),
// EXPORTS
r.d(t,{AbortedDeferredError:()=>/* reexport */q,Await:()=>/* reexport */Tt,BrowserRouter:()=>/* binding */ir,Form:()=>/* binding */hr,HashRouter:()=>/* binding */lr,Link:()=>/* binding */dr,MemoryRouter:()=>/* reexport */Ot,NavLink:()=>/* binding */fr,Navigate:()=>/* reexport */jt,NavigationType:()=>/* reexport */n,Outlet:()=>/* reexport */Lt,Route:()=>/* reexport */Mt,Router:()=>/* reexport */Ut,RouterProvider:()=>/* reexport */Pt,Routes:()=>/* reexport */It,ScrollRestoration:()=>/* binding */mr,UNSAFE_DataRouterContext:()=>/* reexport */Ne,UNSAFE_DataRouterStateContext:()=>/* reexport */$e,UNSAFE_LocationContext:()=>/* reexport */We,UNSAFE_NavigationContext:()=>/* reexport */ze,UNSAFE_RouteContext:()=>/* reexport */qe,UNSAFE_useRouteId:()=>/* reexport */yt,UNSAFE_useScrollRestoration:()=>/* binding */Ar,createBrowserRouter:()=>/* binding */rr,createHashRouter:()=>/* binding */nr,createMemoryRouter:()=>/* reexport */qt,createPath:()=>/* reexport */p,createRoutesFromChildren:()=>/* reexport */Ht,createRoutesFromElements:()=>/* reexport */Ht,createSearchParams:()=>/* binding */Gt,defer:()=>/* reexport */V,generatePath:()=>/* reexport */j,isRouteErrorResponse:()=>/* reexport */G,json:()=>/* reexport */W,matchPath:()=>/* reexport */L,matchRoutes:()=>/* reexport */w,parsePath:()=>/* reexport */m,redirect:()=>/* reexport */Y,renderMatches:()=>/* reexport */zt,resolvePath:()=>/* reexport */I,unstable_HistoryRouter:()=>/* binding */sr,unstable_useBlocker:()=>/* reexport */kt,unstable_usePrompt:()=>/* binding */jr,useActionData:()=>/* reexport */St,useAsyncError:()=>/* reexport */xt,useAsyncValue:()=>/* reexport */_t,useBeforeUnload:()=>/* binding */Or,useFetcher:()=>/* binding */xr,useFetchers:()=>/* binding */Cr,useFormAction:()=>/* binding */Dr,useHref:()=>/* reexport */Je,useInRouterContext:()=>/* reexport */Ve,useLinkClickHandler:()=>/* binding */wr,useLoaderData:()=>/* reexport */Et,useLocation:()=>/* reexport */Ye,useMatch:()=>/* reexport */Ge,useMatches:()=>/* reexport */wt,useNavigate:()=>/* reexport */Ze,useNavigation:()=>/* reexport */gt,useNavigationType:()=>/* reexport */Xe,useOutlet:()=>/* reexport */rt,useOutletContext:()=>/* reexport */tt,useParams:()=>/* reexport */nt,useResolvedPath:()=>/* reexport */ot,useRevalidator:()=>/* reexport */bt,useRouteError:()=>/* reexport */Dt,useRouteLoaderData:()=>/* reexport */Rt,useRoutes:()=>/* reexport */at,useSearchParams:()=>/* binding */Er,useSubmit:()=>/* binding */Rr});
// EXTERNAL MODULE: ./node_modules/react/index.js
var n,o=r(294);// CONCATENATED MODULE: ./node_modules/@remix-run/router/dist/router.js
/**
 * @remix-run/router v1.6.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}
////////////////////////////////////////////////////////////////////////////////
//#region Types and Constants
////////////////////////////////////////////////////////////////////////////////
/**
 * Actions represent the type of change to a location value.
 */!function(e){
/**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */
e.Pop="POP",
/**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */
e.Push="PUSH",
/**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */
e.Replace="REPLACE"}(n||(n={}));const i="popstate";
/**
 * Memory history stores the current location in memory. It is designed for use
 * in stateful non-browser environments like tests and React Native.
 */function l(e){void 0===e&&(e={});let t,{initialEntries:r=["/"],initialIndex:o,v5Compat:a=!1}=e;// Declare so we can access from createMemoryLocation
t=r.map(((e,t)=>f(e,"string"==typeof e?null:e.state,0===t?"default":void 0)));let i=c(null==o?t.length-1:o),l=n.Pop,s=null;function c(e){return Math.min(Math.max(e,0),t.length-1)}function u(){return t[i]}function f(e,r,n){void 0===r&&(r=null);let o=h(t?u().pathname:"/",e,r,n);return d("/"===o.pathname.charAt(0),"relative pathnames are not supported in memory history: "+JSON.stringify(e)),o}function v(e){return"string"==typeof e?e:p(e)}return{get index(){return i},get action(){return l},get location(){return u()},createHref:v,createURL:e=>new URL(v(e),"http://localhost"),encodeLocation(e){let t="string"==typeof e?m(e):e;return{pathname:t.pathname||"",search:t.search||"",hash:t.hash||""}},push(e,r){l=n.Push;let o=f(e,r);i+=1,t.splice(i,t.length,o),a&&s&&s({action:l,location:o,delta:1})},replace(e,r){l=n.Replace;let o=f(e,r);t[i]=o,a&&s&&s({action:l,location:o,delta:0})},go(e){l=n.Pop;let r=c(i+e),o=t[r];i=r,s&&s({action:l,location:o,delta:e})},listen:e=>(s=e,()=>{s=null})}}
/**
 * Browser history stores the location in regular URLs. This is the standard for
 * most web apps, but it requires some configuration on the server to ensure you
 * serve the same app at multiple URLs.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
 */function s(e){return void 0===e&&(e={}),v((function(e,t){let{pathname:r,search:n,hash:o}=e.location;return h("",{pathname:r,search:n,hash:o},
// state defaults to `null` because `window.history.state` does
t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"==typeof t?t:p(t)}),null,e)}
/**
 * Hash history stores the location in window.location.hash. This makes it ideal
 * for situations where you don't want to send the location to the server for
 * some reason, either because you do cannot configure it or the URL space is
 * reserved for something else.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory
 */function c(e){return void 0===e&&(e={}),v((function(e,t){let{pathname:r="/",search:n="",hash:o=""}=m(e.location.hash.substr(1));return h("",{pathname:r,search:n,hash:o},
// state defaults to `null` because `window.history.state` does
t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){let r=e.document.querySelector("base"),n="";if(r&&r.getAttribute("href")){let t=e.location.href,r=t.indexOf("#");n=-1===r?t:t.slice(0,r)}return n+"#"+("string"==typeof t?t:p(t))}),(function(e,t){d("/"===e.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")")}),e)}function u(e,t){if(!1===e||null==e)throw new Error(t)}function d(e,t){if(!e)try{
// Welcome to debugging history!
// This error is thrown as a convenience so you can more easily
// find the source for a warning that appears in the console by
// enabling "pause on exceptions" in your JavaScript debugger.
throw new Error(t);
// eslint-disable-next-line no-empty
}catch(e){}}
/**
 * For browser-based histories, we combine the state and key into an object
 */
function f(e,t){return{usr:e.state,key:e.key,idx:t}}
/**
 * Creates a Location object with a unique key from the given Path
 */function h(e,t,r,n){return void 0===r&&(r=null),a({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?m(t):t,{state:r,
// TODO: This could be cleaned up.  push/replace should probably just take
// full Locations now and avoid the need to run through this flow at all
// But that's a pretty big refactor to the current test suite so going to
// keep as is for the time being and just let any incoming keys take precedence
key:t&&t.key||n||Math.random().toString(36).substr(2,8)})}
/**
 * Creates a string URL path from the given pathname, search, and hash components.
 */function p(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&"?"!==r&&(t+="?"===r.charAt(0)?r:"?"+r),n&&"#"!==n&&(t+="#"===n.charAt(0)?n:"#"+n),t}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 */function m(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function v(e,t,r,o){void 0===o&&(o={});let{window:l=document.defaultView,v5Compat:s=!1}=o,c=l.history,d=n.Pop,m=null,v=y();function y(){return(c.state||{idx:null}).idx}function g(){d=n.Pop;let e=y(),t=null==e?null:e-v;v=e,m&&m({action:d,location:w.location,delta:t})}function b(e){
// window.location.origin is "null" (the literal string value) in Firefox
// under certain conditions, notably when serving from a local HTML file
// See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
let t="null"!==l.location.origin?l.location.origin:l.location.href,r="string"==typeof e?e:p(e);return u(t,"No window.location.(origin|href) available to create URL for href: "+r),new URL(r,t)}
// Index should only be null when we initialize. If not, it's because the
// user called history.pushState or history.replaceState directly, in which
// case we should log a warning as it will result in bugs.
null==v&&(v=0,c.replaceState(a({},c.state,{idx:v}),""));let w={get action(){return d},get location(){return e(l,c)},listen(e){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(i,g),m=e,()=>{l.removeEventListener(i,g),m=null}},createHref:e=>t(l,e),createURL:b,encodeLocation(e){
// Encode a Location the same way window.location would
let t=b(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){d=n.Push;let o=h(w.location,e,t);r&&r(o,e),v=y()+1;let a=f(o,v),i=w.createHref(o);
// try...catch because iOS limits us to 100 pushState calls :/
try{c.pushState(a,"",i)}catch(e){
// If the exception is because `state` can't be serialized, let that throw
// outwards just like a replace call would so the dev knows the cause
// https://html.spec.whatwg.org/multipage/nav-history-apis.html#shared-history-push/replace-state-steps
// https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializeinternal
if(e instanceof DOMException&&"DataCloneError"===e.name)throw e;
// They are going to lose state here, but there is no real
// way to warn them about it since the page will refresh...
l.location.assign(i)}s&&m&&m({action:d,location:w.location,delta:1})},replace:function(e,t){d=n.Replace;let o=h(w.location,e,t);r&&r(o,e),v=y();let a=f(o,v),i=w.createHref(o);c.replaceState(a,"",i),s&&m&&m({action:d,location:w.location,delta:0})},go:e=>c.go(e)};return w}
//#endregion
var y;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(y||(y={}));const g=new Set(["lazy","caseSensitive","path","id","index","children"]);
// Walk the route tree generating unique IDs where necessary so we are working
// solely with AgnosticDataRouteObject's within the Router
function b(e,t,r,n){return void 0===r&&(r=[]),void 0===n&&(n={}),e.map(((e,o)=>{let i=[...r,o],l="string"==typeof e.id?e.id:i.join("-");if(u(!0!==e.index||!e.children,"Cannot specify children on an index route"),u(!n[l],'Found a route id collision on id "'+l+"\".  Route id's must be globally unique within Data Router usages"),function(e){return!0===e.index}(e)){let r=a({},e,t(e),{id:l});return n[l]=r,r}{let r=a({},e,t(e),{id:l,children:void 0});return n[l]=r,e.children&&(r.children=b(e.children,t,i,n)),r}}))}
/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/utils/match-routes
 */function w(e,t,r){void 0===r&&(r="/");let n=U(("string"==typeof t?m(t):t).pathname||"/",r);if(null==n)return null;let o=E(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let r=e.length===t.length&&e.slice(0,-1).every(((e,r)=>e===t[r]));return r?
// If two routes are siblings, we should try to match the earlier sibling
// first. This allows people to have fine-grained control over the matching
// behavior by simply putting routes with identical paths in the order they
// want them tried.
e[e.length-1]-t[t.length-1]:
// Otherwise, it doesn't really make sense to rank non-siblings by index,
// so they sort equally.
0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(o);let a=null;for(let e=0;null==a&&e<o.length;++e)a=O(o[e],
// Incoming pathnames are generally encoded from either window.location
// or from router.navigate, but we want to match against the unencoded
// paths in the route definitions.  Memory router locations won't be
// encoded here but there also shouldn't be anything to decode so this
// should be a safe operation.  This avoids needing matchRoutes to be
// history-aware.
M(n));return a}function E(e,t,r,n){void 0===t&&(t=[]),void 0===r&&(r=[]),void 0===n&&(n="");let o=(e,o,a)=>{let i={relativePath:void 0===a?e.path||"":a,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};i.relativePath.startsWith("/")&&(u(i.relativePath.startsWith(n),'Absolute route path "'+i.relativePath+'" nested under path "'+n+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),i.relativePath=i.relativePath.slice(n.length));let l=N([n,i.relativePath]),s=r.concat(i);
// Add the children before adding this route to the array so we traverse the
// route tree depth-first and child routes appear before their parents in
// the "flattened" version.
e.children&&e.children.length>0&&(u(
// Our types know better, but runtime JS may not!
// @ts-expect-error
!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+l+'".'),E(e.children,t,s,l)),
// Routes without a path shouldn't ever match by themselves unless they are
// index routes, so don't add them to the list of possible branches.
(null!=e.path||e.index)&&t.push({path:l,score:A(l,e.index),routesMeta:s})};return e.forEach(((e,t)=>{var r;
// coarse-grain check for optional params
if(""!==e.path&&null!=(r=e.path)&&r.includes("?"))for(let r of R(e.path))o(e,t,r);else o(e,t)})),t}
/**
 * Computes all combinations of optional path segments for a given path,
 * excluding combinations that are ambiguous and of lower priority.
 *
 * For example, `/one/:two?/three/:four?/:five?` explodes to:
 * - `/one/three`
 * - `/one/:two/three`
 * - `/one/three/:four`
 * - `/one/three/:five`
 * - `/one/:two/three/:four`
 * - `/one/:two/three/:five`
 * - `/one/three/:four/:five`
 * - `/one/:two/three/:four/:five`
 */function R(e){let t=e.split("/");if(0===t.length)return[];let[r,...n]=t,o=r.endsWith("?"),a=r.replace(/\?$/,"");
// Optional path segments are denoted by a trailing `?`
if(0===n.length)
// Intepret empty string as omitting an optional segment
// `["one", "", "three"]` corresponds to omitting `:two` from `/one/:two?/three` -> `/one/three`
return o?[a,""]:[a];let i=R(n.join("/")),l=[];
// for absolute paths, ensure `/` instead of empty segment
// All child paths with the prefix.  Do this for all children before the
// optional version for all children so we get consistent ordering where the
// parent optional aspect is preferred as required.  Otherwise, we can get
// child sections interspersed where deeper optional segments are higher than
// parent optional segments, where for example, /:two would explodes _earlier_
// then /:one.  By always including the parent as required _for all children_
// first, we avoid this issue
return l.push(...i.map((e=>""===e?a:[a,e].join("/")))),
// Then if this is an optional value, add all child versions without
o&&l.push(...i),l.map((t=>e.startsWith("/")&&""===t?"/":t))}const S=/^:\w+$/,D=3,_=2,x=1,C=10,k=-2,P=e=>"*"===e;function A(e,t){let r=e.split("/"),n=r.length;return r.some(P)&&(n+=k),t&&(n+=_),r.filter((e=>!P(e))).reduce(((e,t)=>e+(S.test(t)?D:""===t?x:C)),n)}function O(e,t){let{routesMeta:r}=e,n={},o="/",a=[];for(let e=0;e<r.length;++e){let i=r[e],l=e===r.length-1,s="/"===o?t:t.slice(o.length)||"/",c=L({path:i.relativePath,caseSensitive:i.caseSensitive,end:l},s);if(!c)return null;Object.assign(n,c.params);let u=i.route;a.push({
// TODO: Can this as be avoided?
params:n,pathname:N([o,c.pathname]),pathnameBase:$(N([o,c.pathnameBase])),route:u}),"/"!==c.pathnameBase&&(o=N([o,c.pathnameBase]))}return a}
/**
 * Returns a path with params interpolated.
 *
 * @see https://reactrouter.com/utils/generate-path
 */function j(e,t){void 0===t&&(t={});let r=e;r.endsWith("*")&&"*"!==r&&!r.endsWith("/*")&&(d(!1,'Route path "'+r+'" will be treated as if it were "'+r.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+r.replace(/\*$/,"/*")+'".'),r=r.replace(/\*$/,"/*"));
// ensure `/` is added at the beginning if the path is absolute
return(r.startsWith("/")?"/":"")+r.split(/\/+/).map(((e,r,n)=>{
// only apply the splat if it's the last segment
if(r===n.length-1&&"*"===e){
// Apply the splat
return t["*"]}const o=e.match(/^:(\w+)(\??)$/);if(o){const[,e,r]=o;let n=t[e];return"?"===r?null==n?"":n:(null==n&&u(!1,'Missing ":'+e+'" param'),n)}
// Remove any optional markers from optional static segments
return e.replace(/\?$/g,"")})).filter((e=>!!e)).join("/")}
/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/utils/match-path
 */function L(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=function(e,t,r){void 0===t&&(t=!1);void 0===r&&(r=!0);d("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,((e,t)=>(n.push(t),"/([^\\/]+)")));e.endsWith("*")?(n.push("*"),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?
// When matching to the end, ignore trailing slashes
o+="\\/*$":""!==e&&"/"!==e&&(
// If our path is non-empty and contains anything beyond an initial slash,
// then we have _some_ form of path in our regex so we should expect to
// match only if we find the end of this path segment.  Look for an optional
// non-captured trailing slash (to match a portion of the URL) or the end
// of the path (if we've matched to the end).  We used to do this with a
// word boundary but that gives false positives on routes like
// /user-preferences since `-` counts as a word boundary.
o+="(?:(?=\\/|$))");let a=new RegExp(o,t?void 0:"i");return[a,n]}(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let a=o[0],i=a.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:n.reduce(((e,t,r)=>{
// We need to compute the pathnameBase here using the raw splat value
// instead of using params["*"] later because it will be decoded then
if("*"===t){let e=l[r]||"";i=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(r){return d(!1,'The value for the URL param "'+t+'" will not be decoded because the string "'+e+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+r+")."),e}}
/**
 * @private
 */(l[r]||"",t),e}),{}),pathname:a,pathnameBase:i,pattern:e}}function M(e){try{return decodeURI(e)}catch(t){return d(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function U(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;
// We want to leave trailing slash behavior in the user's control, so if they
// specify a basename with a trailing slash, we should support it
let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&"/"!==n?null:e.slice(r)||"/"}
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/utils/resolve-path
 */function I(e,t){void 0===t&&(t="/");let{pathname:r,search:n="",hash:o=""}="string"==typeof e?m(e):e,a=r?r.startsWith("/")?r:function(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?
// Keep the root "" segment so the pathname starts at /
r.length>1&&r.pop():"."!==e&&r.push(e)})),r.length>1?r.join("/"):"/"}(r,t):t;return{pathname:a,search:H(n),hash:z(o)}}function T(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the `to."+r+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}
/**
 * @private
 *
 * When processing relative navigation we want to ignore ancestor routes that
 * do not contribute to the path, such that index/pathless layout routes don't
 * interfere.
 *
 * For example, when moving a route element into an index route and/or a
 * pathless layout route, relative link behavior contained within should stay
 * the same.  Both of the following examples should link back to the root:
 *
 *   <Route path="/">
 *     <Route path="accounts" element={<Link to=".."}>
 *   </Route>
 *
 *   <Route path="/">
 *     <Route path="accounts">
 *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
 *         <Route index element={<Link to=".."} />  // <-- Does not contribute
 *       </Route
 *     </Route>
 *   </Route>
 */function F(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}
/**
 * @private
 */function B(e,t,r,n){let o;void 0===n&&(n=!1),"string"==typeof e?o=m(e):(o=a({},e),u(!o.pathname||!o.pathname.includes("?"),T("?","pathname","search",o)),u(!o.pathname||!o.pathname.includes("#"),T("#","pathname","hash",o)),u(!o.search||!o.search.includes("#"),T("#","search","hash",o)));let i,l=""===e||""===o.pathname,s=l?"/":o.pathname;
// Routing is relative to the current pathname if explicitly requested.
// If a pathname is explicitly provided in `to`, it should be relative to the
// route context. This is explained in `Note on `<Link to>` values` in our
// migration guide from v5 as a means of disambiguation between `to` values
// that begin with `/` and those that do not. However, this is problematic for
// `to` values that do not provide a pathname. `to` can simply be a search or
// hash string, in which case we should assume that the navigation is relative
// to the current location's pathname and *not* the route pathname.
if(n||null==s)i=r;else{let e=t.length-1;if(s.startsWith("..")){let t=s.split("/");
// Each leading .. segment means "go up one route" instead of "go up one
// URL segment".  This is a key difference from how <a href> works and a
// major reason we call this a "to" value instead of a "href".
for(;".."===t[0];)t.shift(),e-=1;o.pathname=t.join("/")}
// If there are more ".." segments than parent routes, resolve relative to
// the root / URL.
i=e>=0?t[e]:"/"}let c=I(o,i),d=s&&"/"!==s&&s.endsWith("/"),f=(l||"."===s)&&r.endsWith("/");
// Ensure the pathname has a trailing slash if the original "to" had one
return c.pathname.endsWith("/")||!d&&!f||(c.pathname+="/"),c}
/**
 * @private
 */
/**
 * @private
 */
const N=e=>e.join("/").replace(/\/\/+/g,"/")
/**
 * @private
 */,$=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/")
/**
 * @private
 */,H=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:""
/**
 * @private
 */,z=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:""
/**
 * This is a shortcut for creating `application/json` responses. Converts `data`
 * to JSON and sets the `Content-Type` header.
 */,W=function(e,t){void 0===t&&(t={});let r="number"==typeof t?{status:t}:t,n=new Headers(r.headers);return n.has("Content-Type")||n.set("Content-Type","application/json; charset=utf-8"),new Response(JSON.stringify(e),a({},r,{headers:n}))};class q extends Error{}class K{constructor(e,t){
// Set up an AbortController + Promise we can race against to exit early
// cancellation
let r;this.pendingKeysSet=new Set,this.subscribers=new Set,this.deferredKeys=[],u(e&&"object"==typeof e&&!Array.isArray(e),"defer() only accepts plain objects"),this.abortPromise=new Promise(((e,t)=>r=t)),this.controller=new AbortController;let n=()=>r(new q("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",n),this.controller.signal.addEventListener("abort",n),this.data=Object.entries(e).reduce(((e,t)=>{let[r,n]=t;return Object.assign(e,{[r]:this.trackPromise(r,n)})}),{}),this.done&&
// All incoming values were resolved
this.unlistenAbortSignal(),this.init=t}trackPromise(e,t){if(!(t instanceof Promise))return t;this.deferredKeys.push(e),this.pendingKeysSet.add(e);
// We store a little wrapper promise that will be extended with
// _data/_error props upon resolve/reject
let r=Promise.race([t,this.abortPromise]).then((t=>this.onSettle(r,e,null,t)),(t=>this.onSettle(r,e,t)));
// Register rejection listeners to avoid uncaught promise rejections on
// errors or aborted deferred values
return r.catch((()=>{})),Object.defineProperty(r,"_tracked",{get:()=>!0}),r}onSettle(e,t,r,n){return this.controller.signal.aborted&&r instanceof q?(this.unlistenAbortSignal(),Object.defineProperty(e,"_error",{get:()=>r}),Promise.reject(r)):(this.pendingKeysSet.delete(t),this.done&&
// Nothing left to abort!
this.unlistenAbortSignal(),r?(Object.defineProperty(e,"_error",{get:()=>r}),this.emit(!1,t),Promise.reject(r)):(Object.defineProperty(e,"_data",{get:()=>n}),this.emit(!1,t),n))}emit(e,t){this.subscribers.forEach((r=>r(e,t)))}subscribe(e){return this.subscribers.add(e),()=>this.subscribers.delete(e)}cancel(){this.controller.abort(),this.pendingKeysSet.forEach(((e,t)=>this.pendingKeysSet.delete(t))),this.emit(!0)}async resolveData(e){let t=!1;if(!this.done){let r=()=>this.cancel();e.addEventListener("abort",r),t=await new Promise((t=>{this.subscribe((n=>{e.removeEventListener("abort",r),(n||this.done)&&t(n)}))}))}return t}get done(){return 0===this.pendingKeysSet.size}get unwrappedData(){return u(null!==this.data&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce(((e,t)=>{let[r,n]=t;return Object.assign(e,{[r]:J(n)})}),{})}get pendingKeys(){return Array.from(this.pendingKeysSet)}}function J(e){if(!function(e){return e instanceof Promise&&!0===e._tracked}(e))return e;if(e._error)throw e._error;return e._data}const V=function(e,t){return void 0===t&&(t={}),new K(e,"number"==typeof t?{status:t}:t)},Y=function(e,t){void 0===t&&(t=302);let r=t;"number"==typeof r?r={status:r}:void 0===r.status&&(r.status=302);let n=new Headers(r.headers);return n.set("Location",e),new Response(null,a({},r,{headers:n}))};
/**
 * A redirect response. Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */
/**
 * @private
 * Utility class we use to hold auto-unwrapped 4xx/5xx Response bodies
 */
class X{constructor(e,t,r,n){void 0===n&&(n=!1),this.status=e,this.statusText=t||"",this.internal=n,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}
/**
 * Check if the given error is an ErrorResponse generated from a 4xx/5xx
 * Response thrown from an action/loader
 */function G(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}const Q=["post","put","patch","delete"],Z=new Set(Q),ee=["get",...Q],te=new Set(ee),re=new Set([301,302,303,307,308]),ne=new Set([307,308]),oe={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ae={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ie={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},le=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,se=e=>({hasErrorBoundary:Boolean(e.hasErrorBoundary)})
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createRouter
////////////////////////////////////////////////////////////////////////////////
/**
 * Create a router and listen to history POP navigations
 */;function ce(e){const t=e.window?e.window:"undefined"!=typeof window?window:void 0,r=void 0!==t&&void 0!==t.document&&void 0!==t.document.createElement,o=!r;let i;if(u(e.routes.length>0,"You must provide a non-empty routes array to createRouter"),e.mapRouteProperties)i=e.mapRouteProperties;else if(e.detectErrorBoundary){
// If they are still using the deprecated version, wrap it with the new API
let t=e.detectErrorBoundary;i=e=>({hasErrorBoundary:t(e)})}else i=se;
// Routes keyed by ID
let l,s={},c=b(e.routes,i,void 0,s),f=e.basename||"/",p=a({v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),m=null,v=new Set,g=null,E=null,R=null,S=null!=e.hydrationData,D=w(c,e.history.location,f),_=null;
// Routes in tree format for matching
if(null==D){
// If we do not match a user-provided-route, fall back to the root
// to allow the error boundary to take over
let t=_e(404,{pathname:e.history.location.pathname}),{matches:r,route:n}=De(c);D=r,_={[n.id]:t}}let x,C,k=
// All initialMatches need to be loaded before we're ready.  If we have lazy
// functions around still then we'll need to run them in initialize()
!(D.some((e=>e.route.lazy))||
// And we have to either have no loaders or have been provided hydrationData
D.some((e=>e.route.loader))&&null==e.hydrationData),P={historyAction:e.history.action,location:e.history.location,matches:D,initialized:k,navigation:oe,
// Don't restore on initial updateState() if we were SSR'd
restoreScrollPosition:null==e.hydrationData&&null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||_,fetchers:new Map,blockers:new Map},A=n.Pop,O=!1,j=!1,L=!1,M=[],I=[],T=new Map,F=0,B=-1,N=new Map,$=new Set,H=new Map,z=new Map,W=new Map,q=!1;
// Update our state and notify the calling context of the change
function K(e){P=a({},P,e),v.forEach((e=>e(P)))}
// Complete a navigation returning the state.navigation back to the IDLE_NAVIGATION
// and setting state.[historyAction/location/matches] to the new route.
// - Location is a required param
// - Navigation will always be set to IDLE_NAVIGATION
// - Can pass any other state in newState
function J(t,r){var o,i;
// Deduce if we're in a loading/actionReload state:
// - We have committed actionData in the store
// - The current navigation was a mutation submission
// - We're past the submitting state and into the loading state
// - The location being loaded is not the result of a redirect
let s,u=null!=P.actionData&&null!=P.navigation.formMethod&&Le(P.navigation.formMethod)&&"loading"===P.navigation.state&&!0!==(null==(o=t.state)?void 0:o._isRedirect);s=r.actionData?Object.keys(r.actionData).length>0?r.actionData:null:u?P.actionData:null;
// Always preserve any existing loaderData from re-used routes
let d=r.loaderData?Re(P.loaderData,r.loaderData,r.matches||[],r.errors):P.loaderData;
// On a successful navigation we can assume we got through all blockers
// so we can start fresh
for(let[e]of W)pe(e);
// Always respect the user flag.  Otherwise don't reset on mutation
// submission navigations unless they redirect
let f=!0===O||null!=P.navigation.formMethod&&Le(P.navigation.formMethod)&&!0!==(null==(i=t.state)?void 0:i._isRedirect);l&&(c=l,l=void 0),K(a({},r,{actionData:s,loaderData:d,historyAction:A,location:t,initialized:!0,navigation:oe,revalidation:"idle",restoreScrollPosition:we(t,r.matches||P.matches),preventScrollReset:f,blockers:new Map(P.blockers)})),j||A===n.Pop||(A===n.Push?e.history.push(t,t.state):A===n.Replace&&e.history.replace(t,t.state)),
// Reset stateful navigation vars
A=n.Pop,O=!1,j=!1,L=!1,M=[],I=[]}
// Trigger a navigation event, which can either be a numerical POP or a PUSH
// replace with an optional submission
// Start a navigation to the given action/location.  Can optionally provide a
// overrideNavigation which will override the normalLoad in the case of a redirect
// navigation
async function V(t,r,o){
// Abort any in-progress navigations and start a new one. Unset any ongoing
// uninterrupted revalidations unless told otherwise, since we want this
// new navigation to update history normally
C&&C.abort(),C=null,A=t,j=!0===(o&&o.startUninterruptedRevalidation),
// Save the current scroll position every time we start a new navigation,
// and track whether we should reset scroll on completion
function(e,t){if(g&&E&&R){let r=t.map((e=>Te(e,P.loaderData))),n=E(e,r)||e.key;g[n]=R()}}(P.location,P.matches),O=!0===(o&&o.preventScrollReset);let u=l||c,d=o&&o.overrideNavigation,h=w(u,r,f);
// Short circuit with a 404 on the root error boundary if we match nothing
if(!h){let e=_e(404,{pathname:r.pathname}),{matches:t,route:n}=De(u);
// Cancel all pending deferred on 404s since we don't keep any routes
return be(),void J(r,{matches:t,loaderData:{},errors:{[n.id]:e}})}
// Short circuit if it's only a hash change and not a revalidation or
// mutation submission.

// Ignore on initial page loads because since the initial load will always
// be "same hash".  For example, on /page#hash and submit a <Form method="post">
// which will default to a navigation to /page
if(P.initialized&&!L&&function(e,t){if(e.pathname!==t.pathname||e.search!==t.search)return!1;if(""===e.hash)
// /page -> /page#hash
return""!==t.hash;
// If the hash is removed the browser will re-perform a request to the server
// /page#hash -> /page
if(e.hash===t.hash)
// /page#hash -> /page#hash
return!0;if(""!==t.hash)
// /page#hash -> /page#other
return!0;return!1}(P.location,r)&&!(o&&o.submission&&Le(o.submission.formMethod)))return void J(r,{matches:h});
// Create a controller/Request for this navigation
C=new AbortController;let p,m,v=ge(e.history,r,C.signal,o&&o.submission);if(o&&o.pendingError)
// If we have a pendingError, it means the user attempted a GET submission
// with binary FormData so assign here and skip to handleLoaders.  That
// way we handle calling loaders above the boundary etc.  It's not really
// different from an actionError in that sense.
m={[Se(h).route.id]:o.pendingError};else if(o&&o.submission&&Le(o.submission.formMethod)){
// Call action if we received an action submission
let e=
// Call the action matched by the leaf route for this navigation and handle
// redirects/errors
await async function(e,t,r,o,l){Q();
// Put us in a submitting state
let c,u=a({state:"submitting",location:t},r);K({navigation:u});let d=Fe(o,t);if(d.route.action||d.route.lazy){if(c=await ye("action",e,d,o,s,i,f),e.signal.aborted)return{shortCircuited:!0}}else c={type:y.error,error:_e(405,{method:e.method,pathname:t.pathname,routeId:d.route.id})};if(Ae(c)){let e;return e=l&&null!=l.replace?l.replace:c.location===P.location.pathname+P.location.search,await X(P,c,{submission:r,replace:e}),{shortCircuited:!0}}if(Pe(c)){
// Store off the pending error - we use it to determine which loaders
// to call and will commit it when we complete the navigation
let e=Se(o,d.route.id);
// By default, all submissions are REPLACE navigations, but if the
// action threw an error that'll be rendered in an errorElement, we fall
// back to PUSH so that the user can use the back button to get back to
// the pre-submission form location to try again
return!0!==(l&&l.replace)&&(A=n.Push),{
// Send back an empty object we can use to clear out any prior actionData
pendingActionData:{},pendingActionError:{[e.route.id]:c.error}}}if(ke(c))throw _e(400,{type:"defer-action"});return{pendingActionData:{[d.route.id]:c.data}}}
// Call all applicable loaders for the given matches, handling redirects,
// errors, etc.
(v,r,o.submission,h,{replace:o.replace});if(e.shortCircuited)return;p=e.pendingActionData,m=e.pendingActionError,d=a({state:"loading",location:r},o.submission),
// Create a GET request for the loaders
v=new Request(v.url,{signal:v.signal})}
// Call loaders
let{shortCircuited:b,loaderData:S,errors:D}=await async function(t,r,n,o,i,s,u,d,h){
// Figure out the right navigation we want to use for data loading
let p=o;if(!p){p=a({state:"loading",location:r,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},i)}
// If this was a redirect from an action we don't have a "submission" but
// we have it on the loading navigation so use that if available
let m=i||s?i||s:p.formMethod&&p.formAction&&p.formData&&p.formEncType?{formMethod:p.formMethod,formAction:p.formAction,formData:p.formData,formEncType:p.formEncType}:void 0,v=l||c,[y,g]=he(e.history,P,n,m,r,L,M,I,H,v,f,d,h);
// Short circuit if we have no loaders to run
if(
// Cancel pending deferreds for no-longer-matched routes or routes we're
// about to reload.  Note that if this is an action reload we would have
// already cancelled all pending deferreds so this would be a no-op
be((e=>!(n&&n.some((t=>t.route.id===e)))||y&&y.some((t=>t.route.id===e)))),0===y.length&&0===g.length){let e=ce();return J(r,a({matches:n,loaderData:{},
// Commit pending error if we're short circuiting
errors:h||null},d?{actionData:d}:{},e?{fetchers:new Map(P.fetchers)}:{})),{shortCircuited:!0}}
// If this is an uninterrupted revalidation, we remain in our current idle
// state.  If not, we need to switch to our loading state and load data,
// preserving any new action data or existing action data (in the case of
// a revalidation interrupting an actionReload)
if(!j){g.forEach((e=>{let t=P.fetchers.get(e.key),r={state:"loading",data:t&&t.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};P.fetchers.set(e.key,r)}));let e=d||P.actionData;K(a({navigation:p},e?0===Object.keys(e).length?{actionData:null}:{actionData:e}:{},g.length>0?{fetchers:new Map(P.fetchers)}:{}))}B=++F,g.forEach((e=>{e.controller&&
// Fetchers use an independent AbortController so that aborting a fetcher
// (via deleteFetcher) does not abort the triggering navigation that
// triggered the revalidation
T.set(e.key,e.controller)}));
// Proxy navigation abort through to revalidation fetchers
let b=()=>g.forEach((e=>te(e.key)));C&&C.signal.addEventListener("abort",b);let{results:w,loaderResults:E,fetcherResults:R}=await G(P.matches,n,y,g,t);if(t.signal.aborted)return{shortCircuited:!0};
// Clean up _after_ loaders have completed.  Don't clean up if we short
// circuited because fetchControllers would have been aborted and
// reassigned to new controllers for the next navigation
C&&C.signal.removeEventListener("abort",b);g.forEach((e=>T.delete(e.key)));
// If any loaders returned a redirect Response, start a new REPLACE navigation
let S=xe(w);if(S)return await X(P,S,{replace:u}),{shortCircuited:!0};
// Process and commit output from loaders
let{loaderData:D,errors:_}=Ee(P,n,y,E,h,g,R,z);
// Wire up subscribers to update loaderData as promises settle
z.forEach(((e,t)=>{e.subscribe((r=>{
// Note: No need to updateState here since the TrackedPromise on
// loaderData is stable across resolve/reject
// Remove this instance if we were aborted or if promises have settled
(r||e.done)&&z.delete(t)}))}));let x=ce(),k=fe(B),A=x||k||g.length>0;return a({loaderData:D,errors:_},A?{fetchers:new Map(P.fetchers)}:{})}(v,r,h,d,o&&o.submission,o&&o.fetcherSubmission,o&&o.replace,p,m);b||(
// Clean up now that the action/loaders have completed.  Don't clean up if
// we short circuited because pendingNavigationController will have already
// been assigned to a new controller for the next navigation
C=null,J(r,a({matches:h},p?{actionData:p}:{},{loaderData:S,errors:D})))}function Y(e){return P.fetchers.get(e)||ae}
// Trigger a fetcher load/submit for the given fetcher key
/**
   * Utility function to handle redirects returned from an action or loader.
   * Normally, a redirect "replaces" the navigation that triggered it.  So, for
   * example:
   *
   *  - user is on /a
   *  - user clicks a link to /b
   *  - loader for /b redirects to /c
   *
   * In a non-JS app the browser would track the in-flight navigation to /b and
   * then replace it with /c when it encountered the redirect response.  In
   * the end it would only ever update the URL bar with /c.
   *
   * In client-side routing using pushState/replaceState, we aim to emulate
   * this behavior and we also do not update history until the end of the
   * navigation (including processed redirects).  This means that we never
   * actually touch history until we've processed redirects, so we just use
   * the history action from the original navigation (PUSH or REPLACE).
   */
async function X(o,i,l){let{submission:s,replace:c,isFetchActionRedirect:d}=void 0===l?{}:l;i.revalidate&&(L=!0);let p=h(o.location,i.location,// TODO: This can be removed once we get rid of useTransition in Remix v2
a({_isRedirect:!0},d?{_isFetchActionRedirect:!0}:{}));
// Check if this an absolute external redirect that goes to a new origin
if(u(p,"Expected a location on the redirect navigation"),le.test(i.location)&&r){let r=e.history.createURL(i.location),n=null==U(r.pathname,f);if(t.location.origin!==r.origin||n)return void(c?t.location.replace(i.location):t.location.assign(i.location))}
// There's no need to abort on redirects, since we don't detect the
// redirect until the action/loaders have settled
C=null;let m=!0===c?n.Replace:n.Push,{formMethod:v,formAction:y,formEncType:g,formData:b}=o.navigation;
// Use the incoming submission if provided, fallback on the active one in
// state.navigation
!s&&v&&y&&b&&g&&(s={formMethod:v,formAction:y,formEncType:g,formData:b}),
// If this was a 307/308 submission we want to preserve the HTTP method and
// re-submit the GET/POST/PUT/PATCH/DELETE as a submission navigation to the
// redirected location
ne.has(i.status)&&s&&Le(s.formMethod)?await V(m,p,{submission:a({},s,{formAction:i.location}),
// Preserve this flag across redirects
preventScrollReset:O}):d?
// For a fetch action redirect, we kick off a new loading navigation
// without the fetcher submission, but we send it along for shouldRevalidate
await V(m,p,{overrideNavigation:{state:"loading",location:p,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:s,
// Preserve this flag across redirects
preventScrollReset:O}):
// Otherwise, we kick off a new loading navigation, preserving the
// submission info for the duration of this navigation
await V(m,p,{overrideNavigation:{state:"loading",location:p,formMethod:s?s.formMethod:void 0,formAction:s?s.formAction:void 0,formEncType:s?s.formEncType:void 0,formData:s?s.formData:void 0},
// Preserve this flag across redirects
preventScrollReset:O})}async function G(t,r,n,o,a){
// Call all navigation loaders and revalidating fetcher loaders in parallel,
// then slice off the results into separate arrays so we can handle them
// accordingly
let l=await Promise.all([...n.map((e=>ye("loader",a,e,r,s,i,f))),...o.map((t=>{if(t.matches&&t.match&&t.controller)return ye("loader",ge(e.history,t.path,t.controller.signal),t.match,t.matches,s,i,f);return{type:y.error,error:_e(404,{pathname:t.path})}}))]),c=l.slice(0,n.length),u=l.slice(n.length);return await Promise.all([Me(t,n,c,c.map((()=>a.signal)),!1,P.loaderData),Me(t,o.map((e=>e.match)),u,o.map((e=>e.controller?e.controller.signal:null)),!0)]),{results:l,loaderResults:c,fetcherResults:u}}function Q(){
// Every interruption triggers a revalidation
L=!0,
// Cancel pending route-level deferreds and mark cancelled routes for
// revalidation
M.push(...be()),
// Abort in-flight fetcher loads
H.forEach(((e,t)=>{T.has(t)&&(I.push(t),te(t))}))}function Z(e,t,r){let n=Se(P.matches,t);ee(e),K({errors:{[n.route.id]:r},fetchers:new Map(P.fetchers)})}function ee(e){let t=P.fetchers.get(e);
// Don't abort the controller if this is a deletion of a fetcher.submit()
// in it's loading phase since - we don't want to abort the corresponding
// revalidation and want them to complete and land
!T.has(e)||t&&"loading"===t.state&&N.has(e)||te(e),H.delete(e),N.delete(e),$.delete(e),P.fetchers.delete(e)}function te(e){let t=T.get(e);u(t,"Expected fetch controller: "+e),t.abort(),T.delete(e)}function re(e){for(let t of e){let e={state:"idle",data:Y(t).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};P.fetchers.set(t,e)}}function ce(){let e=[],t=!1;for(let r of $){let n=P.fetchers.get(r);u(n,"Expected fetcher: "+r),"loading"===n.state&&($.delete(r),e.push(r),t=!0)}return re(e),t}function fe(e){let t=[];for(let[r,n]of N)if(n<e){let e=P.fetchers.get(r);u(e,"Expected fetcher: "+r),"loading"===e.state&&(te(r),N.delete(r),t.push(r))}return re(t),t.length>0}function pe(e){P.blockers.delete(e),W.delete(e)}
// Utility function to update blockers, ensuring valid state transitions
function me(e,t){let r=P.blockers.get(e)||ie;
// Poor mans state machine :)
// https://mermaid.live/edit#pako:eNqVkc9OwzAMxl8l8nnjAYrEtDIOHEBIgwvKJTReGy3_lDpIqO27k6awMG0XcrLlnz87nwdonESogKXXBuE79rq75XZO3-yHds0RJVuv70YrPlUrCEe2HfrORS3rubqZfuhtpg5C9wk5tZ4VKcRUq88q9Z8RS0-48cE1iHJkL0ugbHuFLus9L6spZy8nX9MP2CNdomVaposqu3fGayT8T8-jJQwhepo_UtpgBQaDEUom04dZhAN1aJBDlUKJBxE1ceB2Smj0Mln-IBW5AFU2dwUiktt_2Qaq2dBfaKdEup85UV7Yd-dKjlnkabl2Pvr0DTkTreM
u("unblocked"===r.state&&"blocked"===t.state||"blocked"===r.state&&"blocked"===t.state||"blocked"===r.state&&"proceeding"===t.state||"blocked"===r.state&&"unblocked"===t.state||"proceeding"===r.state&&"unblocked"===t.state,"Invalid blocker state transition: "+r.state+" -> "+t.state),P.blockers.set(e,t),K({blockers:new Map(P.blockers)})}function ve(e){let{currentLocation:t,nextLocation:r,historyAction:n}=e;if(0===W.size)return;
// We ony support a single active blocker at the moment since we don't have
// any compelling use cases for multi-blocker yet
W.size>1&&d(!1,"A router only supports one blocker at a time");let o=Array.from(W.entries()),[a,i]=o[o.length-1],l=P.blockers.get(a);return l&&"proceeding"===l.state?void 0:
// At this point, we know we're unblocked/blocked so we need to check the
// user-provided blocker function
i({currentLocation:t,nextLocation:r,historyAction:n})?a:void 0}function be(e){let t=[];return z.forEach(((r,n)=>{e&&!e(n)||(
// Cancel the deferred - but do not remove from activeDeferreds here -
// we rely on the subscribers to do that so our tests can assert proper
// cleanup via _internalActiveDeferreds
r.cancel(),t.push(n),z.delete(n))})),t}
// Opt in to capturing and reporting scroll positions during navigations,
// used by the <ScrollRestoration> component
function we(e,t){if(g&&E&&R){let r=t.map((e=>Te(e,P.loaderData))),n=E(e,r)||e.key,o=g[n];if("number"==typeof o)return o}return null}return x={get basename(){return f},get state(){return P},get routes(){return c},initialize:
// Initialize the router, all side effects should be kicked off from here.
// Implemented as a Fluent API for ease of:
//   let router = createRouter(init).initialize();
function(){
// If history informs us of a POP navigation, start the navigation but do not update
// state.  We'll update our own state once the navigation completes
return m=e.history.listen((t=>{let{action:r,location:n,delta:o}=t;
// Ignore this event if it was just us resetting the URL from a
// blocked POP navigation
if(q)return void(q=!1);d(0===W.size||null!=o,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let a=ve({currentLocation:P.location,nextLocation:n,historyAction:r});return a&&null!=o?(
// Restore the URL to match the current UI, but don't update router state
q=!0,e.history.go(-1*o),void
// Put the blocker into a blocked state
me(a,{state:"blocked",location:n,proceed(){me(a,{state:"proceeding",proceed:void 0,reset:void 0,location:n}),
// Re-do the same POP navigation we just blocked
e.history.go(o)},reset(){pe(a),K({blockers:new Map(x.state.blockers)})}})):V(r,n)})),
// Kick off initial data load if needed.  Use Pop to avoid modifying history
// Note we don't do any handling of lazy here.  For SPA's it'll get handled
// in the normal navigation flow.  For SSR it's expected that lazy modules are
// resolved prior to router creation since we can't go into a fallbackElement
// UI for SSR'd apps
P.initialized||V(n.Pop,P.location),x}
// Clean up a router and it's side effects
,subscribe:
// Subscribe to state updates for the router
function(e){return v.add(e),()=>v.delete(e)},enableScrollRestoration:function(e,t,r){
// Perform initial hydration scroll restoration, since we miss the boat on
// the initial updateState() because we've not yet rendered <ScrollRestoration/>
// and therefore have no savedScrollPositions available
if(g=e,R=t,E=r||(e=>e.key),!S&&P.navigation===oe){S=!0;let e=we(P.location,P.matches);null!=e&&K({restoreScrollPosition:e})}return()=>{g=null,R=null,E=null}},navigate:async function t(r,o){if("number"==typeof r)return void e.history.go(r);let i=ue(P.location,P.matches,f,p.v7_prependBasename,r,null==o?void 0:o.fromRouteId,null==o?void 0:o.relative),{path:l,submission:s,error:c}=de(p.v7_normalizeFormMethod,!1,i,o),u=P.location,d=h(P.location,l,o&&o.state);
// When using navigate as a PUSH/REPLACE we aren't reading an already-encoded
// URL from window.location, so we need to encode it here so the behavior
// remains the same as POP and non-data-router usages.  new URL() does all
// the same encoding we'd get from a history.pushState/window.location read
// without having to touch history
d=a({},d,e.history.encodeLocation(d));let m=o&&null!=o.replace?o.replace:void 0,v=n.Push;!0===m?v=n.Replace:!1===m||null!=s&&Le(s.formMethod)&&s.formAction===P.location.pathname+P.location.search&&(
// By default on submissions to the current location we REPLACE so that
// users don't have to double-click the back button to get to the prior
// location.  If the user redirects to a different location from the
// action/loader this will be ignored and the redirect will be a PUSH
v=n.Replace);let y=o&&"preventScrollReset"in o?!0===o.preventScrollReset:void 0,g=ve({currentLocation:u,nextLocation:d,historyAction:v});if(!g)return await V(v,d,{submission:s,
// Send through the formData serialization error if we have one so we can
// render at the right error boundary after we match routes
pendingError:c,preventScrollReset:y,replace:o&&o.replace});
// Put the blocker into a blocked state
me(g,{state:"blocked",location:d,proceed(){me(g,{state:"proceeding",proceed:void 0,reset:void 0,location:d}),
// Send the same navigation through
t(r,o)},reset(){pe(g),K({blockers:new Map(P.blockers)})}})}
// Revalidate all current loaders.  If a navigation is in progress or if this
// is interrupted by a navigation, allow this to "succeed" by calling all
// loaders during the next loader round
,fetch:function(t,r,n,d){if(o)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");T.has(t)&&te(t);let h=l||c,m=ue(P.location,P.matches,f,p.v7_prependBasename,n,r,null==d?void 0:d.relative),v=w(h,m,f);if(!v)return void Z(t,r,_e(404,{pathname:m}));let{path:y,submission:g}=de(p.v7_normalizeFormMethod,!0,m,d),b=Fe(v,y);O=!0===(d&&d.preventScrollReset),g&&Le(g.formMethod)?
// Call the action for the matched fetcher.submit(), and then handle redirects,
// errors, and revalidation
async function(t,r,n,o,d,h){if(Q(),H.delete(t),!o.route.action&&!o.route.lazy){let e=_e(405,{method:h.formMethod,pathname:n,routeId:r});return void Z(t,r,e)}
// Put this fetcher into it's submitting state
let p=P.fetchers.get(t),m=a({state:"submitting"},h,{data:p&&p.data," _hasFetcherDoneAnything ":!0});P.fetchers.set(t,m),K({fetchers:new Map(P.fetchers)});
// Call the action for the fetcher
let v=new AbortController,y=ge(e.history,n,v.signal,h);T.set(t,v);let g=await ye("action",y,o,d,s,i,f);if(y.signal.aborted)
// We can delete this so long as we weren't aborted by ou our own fetcher
// re-submit which would have put _new_ controller is in fetchControllers
return void(T.get(t)===v&&T.delete(t));if(Ae(g)){T.delete(t),$.add(t);let e=a({state:"loading"},h,{data:void 0," _hasFetcherDoneAnything ":!0});return P.fetchers.set(t,e),K({fetchers:new Map(P.fetchers)}),X(P,g,{submission:h,isFetchActionRedirect:!0})}
// Process any non-redirect errors thrown
if(Pe(g))return void Z(t,r,g.error);if(ke(g))throw _e(400,{type:"defer-action"});
// Start the data load for current matches, or the next location if we're
// in the middle of a navigation
let b=P.navigation.location||P.location,E=ge(e.history,b,v.signal),R=l||c,S="idle"!==P.navigation.state?w(R,P.navigation.location,f):P.matches;u(S,"Didn't find any matches after fetcher action");let D=++F;N.set(t,D);let _=a({state:"loading",data:g.data},h,{" _hasFetcherDoneAnything ":!0});P.fetchers.set(t,_);let[x,k]=he(e.history,P,S,h,b,L,M,I,H,R,f,{[o.route.id]:g.data},void 0);
// Put all revalidating fetchers into the loading state, except for the
// current fetcher which we want to keep in it's current loading state which
// contains it's action submission info + action data
k.filter((e=>e.key!==t)).forEach((e=>{let t=e.key,r=P.fetchers.get(t),n={state:"loading",data:r&&r.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};P.fetchers.set(t,n),e.controller&&T.set(t,e.controller)})),K({fetchers:new Map(P.fetchers)});let O=()=>k.forEach((e=>te(e.key)));v.signal.addEventListener("abort",O);let{results:j,loaderResults:U,fetcherResults:W}=await G(P.matches,S,x,k,E);if(v.signal.aborted)return;v.signal.removeEventListener("abort",O),N.delete(t),T.delete(t),k.forEach((e=>T.delete(e.key)));let q=xe(j);if(q)return X(P,q);
// Process and commit output from loaders
let{loaderData:V,errors:Y}=Ee(P,P.matches,x,U,void 0,k,W,z);
// Since we let revalidations complete even if the submitting fetcher was
// deleted, only put it back to idle if it hasn't been deleted
if(P.fetchers.has(t)){let e={state:"idle",data:g.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};P.fetchers.set(t,e)}let ee=fe(D);
// If we are currently in a navigation loading state and this fetcher is
// more recent than the navigation, we want the newer data so abort the
// navigation and complete it with the fetcher data
"loading"===P.navigation.state&&D>B?(u(A,"Expected pending action"),C&&C.abort(),J(P.navigation.location,{matches:S,loaderData:V,errors:Y,fetchers:new Map(P.fetchers)})):(
// otherwise just update with the fetcher data, preserving any existing
// loaderData for loaders that did not need to reload.  We have to
// manually merge here since we aren't going through completeNavigation
K(a({errors:Y,loaderData:Re(P.loaderData,V,S,Y)},ee||k.length>0?{fetchers:new Map(P.fetchers)}:{})),L=!1)}
// Call the matched loader for fetcher.load(), handling redirects, errors, etc.
(t,r,y,b,v,g):(
// Store off the match so we can call it's shouldRevalidate on subsequent
// revalidations
H.set(t,{routeId:r,path:y}),async function(t,r,n,o,l,c){let d=P.fetchers.get(t),h=a({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},c,{data:d&&d.data," _hasFetcherDoneAnything ":!0});
// Put this fetcher into it's loading state
P.fetchers.set(t,h),K({fetchers:new Map(P.fetchers)});
// Call the loader for this fetcher route match
let p=new AbortController,m=ge(e.history,n,p.signal);T.set(t,p);let v=await ye("loader",m,o,l,s,i,f);
// Deferred isn't supported for fetcher loads, await everything and treat it
// as a normal load.  resolveDeferredData will return undefined if this
// fetcher gets aborted, so we just leave result untouched and short circuit
// below if that happens
ke(v)&&(v=await Ue(v,m.signal,!0)||v);
// We can delete this so long as we weren't aborted by our our own fetcher
// re-load which would have put _new_ controller is in fetchControllers
T.get(t)===p&&T.delete(t);if(m.signal.aborted)return;
// If the loader threw a redirect Response, start a new REPLACE navigation
if(Ae(v))return $.add(t),void await X(P,v);
// Process any non-redirect errors thrown
if(Pe(v)){let e=Se(P.matches,r);return P.fetchers.delete(t),void
// TODO: In remix, this would reset to IDLE_NAVIGATION if it was a catch -
// do we need to behave any differently with our non-redirect errors?
// What if it was a non-redirect Response?
K({fetchers:new Map(P.fetchers),errors:{[e.route.id]:v.error}})}u(!ke(v),"Unhandled fetcher deferred data");
// Put the fetcher back into an idle state
let y={state:"idle",data:v.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};P.fetchers.set(t,y),K({fetchers:new Map(P.fetchers)})}(t,r,y,b,v,g))},revalidate:function(){Q(),K({revalidation:"loading"}),
// If we're currently submitting an action, we don't need to start a new
// navigation, we'll just let the follow up loader execution call all loaders
"submitting"!==P.navigation.state&&(
// If we're currently in an idle state, start a new navigation for the current
// action/location and mark it as uninterrupted, which will skip the history
// update in completeNavigation
"idle"!==P.navigation.state?
// Otherwise, if we're currently in a loading state, just start a new
// navigation to the navigation.location but do not trigger an uninterrupted
// revalidation so that history correctly updates once the navigation completes
V(A||P.historyAction,P.navigation.location,{overrideNavigation:P.navigation}):V(P.historyAction,P.location,{startUninterruptedRevalidation:!0}))},
// Passthrough to history-aware createHref used by useHref so we get proper
// hash-aware URLs in DOM paths
createHref:t=>e.history.createHref(t),encodeLocation:t=>e.history.encodeLocation(t),getFetcher:Y,deleteFetcher:ee,dispose:function(){m&&m(),v.clear(),C&&C.abort(),P.fetchers.forEach(((e,t)=>ee(t))),P.blockers.forEach(((e,t)=>pe(t)))},getBlocker:function(e,t){let r=P.blockers.get(e)||ie;return W.get(e)!==t&&W.set(e,t),r},deleteBlocker:pe,_internalFetchControllers:T,_internalActiveDeferreds:z,
// TODO: Remove setRoutes, it's temporary to avoid dealing with
// updating the tree while validating the update algorithm.
_internalSetRoutes:function(e){s={},l=b(e,i,void 0,s)}},x}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createStaticHandler
////////////////////////////////////////////////////////////////////////////////
Symbol("deferred");function ue(e,t,r,n,o,a,i){let l,s;if(null!=a&&"path"!==i){
// Grab matches up to the calling route so our route-relative logic is
// relative to the correct source route.  When using relative:path,
// fromRouteId is ignored since that is always relative to the current
// location path
l=[];for(let e of t)if(l.push(e),e.route.id===a){s=e;break}}else l=t,s=t[t.length-1];
// Resolve the relative path
let c=B(o||".",F(l).map((e=>e.pathnameBase)),U(e.pathname,r)||e.pathname,"path"===i);
// When `to` is not specified we inherit search/hash from the current
// location, unlike when to="." and we just inherit the path.
// See https://github.com/remix-run/remix/issues/927
return null==o&&(c.search=e.search,c.hash=e.hash),
// Add an ?index param for matched index routes if we don't already have one
null!=o&&""!==o&&"."!==o||!s||!s.route.index||Ie(c.search)||(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),
// If we're operating within a basename, prepend it to the pathname.  If
// this is a root navigation, then just use the raw basename which allows
// the basename to have full control over the presence of a trailing slash
// on root actions
n&&"/"!==r&&(c.pathname="/"===c.pathname?r:N([r,c.pathname])),p(c)}
// Normalize navigation options by converting formMethod=GET formData objects to
// URLSearchParams so they behave identically to links with query params
function de(e,t,r,n){
// Return location verbatim on non-submission navigations
if(!n||!function(e){return null!=e&&"formData"in e}(n))return{path:r};if(n.formMethod&&!je(n.formMethod))return{path:r,error:_e(405,{method:n.formMethod})};
// Create a Submission on non-GET navigations
let o;if(n.formData){let t=n.formMethod||"get";if(o={formMethod:e?t.toUpperCase():t.toLowerCase(),formAction:Ce(r),formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:n.formData},Le(o.formMethod))return{path:r,submission:o}}
// Flatten submission onto URLSearchParams for GET submissions
let a=m(r),i=be(n.formData);
// On GET navigation submissions we can drop the ?index param from the
// resulting location since all loaders will run.  But fetcher GET submissions
// only run a single loader so we need to preserve any incoming ?index params
return t&&a.search&&Ie(a.search)&&i.append("index",""),a.search="?"+i,{path:p(a),submission:o}}
// Filter out all routes below any caught error as they aren't going to
// render so we don't need to load them
function fe(e,t){let r=e;if(t){let n=e.findIndex((e=>e.route.id===t));n>=0&&(r=e.slice(0,n))}return r}function he(e,t,r,n,o,i,l,s,c,u,d,f,h){let p=h?Object.values(h)[0]:f?Object.values(f)[0]:void 0,m=e.createURL(t.location),v=e.createURL(o),y=h?Object.keys(h)[0]:void 0,g=fe(r,y).filter(((e,r)=>{if(e.route.lazy)
// We haven't loaded this route yet so we don't know if it's got a loader!
return!0;if(null==e.route.loader)return!1;
// Always call the loader on new route instances and pending defer cancellations
if(function(e,t,r){let n=
// [a] -> [a, b]
!t||
// [a, b] -> [a, c]
r.route.id!==t.route.id,o=void 0===e[r.route.id];
// Handle the case that we don't have data for a re-used route, potentially
// from a prior error or from a cancelled pending deferred
// Always load if this is a net-new route or we don't yet have data
return n||o}(t.loaderData,t.matches[r],e)||l.some((t=>t===e.route.id)))return!0;
// This is the default implementation for when we revalidate.  If the route
// provides it's own implementation, then we give them full control but
// provide this value so they can leverage it if needed after they check
// their own specific use cases
let o=t.matches[r],s=e;return me(e,a({currentUrl:m,currentParams:o.params,nextUrl:v,nextParams:s.params},n,{actionResult:p,defaultShouldRevalidate:
// Forced revalidation due to submission, useRevalidator, or X-Remix-Revalidate
i||
// Clicked the same link, resubmitted a GET form
m.pathname+m.search===v.pathname+v.search||
// Search params affect all loaders
m.search!==v.search||pe(o,s)}))})),b=[];return c.forEach(((e,o)=>{
// Don't revalidate if fetcher won't be present in the subsequent render
if(!r.some((t=>t.route.id===e.routeId)))return;let l=w(u,e.path,d);
// If the fetcher path no longer matches, push it in with null matches so
// we can trigger a 404 in callLoadersAndMaybeResolveData
if(!l)return void b.push({key:o,routeId:e.routeId,path:e.path,matches:null,match:null,controller:null});let c=Fe(l,e.path);(s.includes(o)||me(c,a({currentUrl:m,currentParams:t.matches[t.matches.length-1].params,nextUrl:v,nextParams:r[r.length-1].params},n,{actionResult:p,
// Forced revalidation due to submission, useRevalidator, or X-Remix-Revalidate
defaultShouldRevalidate:i})))&&b.push({key:o,routeId:e.routeId,path:e.path,matches:l,match:c,controller:new AbortController});
// Revalidating fetchers are decoupled from the route matches since they
// hit a static href, so they _always_ check shouldRevalidate and the
// default is strictly if a revalidation is explicitly required (action
// submissions, useRevalidator, X-Remix-Revalidate).
})),[g,b]}function pe(e,t){let r=e.route.path;
// param change for this match, /users/123 -> /users/456
return e.pathname!==t.pathname||
// splat param changed, which is not present in match.path
// e.g. /files/images/avatar.jpg -> files/finances.xls
null!=r&&r.endsWith("*")&&e.params["*"]!==t.params["*"]}function me(e,t){if(e.route.shouldRevalidate){let r=e.route.shouldRevalidate(t);if("boolean"==typeof r)return r}return t.defaultShouldRevalidate}
/**
 * Execute route.lazy() methods to lazily load route modules (loader, action,
 * shouldRevalidate) and update the routeManifest in place which shares objects
 * with dataRoutes so those get updated as well.
 */async function ve(e,t,r){if(!e.lazy)return;let n=await e.lazy();
// If the lazy route function was executed and removed by another parallel
// call then we can return - first lazy() to finish wins because the return
// value of lazy is expected to be static
if(!e.lazy)return;let o=r[e.id];u(o,"No route found in manifest");
// Update the route in place.  This should be safe because there's no way
// we could yet be sitting on this route as we can't get there without
// resolving lazy() first.
// This is different than the HMR "update" use-case where we may actively be
// on the route being updated.  The main concern boils down to "does this
// mutation affect any ongoing navigations or any current state.matches
// values?".  If not, it should be safe to update in place.
let i={};for(let e in n){let t=void 0!==o[e]&&
// This property isn't static since it should always be updated based
// on the route updates
"hasErrorBoundary"!==e;d(!t,'Route "'+o.id+'" has a static property "'+e+'" defined but its lazy function is also returning a value for this property. The lazy route property "'+e+'" will be ignored.'),t||g.has(e)||(i[e]=n[e])}
// Mutate the route with the provided updates.  Do this first so we pass
// the updated version to mapRouteProperties
Object.assign(o,i),
// Mutate the `hasErrorBoundary` property on the route based on the route
// updates and remove the `lazy` function so we don't resolve the lazy
// route again.
Object.assign(o,a({},t(o),{lazy:void 0}))}async function ye(e,t,r,n,o,a,i,l,s,c){let d,f,h;void 0===l&&(l=!1),void 0===s&&(s=!1);let p=e=>{
// Setup a promise we can race against so that abort signals short circuit
let n,o=new Promise(((e,t)=>n=t));return h=()=>n(),t.signal.addEventListener("abort",h),Promise.race([e({request:t,params:r.params,context:c}),o])};try{let n=r.route[e];if(r.route.lazy)if(n){f=(await Promise.all([p(n),ve(r.route,a,o)]))[0]}else{if(
// Load lazy route module, then run any returned handler
await ve(r.route,a,o),n=r.route[e],!n){if("action"===e){let e=new URL(t.url),n=e.pathname+e.search;throw _e(405,{method:t.method,pathname:n,routeId:r.route.id})}
// lazy() route has no loader to run.  Short circuit here so we don't
// hit the invariant below that errors on returning undefined.
return{type:y.data,data:void 0}}
// Handler still run even if we got interrupted to maintain consistency
// with un-abortable behavior of handler execution on non-lazy or
// previously-lazy-loaded routes
f=await p(n)}else{if(!n){let e=new URL(t.url);throw _e(404,{pathname:e.pathname+e.search})}f=await p(n)}u(void 0!==f,"You defined "+("action"===e?"an action":"a loader")+' for route "'+r.route.id+"\" but didn't return anything from your `"+e+"` function. Please return a value or `null`.")}catch(e){d=y.error,f=e}finally{h&&t.signal.removeEventListener("abort",h)}if(Oe(f)){let e,o=f.status;
// Process redirects
if(re.has(o)){let e=f.headers.get("Location");
// Support relative routing in internal redirects
if(u(e,"Redirects returned/thrown from loaders/actions must have a Location header"),le.test(e)){if(!l){
// Strip off the protocol+origin for same-origin + same-basename absolute
// redirects. If this is a static request, we can let it go back to the
// browser as-is
let r=new URL(t.url),n=e.startsWith("//")?new URL(r.protocol+e):new URL(e),o=null!=U(n.pathname,i);n.origin===r.origin&&o&&(e=n.pathname+n.search+n.hash)}
// Don't process redirects in the router during static requests requests.
// Instead, throw the Response and let the server handle it with an HTTP
// redirect.  We also update the Location header in place in this flow so
// basename and relative routing is taken into account
}else e=ue(new URL(t.url),n.slice(0,n.indexOf(r)+1),i,!0,e);if(l)throw f.headers.set("Location",e),f;return{type:y.redirect,status:o,location:e,revalidate:null!==f.headers.get("X-Remix-Revalidate")}}
// For SSR single-route requests, we want to hand Responses back directly
// without unwrapping.  We do this with the QueryRouteResponse wrapper
// interface so we can know whether it was returned or thrown
if(s)
// eslint-disable-next-line no-throw-literal
throw{type:d||y.data,response:f};let a=f.headers.get("Content-Type");
// Check between word boundaries instead of startsWith() due to the last
// paragraph of https://httpwg.org/specs/rfc9110.html#field.content-type
return e=a&&/\bapplication\/json\b/.test(a)?await f.json():await f.text(),d===y.error?{type:d,error:new X(o,f.statusText,e),headers:f.headers}:{type:y.data,data:e,statusCode:f.status,headers:f.headers}}return d===y.error?{type:d,error:f}:function(e){let t=e;return t&&"object"==typeof t&&"object"==typeof t.data&&"function"==typeof t.subscribe&&"function"==typeof t.cancel&&"function"==typeof t.resolveData}(f)?{type:y.deferred,deferredData:f,statusCode:null==(m=f.init)?void 0:m.status,headers:(null==(v=f.init)?void 0:v.headers)&&new Headers(f.init.headers)}:{type:y.data,data:f};var m,v}
// Utility method for creating the Request instances for loaders/actions during
// client-side navigations and fetches.  During SSR we will always have a
// Request instance from the static handler (query/queryRoute)
function ge(e,t,r,n){let o=e.createURL(Ce(t)).toString(),a={signal:r};if(n&&Le(n.formMethod)){let{formMethod:e,formEncType:t,formData:r}=n;
// Didn't think we needed this but it turns out unlike other methods, patch
// won't be properly normalized to uppercase and results in a 405 error.
// See: https://fetch.spec.whatwg.org/#concept-method
a.method=e.toUpperCase(),a.body="application/x-www-form-urlencoded"===t?be(r):r}
// Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
return new Request(o,a)}function be(e){let t=new URLSearchParams;for(let[r,n]of e.entries())
// https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#converting-an-entry-list-to-a-list-of-name-value-pairs
t.append(r,n instanceof File?n.name:n);return t}function we(e,t,r,n,o){
// Fill in loaderData/errors from our loaders
let a,i={},l=null,s=!1,c={};
// Process loader results into state.loaderData/state.errors
return r.forEach(((r,d)=>{let f=t[d].route.id;if(u(!Ae(r),"Cannot handle redirect results in processLoaderData"),Pe(r)){
// Look upwards from the matched route for the closest ancestor
// error boundary, defaulting to the root match
let t=Se(e,f),o=r.error;
// If we have a pending action error, we report it at the highest-route
// that throws a loader error, and then clear it out to indicate that
// it was consumed
n&&(o=Object.values(n)[0],n=void 0),l=l||{},
// Prefer higher error values if lower errors bubble to the same boundary
null==l[t.route.id]&&(l[t.route.id]=o),
// Clear our any prior loaderData for the throwing route
i[f]=void 0,
// Once we find our first (highest) error, we set the status code and
// prevent deeper status codes from overriding
s||(s=!0,a=G(r.error)?r.error.status:500),r.headers&&(c[f]=r.headers)}else ke(r)?(o.set(f,r.deferredData),i[f]=r.deferredData.data):i[f]=r.data,
// Error status codes always override success status codes, but if all
// loaders are successful we take the deepest status code.
null==r.statusCode||200===r.statusCode||s||(a=r.statusCode),r.headers&&(c[f]=r.headers)})),
// If we didn't consume the pending action error (i.e., all loaders
// resolved), then consume it here.  Also clear out any loaderData for the
// throwing route
n&&(l=n,i[Object.keys(n)[0]]=void 0),{loaderData:i,errors:l,statusCode:a||200,loaderHeaders:c}}function Ee(e,t,r,n,o,i,l,s){let{loaderData:c,errors:d}=we(t,r,n,o,s);
// Process results from our revalidating fetchers
for(let t=0;t<i.length;t++){let{key:r,match:n,controller:o}=i[t];u(void 0!==l&&void 0!==l[t],"Did not find corresponding fetcher result");let s=l[t];
// Process fetcher non-redirect errors
if(!o||!o.signal.aborted)if(Pe(s)){let t=Se(e.matches,null==n?void 0:n.route.id);d&&d[t.route.id]||(d=a({},d,{[t.route.id]:s.error})),e.fetchers.delete(r)}else if(Ae(s))
// Should never get here, redirects should get processed above, but we
// keep this to type narrow to a success result in the else
u(!1,"Unhandled fetcher revalidation redirect");else if(ke(s))
// Should never get here, deferred data should be awaited for fetchers
// in resolveDeferredResults
u(!1,"Unhandled fetcher deferred data");else{let t={state:"idle",data:s.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(r,t)}}return{loaderData:c,errors:d}}function Re(e,t,r,n){let o=a({},t);for(let a of r){let r=a.route.id;if(t.hasOwnProperty(r)?void 0!==t[r]&&(o[r]=t[r]):void 0!==e[r]&&a.route.loader&&(
// Preserve existing keys not included in newLoaderData and where a loader
// wasn't removed by HMR
o[r]=e[r]),n&&n.hasOwnProperty(r))
// Don't keep any loader data below the boundary
break}return o}
// Find the nearest error boundary, looking upwards from the leaf route (or the
// route specified by routeId) for the closest ancestor error boundary,
// defaulting to the root match
function Se(e,t){return(t?e.slice(0,e.findIndex((e=>e.route.id===t))+1):[...e]).reverse().find((e=>!0===e.route.hasErrorBoundary))||e[0]}function De(e){
// Prefer a root layout route if present, otherwise shim in a route object
let t=e.find((e=>e.index||!e.path||"/"===e.path))||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function _e(e,t){let{pathname:r,routeId:n,method:o,type:a}=void 0===t?{}:t,i="Unknown Server Error",l="Unknown @remix-run/router error";return 400===e?(i="Bad Request",o&&r&&n?l="You made a "+o+' request to "'+r+'" but did not provide a `loader` for route "'+n+'", so there is no way to handle the request.':"defer-action"===a&&(l="defer() is not supported in actions")):403===e?(i="Forbidden",l='Route "'+n+'" does not match URL "'+r+'"'):404===e?(i="Not Found",l='No route matches URL "'+r+'"'):405===e&&(i="Method Not Allowed",o&&r&&n?l="You made a "+o.toUpperCase()+' request to "'+r+'" but did not provide an `action` for route "'+n+'", so there is no way to handle the request.':o&&(l='Invalid request method "'+o.toUpperCase()+'"')),new X(e||500,i,new Error(l),!0)}
// Find any returned redirect errors, starting from the lowest match
function xe(e){for(let t=e.length-1;t>=0;t--){let r=e[t];if(Ae(r))return r}}function Ce(e){return p(a({},"string"==typeof e?m(e):e,{hash:""}))}function ke(e){return e.type===y.deferred}function Pe(e){return e.type===y.error}function Ae(e){return(e&&e.type)===y.redirect}function Oe(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"object"==typeof e.headers&&void 0!==e.body}function je(e){return te.has(e.toLowerCase())}function Le(e){return Z.has(e.toLowerCase())}async function Me(e,t,r,n,o,a){for(let i=0;i<r.length;i++){let l=r[i],s=t[i];
// If we don't have a match, then we can have a deferred result to do
// anything with.  This is for revalidating fetchers where the route was
// removed during HMR
if(!s)continue;let c=e.find((e=>e.route.id===s.route.id)),d=null!=c&&!pe(c,s)&&void 0!==(a&&a[s.route.id]);if(ke(l)&&(o||d)){
// Note: we do not have to touch activeDeferreds here since we race them
// against the signal in resolveDeferredData and they'll get aborted
// there if needed
let e=n[i];u(e,"Expected an AbortSignal for revalidating fetcher deferred result"),await Ue(l,e,o).then((e=>{e&&(r[i]=e||r[i])}))}}}async function Ue(e,t,r){if(void 0===r&&(r=!1),!await e.deferredData.resolveData(t)){if(r)try{return{type:y.data,data:e.deferredData.unwrappedData}}catch(e){
// Handle any TrackedPromise._error values encountered while unwrapping
return{type:y.error,error:e}}return{type:y.data,data:e.deferredData.data}}}function Ie(e){return new URLSearchParams(e).getAll("index").some((e=>""===e))}
// Note: This should match the format exported by useMatches, so if you change
// this please also change that :)  Eventually we'll DRY this up
function Te(e,t){let{route:r,pathname:n,params:o}=e;return{id:r.id,pathname:n,params:o,data:t[r.id],handle:r.handle}}function Fe(e,t){let r="string"==typeof t?m(t).search:t.search;if(e[e.length-1].route.index&&Ie(r||""))
// Return the leaf index route when index is present
return e[e.length-1];
// Otherwise grab the deepest "path contributing" match (ignoring index and
// pathless layout routes)
let n=F(e);return n[n.length-1]}
//#endregion
//# sourceMappingURL=router.js.map
// CONCATENATED MODULE: ./node_modules/react-router/dist/index.js
/**
 * React Router v6.12.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Be(){return Be=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Be.apply(this,arguments)}
// Create react-specific types from the agnostic types in @remix-run/router to
// export from react-router
const Ne=o.createContext(null);const $e=o.createContext(null);const He=o.createContext(null);
/**
 * A Navigator is a "location changer"; it's how you get to different locations.
 *
 * Every history instance conforms to the Navigator interface, but the
 * distinction is useful primarily when it comes to the low-level <Router> API
 * where both the location and a navigator must be provided separately in order
 * to avoid "tearing" that may occur in a suspense-enabled app if the action
 * and/or location were to be read directly from the history instance.
 */
const ze=o.createContext(null);const We=o.createContext(null);const qe=o.createContext({outlet:null,matches:[],isDataRoute:!1});const Ke=o.createContext(null);
/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/hooks/use-href
 */
function Je(e,t){let{relative:r}=void 0===t?{}:t;Ve()||u(!1);let{basename:n,navigator:a}=o.useContext(ze),{hash:i,pathname:l,search:s}=ot(e,{relative:r}),c=l;
// If we're operating within a basename, prepend it to the pathname prior
// to creating the href.  If this is a root navigation, then just use the raw
// basename which allows the basename to have full control over the presence
// of a trailing slash on root links
return"/"!==n&&(c="/"===l?n:N([n,l])),a.createHref({pathname:c,search:s,hash:i})}
/**
 * Returns true if this component is a descendant of a <Router>.
 *
 * @see https://reactrouter.com/hooks/use-in-router-context
 */function Ve(){return null!=o.useContext(We)}
/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/hooks/use-location
 */function Ye(){return Ve()||u(!1),o.useContext(We).location}
/**
 * Returns the current navigation action which describes how the router came to
 * the current location, either by a pop, push, or replace on the history stack.
 *
 * @see https://reactrouter.com/hooks/use-navigation-type
 */function Xe(){return o.useContext(We).navigationType}
/**
 * Returns a PathMatch object if the given pattern matches the current URL.
 * This is useful for components that need to know "active" state, e.g.
 * <NavLink>.
 *
 * @see https://reactrouter.com/hooks/use-match
 */function Ge(e){Ve()||u(!1);let{pathname:t}=Ye();return o.useMemo((()=>L(e,t)),[t,e])}
/**
 * The interface for the navigate() function returned from useNavigate().
 */
// Mute warnings for calls to useNavigate in SSR environments
function Qe(e){o.useContext(ze).static||
// We should be able to get rid of this once react 18.3 is released
// See: https://github.com/facebook/react/pull/26395
// eslint-disable-next-line react-hooks/rules-of-hooks
o.useLayoutEffect(e)}
/**
 * Returns an imperative method for changing the location. Used by <Link>s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/hooks/use-navigate
 */function Ze(){let{isDataRoute:e}=o.useContext(qe);
// Conditional usage is OK here because the usage of a data router is static
// eslint-disable-next-line react-hooks/rules-of-hooks
return e?
/**
 * Stable version of useNavigate that is used when we are in the context of
 * a RouterProvider.
 */
function(){let{router:e}=pt(ft.UseNavigateStable),t=vt(ht.UseNavigateStable),r=o.useRef(!1);return Qe((()=>{r.current=!0})),o.useCallback((function(n,o){void 0===o&&(o={}),
// Short circuit here since if this happens on first render the navigate
// is useless because we haven't wired up our router subscriber yet
r.current&&("number"==typeof n?e.navigate(n):e.navigate(n,Be({fromRouteId:t},o)))}),[e,t])}():function(){Ve()||u(!1);let e=o.useContext(Ne),{basename:t,navigator:r}=o.useContext(ze),{matches:n}=o.useContext(qe),{pathname:a}=Ye(),i=JSON.stringify(F(n).map((e=>e.pathnameBase))),l=o.useRef(!1);return Qe((()=>{l.current=!0})),o.useCallback((function(n,o){
// Short circuit here since if this happens on first render the navigate
// is useless because we haven't wired up our history listener yet
if(void 0===o&&(o={}),!l.current)return;if("number"==typeof n)return void r.go(n);let s=B(n,JSON.parse(i),a,"path"===o.relative);
// If we're operating within a basename, prepend it to the pathname prior
// to handing off to history (but only if we're not in a data router,
// otherwise it'll prepend the basename inside of the router).
// If this is a root navigation, then we navigate to the raw basename
// which allows the basename to have full control over the presence of a
// trailing slash on root links
null==e&&"/"!==t&&(s.pathname="/"===s.pathname?t:N([t,s.pathname])),(o.replace?r.replace:r.push)(s,o.state,o)}),[t,r,i,a,e])}()}const et=o.createContext(null);
/**
 * Returns the context (if provided) for the child route at this level of the route
 * hierarchy.
 * @see https://reactrouter.com/hooks/use-outlet-context
 */function tt(){return o.useContext(et)}
/**
 * Returns the element for the child route at this level of the route
 * hierarchy. Used internally by <Outlet> to render child routes.
 *
 * @see https://reactrouter.com/hooks/use-outlet
 */function rt(e){let t=o.useContext(qe).outlet;return t?o.createElement(et.Provider,{value:e},t):t}
/**
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/hooks/use-params
 */function nt(){let{matches:e}=o.useContext(qe),t=e[e.length-1];return t?t.params:{}}
/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/hooks/use-resolved-path
 */function ot(e,t){let{relative:r}=void 0===t?{}:t,{matches:n}=o.useContext(qe),{pathname:a}=Ye(),i=JSON.stringify(F(n).map((e=>e.pathnameBase)));return o.useMemo((()=>B(e,JSON.parse(i),a,"path"===r)),[e,i,a,r])}
/**
 * Returns the element of the route that matched the current location, prepared
 * with the correct context to render the remainder of the route tree. Route
 * elements in the tree must render an <Outlet> to render their child route's
 * element.
 *
 * @see https://reactrouter.com/hooks/use-routes
 */function at(e,t){return it(e,t)}
// Internal implementation with accept optional param for RouterProvider usage
function it(e,t,r){Ve()||u(!1);let{navigator:a}=o.useContext(ze),{matches:i}=o.useContext(qe),l=i[i.length-1],s=l?l.params:{},c=(l&&l.pathname,l?l.pathnameBase:"/");l&&l.route;let d,f=Ye();if(t){var h;let e="string"==typeof t?m(t):t;"/"===c||(null==(h=e.pathname)?void 0:h.startsWith(c))||u(!1),d=e}else d=f;let p=d.pathname||"/",v=w(e,{pathname:"/"===c?p:p.slice(c.length)||"/"});let y=dt(v&&v.map((e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:N([c,
// Re-encode pathnames that were decoded inside matchRoutes
a.encodeLocation?a.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?c:N([c,
// Re-encode pathnames that were decoded inside matchRoutes
a.encodeLocation?a.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),i,r);
// When a user passes in a `locationArg`, the associated routes need to
// be wrapped in a new `LocationContext.Provider` in order for `useLocation`
// to use the scoped location instead of the global location.
return t&&y?o.createElement(We.Provider,{value:{location:Be({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:n.Pop}},y):y}function lt(){let e=Dt(),t=G(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:n};
return o.createElement(o.Fragment,null,o.createElement("h2",null,"Unexpected Application Error!"),o.createElement("h3",{style:{fontStyle:"italic"}},t),r?o.createElement("pre",{style:a},r):null,null)}const st=o.createElement(lt,null);class ct extends o.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){
// When we get into an error state, the user will likely click "back" to the
// previous page that didn't have an error. Because this wraps the entire
// application, that will have no effect--the error page continues to display.
// This gives us a mechanism to recover from the error when the location changes.
// Whether we're in an error state or not, we update the location in state
// so that when we are in an error state, it gets reset when a new location
// comes in and the user recovers from the error.
return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||t.error,location:t.location,revalidation:e.revalidation||t.revalidation};
// If we're not changing locations, preserve the location but still surface
// any new errors that may come through. We retain the existing error, we do
// this because the error provided from the app state may be cleared without
// the location changing.
}componentDidCatch(e,t){}render(){return this.state.error?o.createElement(qe.Provider,{value:this.props.routeContext},o.createElement(Ke.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ut(e){let{routeContext:t,match:r,children:n}=e,a=o.useContext(Ne);
// Track how deep we got in our render pass to emulate SSR componentDidCatch
// in a DataStaticRouter
return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),o.createElement(qe.Provider,{value:t},n)}function dt(e,t,r){var n;if(void 0===t&&(t=[]),void 0===r&&(r=null),null==e){var a;if(null==(a=r)||!a.errors)return null;
// Don't bail if we have data router errors so we can render them in the
// boundary.  Use the pre-matched (or shimmed) matches
e=r.matches}let i=e,l=null==(n=r)?void 0:n.errors;
// If we have data errors, trim matches to the highest error boundary
if(null!=l){let e=i.findIndex((e=>e.route.id&&(null==l?void 0:l[e.route.id])));e>=0||u(!1),i=i.slice(0,Math.min(i.length,e+1))}return i.reduceRight(((e,n,a)=>{let s=n.route.id?null==l?void 0:l[n.route.id]:null,c=null;
// Only data routers handle errors
r&&(c=n.route.errorElement||st);let u=t.concat(i.slice(0,a+1)),d=()=>{let t;return t=s?c:n.route.Component?o.createElement(n.route.Component,null):n.route.element?n.route.element:e,o.createElement(ut,{match:n,routeContext:{outlet:e,matches:u,isDataRoute:null!=r},children:t})};
// Only wrap in an error boundary within data router usages when we have an
// ErrorBoundary/errorElement on this route.  Otherwise let it bubble up to
// an ancestor ErrorBoundary/errorElement
return r&&(n.route.ErrorBoundary||n.route.errorElement||0===a)?o.createElement(ct,{location:r.location,revalidation:r.revalidation,component:c,error:s,children:d(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):d()}),null)}var ft,ht;function pt(e){let t=o.useContext(Ne);return t||u(!1),t}function mt(e){let t=o.useContext($e);return t||u(!1),t}
// Internal version with hookName-aware debugging
function vt(e){let t=function(e){let t=o.useContext(qe);return t||u(!1),t}(),r=t.matches[t.matches.length-1];return r.route.id||u(!1),r.route.id}
/**
 * Returns the ID for the nearest contextual route
 */function yt(){return vt(ht.UseRouteId)}
/**
 * Returns the current navigation, defaulting to an "idle" navigation when
 * no navigation is in progress
 */function gt(){return mt(ht.UseNavigation).navigation}
/**
 * Returns a revalidate function for manually triggering revalidation, as well
 * as the current state of any manual revalidations
 */function bt(){let e=pt(ft.UseRevalidator),t=mt(ht.UseRevalidator);return{revalidate:e.router.revalidate,state:t.revalidation}}
/**
 * Returns the active route matches, useful for accessing loaderData for
 * parent/child routes or the route "handle" property
 */function wt(){let{matches:e,loaderData:t}=mt(ht.UseMatches);return o.useMemo((()=>e.map((e=>{let{pathname:r,params:n}=e;
// Note: This structure matches that created by createUseMatchesMatch
// in the @remix-run/router , so if you change this please also change
// that :)  Eventually we'll DRY this up
return{id:e.route.id,pathname:r,params:n,data:t[e.route.id],handle:e.route.handle}}))),[e,t])}
/**
 * Returns the loader data for the nearest ancestor Route loader
 */function Et(){let e=mt(ht.UseLoaderData),t=vt(ht.UseLoaderData);if(!e.errors||null==e.errors[t])return e.loaderData[t]}
/**
 * Returns the loaderData for the given routeId
 */function Rt(e){return mt(ht.UseRouteLoaderData).loaderData[e]}
/**
 * Returns the action data for the nearest ancestor Route action
 */function St(){let e=mt(ht.UseActionData);return o.useContext(qe)||u(!1),Object.values((null==e?void 0:e.actionData)||{})[0]}
/**
 * Returns the nearest ancestor Route error, which could be a loader/action
 * error or a render error.  This is intended to be called from your
 * ErrorBoundary/errorElement to display a proper error message.
 */function Dt(){var e;let t=o.useContext(Ke),r=mt(ht.UseRouteError),n=vt(ht.UseRouteError);
// If this was a render error, we put it in a RouteError context inside
// of RenderErrorBoundary
return t||(null==(e=r.errors)?void 0:e[n]);
// Otherwise look for errors from our data router state
}
/**
 * Returns the happy-path data from the nearest ancestor <Await /> value
 */function _t(){let e=o.useContext(He);return null==e?void 0:e._data}
/**
 * Returns the error from the nearest ancestor <Await /> value
 */function xt(){let e=o.useContext(He);return null==e?void 0:e._error}!function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"}(ft||(ft={})),function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"}(ht||(ht={}));let Ct=0;
/**
 * Allow the application to block navigations within the SPA and present the
 * user a confirmation dialog to confirm the navigation.  Mostly used to avoid
 * using half-filled form data.  This does not handle hard-reloads or
 * cross-origin navigations.
 */function kt(e){let{router:t}=pt(ft.UseBlocker),r=mt(ht.UseBlocker),[n]=o.useState((()=>String(++Ct))),a=o.useCallback((t=>"function"==typeof e?!!e(t):!!e),[e]),i=t.getBlocker(n,a);
// Prefer the blocker from state since DataRouterContext is memoized so this
// ensures we update on blocker state updates
// Cleanup on unmount
return o.useEffect((()=>()=>t.deleteBlocker(n)),[t,n]),r.blockers.get(n)||i}
/**
 * Given a Remix Router instance, render the appropriate UI
 */
function Pt(e){let{fallbackElement:t,router:r}=e,[n,a]=o.useState(r.state),i=o.useCallback((e=>{o.startTransition((()=>a(e)))}),[a]);
// Need to use a layout effect here so we are subscribed early enough to
// pick up on any render-driven redirects/navigations (useEffect/<Navigate>)
o.useLayoutEffect((()=>r.subscribe(i)),[r,i]);let l=o.useMemo((()=>({createHref:r.createHref,encodeLocation:r.encodeLocation,go:e=>r.navigate(e),push:(e,t,n)=>r.navigate(e,{state:t,preventScrollReset:null==n?void 0:n.preventScrollReset}),replace:(e,t,n)=>r.navigate(e,{replace:!0,state:t,preventScrollReset:null==n?void 0:n.preventScrollReset})})),[r]),s=r.basename||"/",c=o.useMemo((()=>({router:r,navigator:l,static:!1,basename:s})),[r,l,s]);
// The fragment and {null} here are important!  We need them to keep React 18's
// useId happy when we are server-rendering since we may have a <script> here
// containing the hydrated server-side staticContext (from StaticRouterProvider).
// useId relies on the component tree structure to generate deterministic id's
// so we need to ensure it remains the same on the client even though
// we don't need the <script> tag

return o.createElement(o.Fragment,null,o.createElement(Ne.Provider,{value:c},o.createElement($e.Provider,{value:n},o.createElement(Ut,{basename:s,location:n.location,navigationType:n.historyAction,navigator:l},n.initialized?o.createElement(At,{routes:r.routes,state:n}):t))),null)}function At(e){let{routes:t,state:r}=e;return it(t,void 0,r)}
/**
 * A <Router> that stores all entries in memory.
 *
 * @see https://reactrouter.com/router-components/memory-router
 */function Ot(e){let{basename:t,children:r,initialEntries:n,initialIndex:a}=e,i=o.useRef();null==i.current&&(i.current=l({initialEntries:n,initialIndex:a,v5Compat:!0}));let s=i.current,[c,u]=o.useState({action:s.action,location:s.location}),d=o.useCallback((e=>{o.startTransition((()=>u(e)))}),[u]);return o.useLayoutEffect((()=>s.listen(d)),[s,d]),o.createElement(Ut,{basename:t,children:r,location:c.location,navigationType:c.action,navigator:s})}
/**
 * Changes the current location.
 *
 * Note: This API is mostly useful in React.Component subclasses that are not
 * able to use hooks. In functional components, we recommend you use the
 * `useNavigate` hook instead.
 *
 * @see https://reactrouter.com/components/navigate
 */function jt(e){let{to:t,replace:r,state:n,relative:a}=e;Ve()||u(!1);let{matches:i}=o.useContext(qe),{pathname:l}=Ye(),s=Ze(),c=B(t,F(i).map((e=>e.pathnameBase)),l,"path"===a),d=JSON.stringify(c);return o.useEffect((()=>s(JSON.parse(d),{replace:r,state:n,relative:a})),[s,d,a,r,n]),null}
/**
 * Renders the child route's element, if there is one.
 *
 * @see https://reactrouter.com/components/outlet
 */function Lt(e){return rt(e.context)}
/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/components/route
 */function Mt(e){u(!1)}
/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a <Router> directly. Instead, you'll render a
 * router that is more specific to your environment such as a <BrowserRouter>
 * in web browsers or a <StaticRouter> for server rendering.
 *
 * @see https://reactrouter.com/router-components/router
 */function Ut(e){let{basename:t="/",children:r=null,location:a,navigationType:i=n.Pop,navigator:l,static:s=!1}=e;Ve()&&u(!1);
// Preserve trailing slashes on basename, so we can let the user control
// the enforcement of trailing slashes throughout the app
let c=t.replace(/^\/*/,"/"),d=o.useMemo((()=>({basename:c,navigator:l,static:s})),[c,l,s]);"string"==typeof a&&(a=m(a));let{pathname:f="/",search:h="",hash:p="",state:v=null,key:y="default"}=a,g=o.useMemo((()=>{let e=U(f,c);return null==e?null:{location:{pathname:e,search:h,hash:p,state:v,key:y},navigationType:i}}),[c,f,h,p,v,y,i]);return null==g?null:o.createElement(ze.Provider,{value:d},o.createElement(We.Provider,{children:r,value:g}))}
/**
 * A container for a nested tree of <Route> elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/components/routes
 */function It(e){let{children:t,location:r}=e;return at(Ht(t),r)}
/**
 * Component to use for rendering lazily loaded data from returning defer()
 * in a loader function
 */function Tt(e){let{children:t,errorElement:r,resolve:n}=e;
return o.createElement(Nt,{resolve:n,errorElement:r},o.createElement($t,null,t))}var Ft;!function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"}(Ft||(Ft={}));const Bt=new Promise((()=>{}));class Nt extends o.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){}render(){let{children:e,errorElement:t,resolve:r}=this.props,n=null,a=Ft.pending;if(r instanceof Promise)if(this.state.error){
// Caught a render error, provide it as a rejected promise
a=Ft.error;let e=this.state.error;n=Promise.reject().catch((()=>{})),// Avoid unhandled rejection warnings
Object.defineProperty(n,"_tracked",{get:()=>!0}),Object.defineProperty(n,"_error",{get:()=>e})}else r._tracked?(
// Already tracked promise - check contents
n=r,a=void 0!==n._error?Ft.error:void 0!==n._data?Ft.success:Ft.pending):(
// Raw (untracked) promise - track it
a=Ft.pending,Object.defineProperty(r,"_tracked",{get:()=>!0}),n=r.then((e=>Object.defineProperty(r,"_data",{get:()=>e})),(e=>Object.defineProperty(r,"_error",{get:()=>e}))));else
// Didn't get a promise - provide as a resolved promise
a=Ft.success,n=Promise.resolve(),Object.defineProperty(n,"_tracked",{get:()=>!0}),Object.defineProperty(n,"_data",{get:()=>r});if(a===Ft.error&&n._error instanceof q)
// Freeze the UI by throwing a never resolved promise
throw Bt;if(a===Ft.error&&!t)
// No errorElement, throw to the nearest route-level error boundary
throw n._error;if(a===Ft.error)
// Render via our errorElement

return o.createElement(He.Provider,{value:n,children:t});if(a===Ft.success)
// Render children with resolved value

return o.createElement(He.Provider,{value:n,children:e});
// Throw to the suspense boundary
throw n}}
/**
 * @private
 * Indirection to leverage useAsyncValue for a render-prop API on <Await>
 */function $t(e){let{children:t}=e,r=_t(),n="function"==typeof t?t(r):t;
return o.createElement(o.Fragment,null,n)}
///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////
/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/utils/create-routes-from-children
 */function Ht(e,t){void 0===t&&(t=[]);let r=[];return o.Children.forEach(e,((e,n)=>{if(!o.isValidElement(e))
// Ignore non-elements. This allows people to more easily inline
// conditionals in their route config.
return;let a=[...t,n];if(e.type===o.Fragment)
// Transparently support React.Fragment and its children.
return void r.push.apply(r,Ht(e.props.children,a));e.type!==Mt&&u(!1),e.props.index&&e.props.children&&u(!1);let i={id:e.props.id||a.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(i.children=Ht(e.props.children,a)),r.push(i)})),r}
/**
 * Renders the result of `matchRoutes()` into a React element.
 */function zt(e){return dt(e)}function Wt(e){let t={
// Note: this check also occurs in createRoutesFromChildren so update
// there if you change this -- please and thank you!
hasErrorBoundary:null!=e.ErrorBoundary||null!=e.errorElement};return e.Component&&Object.assign(t,{element:o.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:o.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}function qt(e,t){return ce({basename:null==t?void 0:t.basename,future:Be({},null==t?void 0:t.future,{v7_prependBasename:!0}),history:l({initialEntries:null==t?void 0:t.initialEntries,initialIndex:null==t?void 0:t.initialIndex}),hydrationData:null==t?void 0:t.hydrationData,routes:e,mapRouteProperties:Wt}).initialize()}
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/react-router-dom/dist/index.js
/**
 * React Router DOM v6.12.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Kt(){return Kt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Kt.apply(this,arguments)}function Jt(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}const Vt="get",Yt="application/x-www-form-urlencoded";function Xt(e){return null!=e&&"string"==typeof e.tagName}
/**
 * Creates a URLSearchParams object using the given initializer.
 *
 * This is identical to `new URLSearchParams(init)` except it also
 * supports arrays as values in the object form of the initializer
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but don't want to use an array initializer.
 *
 * For example, instead of:
 *
 *   let searchParams = new URLSearchParams([
 *     ['sort', 'name'],
 *     ['sort', 'price']
 *   ]);
 *
 * you can do:
 *
 *   let searchParams = createSearchParams({
 *     sort: ['name', 'price']
 *   });
 */
function Gt(e){return void 0===e&&(e=""),new URLSearchParams("string"==typeof e||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce(((t,r)=>{let n=e[r];return t.concat(Array.isArray(n)?n.map((e=>[r,e])):[[r,n]])}),[]))}function Qt(e,t,r){let n,o,a,i=null;if(Xt(l=e)&&"form"===l.tagName.toLowerCase()){let l=t.submissionTrigger;if(t.action)i=t.action;else{
// When grabbing the action from the element, it will have had the basename
// prefixed to ensure non-JS scenarios work, so strip it since we'll
// re-prefix in the router
let t=e.getAttribute("action");i=t?U(t,r):null}n=t.method||e.getAttribute("method")||Vt,o=t.encType||e.getAttribute("enctype")||Yt,a=new FormData(e),l&&l.name&&a.append(l.name,l.value)}else if(function(e){return Xt(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return Xt(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let l=e.form;if(null==l)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
// <button>/<input type="submit"> may override attributes of <form>
if(t.action)i=t.action;else{
// When grabbing the action from the element, it will have had the basename
// prefixed to ensure non-JS scenarios work, so strip it since we'll
// re-prefix in the router
let t=e.getAttribute("formaction")||l.getAttribute("action");i=t?U(t,r):null}n=t.method||e.getAttribute("formmethod")||l.getAttribute("method")||Vt,o=t.encType||e.getAttribute("formenctype")||l.getAttribute("enctype")||Yt,a=new FormData(l),
// Include name + value from a <button>, appending in case the button name
// matches an existing input name
e.name&&a.append(e.name,e.value)}else{if(Xt(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');if(n=t.method||Vt,i=t.action||null,o=t.encType||Yt,e instanceof FormData)a=e;else if(a=new FormData,e instanceof URLSearchParams)for(let[t,r]of e)a.append(t,r);else if(null!=e)for(let t of Object.keys(e))a.append(t,e[t])}var l;return{action:i,method:n.toLowerCase(),encType:o,formData:a}}const Zt=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],er=["aria-current","caseSensitive","className","end","style","to","children"],tr=["reloadDocument","replace","method","action","onSubmit","fetcherKey","routeId","relative","preventScrollReset"];function rr(e,t){return ce({basename:null==t?void 0:t.basename,future:Kt({},null==t?void 0:t.future,{v7_prependBasename:!0}),history:s({window:null==t?void 0:t.window}),hydrationData:(null==t?void 0:t.hydrationData)||or(),routes:e,mapRouteProperties:Wt}).initialize()}function nr(e,t){return ce({basename:null==t?void 0:t.basename,future:Kt({},null==t?void 0:t.future,{v7_prependBasename:!0}),history:c({window:null==t?void 0:t.window}),hydrationData:(null==t?void 0:t.hydrationData)||or(),routes:e,mapRouteProperties:Wt}).initialize()}function or(){var e;let t=null==(e=window)?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Kt({},t,{errors:ar(t.errors)})),t}function ar(e){if(!e)return null;let t=Object.entries(e),r={};for(let[e,n]of t)
// Hey you!  If you change this, please change the corresponding logic in
// serializeErrors in react-router-dom/server.tsx :)
if(n&&"RouteErrorResponse"===n.__type)r[e]=new X(n.status,n.statusText,n.data,!0===n.internal);else if(n&&"Error"===n.__type){let t=new Error(n.message);
// Wipe away the client-side stack trace.  Nothing to fill it in with
// because we don't serialize SSR stack traces for security reasons
t.stack="",r[e]=t}else r[e]=n;return r}
/**
 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
 */function ir(e){let{basename:t,children:r,window:n}=e,a=o.useRef();null==a.current&&(a.current=s({window:n,v5Compat:!0}));let i=a.current,[l,c]=o.useState({action:i.action,location:i.location}),u=o.useCallback((e=>{o.startTransition((()=>c(e)))}),[c]);return o.useLayoutEffect((()=>i.listen(u)),[i,u]),o.createElement(Ut,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:i})}
/**
 * A `<Router>` for use in web browsers. Stores the location in the hash
 * portion of the URL so it is not sent to the server.
 */function lr(e){let{basename:t,children:r,window:n}=e,a=o.useRef();null==a.current&&(a.current=c({window:n,v5Compat:!0}));let i=a.current,[l,s]=o.useState({action:i.action,location:i.location}),u=o.useCallback((e=>{o.startTransition((()=>s(e)))}),[s]);return o.useLayoutEffect((()=>i.listen(u)),[i,u]),o.createElement(Ut,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:i})}
/**
 * A `<Router>` that accepts a pre-instantiated history object. It's important
 * to note that using your own history object is highly discouraged and may add
 * two versions of the history library to your bundles unless you use the same
 * version of the history library that React Router uses internally.
 */function sr(e){let{basename:t,children:r,history:n}=e,[a,i]=o.useState({action:n.action,location:n.location}),l=o.useCallback((e=>{o.startTransition((()=>i(e)))}),[i]);return o.useLayoutEffect((()=>n.listen(l)),[n,l]),o.createElement(Ut,{basename:t,children:r,location:a.location,navigationType:a.action,navigator:n})}const cr="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,ur=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dr=o.forwardRef((function(e,t){let r,{onClick:n,relative:a,reloadDocument:i,replace:l,state:s,target:c,to:u,preventScrollReset:d}=e,f=Jt(e,Zt),{basename:h}=o.useContext(ze),p=!1;if("string"==typeof u&&ur.test(u)&&(
// Render the absolute href server- and client-side
r=u,cr))try{let e=new URL(window.location.href),t=u.startsWith("//")?new URL(e.protocol+u):new URL(u),r=U(t.pathname,h);t.origin===e.origin&&null!=r?
// Strip the protocol/origin/basename for same-origin absolute URLs
u=r+t.search+t.hash:p=!0}catch(e){}
// Rendered into <a href> for relative URLs
let m=Je(u,{relative:a}),v=wr(u,{replace:l,state:s,target:c,preventScrollReset:d,relative:a});

// eslint-disable-next-line jsx-a11y/anchor-has-content
return o.createElement("a",Kt({},f,{href:r||m,onClick:p||i?n:function(e){n&&n(e),e.defaultPrevented||v(e)},ref:t,target:c}))}));
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
const fr=o.forwardRef((function(e,t){let{"aria-current":r="page",caseSensitive:n=!1,className:a="",end:i=!1,style:l,to:s,children:c}=e,u=Jt(e,er),d=ot(s,{relative:u.relative}),f=Ye(),h=o.useContext($e),{navigator:p}=o.useContext(ze),m=p.encodeLocation?p.encodeLocation(d).pathname:d.pathname,v=f.pathname,y=h&&h.navigation&&h.navigation.location?h.navigation.location.pathname:null;n||(v=v.toLowerCase(),y=y?y.toLowerCase():null,m=m.toLowerCase());let g,b=v===m||!i&&v.startsWith(m)&&"/"===v.charAt(m.length),w=null!=y&&(y===m||!i&&y.startsWith(m)&&"/"===y.charAt(m.length)),E=b?r:void 0;g="function"==typeof a?a({isActive:b,isPending:w}):[a,b?"active":null,w?"pending":null].filter(Boolean).join(" ");let R="function"==typeof l?l({isActive:b,isPending:w}):l;
return o.createElement(dr,Kt({},u,{"aria-current":E,className:g,ref:t,style:R,to:s}),"function"==typeof c?c({isActive:b,isPending:w}):c)}));
/**
 * A `@remix-run/router`-aware `<form>`. It behaves like a normal form except
 * that the interaction with the server is with `fetch` instead of new document
 * requests, allowing components to add nicer UX to the page as the form is
 * submitted and returns with data.
 */
const hr=o.forwardRef(((e,t)=>o.createElement(pr,Kt({},e,{ref:t}))));const pr=o.forwardRef(((e,t)=>{let{reloadDocument:r,replace:n,method:a=Vt,action:i,onSubmit:l,fetcherKey:s,routeId:c,relative:u,preventScrollReset:d}=e,f=Jt(e,tr),h=Sr(s,c),p="get"===a.toLowerCase()?"get":"post",m=Dr(i,{relative:u});
return o.createElement("form",Kt({ref:t,method:p,action:m,onSubmit:r?l:e=>{if(l&&l(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,r=(null==t?void 0:t.getAttribute("formmethod"))||a;h(t||e.currentTarget,{method:r,replace:n,relative:u,preventScrollReset:d})}},f))}));
/**
 * This component will emulate the browser's scroll restoration on location
 * changes.
 */
function mr(e){let{getKey:t,storageKey:r}=e;return Ar({getKey:t,storageKey:r}),null}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Hooks
////////////////////////////////////////////////////////////////////////////////
var vr,yr;function gr(e){let t=o.useContext(Ne);return t||u(!1),t}function br(e){let t=o.useContext($e);return t||u(!1),t}
/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */function wr(e,t){let{target:r,replace:n,state:a,preventScrollReset:i,relative:l}=void 0===t?{}:t,s=Ze(),c=Ye(),u=ot(e,{relative:l});return o.useCallback((t=>{if(function(e,t){return!(0!==e.button||
// Ignore everything but left clicks
t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,r)){t.preventDefault();
// If the URL hasn't changed, a regular <a> will do a replace instead of
// a push, so do the same here unless the replace prop is explicitly set
let r=void 0!==n?n:p(c)===p(u);s(e,{replace:r,state:a,preventScrollReset:i,relative:l})}}),[c,s,u,n,a,r,e,i,l])}
/**
 * A convenient wrapper for reading and writing search parameters via the
 * URLSearchParams interface.
 */function Er(e){let t=o.useRef(Gt(e)),r=o.useRef(!1),n=Ye(),a=o.useMemo((()=>
// Only merge in the defaults if we haven't yet called setSearchParams.
// Once we call that we want those to take precedence, otherwise you can't
// remove a param with setSearchParams({}) if it has an initial value
function(e,t){let r=Gt(e);if(t)for(let e of t.keys())r.has(e)||t.getAll(e).forEach((t=>{r.append(e,t)}));return r}(n.search,r.current?null:t.current)),[n.search]),i=Ze(),l=o.useCallback(((e,t)=>{const n=Gt("function"==typeof e?e(a):e);r.current=!0,i("?"+n,t)}),[i,a]);return[a,l]}
/**
 * Returns a function that may be used to programmatically submit a form (or
 * some arbitrary data) to the server.
 */function Rr(){return Sr()}function Sr(e,t){let{router:r}=gr(vr.UseSubmitImpl),{basename:n}=o.useContext(ze),a=yt();return o.useCallback((function(o,i){if(void 0===i&&(i={}),"undefined"==typeof document)throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");let{action:l,method:s,encType:c,formData:d}=Qt(o,i,n),f={preventScrollReset:i.preventScrollReset,formData:d,formMethod:s,formEncType:c};
// Base options shared between fetch() and navigate()
e?(null==t&&u(!1),r.fetch(e,t,l,f)):r.navigate(l,Kt({},f,{replace:i.replace,fromRouteId:a}))}),[r,n,e,t,a])}
// v7: Eventually we should deprecate this entirely in favor of using the
// router method directly?
function Dr(e,t){let{relative:r}=void 0===t?{}:t,{basename:n}=o.useContext(ze),a=o.useContext(qe);a||u(!1);let[i]=a.matches.slice(-1),l=Kt({},ot(e||".",{relative:r})),s=Ye();
// Shallow clone path so we can modify it below, otherwise we modify the
// object referenced by useMemo inside useResolvedPath
if(null==e&&(
// Safe to write to these directly here since if action was undefined, we
// would have called useResolvedPath(".") which will never include a search
// or hash
l.search=s.search,l.hash=s.hash,i.route.index)){let e=new URLSearchParams(l.search);e.delete("index"),l.search=e.toString()?"?"+e.toString():""}return e&&"."!==e||!i.route.index||(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),
// If we're operating within a basename, prepend it to the pathname prior
// to creating the form action.  If this is a root navigation, then just use
// the raw basename which allows the basename to have full control over the
// presence of a trailing slash on root actions
"/"!==n&&(l.pathname="/"===l.pathname?n:N([n,l.pathname])),p(l)}(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(vr||(vr={})),function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(yr||(yr={}));let _r=0;
/**
 * Interacts with route loaders and actions without causing a navigation. Great
 * for any interaction that stays on the same page.
 */function xr(){var e;let{router:t}=gr(vr.UseFetcher),r=o.useContext(qe);r||u(!1);let n=null==(e=r.matches[r.matches.length-1])?void 0:e.route.id;null==n&&u(!1);let[a]=o.useState((()=>String(++_r))),[i]=o.useState((()=>(n||u(!1),function(e,t){
return o.forwardRef(((r,n)=>o.createElement(pr,Kt({},r,{ref:n,fetcherKey:e,routeId:t}))))}(a,n)))),[l]=o.useState((()=>e=>{t||u(!1),n||u(!1),t.fetch(a,n,e)})),s=Sr(a,n),c=t.getFetcher(a),d=o.useMemo((()=>Kt({Form:i,submit:s,load:l},c)),[c,i,s,l]);return o.useEffect((()=>()=>{t&&t.deleteFetcher(a)}),[t,a]),d}
/**
 * Provides all fetchers currently on the page. Useful for layouts and parent
 * routes that need to provide pending/optimistic UI regarding the fetch.
 */function Cr(){return[...br(yr.UseFetchers).fetchers.values()]}const kr="react-router-scroll-positions";let Pr={};
/**
 * When rendered inside a RouterProvider, will restore scroll positions on navigations
 */function Ar(e){let{getKey:t,storageKey:r}=void 0===e?{}:e,{router:n}=gr(vr.UseScrollRestoration),{restoreScrollPosition:a,preventScrollReset:i}=br(yr.UseScrollRestoration),l=Ye(),s=wt(),c=gt();
// Trigger manual scroll restoration while we're active
o.useEffect((()=>(window.history.scrollRestoration="manual",()=>{window.history.scrollRestoration="auto"})),[]),
// Save positions on pagehide
/**
 * Setup a callback to be fired on the window's `pagehide` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.  This event is better supported than beforeunload across browsers.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */
function(e,t){let{capture:r}=t||{};o.useEffect((()=>{let t=null!=r?{capture:r}:void 0;return window.addEventListener("pagehide",e,t),()=>{window.removeEventListener("pagehide",e,t)}}),[e,r])}
/**
 * Wrapper around useBlocker to show a window.confirm prompt to users instead
 * of building a custom UI with useBlocker.
 *
 * Warning: This has *a lot of rough edges* and behaves very differently (and
 * very incorrectly in some cases) across browsers if user click addition
 * back/forward navigations while the confirm is open.  Use at your own risk.
 */(o.useCallback((()=>{if("idle"===c.state){let e=(t?t(l,s):null)||l.key;Pr[e]=window.scrollY}sessionStorage.setItem(r||kr,JSON.stringify(Pr)),window.history.scrollRestoration="auto"}),[r,t,c.state,l,s])),
// Read in any saved scroll locations
"undefined"!=typeof document&&(
// eslint-disable-next-line react-hooks/rules-of-hooks
o.useLayoutEffect((()=>{try{let e=sessionStorage.getItem(r||kr);e&&(Pr=JSON.parse(e))}catch(e){
// no-op, use default empty object
}}),[r]),
// Enable scroll restoration in the router
// eslint-disable-next-line react-hooks/rules-of-hooks
o.useLayoutEffect((()=>{let e=null==n?void 0:n.enableScrollRestoration(Pr,(()=>window.scrollY),t);return()=>e&&e()}),[n,t]),
// Restore scrolling when state.restoreScrollPosition changes
// eslint-disable-next-line react-hooks/rules-of-hooks
o.useLayoutEffect((()=>{
// Explicit false means don't do anything (used for submissions)
if(!1!==a)
// been here before, scroll to it
if("number"!=typeof a){
// try to scroll to the hash
if(l.hash){let e=document.getElementById(l.hash.slice(1));if(e)return void e.scrollIntoView()}
// Don't reset if this navigation opted out
!0!==i&&
// otherwise go to the top on new locations
window.scrollTo(0,0)}else window.scrollTo(0,a)}),[l,a,i]))}
/**
 * Setup a callback to be fired on the window's `beforeunload` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */function Or(e,t){let{capture:r}=t||{};o.useEffect((()=>{let t=null!=r?{capture:r}:void 0;return window.addEventListener("beforeunload",e,t),()=>{window.removeEventListener("beforeunload",e,t)}}),[e,r])}function jr(e){let{when:t,message:r}=e,n=kt(t);o.useEffect((()=>{"blocked"!==n.state||t||n.reset()}),[n,t]),o.useEffect((()=>{if("blocked"===n.state){window.confirm(r)?setTimeout(n.proceed,0):n.reset()}}),[n,r])}
//#endregion
//# sourceMappingURL=index.js.map
/***/},
/***/408:
/***/(e,t)=>{
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),h=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,v={};function y(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||p}function g(){}function b(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||p}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=y.prototype;var w=b.prototype=new g;w.constructor=b,m(w,y.prototype),w.isPureReactComponent=!0;var E=Array.isArray,R=Object.prototype.hasOwnProperty,S={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,n){var o,a={},i=null,l=null;if(null!=t)for(o in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)R.call(t,o)&&!D.hasOwnProperty(o)&&(a[o]=t[o]);var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===a[o]&&(a[o]=s[o]);return{$$typeof:r,type:e,key:i,ref:l,props:a,_owner:S.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var C=/\/+/g;function k(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,o,a,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case r:case n:s=!0}}if(s)return i=i(s=e),e=""===a?"."+k(s,0):a,E(i)?(o="",null!=e&&(o=e.replace(C,"$&/")+"/"),P(i,t,o,"",(function(e){return e}))):null!=i&&(x(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(s=0,a=""===a?".":a+":",E(e))for(var c=0;c<e.length;c++){var u=a+k(l=e[c],c);s+=P(l,t,o,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(l=e.next()).done;)s+=P(l=l.value,t,o,u=a+k(l,c++),i);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function A(e,t,r){if(null==e)return e;var n=[],o=0;return P(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var j={current:null},L={transition:null},M={ReactCurrentDispatcher:j,ReactCurrentBatchConfig:L,ReactCurrentOwner:S};t.Children={map:A,forEach:function(e,t,r){A(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return A(e,(function(){t++})),t},toArray:function(e){return A(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=o,t.Profiler=i,t.PureComponent=b,t.StrictMode=a,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),a=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=S.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)R.call(t,c)&&!D.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==s?s[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];o.children=s}return{$$typeof:r,type:e.type,key:a,ref:i,props:o,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=L.transition;L.transition={};try{e()}finally{L.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return j.current.useCallback(e,t)},t.useContext=function(e){return j.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return j.current.useDeferredValue(e)},t.useEffect=function(e,t){return j.current.useEffect(e,t)},t.useId=function(){return j.current.useId()},t.useImperativeHandle=function(e,t,r){return j.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return j.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return j.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return j.current.useMemo(e,t)},t.useReducer=function(e,t,r){return j.current.useReducer(e,t,r)},t.useRef=function(e){return j.current.useRef(e)},t.useState=function(e){return j.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return j.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return j.current.useTransition()},t.version="18.2.0"}
/***/,
/***/294:
/***/(e,t,r)=>{e.exports=r(408)}
/***/
/******/},n={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function o(e){
/******/ // Check if module is in cache
/******/var t=n[e];
/******/if(void 0!==t){
/******/if(void 0!==t.error)throw t.error;
/******/return t.exports;
/******/}
/******/ // Create a new module (and put it into the cache)
/******/var a=n[e]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/try{
/******/var i={id:e,module:a,factory:r[e],require:o};
/******/o.i.forEach((function(e){e(i)})),
/******/a=i.module,
/******/i.factory.call(a.exports,a,a.exports,i.require)}catch(e){
/******/
/******/throw a.error=e,e;
/******/}
/******/
/******/ // Return the exports of the module
/******/return a.exports;
/******/}
/******/
/******/ // expose the modules object (__webpack_modules__)
/******/o.m=r,
/******/
/******/ // expose the module cache
/******/o.c=n,
/******/
/******/ // expose the module execution interceptor
/******/o.i=[],
/******/ // define getter functions for harmony exports
/******/o.d=(e,t)=>{
/******/for(var r in t)
/******/o.o(t,r)&&!o.o(e,r)&&
/******/Object.defineProperty(e,r,{enumerable:!0,get:t[r]})
/******/;
/******/},
/******/ // This function allow to reference all chunks
/******/o.hu=e=>e+"."+o.h()+".hot-update.js"
/******/,
/******/o.hmrF=()=>"main."+o.h()+".hot-update.json"
/******/,
/******/o.h=()=>"6281774fea86d43150c1"
/******/,
/******/o.g=function(){
/******/if("object"==typeof globalThis)return globalThis;
/******/try{
/******/return this||new Function("return this")();
/******/}catch(e){
/******/if("object"==typeof window)return window;
/******/}
/******/}(),
/******/o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)
/******/,
/******/
/******/ /* webpack/runtime/load script */
/******/e={},t="react-typescript-webpack:",
/******/ // loadScript function to load a script via script tag
/******/o.l=(r,n,a,i)=>{
/******/if(e[r])e[r].push(n);else{
/******/var l,s;
/******/if(void 0!==a)
/******/for(
/******/var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){
/******/var d=c[u];
/******/if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){l=d;break}
/******/}
/******/
/******/l||(
/******/s=!0,
/******/
/******/(
/******/l=document.createElement("script")).charset="utf-8",
/******/l.timeout=120,
/******/o.nc&&
/******/l.setAttribute("nonce",o.nc)
/******/,l.setAttribute("data-webpack",t+a),
/******/l.src=r)
/******/,e[r]=[n];
/******/var f=(t,n)=>{
/******/ // avoid mem leaks in IE.
/******/l.onerror=l.onload=null,
/******/clearTimeout(h);
/******/var o=e[r];
/******/
/******/if(delete e[r],
/******/l.parentNode&&l.parentNode.removeChild(l),
/******/o&&o.forEach((e=>e(n))),t)return t(n);
/******/}
/******/,h=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);
/******/l.onerror=f.bind(null,l.onerror),
/******/l.onload=f.bind(null,l.onload),
/******/s&&document.head.appendChild(l)}}
/******/,
/******/ // define __esModule on exports
/******/o.r=e=>{
/******/"undefined"!=typeof Symbol&&Symbol.toStringTag&&
/******/Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})
/******/,Object.defineProperty(e,"__esModule",{value:!0})}
/******/,
/******/
/******/ /* webpack/runtime/hot module replacement */
/******/(()=>{
/******/var e,t,r,n={},a=o.c,i=[],l=[],s="idle",c=0,u=[];
/******/
/******/
/******/function d(e){
/******/s=e;
/******/
/******/for(
/******/var t=[],r=0;r<l.length;r++)
/******/t[r]=l[r].call(null,e);
/******/
/******/return Promise.all(t);
/******/}
/******/
/******/function f(){
/******/0==--c&&
/******/d("ready").then((function(){
/******/if(0===c){
/******/var e=u;
/******/u=[];
/******/for(var t=0;t<e.length;t++)
/******/e[t]();
/******/
/******/}
/******/}))
/******/}
/******/
/******/
/******/
/******/function h(e){
/******/if("idle"!==s)
/******/throw new Error("check() is only allowed in idle status");
/******/
/******/return d("check")
/******/.then(o.hmrM)
/******/.then((function(r){
/******/return r?d("prepare").then((function(){
/******/var n=[];
/******/
/******/
/******/return t=[],Promise.all(
/******/Object.keys(o.hmrC).reduce((function(
/******/e,
/******/a
/******/){
/******/
/******/return o.hmrC[a](
/******/r.c,
/******/r.r,
/******/r.m,
/******/e,
/******/t,
/******/n
/******/),e;
/******/}),
/******/[])
/******/).then((function(){
/******/return t=function(){
/******/return e?m(e):d("ready").then((function(){
/******/return n;
/******/}))
/******/},
/******/0===c?t():new Promise((function(e){
/******/u.push((function(){
/******/e(t());
/******/}));
/******/}))
/******/;
/******/
/******/
/******/var t}));
/******/})):d(v()?"ready":"idle").then((
/******/function(){
/******/return null;
/******/}
/******/))
/******/
/******/}));
/******/}
/******/
/******/function p(e){
/******/return"ready"!==s?Promise.resolve().then((function(){
/******/throw new Error(
/******/"apply() is only allowed in ready status (state: "+
/******/s+
/******/")"
/******/);
/******/})):m(e)
/******/}
/******/
/******/function m(e){
/******/e=e||{},
/******/
/******/v();
/******/
/******/var n=t.map((function(t){
/******/return t(e);
/******/}));
/******/t=void 0;
/******/
/******/var o=n
/******/.map((function(e){
/******/return e.error;
/******/}))
/******/.filter(Boolean);
/******/
/******/if(o.length>0)
/******/return d("abort").then((function(){
/******/throw o[0];
/******/}));
/******/
/******/
/******/ // Now in "dispose" phase
/******/var a=d("dispose");
/******/
/******/n.forEach((function(e){
/******/e.dispose&&e.dispose()
/******/}));
/******/
/******/ // Now in "apply" phase
/******/var i,l=d("apply"),s=function(e){
/******/i||(i=e)
/******/},c=[];
/******/
/******/
/******/
/******/
/******/return n.forEach((function(e){
/******/if(e.apply){
/******/var t=e.apply(s);
/******/if(t)
/******/for(var r=0;r<t.length;r++)
/******/c.push(t[r]);
/******/
/******/
/******/}
/******/})),Promise.all([a,l]).then((function(){
/******/ // handle errors in accept handlers and self accepted module load
/******/return i?d("fail").then((function(){
/******/throw i;
/******/})):
/******/
/******/r?m(e).then((function(e){
/******/
/******/return c.forEach((function(t){
/******/e.indexOf(t)<0&&e.push(t)
/******/})),e;
/******/})):d("idle").then((function(){
/******/return c;
/******/}))
/******/
/******/}));
/******/}
/******/
/******/function v(){
/******/if(r)
/******/
/******/return t||(t=[])
/******/,Object.keys(o.hmrI).forEach((function(e){
/******/r.forEach((function(r){
/******/o.hmrI[e](
/******/r,
/******/t
/******/);
/******/}));
/******/})),
/******/r=void 0,!0;
/******/
/******/}
/******/
/******/
/******/ // eslint-disable-next-line no-unused-vars
/******/o.hmrD=n,
/******/
/******/o.i.push((function(u){
/******/var m,v,y,g,b=u.module,w=
/******/
/******/function(t,r){
/******/var n=a[r];
/******/if(!n)return t;
/******/var o=function(o){
/******/if(n.hot.active){
/******/if(a[o]){
/******/var l=a[o].parents;
/******/-1===l.indexOf(r)&&
/******/l.push(r)
/******/}else
/******/i=[r],
/******/e=o;
/******/-1===n.children.indexOf(o)&&
/******/n.children.push(o)
/******/}else
/******/i=[];
/******/
/******/return t(o);
/******/},l=function(e){
/******/return{
/******/configurable:!0,
/******/enumerable:!0,
/******/get:function(){
/******/return t[e];
/******/},
/******/set:function(r){
/******/t[e]=r;
/******/}
/******/};
/******/};
/******/
/******/for(var u in t)
/******/Object.prototype.hasOwnProperty.call(t,u)&&"e"!==u&&
/******/Object.defineProperty(o,u,l(u))
/******/;
/******/
/******/return o.e=function(e){
/******/return function(e){
/******/switch(s){
/******/case"ready":
/******/d("prepare");
/******/ /* fallthrough */
/******/case"prepare":
/******/
/******/return c++,
/******/e.then(f,f),e;
/******/default:
/******/return e;
/******/}
/******/}(t.e(e));
/******/},o;
/******/}
/******/
/******/(u.require,u.id);
/******/
/******/b.hot=(m=u.id,v=b,g={
/******/ // private stuff
/******/_acceptedDependencies:{},
/******/_acceptedErrorHandlers:{},
/******/_declinedDependencies:{},
/******/_selfAccepted:!1,
/******/_selfDeclined:!1,
/******/_selfInvalidated:!1,
/******/_disposeHandlers:[],
/******/_main:y=e!==m,
/******/_requireSelf:function(){
/******/i=v.parents.slice(),
/******/e=y?void 0:m,
/******/o(m)},
/******/
/******/ // Module API
/******/active:!0,
/******/accept:function(e,t,r){
/******/if(void 0===e)g._selfAccepted=!0;
/******/else if("function"==typeof e)g._selfAccepted=e;
/******/else if("object"==typeof e&&null!==e)
/******/for(var n=0;n<e.length;n++)
/******/g._acceptedDependencies[e[n]]=t||function(){},
/******/g._acceptedErrorHandlers[e[n]]=r;
/******/else
/******/g._acceptedDependencies[e]=t||function(){},
/******/g._acceptedErrorHandlers[e]=r;
/******/},
/******/decline:function(e){
/******/if(void 0===e)g._selfDeclined=!0;
/******/else if("object"==typeof e&&null!==e)
/******/for(var t=0;t<e.length;t++)
/******/g._declinedDependencies[e[t]]=!0;
/******/else g._declinedDependencies[e]=!0;
/******/},
/******/dispose:function(e){
/******/g._disposeHandlers.push(e);
/******/},
/******/addDisposeHandler:function(e){
/******/g._disposeHandlers.push(e);
/******/},
/******/removeDisposeHandler:function(e){
/******/var t=g._disposeHandlers.indexOf(e);
/******/t>=0&&g._disposeHandlers.splice(t,1)
/******/},
/******/invalidate:function(){
/******/switch(
/******/this._selfInvalidated=!0,s){
/******/case"idle":
/******/t=[],
/******/Object.keys(o.hmrI).forEach((function(e){
/******/o.hmrI[e](
/******/m,
/******/t
/******/);
/******/})),
/******/d("ready");
/******/break;
/******/case"ready":
/******/Object.keys(o.hmrI).forEach((function(e){
/******/o.hmrI[e](
/******/m,
/******/t
/******/);
/******/}));
/******/break;
/******/case"prepare":
/******/case"check":
/******/case"dispose":
/******/case"apply":
/******/(r=r||[]).push(
/******/m
/******/);
/******/}
/******/},
/******/
/******/ // Management API
/******/check:h,
/******/apply:p,
/******/status:function(e){
/******/if(!e)return s;
/******/l.push(e)},
/******/addStatusHandler:function(e){
/******/l.push(e);
/******/},
/******/removeStatusHandler:function(e){
/******/var t=l.indexOf(e);
/******/t>=0&&l.splice(t,1)
/******/},
/******/
/******/ //inherit from previous dispose call
/******/data:n[m]
/******/},
/******/e=void 0,g),
/******/b.parents=i,
/******/b.children=[],
/******/i=[],
/******/u.require=w})),
/******/
/******/o.hmrC={},
/******/o.hmrI={}})(),
/******/
/******/ /* webpack/runtime/publicPath */
/******/(()=>{
/******/var e;
/******/o.g.importScripts&&(e=o.g.location+"")
/******/;var t=o.g.document;
/******/if(!e&&t&&(
/******/t.currentScript&&(
/******/e=t.currentScript.src)
/******/,!e)){
/******/var r=t.getElementsByTagName("script");
/******/if(r.length)
/******/for(
/******/var n=r.length-1;n>-1&&!e;)e=r[n--].src;
/******/
/******/}
/******/
/******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/if(!e)throw new Error("Automatic publicPath is not supported in this browser");
/******/e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),
/******/o.p=e})
/******/(),
/******/
/******/ /* webpack/runtime/jsonp chunk loading */
/******/(()=>{
/******/ // no baseURI
/******/
/******/ // object to store loaded and loading chunks
/******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/var e,t,r,n,a,i=o.hmrS_jsonp=o.hmrS_jsonp||{
/******/179:0
/******/},l={};
/******/
/******/ // no chunk on demand loading
/******/
/******/ // no prefetching
/******/
/******/ // no preloaded
/******/
/******/
/******/function s(t,r){
/******/
/******/return e=r,new Promise(((e,r)=>{
/******/l[t]=e;
/******/ // start update chunk loading
/******/var n=o.p+o.hu(t),a=new Error;
/******/ // create error before stack unwound to get useful stacktrace later
/******/
/******/o.l(n,(e=>{
/******/if(l[t]){
/******/l[t]=void 0
/******/;var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;
/******/
/******/a.message="Loading hot update chunk "+t+" failed.\n("+n+": "+o+")",
/******/a.name="ChunkLoadError",
/******/a.type=n,
/******/a.request=o,
/******/r(a)}
/******/}))}
/******/));
/******/}
/******/
/******/
/******/function c(e){
/******/function l(e){
/******/for(
/******/var t=[e],r={},n=t.map((function(e){
/******/return{
/******/chain:[e],
/******/id:e
/******/};
/******/}))
/******/;n.length>0;){
/******/var a=n.pop(),i=a.id,l=a.chain,c=o.c[i];
/******/
/******/if(
/******/c&&(
/******/!c.hot._selfAccepted||c.hot._selfInvalidated
/******/)){
/******/if(c.hot._selfDeclined)
/******/return{
/******/type:"self-declined",
/******/chain:l,
/******/moduleId:i
/******/};
/******/
/******/if(c.hot._main)
/******/return{
/******/type:"unaccepted",
/******/chain:l,
/******/moduleId:i
/******/};
/******/
/******/for(var u=0;u<c.parents.length;u++){
/******/var d=c.parents[u],f=o.c[d];
/******/
/******/if(f){
/******/if(f.hot._declinedDependencies[i])
/******/return{
/******/type:"declined",
/******/chain:l.concat([d]),
/******/moduleId:i,
/******/parentId:d
/******/};
/******/
/******/-1===t.indexOf(d)&&(
/******/f.hot._acceptedDependencies[i]?(
/******/r[d]||(
/******/r[d]=[])
/******/,s(r[d],[i])):(
/******/delete r[d],
/******/t.push(d),
/******/n.push({
/******/chain:l.concat([d]),
/******/id:d
/******/})))}}
/******/}}
/******/
/******/return{
/******/type:"accepted",
/******/moduleId:e,
/******/outdatedModules:t,
/******/outdatedDependencies:r
/******/};
/******/}
/******/
/******/function s(e,t){
/******/for(var r=0;r<t.length;r++){
/******/var n=t[r];
/******/-1===e.indexOf(n)&&e.push(n)
/******/}
/******/}
/******/
/******/ // at begin all updates modules are outdated
/******/ // the "outdated" status can propagate to parents if they don't accept the children
/******/
/******/o.f&&delete o.f.jsonpHmr
/******/,t=void 0;var c={},u=[],d={},f=function(e){
/******/};
/******/
/******/
/******/for(var h in r)
/******/if(o.o(r,h)){
/******/var p,m=r[h],v=!1,y=!1,g=!1,b="";
/******/ /** @type {TODO} */
/******/
/******/switch(
/******/(
/******/
/******/p=m?l(h):{
/******/type:"disposed",
/******/moduleId:h
/******/}
/******/ /** @type {Error|false} */
/******/).chain&&(
/******/b="\nUpdate propagation: "+p.chain.join(" -> ")),p.type){
/******/case"self-declined":
/******/e.onDeclined&&e.onDeclined(p)
/******/,e.ignoreDeclined||(
/******/v=new Error(
/******/"Aborted because of self decline: "+
/******/p.moduleId+
/******/b
/******/))
/******/;break;
/******/case"declined":
/******/e.onDeclined&&e.onDeclined(p)
/******/,e.ignoreDeclined||(
/******/v=new Error(
/******/"Aborted because of declined dependency: "+
/******/p.moduleId+
/******/" in "+
/******/p.parentId+
/******/b
/******/))
/******/;break;
/******/case"unaccepted":
/******/e.onUnaccepted&&e.onUnaccepted(p)
/******/,e.ignoreUnaccepted||(
/******/v=new Error(
/******/"Aborted because "+h+" is not accepted"+b
/******/))
/******/;break;
/******/case"accepted":
/******/e.onAccepted&&e.onAccepted(p)
/******/,y=!0;
/******/break;
/******/case"disposed":
/******/e.onDisposed&&e.onDisposed(p)
/******/,g=!0;
/******/break;
/******/default:
/******/throw new Error("Unexception type "+p.type);
/******/}
/******/if(v)
/******/return{
/******/error:v
/******/};
/******/
/******/if(y)
/******/for(h in
/******/d[h]=m,
/******/s(u,p.outdatedModules),p.outdatedDependencies)
/******/o.o(p.outdatedDependencies,h)&&(
/******/c[h]||(
/******/c[h]=[])
/******/,s(
/******/c[h],
/******/p.outdatedDependencies[h]
/******/))
/******/;
/******/
/******/g&&(
/******/s(u,[p.moduleId]),
/******/d[h]=f)
/******/}
/******/
/******/r=void 0;
/******/for(
/******/
/******/ // Store self accepted outdated modules to require them later by the module system
/******/var w,E=[],R=0;R<u.length;R++){
/******/var S=u[R],D=o.c[S];
/******/
/******/
/******/D&&(
/******/D.hot._selfAccepted||D.hot._main)&&
/******/ // removed self-accepted modules should not be required
/******/d[S]!==f&&
/******/ // when called invalidate self-accepting is not possible
/******/!D.hot._selfInvalidated
/******/&&
/******/E.push({
/******/module:S,
/******/require:D.hot._requireSelf,
/******/errorHandler:D.hot._selfAccepted
/******/})
/******/}
/******/
/******/
/******/
/******/return{
/******/dispose:function(){
/******/
/******/var e;
/******/
/******/n.forEach((function(e){
/******/delete i[e];
/******/})),
/******/n=void 0;
/******/for(var t,r=u.slice();r.length>0;){
/******/var a=r.pop(),l=o.c[a];
/******/
/******/if(l){
/******/
/******/var s={},d=l.hot._disposeHandlers;
/******/
/******/ // Call dispose handlers
/******/
/******/for(R=0;R<d.length;R++)
/******/d[R].call(null,s);
/******/
/******/
/******/
/******/ // remove "parents" references from all children
/******/for(o.hmrD[a]=s,
/******/
/******/ // disable module (this disables requires from this module)
/******/l.hot.active=!1,
/******/
/******/ // remove module from cache
/******/delete o.c[a],
/******/
/******/ // when disposing there is no need to call dispose handler
/******/delete c[a],R=0;R<l.children.length;R++){
/******/var f=o.c[l.children[R]];
/******/f&&(
/******/(
/******/e=f.parents.indexOf(a))>=0&&
/******/f.parents.splice(e,1)
/******/)}
/******/}}
/******/
/******/ // remove outdated dependency from module children
/******/
/******/for(var h in c)
/******/if(o.o(c,h)&&(
/******/l=o.c[h]))
/******/for(
/******/w=
/******/c[h],R=0;R<w.length;R++)
/******/t=w[R],
/******/(
/******/e=l.children.indexOf(t))>=0&&l.children.splice(e,1)
/******/;
/******/
/******/
/******/},
/******/apply:function(t){
/******/ // insert new code
/******/for(var r in d)
/******/o.o(d,r)&&(
/******/o.m[r]=d[r])
/******/;
/******/
/******/ // run new runtime modules
/******/for(var n=0;n<a.length;n++)
/******/a[n](o);
/******/
/******/
/******/ // call accept handlers
/******/for(var i in c)
/******/if(o.o(c,i)){
/******/var l=o.c[i];
/******/if(l){
/******/w=
/******/c[i];
/******/for(
/******/var s=[],f=[],h=[],p=0
/******/;p<w.length;p++){
/******/var m=w[p],v=
/******/l.hot._acceptedDependencies[m],y=
/******/l.hot._acceptedErrorHandlers[m];
/******/
/******/if(v){
/******/if(-1!==s.indexOf(v))continue;
/******/s.push(v),
/******/f.push(y),
/******/h.push(m)}
/******/}
/******/for(var g=0;g<s.length;g++)
/******/try{
/******/s[g].call(null,w);
/******/}catch(r){
/******/if("function"==typeof f[g])
/******/try{
/******/f[g](r,{
/******/moduleId:i,
/******/dependencyId:h[g]
/******/});
/******/}catch(n){
/******/e.onErrored&&
/******/e.onErrored({
/******/type:"accept-error-handler-errored",
/******/moduleId:i,
/******/dependencyId:h[g],
/******/error:n,
/******/originalError:r
/******/})
/******/,e.ignoreErrored||(
/******/t(n),
/******/t(r))
/******/}
/******/else
/******/e.onErrored&&
/******/e.onErrored({
/******/type:"accept-errored",
/******/moduleId:i,
/******/dependencyId:h[g],
/******/error:r
/******/})
/******/,e.ignoreErrored||
/******/t(r)
/******/;
/******/}
/******/
/******/}
/******/}
/******/
/******/
/******/ // Load self accepted modules
/******/for(var b=0;b<E.length;b++){
/******/var R=E[b],S=R.module;
/******/
/******/try{
/******/R.require(S);
/******/}catch(r){
/******/if("function"==typeof R.errorHandler)
/******/try{
/******/R.errorHandler(r,{
/******/moduleId:S,
/******/module:o.c[S]
/******/});
/******/}catch(n){
/******/e.onErrored&&
/******/e.onErrored({
/******/type:"self-accept-error-handler-errored",
/******/moduleId:S,
/******/error:n,
/******/originalError:r
/******/})
/******/,e.ignoreErrored||(
/******/t(n),
/******/t(r))
/******/}
/******/else
/******/e.onErrored&&
/******/e.onErrored({
/******/type:"self-accept-errored",
/******/moduleId:S,
/******/error:r
/******/})
/******/,e.ignoreErrored||
/******/t(r)
/******/;
/******/}
/******/}
/******/
/******/return u;
/******/}
/******/};
/******/}
/******/self.webpackHotUpdatereact_typescript_webpack=(t,n,i)=>{
/******/for(var s in n)
/******/o.o(n,s)&&(
/******/r[s]=n[s],
/******/e&&e.push(s)
/******/)
/******/;
/******/i&&a.push(i)
/******/,l[t]&&(
/******/l[t](),
/******/l[t]=void 0)
/******/},o.hmrI.jsonp=function(e,t){
/******/r||(
/******/r={},
/******/a=[],
/******/n=[],
/******/t.push(c))
/******/,o.o(r,e)||(
/******/r[e]=o.m[e])
/******/},
/******/o.hmrC.jsonp=function(
/******/e,
/******/l,
/******/u,
/******/d,
/******/f,
/******/h
/******/){
/******/f.push(c),
/******/t={},
/******/n=l,
/******/r=u.reduce((function(e,t){
/******/
/******/return e[t]=!1,e;
/******/}),{}),
/******/a=[],
/******/e.forEach((function(e){
/******/
/******/o.o(i,e)&&
/******/void 0
/******/!==i[e]?(
/******/d.push(s(e,h)),
/******/t[e]=!0):
/******/t[e]=!1
/******/})),
/******/o.f&&(
/******/o.f.jsonpHmr=function(e,r){
/******/
/******/t&&
/******/o.o(t,e)&&
/******/!t[e]
/******/&&(
/******/r.push(s(e)),
/******/t[e]=!0)
/******/})
/******/},
/******/
/******/o.hmrM=()=>{
/******/if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");
/******/return fetch(o.p+o.hmrF()).then((e=>{
/******/if(404!==e.status){// no update available
/******/if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);
/******/return e.json();
/******/}}));
/******/}})
/******/
/******/ // no on chunks loaded
/******/
/******/ // no jsonp function
/******/();
/******/
/************************************************************************/
/******/
/******/ // module cache are used so entry inlining is disabled
/******/ // startup
/******/ // Load entry module and return exports
/******/o(214);
/******/
/******/})();