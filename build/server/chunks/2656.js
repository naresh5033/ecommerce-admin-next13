exports.id = 2656;
exports.ids = [2656];
exports.modules = {

/***/ 71867:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Se=Object.create;var F=Object.defineProperty;var Ce=Object.getOwnPropertyDescriptor;var ye=Object.getOwnPropertyNames;var xe=Object.getPrototypeOf,Te=Object.prototype.hasOwnProperty;var Le=(r,o)=>{for(var n in o)F(r,n,{get:o[n],enumerable:!0})},re=(r,o,n,a)=>{if(o&&typeof o=="object"||typeof o=="function")for(let l of ye(o))!Te.call(r,l)&&l!==n&&F(r,l,{get:()=>o[l],enumerable:!(a=Ce(o,l))||a.enumerable});return r};var z=(r,o,n)=>(n=r!=null?Se(xe(r)):{},re(o||!r||!r.__esModule?F(n,"default",{value:r,enumerable:!0}):n,r)),we=r=>re(F({},"__esModule",{value:!0}),r);var _e={};Le(_e,{Command:()=>Me,CommandDialog:()=>pe,CommandEmpty:()=>ge,CommandGroup:()=>ue,CommandInput:()=>fe,CommandItem:()=>le,CommandList:()=>me,CommandLoading:()=>ve,CommandRoot:()=>J,CommandSeparator:()=>de,useCommandState:()=>y});module.exports=we(_e);var C=z(__webpack_require__(49479)),t=z(__webpack_require__(18038)),oe=z(__webpack_require__(63136)),De='[cmdk-list-sizer=""]',M='[cmdk-group=""]',U='[cmdk-group-items=""]',Ie='[cmdk-group-heading=""]',ae='[cmdk-item=""]',ne=`${ae}:not([aria-disabled="true"])`,B="cmdk-item-select",S="data-value",Pe=(r,o)=>(0,oe.default)(r,o),se=t.createContext(void 0),k=()=>t.useContext(se),ie=t.createContext(void 0),W=()=>t.useContext(ie),ce=t.createContext(void 0),J=t.forwardRef((r,o)=>{let n=t.useRef(null),a=T(()=>({search:"",value:"",filtered:{count:0,items:new Map,groups:new Set}})),l=T(()=>new Set),u=T(()=>new Map),p=T(()=>new Map),f=T(()=>new Set),d=Re(r),{label:v,children:E,value:R,onValueChange:w,filter:O,shouldFilter:he,...D}=r,K=t.useId(),g=t.useId(),A=t.useId(),x=Oe();L(()=>{if(R!==void 0){let e=R.trim().toLowerCase();a.current.value=e,x(6,X),h.emit()}},[R]);let h=t.useMemo(()=>({subscribe:e=>(f.current.add(e),()=>f.current.delete(e)),snapshot:()=>a.current,setState:(e,c,i)=>{var s,m,b;if(!Object.is(a.current[e],c)){if(a.current[e]=c,e==="search")q(),V(),x(1,j);else if(e==="value")if(((s=d.current)==null?void 0:s.value)!==void 0){(b=(m=d.current).onValueChange)==null||b.call(m,c);return}else i||x(5,X);h.emit()}},emit:()=>{f.current.forEach(e=>e())}}),[]),G=t.useMemo(()=>({value:(e,c)=>{c!==p.current.get(e)&&(p.current.set(e,c),a.current.filtered.items.set(e,Q(c)),x(2,()=>{V(),h.emit()}))},item:(e,c)=>(l.current.add(e),c&&(u.current.has(c)?u.current.get(c).add(e):u.current.set(c,new Set([e]))),x(3,()=>{q(),V(),a.current.value||j(),h.emit()}),()=>{p.current.delete(e),l.current.delete(e),a.current.filtered.items.delete(e),x(4,()=>{q(),j(),h.emit()})}),group:e=>(u.current.has(e)||u.current.set(e,new Set),()=>{p.current.delete(e),u.current.delete(e)}),filter:()=>d.current.shouldFilter,label:v||r["aria-label"],listId:K,inputId:A,labelId:g}),[]);function Q(e){var i;let c=((i=d.current)==null?void 0:i.filter)??Pe;return e?c(e,a.current.search):0}function V(){if(!n.current||!a.current.search||d.current.shouldFilter===!1)return;let e=a.current.filtered.items,c=[];a.current.filtered.groups.forEach(s=>{let m=u.current.get(s),b=0;m.forEach(P=>{let Ee=e.get(P);b=Math.max(Ee,b)}),c.push([s,b])});let i=n.current.querySelector(De);I().sort((s,m)=>{let b=s.getAttribute(S),P=m.getAttribute(S);return(e.get(P)??0)-(e.get(b)??0)}).forEach(s=>{let m=s.closest(U);m?m.appendChild(s.parentElement===m?s:s.closest(`${U} > *`)):i.appendChild(s.parentElement===i?s:s.closest(`${U} > *`))}),c.sort((s,m)=>m[1]-s[1]).forEach(s=>{let m=n.current.querySelector(`${M}[${S}="${s[0]}"]`);m==null||m.parentElement.appendChild(m)})}function j(){let e=I().find(i=>!i.ariaDisabled),c=e==null?void 0:e.getAttribute(S);h.setState("value",c||void 0)}function q(){if(!a.current.search||d.current.shouldFilter===!1){a.current.filtered.count=l.current.size;return}a.current.filtered.groups=new Set;let e=0;for(let c of l.current){let i=p.current.get(c),s=Q(i);a.current.filtered.items.set(c,s),s>0&&e++}for(let[c,i]of u.current)for(let s of i)if(a.current.filtered.items.get(s)>0){a.current.filtered.groups.add(c);break}a.current.filtered.count=e}function X(){var c,i,s;let e=_();e&&(((c=e.parentElement)==null?void 0:c.firstChild)===e&&((s=(i=e.closest(M))==null?void 0:i.querySelector(Ie))==null||s.scrollIntoView({block:"nearest"})),e.scrollIntoView({block:"nearest"}))}function _(){return n.current.querySelector(`${ae}[aria-selected="true"]`)}function I(){return Array.from(n.current.querySelectorAll(ne))}function $(e){let i=I()[e];i&&h.setState("value",i.getAttribute(S))}function N(e){var b;let c=_(),i=I(),s=i.findIndex(P=>P===c),m=i[s+e];(b=d.current)!=null&&b.loop&&(m=s+e<0?i[i.length-1]:s+e===i.length?i[0]:i[s+e]),m&&h.setState("value",m.getAttribute(S))}function Y(e){let c=_(),i=c==null?void 0:c.closest(M),s;for(;i&&!s;)i=e>0?ke(i,M):He(i,M),s=i==null?void 0:i.querySelector(ne);s?h.setState("value",s.getAttribute(S)):N(e)}let Z=()=>$(I().length-1),ee=e=>{e.preventDefault(),e.metaKey?Z():e.altKey?Y(1):N(1)},te=e=>{e.preventDefault(),e.metaKey?$(0):e.altKey?Y(-1):N(-1)};return t.createElement("div",{ref:H([n,o]),...D,"cmdk-root":"",onKeyDown:e=>{var c;if((c=D.onKeyDown)==null||c.call(D,e),!e.defaultPrevented)switch(e.key){case"n":case"j":{e.ctrlKey&&ee(e);break}case"ArrowDown":{ee(e);break}case"p":case"k":{e.ctrlKey&&te(e);break}case"ArrowUp":{te(e);break}case"Home":{e.preventDefault(),$(0);break}case"End":{e.preventDefault(),Z();break}case"Enter":{e.preventDefault();let i=_();if(i){let s=new Event(B);i.dispatchEvent(s)}}}}},t.createElement("label",{"cmdk-label":"",htmlFor:G.inputId,id:G.labelId,style:Ae},v),t.createElement(ie.Provider,{value:h},t.createElement(se.Provider,{value:G},E)))}),le=t.forwardRef((r,o)=>{let n=t.useId(),a=t.useRef(null),l=t.useContext(ce),u=k(),p=Re(r);L(()=>u.item(n,l),[]);let f=be(n,a,[r.value,r.children,a]),d=W(),v=y(g=>g.value&&g.value===f.current),E=y(g=>u.filter()===!1?!0:g.search?g.filtered.items.get(n)>0:!0);t.useEffect(()=>{let g=a.current;if(!(!g||r.disabled))return g.addEventListener(B,R),()=>g.removeEventListener(B,R)},[E,r.onSelect,r.disabled]);function R(){var g,A;(A=(g=p.current).onSelect)==null||A.call(g,f.current)}function w(){d.setState("value",f.current,!0)}if(!E)return null;let{disabled:O,value:he,onSelect:D,...K}=r;return t.createElement("div",{ref:H([a,o]),...K,"cmdk-item":"",role:"option","aria-disabled":O||void 0,"aria-selected":v||void 0,"data-selected":v||void 0,onPointerMove:O?void 0:w,onClick:O?void 0:R},r.children)}),ue=t.forwardRef((r,o)=>{let{heading:n,children:a,...l}=r,u=t.useId(),p=t.useRef(null),f=t.useRef(null),d=t.useId(),v=k(),E=y(w=>v.filter()===!1?!0:w.search?w.filtered.groups.has(u):!0);L(()=>v.group(u),[]),be(u,p,[r.value,r.heading,f]);let R=t.createElement(ce.Provider,{value:u},a);return t.createElement("div",{ref:H([p,o]),...l,"cmdk-group":"",role:"presentation",hidden:E?void 0:!0},n&&t.createElement("div",{ref:f,"cmdk-group-heading":"","aria-hidden":!0,id:d},n),t.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":n?d:void 0},R))}),de=t.forwardRef((r,o)=>{let{alwaysRender:n,...a}=r,l=t.useRef(null),u=y(p=>!p.search);return!n&&!u?null:t.createElement("div",{ref:H([l,o]),...a,"cmdk-separator":"",role:"separator"})}),fe=t.forwardRef((r,o)=>{let{onValueChange:n,...a}=r,l=r.value!=null,u=W(),p=y(d=>d.search),f=k();return t.useEffect(()=>{r.value!=null&&u.setState("search",r.value)},[r.value]),t.createElement("input",{ref:o,...a,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":f.listId,"aria-labelledby":f.labelId,id:f.inputId,type:"text",value:l?r.value:p,onChange:d=>{l||u.setState("search",d.target.value),n==null||n(d.target.value)}})}),me=t.forwardRef((r,o)=>{let{children:n,...a}=r,l=t.useRef(null),u=t.useRef(null),p=k();return t.useEffect(()=>{if(u.current&&l.current){let f=u.current,d=l.current,v,E=new ResizeObserver(()=>{v=requestAnimationFrame(()=>{let R=f.getBoundingClientRect().height;d.style.setProperty("--cmdk-list-height",R.toFixed(1)+"px")})});return E.observe(f),()=>{cancelAnimationFrame(v),E.unobserve(f)}}},[]),t.createElement("div",{ref:H([l,o]),...a,"cmdk-list":"",role:"listbox","aria-label":"Suggestions",id:p.listId,"aria-labelledby":p.inputId},t.createElement("div",{ref:u,"cmdk-list-sizer":""},n))}),pe=t.forwardRef((r,o)=>{let{open:n,onOpenChange:a,container:l,...u}=r;return t.createElement(C.Root,{open:n,onOpenChange:a},t.createElement(C.Portal,{container:l},t.createElement(C.Overlay,{"cmdk-overlay":""}),t.createElement(C.Content,{"aria-label":r.label,"cmdk-dialog":""},t.createElement(J,{ref:o,...u}))))}),ge=t.forwardRef((r,o)=>{let n=t.useRef(!0),a=y(l=>l.filtered.count===0);return t.useEffect(()=>{n.current=!1},[]),n.current||!a?null:t.createElement("div",{ref:o,...r,"cmdk-empty":"",role:"presentation"})}),ve=t.forwardRef((r,o)=>{let{progress:n,children:a,...l}=r;return t.createElement("div",{ref:o,...l,"cmdk-loading":"",role:"progressbar","aria-valuenow":n,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Loading..."},t.createElement("div",{"aria-hidden":!0},a))}),Me=Object.assign(J,{List:me,Item:le,Input:fe,Group:ue,Separator:de,Dialog:pe,Empty:ge,Loading:ve});function ke(r,o){let n=r.nextElementSibling;for(;n;){if(n.matches(o))return n;n=n.nextElementSibling}}function He(r,o){let n=r.previousElementSibling;for(;n;){if(n.matches(o))return n;n=n.previousElementSibling}}function Re(r){let o=t.useRef(r);return L(()=>{o.current=r}),o}var L=typeof window>"u"?t.useEffect:t.useLayoutEffect;function T(r){let o=t.useRef();return o.current===void 0&&(o.current=r()),o}function H(r){return o=>{r.forEach(n=>{typeof n=="function"?n(o):n!=null&&(n.current=o)})}}function y(r){let o=W(),n=()=>r(o.snapshot());return t.useSyncExternalStore(o.subscribe,n,n)}function be(r,o,n){let a=t.useRef(),l=k();return L(()=>{var p;let u=(()=>{var f;for(let d of n){if(typeof d=="string")return d.trim().toLowerCase();if(typeof d=="object"&&"current"in d&&d.current)return(f=d.current.textContent)==null?void 0:f.trim().toLowerCase()}})();l.value(r,u),(p=o.current)==null||p.setAttribute(S,u),a.current=u}),a}var Oe=()=>{let[r,o]=t.useState(),n=T(()=>new Map);return L(()=>{n.current.forEach(a=>a()),n.current=new Map},[r]),(a,l)=>{n.current.set(a,l),o({})}},Ae={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};0&&(0);


/***/ }),

/***/ 29361:
/***/ ((module) => {

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "composeEventHandlers", () => $1a6a90a521dcd173$export$b9ecd428b558ff10);
function $1a6a90a521dcd173$export$b9ecd428b558ff10(originalEventHandler, ourEventHandler, { checkForDefaultPrevented: checkForDefaultPrevented = true  } = {}) {
    return function handleEvent(event) {
        originalEventHandler === null || originalEventHandler === void 0 || originalEventHandler(event);
        if (checkForDefaultPrevented === false || !event.defaultPrevented) return ourEventHandler === null || ourEventHandler === void 0 ? void 0 : ourEventHandler(event);
    };
}




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 81447:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $dJwbH$react = __webpack_require__(18038);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "composeRefs", () => $9c2aaba23466b352$export$43e446d32b3d21af);
$parcel$export(module.exports, "useComposedRefs", () => $9c2aaba23466b352$export$c7b2cbe3552a0d05);

/**
 * Set a given ref to a given value
 * This utility takes care of different types of refs: callback refs and RefObject(s)
 */ function $9c2aaba23466b352$var$setRef(ref, value) {
    if (typeof ref === 'function') ref(value);
    else if (ref !== null && ref !== undefined) ref.current = value;
}
/**
 * A utility to compose multiple refs together
 * Accepts callback refs and RefObject(s)
 */ function $9c2aaba23466b352$export$43e446d32b3d21af(...refs) {
    return (node)=>refs.forEach((ref)=>$9c2aaba23466b352$var$setRef(ref, node)
        )
    ;
}
/**
 * A custom hook that composes multiple refs
 * Accepts callback refs and RefObject(s)
 */ function $9c2aaba23466b352$export$c7b2cbe3552a0d05(...refs) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return $dJwbH$react.useCallback($9c2aaba23466b352$export$43e446d32b3d21af(...refs), refs);
}




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 65584:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $4O1Ne$react = __webpack_require__(18038);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "createContext", () => $dec3cc0142d4f286$export$fd42f52fd3ae1109);
$parcel$export(module.exports, "createContextScope", () => $dec3cc0142d4f286$export$50c7b4e9d9f19c1);

function $dec3cc0142d4f286$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {
    const Context = /*#__PURE__*/ $4O1Ne$react.createContext(defaultContext);
    function Provider(props) {
        const { children: children , ...context } = props; // Only re-memoize when prop values change
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const value = $4O1Ne$react.useMemo(()=>context
        , Object.values(context));
        return /*#__PURE__*/ $4O1Ne$react.createElement(Context.Provider, {
            value: value
        }, children);
    }
    function useContext(consumerName) {
        const context = $4O1Ne$react.useContext(Context);
        if (context) return context;
        if (defaultContext !== undefined) return defaultContext; // if a defaultContext wasn't specified, it's a required context.
        throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider.displayName = rootComponentName + 'Provider';
    return [
        Provider,
        useContext
    ];
}
/* -------------------------------------------------------------------------------------------------
 * createContextScope
 * -----------------------------------------------------------------------------------------------*/ function $dec3cc0142d4f286$export$50c7b4e9d9f19c1(scopeName, createContextScopeDeps = []) {
    let defaultContexts = [];
    /* -----------------------------------------------------------------------------------------------
   * createContext
   * ---------------------------------------------------------------------------------------------*/ function $dec3cc0142d4f286$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {
        const BaseContext = /*#__PURE__*/ $4O1Ne$react.createContext(defaultContext);
        const index = defaultContexts.length;
        defaultContexts = [
            ...defaultContexts,
            defaultContext
        ];
        function Provider(props) {
            const { scope: scope , children: children , ...context } = props;
            const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index]) || BaseContext; // Only re-memoize when prop values change
            // eslint-disable-next-line react-hooks/exhaustive-deps
            const value = $4O1Ne$react.useMemo(()=>context
            , Object.values(context));
            return /*#__PURE__*/ $4O1Ne$react.createElement(Context.Provider, {
                value: value
            }, children);
        }
        function useContext(consumerName, scope) {
            const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index]) || BaseContext;
            const context = $4O1Ne$react.useContext(Context);
            if (context) return context;
            if (defaultContext !== undefined) return defaultContext; // if a defaultContext wasn't specified, it's a required context.
            throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
        }
        Provider.displayName = rootComponentName + 'Provider';
        return [
            Provider,
            useContext
        ];
    }
    /* -----------------------------------------------------------------------------------------------
   * createScope
   * ---------------------------------------------------------------------------------------------*/ const createScope = ()=>{
        const scopeContexts = defaultContexts.map((defaultContext)=>{
            return /*#__PURE__*/ $4O1Ne$react.createContext(defaultContext);
        });
        return function useScope(scope) {
            const contexts = (scope === null || scope === void 0 ? void 0 : scope[scopeName]) || scopeContexts;
            return $4O1Ne$react.useMemo(()=>({
                    [`__scope${scopeName}`]: {
                        ...scope,
                        [scopeName]: contexts
                    }
                })
            , [
                scope,
                contexts
            ]);
        };
    };
    createScope.scopeName = scopeName;
    return [
        $dec3cc0142d4f286$export$fd42f52fd3ae1109,
        $dec3cc0142d4f286$var$composeContextScopes(createScope, ...createContextScopeDeps)
    ];
}
/* -------------------------------------------------------------------------------------------------
 * composeContextScopes
 * -----------------------------------------------------------------------------------------------*/ function $dec3cc0142d4f286$var$composeContextScopes(...scopes) {
    const baseScope = scopes[0];
    if (scopes.length === 1) return baseScope;
    const createScope1 = ()=>{
        const scopeHooks = scopes.map((createScope)=>({
                useScope: createScope(),
                scopeName: createScope.scopeName
            })
        );
        return function useComposedScopes(overrideScopes) {
            const nextScopes1 = scopeHooks.reduce((nextScopes, { useScope: useScope , scopeName: scopeName  })=>{
                // We are calling a hook inside a callback which React warns against to avoid inconsistent
                // renders, however, scoping doesn't have render side effects so we ignore the rule.
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const scopeProps = useScope(overrideScopes);
                const currentScope = scopeProps[`__scope${scopeName}`];
                return {
                    ...nextScopes,
                    ...currentScope
                };
            }, {});
            return $4O1Ne$react.useMemo(()=>({
                    [`__scope${baseScope.scopeName}`]: nextScopes1
                })
            , [
                nextScopes1
            ]);
        };
    };
    createScope1.scopeName = baseScope.scopeName;
    return createScope1;
}




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 49479:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $aJCrN$babelruntimehelpersextends = __webpack_require__(59651);
var $aJCrN$react = __webpack_require__(18038);
var $aJCrN$radixuiprimitive = __webpack_require__(29361);
var $aJCrN$radixuireactcomposerefs = __webpack_require__(81447);
var $aJCrN$radixuireactcontext = __webpack_require__(65584);
var $aJCrN$radixuireactid = __webpack_require__(61852);
var $aJCrN$radixuireactusecontrollablestate = __webpack_require__(62152);
var $aJCrN$radixuireactdismissablelayer = __webpack_require__(96456);
var $aJCrN$radixuireactfocusscope = __webpack_require__(97546);
var $aJCrN$radixuireactportal = __webpack_require__(26475);
var $aJCrN$radixuireactpresence = __webpack_require__(74851);
var $aJCrN$radixuireactprimitive = __webpack_require__(8622);
var $aJCrN$radixuireactfocusguards = __webpack_require__(42900);
var $aJCrN$reactremovescroll = __webpack_require__(70435);
var $aJCrN$ariahidden = __webpack_require__(36860);
var $aJCrN$radixuireactslot = __webpack_require__(19919);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "createDialogScope", () => $f4833395aa1bca1a$export$cc702773b8ea3e41);
$parcel$export(module.exports, "Dialog", () => $f4833395aa1bca1a$export$3ddf2d174ce01153);
$parcel$export(module.exports, "DialogTrigger", () => $f4833395aa1bca1a$export$2e1e1122cf0cba88);
$parcel$export(module.exports, "DialogPortal", () => $f4833395aa1bca1a$export$dad7c95542bacce0);
$parcel$export(module.exports, "DialogOverlay", () => $f4833395aa1bca1a$export$bd1d06c79be19e17);
$parcel$export(module.exports, "DialogContent", () => $f4833395aa1bca1a$export$b6d9565de1e068cf);
$parcel$export(module.exports, "DialogTitle", () => $f4833395aa1bca1a$export$16f7638e4a34b909);
$parcel$export(module.exports, "DialogDescription", () => $f4833395aa1bca1a$export$94e94c2ec2c954d5);
$parcel$export(module.exports, "DialogClose", () => $f4833395aa1bca1a$export$fba2fb7cd781b7ac);
$parcel$export(module.exports, "Root", () => $f4833395aa1bca1a$export$be92b6f5f03c0fe9);
$parcel$export(module.exports, "Trigger", () => $f4833395aa1bca1a$export$41fb9f06171c75f4);
$parcel$export(module.exports, "Portal", () => $f4833395aa1bca1a$export$602eac185826482c);
$parcel$export(module.exports, "Overlay", () => $f4833395aa1bca1a$export$c6fdb837b070b4ff);
$parcel$export(module.exports, "Content", () => $f4833395aa1bca1a$export$7c6e2c02157bb7d2);
$parcel$export(module.exports, "Title", () => $f4833395aa1bca1a$export$f99233281efd08a0);
$parcel$export(module.exports, "Description", () => $f4833395aa1bca1a$export$393edc798c47379d);
$parcel$export(module.exports, "Close", () => $f4833395aa1bca1a$export$f39c2d165cd861fe);
$parcel$export(module.exports, "WarningProvider", () => $f4833395aa1bca1a$export$69b62a49393917d6);
















/* -------------------------------------------------------------------------------------------------
 * Dialog
 * -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$DIALOG_NAME = 'Dialog';
const [$f4833395aa1bca1a$var$createDialogContext, $f4833395aa1bca1a$export$cc702773b8ea3e41] = $aJCrN$radixuireactcontext.createContextScope($f4833395aa1bca1a$var$DIALOG_NAME);
const [$f4833395aa1bca1a$var$DialogProvider, $f4833395aa1bca1a$var$useDialogContext] = $f4833395aa1bca1a$var$createDialogContext($f4833395aa1bca1a$var$DIALOG_NAME);
const $f4833395aa1bca1a$export$3ddf2d174ce01153 = (props)=>{
    const { __scopeDialog: __scopeDialog , children: children , open: openProp , defaultOpen: defaultOpen , onOpenChange: onOpenChange , modal: modal = true  } = props;
    const triggerRef = $aJCrN$react.useRef(null);
    const contentRef = $aJCrN$react.useRef(null);
    const [open = false, setOpen] = $aJCrN$radixuireactusecontrollablestate.useControllableState({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    return /*#__PURE__*/ $aJCrN$react.createElement($f4833395aa1bca1a$var$DialogProvider, {
        scope: __scopeDialog,
        triggerRef: triggerRef,
        contentRef: contentRef,
        contentId: $aJCrN$radixuireactid.useId(),
        titleId: $aJCrN$radixuireactid.useId(),
        descriptionId: $aJCrN$radixuireactid.useId(),
        open: open,
        onOpenChange: setOpen,
        onOpenToggle: $aJCrN$react.useCallback(()=>setOpen((prevOpen)=>!prevOpen
            )
        , [
            setOpen
        ]),
        modal: modal
    }, children);
};
/*#__PURE__*/ Object.assign($f4833395aa1bca1a$export$3ddf2d174ce01153, {
    displayName: $f4833395aa1bca1a$var$DIALOG_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DialogTrigger
 * -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$TRIGGER_NAME = 'DialogTrigger';
const $f4833395aa1bca1a$export$2e1e1122cf0cba88 = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , ...triggerProps } = props;
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$TRIGGER_NAME, __scopeDialog);
    const composedTriggerRef = $aJCrN$radixuireactcomposerefs.useComposedRefs(forwardedRef, context.triggerRef);
    return /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactprimitive.Primitive.button, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": $f4833395aa1bca1a$var$getState(context.open)
    }, triggerProps, {
        ref: composedTriggerRef,
        onClick: $aJCrN$radixuiprimitive.composeEventHandlers(props.onClick, context.onOpenToggle)
    }));
});
/*#__PURE__*/ Object.assign($f4833395aa1bca1a$export$2e1e1122cf0cba88, {
    displayName: $f4833395aa1bca1a$var$TRIGGER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DialogPortal
 * -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$PORTAL_NAME = 'DialogPortal';
const [$f4833395aa1bca1a$var$PortalProvider, $f4833395aa1bca1a$var$usePortalContext] = $f4833395aa1bca1a$var$createDialogContext($f4833395aa1bca1a$var$PORTAL_NAME, {
    forceMount: undefined
});
const $f4833395aa1bca1a$export$dad7c95542bacce0 = (props)=>{
    const { __scopeDialog: __scopeDialog , forceMount: forceMount , children: children , container: container  } = props;
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$PORTAL_NAME, __scopeDialog);
    return /*#__PURE__*/ $aJCrN$react.createElement($f4833395aa1bca1a$var$PortalProvider, {
        scope: __scopeDialog,
        forceMount: forceMount
    }, $aJCrN$react.Children.map(children, (child)=>/*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactpresence.Presence, {
            present: forceMount || context.open
        }, /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactportal.Portal, {
            asChild: true,
            container: container
        }, child))
    ));
};
/*#__PURE__*/ Object.assign($f4833395aa1bca1a$export$dad7c95542bacce0, {
    displayName: $f4833395aa1bca1a$var$PORTAL_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DialogOverlay
 * -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$OVERLAY_NAME = 'DialogOverlay';
const $f4833395aa1bca1a$export$bd1d06c79be19e17 = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const portalContext = $f4833395aa1bca1a$var$usePortalContext($f4833395aa1bca1a$var$OVERLAY_NAME, props.__scopeDialog);
    const { forceMount: forceMount = portalContext.forceMount , ...overlayProps } = props;
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$OVERLAY_NAME, props.__scopeDialog);
    return context.modal ? /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactpresence.Presence, {
        present: forceMount || context.open
    }, /*#__PURE__*/ $aJCrN$react.createElement($f4833395aa1bca1a$var$DialogOverlayImpl, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({}, overlayProps, {
        ref: forwardedRef
    }))) : null;
});
/*#__PURE__*/ Object.assign($f4833395aa1bca1a$export$bd1d06c79be19e17, {
    displayName: $f4833395aa1bca1a$var$OVERLAY_NAME
});
const $f4833395aa1bca1a$var$DialogOverlayImpl = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , ...overlayProps } = props;
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$OVERLAY_NAME, __scopeDialog);
    return(/*#__PURE__*/ // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    $aJCrN$react.createElement($aJCrN$reactremovescroll.RemoveScroll, {
        as: $aJCrN$radixuireactslot.Slot,
        allowPinchZoom: true,
        shards: [
            context.contentRef
        ]
    }, /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({
        "data-state": $f4833395aa1bca1a$var$getState(context.open)
    }, overlayProps, {
        ref: forwardedRef // We re-enable pointer-events prevented by `Dialog.Content` to allow scrolling the overlay.
        ,
        style: {
            pointerEvents: 'auto',
            ...overlayProps.style
        }
    }))));
});
/* -------------------------------------------------------------------------------------------------
 * DialogContent
 * -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$CONTENT_NAME = 'DialogContent';
const $f4833395aa1bca1a$export$b6d9565de1e068cf = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const portalContext = $f4833395aa1bca1a$var$usePortalContext($f4833395aa1bca1a$var$CONTENT_NAME, props.__scopeDialog);
    const { forceMount: forceMount = portalContext.forceMount , ...contentProps } = props;
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$CONTENT_NAME, props.__scopeDialog);
    return /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactpresence.Presence, {
        present: forceMount || context.open
    }, context.modal ? /*#__PURE__*/ $aJCrN$react.createElement($f4833395aa1bca1a$var$DialogContentModal, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({}, contentProps, {
        ref: forwardedRef
    })) : /*#__PURE__*/ $aJCrN$react.createElement($f4833395aa1bca1a$var$DialogContentNonModal, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({}, contentProps, {
        ref: forwardedRef
    })));
});
/*#__PURE__*/ Object.assign($f4833395aa1bca1a$export$b6d9565de1e068cf, {
    displayName: $f4833395aa1bca1a$var$CONTENT_NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$DialogContentModal = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$CONTENT_NAME, props.__scopeDialog);
    const contentRef = $aJCrN$react.useRef(null);
    const composedRefs = $aJCrN$radixuireactcomposerefs.useComposedRefs(forwardedRef, context.contentRef, contentRef); // aria-hide everything except the content (better supported equivalent to setting aria-modal)
    $aJCrN$react.useEffect(()=>{
        const content = contentRef.current;
        if (content) return $aJCrN$ariahidden.hideOthers(content);
    }, []);
    return /*#__PURE__*/ $aJCrN$react.createElement($f4833395aa1bca1a$var$DialogContentImpl, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({}, props, {
        ref: composedRefs // we make sure focus isn't trapped once `DialogContent` has been closed
        ,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: $aJCrN$radixuiprimitive.composeEventHandlers(props.onCloseAutoFocus, (event)=>{
            var _context$triggerRef$c;
            event.preventDefault();
            (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
        }),
        onPointerDownOutside: $aJCrN$radixuiprimitive.composeEventHandlers(props.onPointerDownOutside, (event)=>{
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick; // If the event is a right-click, we shouldn't close because
            // it is effectively as if we right-clicked the `Overlay`.
            if (isRightClick) event.preventDefault();
        }) // When focus is trapped, a `focusout` event may still happen.
        ,
        onFocusOutside: $aJCrN$radixuiprimitive.composeEventHandlers(props.onFocusOutside, (event)=>event.preventDefault()
        )
    }));
});
/* -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$DialogContentNonModal = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$CONTENT_NAME, props.__scopeDialog);
    const hasInteractedOutsideRef = $aJCrN$react.useRef(false);
    return /*#__PURE__*/ $aJCrN$react.createElement($f4833395aa1bca1a$var$DialogContentImpl, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({}, props, {
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event)=>{
            var _props$onCloseAutoFoc;
            (_props$onCloseAutoFoc = props.onCloseAutoFocus) === null || _props$onCloseAutoFoc === void 0 || _props$onCloseAutoFoc.call(props, event);
            if (!event.defaultPrevented) {
                var _context$triggerRef$c2;
                if (!hasInteractedOutsideRef.current) (_context$triggerRef$c2 = context.triggerRef.current) === null || _context$triggerRef$c2 === void 0 || _context$triggerRef$c2.focus(); // Always prevent auto focus because we either focus manually or want user agent focus
                event.preventDefault();
            }
            hasInteractedOutsideRef.current = false;
        },
        onInteractOutside: (event)=>{
            var _props$onInteractOuts, _context$triggerRef$c3;
            (_props$onInteractOuts = props.onInteractOutside) === null || _props$onInteractOuts === void 0 || _props$onInteractOuts.call(props, event);
            if (!event.defaultPrevented) hasInteractedOutsideRef.current = true; // Prevent dismissing when clicking the trigger.
            // As the trigger is already setup to close, without doing so would
            // cause it to close and immediately open.
            //
            // We use `onInteractOutside` as some browsers also
            // focus on pointer down, creating the same issue.
            const target = event.target;
            const targetIsTrigger = (_context$triggerRef$c3 = context.triggerRef.current) === null || _context$triggerRef$c3 === void 0 ? void 0 : _context$triggerRef$c3.contains(target);
            if (targetIsTrigger) event.preventDefault();
        }
    }));
});
/* -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$DialogContentImpl = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , trapFocus: trapFocus , onOpenAutoFocus: onOpenAutoFocus , onCloseAutoFocus: onCloseAutoFocus , ...contentProps } = props;
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$CONTENT_NAME, __scopeDialog);
    const contentRef = $aJCrN$react.useRef(null);
    const composedRefs = $aJCrN$radixuireactcomposerefs.useComposedRefs(forwardedRef, contentRef); // Make sure the whole tree has focus guards as our `Dialog` will be
    // the last element in the DOM (beacuse of the `Portal`)
    $aJCrN$radixuireactfocusguards.useFocusGuards();
    return /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$react.Fragment, null, /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactfocusscope.FocusScope, {
        asChild: true,
        loop: true,
        trapped: trapFocus,
        onMountAutoFocus: onOpenAutoFocus,
        onUnmountAutoFocus: onCloseAutoFocus
    }, /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactdismissablelayer.DismissableLayer, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({
        role: "dialog",
        id: context.contentId,
        "aria-describedby": context.descriptionId,
        "aria-labelledby": context.titleId,
        "data-state": $f4833395aa1bca1a$var$getState(context.open)
    }, contentProps, {
        ref: composedRefs,
        onDismiss: ()=>context.onOpenChange(false)
    }))), false);
});
/* -------------------------------------------------------------------------------------------------
 * DialogTitle
 * -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$TITLE_NAME = 'DialogTitle';
const $f4833395aa1bca1a$export$16f7638e4a34b909 = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , ...titleProps } = props;
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$TITLE_NAME, __scopeDialog);
    return /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactprimitive.Primitive.h2, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({
        id: context.titleId
    }, titleProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($f4833395aa1bca1a$export$16f7638e4a34b909, {
    displayName: $f4833395aa1bca1a$var$TITLE_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DialogDescription
 * -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$DESCRIPTION_NAME = 'DialogDescription';
const $f4833395aa1bca1a$export$94e94c2ec2c954d5 = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , ...descriptionProps } = props;
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$DESCRIPTION_NAME, __scopeDialog);
    return /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactprimitive.Primitive.p, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({
        id: context.descriptionId
    }, descriptionProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($f4833395aa1bca1a$export$94e94c2ec2c954d5, {
    displayName: $f4833395aa1bca1a$var$DESCRIPTION_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DialogClose
 * -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$CLOSE_NAME = 'DialogClose';
const $f4833395aa1bca1a$export$fba2fb7cd781b7ac = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , ...closeProps } = props;
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$CLOSE_NAME, __scopeDialog);
    return /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactprimitive.Primitive.button, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({
        type: "button"
    }, closeProps, {
        ref: forwardedRef,
        onClick: $aJCrN$radixuiprimitive.composeEventHandlers(props.onClick, ()=>context.onOpenChange(false)
        )
    }));
});
/*#__PURE__*/ Object.assign($f4833395aa1bca1a$export$fba2fb7cd781b7ac, {
    displayName: $f4833395aa1bca1a$var$CLOSE_NAME
});
/* -----------------------------------------------------------------------------------------------*/ function $f4833395aa1bca1a$var$getState(open) {
    return open ? 'open' : 'closed';
}
const $f4833395aa1bca1a$var$TITLE_WARNING_NAME = 'DialogTitleWarning';
const [$f4833395aa1bca1a$export$69b62a49393917d6, $f4833395aa1bca1a$var$useWarningContext] = $aJCrN$radixuireactcontext.createContext($f4833395aa1bca1a$var$TITLE_WARNING_NAME, {
    contentName: $f4833395aa1bca1a$var$CONTENT_NAME,
    titleName: $f4833395aa1bca1a$var$TITLE_NAME,
    docsSlug: 'dialog'
});
const $f4833395aa1bca1a$var$TitleWarning = ({ titleId: titleId  })=>{
    const titleWarningContext = $f4833395aa1bca1a$var$useWarningContext($f4833395aa1bca1a$var$TITLE_WARNING_NAME);
    const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;
    $aJCrN$react.useEffect(()=>{
        if (titleId) {
            const hasTitle = document.getElementById(titleId);
            if (!hasTitle) throw new Error(MESSAGE);
        }
    }, [
        MESSAGE,
        titleId
    ]);
    return null;
};
const $f4833395aa1bca1a$var$DESCRIPTION_WARNING_NAME = 'DialogDescriptionWarning';
const $f4833395aa1bca1a$var$DescriptionWarning = ({ contentRef: contentRef , descriptionId: descriptionId  })=>{
    const descriptionWarningContext = $f4833395aa1bca1a$var$useWarningContext($f4833395aa1bca1a$var$DESCRIPTION_WARNING_NAME);
    const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${descriptionWarningContext.contentName}}.`;
    $aJCrN$react.useEffect(()=>{
        var _contentRef$current;
        const describedById = (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 ? void 0 : _contentRef$current.getAttribute('aria-describedby'); // if we have an id and the user hasn't set aria-describedby={undefined}
        if (descriptionId && describedById) {
            const hasDescription = document.getElementById(descriptionId);
            if (!hasDescription) console.warn(MESSAGE);
        }
    }, [
        MESSAGE,
        contentRef,
        descriptionId
    ]);
    return null;
};
const $f4833395aa1bca1a$export$be92b6f5f03c0fe9 = $f4833395aa1bca1a$export$3ddf2d174ce01153;
const $f4833395aa1bca1a$export$41fb9f06171c75f4 = $f4833395aa1bca1a$export$2e1e1122cf0cba88;
const $f4833395aa1bca1a$export$602eac185826482c = $f4833395aa1bca1a$export$dad7c95542bacce0;
const $f4833395aa1bca1a$export$c6fdb837b070b4ff = $f4833395aa1bca1a$export$bd1d06c79be19e17;
const $f4833395aa1bca1a$export$7c6e2c02157bb7d2 = $f4833395aa1bca1a$export$b6d9565de1e068cf;
const $f4833395aa1bca1a$export$f99233281efd08a0 = $f4833395aa1bca1a$export$16f7638e4a34b909;
const $f4833395aa1bca1a$export$393edc798c47379d = $f4833395aa1bca1a$export$94e94c2ec2c954d5;
const $f4833395aa1bca1a$export$f39c2d165cd861fe = $f4833395aa1bca1a$export$fba2fb7cd781b7ac;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 96456:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $g2vWm$babelruntimehelpersextends = __webpack_require__(59651);
var $g2vWm$react = __webpack_require__(18038);
var $g2vWm$radixuiprimitive = __webpack_require__(29361);
var $g2vWm$radixuireactprimitive = __webpack_require__(8622);
var $g2vWm$radixuireactcomposerefs = __webpack_require__(81447);
var $g2vWm$radixuireactusecallbackref = __webpack_require__(54318);
var $g2vWm$radixuireactuseescapekeydown = __webpack_require__(89455);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "DismissableLayer", () => $d715e0554b679f1f$export$177fb62ff3ec1f22);
$parcel$export(module.exports, "DismissableLayerBranch", () => $d715e0554b679f1f$export$4d5eb2109db14228);
$parcel$export(module.exports, "Root", () => $d715e0554b679f1f$export$be92b6f5f03c0fe9);
$parcel$export(module.exports, "Branch", () => $d715e0554b679f1f$export$aecb2ddcb55c95be);







/* -------------------------------------------------------------------------------------------------
 * DismissableLayer
 * -----------------------------------------------------------------------------------------------*/ const $d715e0554b679f1f$var$DISMISSABLE_LAYER_NAME = 'DismissableLayer';
const $d715e0554b679f1f$var$CONTEXT_UPDATE = 'dismissableLayer.update';
const $d715e0554b679f1f$var$POINTER_DOWN_OUTSIDE = 'dismissableLayer.pointerDownOutside';
const $d715e0554b679f1f$var$FOCUS_OUTSIDE = 'dismissableLayer.focusOutside';
let $d715e0554b679f1f$var$originalBodyPointerEvents;
const $d715e0554b679f1f$var$DismissableLayerContext = /*#__PURE__*/ $g2vWm$react.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set()
});
const $d715e0554b679f1f$export$177fb62ff3ec1f22 = /*#__PURE__*/ $g2vWm$react.forwardRef((props, forwardedRef)=>{
    const { disableOutsidePointerEvents: disableOutsidePointerEvents = false , onEscapeKeyDown: onEscapeKeyDown , onPointerDownOutside: onPointerDownOutside , onFocusOutside: onFocusOutside , onInteractOutside: onInteractOutside , onDismiss: onDismiss , ...layerProps } = props;
    const context = $g2vWm$react.useContext($d715e0554b679f1f$var$DismissableLayerContext);
    const [node1, setNode] = $g2vWm$react.useState(null);
    const [, force] = $g2vWm$react.useState({});
    const composedRefs = $g2vWm$radixuireactcomposerefs.useComposedRefs(forwardedRef, (node)=>setNode(node)
    );
    const layers = Array.from(context.layers);
    const [highestLayerWithOutsidePointerEventsDisabled] = [
        ...context.layersWithOutsidePointerEventsDisabled
    ].slice(-1); // prettier-ignore
    const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled); // prettier-ignore
    const index = node1 ? layers.indexOf(node1) : -1;
    const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
    const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
    const pointerDownOutside = $d715e0554b679f1f$var$usePointerDownOutside((event)=>{
        const target = event.target;
        const isPointerDownOnBranch = [
            ...context.branches
        ].some((branch)=>branch.contains(target)
        );
        if (!isPointerEventsEnabled || isPointerDownOnBranch) return;
        onPointerDownOutside === null || onPointerDownOutside === void 0 || onPointerDownOutside(event);
        onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
        if (!event.defaultPrevented) onDismiss === null || onDismiss === void 0 || onDismiss();
    });
    const focusOutside = $d715e0554b679f1f$var$useFocusOutside((event)=>{
        const target = event.target;
        const isFocusInBranch = [
            ...context.branches
        ].some((branch)=>branch.contains(target)
        );
        if (isFocusInBranch) return;
        onFocusOutside === null || onFocusOutside === void 0 || onFocusOutside(event);
        onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
        if (!event.defaultPrevented) onDismiss === null || onDismiss === void 0 || onDismiss();
    });
    $g2vWm$radixuireactuseescapekeydown.useEscapeKeydown((event)=>{
        const isHighestLayer = index === context.layers.size - 1;
        if (!isHighestLayer) return;
        onEscapeKeyDown === null || onEscapeKeyDown === void 0 || onEscapeKeyDown(event);
        if (!event.defaultPrevented && onDismiss) {
            event.preventDefault();
            onDismiss();
        }
    });
    $g2vWm$react.useEffect(()=>{
        if (!node1) return;
        if (disableOutsidePointerEvents) {
            if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
                $d715e0554b679f1f$var$originalBodyPointerEvents = document.body.style.pointerEvents;
                document.body.style.pointerEvents = 'none';
            }
            context.layersWithOutsidePointerEventsDisabled.add(node1);
        }
        context.layers.add(node1);
        $d715e0554b679f1f$var$dispatchUpdate();
        return ()=>{
            if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) document.body.style.pointerEvents = $d715e0554b679f1f$var$originalBodyPointerEvents;
        };
    }, [
        node1,
        disableOutsidePointerEvents,
        context
    ]);
    /**
   * We purposefully prevent combining this effect with the `disableOutsidePointerEvents` effect
   * because a change to `disableOutsidePointerEvents` would remove this layer from the stack
   * and add it to the end again so the layering order wouldn't be _creation order_.
   * We only want them to be removed from context stacks when unmounted.
   */ $g2vWm$react.useEffect(()=>{
        return ()=>{
            if (!node1) return;
            context.layers.delete(node1);
            context.layersWithOutsidePointerEventsDisabled.delete(node1);
            $d715e0554b679f1f$var$dispatchUpdate();
        };
    }, [
        node1,
        context
    ]);
    $g2vWm$react.useEffect(()=>{
        const handleUpdate = ()=>force({})
        ;
        document.addEventListener($d715e0554b679f1f$var$CONTEXT_UPDATE, handleUpdate);
        return ()=>document.removeEventListener($d715e0554b679f1f$var$CONTEXT_UPDATE, handleUpdate)
        ;
    }, []);
    return /*#__PURE__*/ $g2vWm$react.createElement($g2vWm$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($g2vWm$babelruntimehelpersextends))({}, layerProps, {
        ref: composedRefs,
        style: {
            pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? 'auto' : 'none' : undefined,
            ...props.style
        },
        onFocusCapture: $g2vWm$radixuiprimitive.composeEventHandlers(props.onFocusCapture, focusOutside.onFocusCapture),
        onBlurCapture: $g2vWm$radixuiprimitive.composeEventHandlers(props.onBlurCapture, focusOutside.onBlurCapture),
        onPointerDownCapture: $g2vWm$radixuiprimitive.composeEventHandlers(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
    }));
});
/*#__PURE__*/ Object.assign($d715e0554b679f1f$export$177fb62ff3ec1f22, {
    displayName: $d715e0554b679f1f$var$DISMISSABLE_LAYER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DismissableLayerBranch
 * -----------------------------------------------------------------------------------------------*/ const $d715e0554b679f1f$var$BRANCH_NAME = 'DismissableLayerBranch';
const $d715e0554b679f1f$export$4d5eb2109db14228 = /*#__PURE__*/ $g2vWm$react.forwardRef((props, forwardedRef)=>{
    const context = $g2vWm$react.useContext($d715e0554b679f1f$var$DismissableLayerContext);
    const ref = $g2vWm$react.useRef(null);
    const composedRefs = $g2vWm$radixuireactcomposerefs.useComposedRefs(forwardedRef, ref);
    $g2vWm$react.useEffect(()=>{
        const node = ref.current;
        if (node) {
            context.branches.add(node);
            return ()=>{
                context.branches.delete(node);
            };
        }
    }, [
        context.branches
    ]);
    return /*#__PURE__*/ $g2vWm$react.createElement($g2vWm$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($g2vWm$babelruntimehelpersextends))({}, props, {
        ref: composedRefs
    }));
});
/*#__PURE__*/ Object.assign($d715e0554b679f1f$export$4d5eb2109db14228, {
    displayName: $d715e0554b679f1f$var$BRANCH_NAME
});
/* -----------------------------------------------------------------------------------------------*/ /**
 * Listens for `pointerdown` outside a react subtree. We use `pointerdown` rather than `pointerup`
 * to mimic layer dismissing behaviour present in OS.
 * Returns props to pass to the node we want to check for outside events.
 */ function $d715e0554b679f1f$var$usePointerDownOutside(onPointerDownOutside) {
    const handlePointerDownOutside = $g2vWm$radixuireactusecallbackref.useCallbackRef(onPointerDownOutside);
    const isPointerInsideReactTreeRef = $g2vWm$react.useRef(false);
    const handleClickRef = $g2vWm$react.useRef(()=>{});
    $g2vWm$react.useEffect(()=>{
        const handlePointerDown = (event)=>{
            if (event.target && !isPointerInsideReactTreeRef.current) {
                const eventDetail = {
                    originalEvent: event
                };
                function handleAndDispatchPointerDownOutsideEvent() {
                    $d715e0554b679f1f$var$handleAndDispatchCustomEvent($d715e0554b679f1f$var$POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
                        discrete: true
                    });
                }
                /**
         * On touch devices, we need to wait for a click event because browsers implement
         * a ~350ms delay between the time the user stops touching the display and when the
         * browser executres events. We need to ensure we don't reactivate pointer-events within
         * this timeframe otherwise the browser may execute events that should have been prevented.
         *
         * Additionally, this also lets us deal automatically with cancellations when a click event
         * isn't raised because the page was considered scrolled/drag-scrolled, long-pressed, etc.
         *
         * This is why we also continuously remove the previous listener, because we cannot be
         * certain that it was raised, and therefore cleaned-up.
         */ if (event.pointerType === 'touch') {
                    document.removeEventListener('click', handleClickRef.current);
                    handleClickRef.current = handleAndDispatchPointerDownOutsideEvent;
                    document.addEventListener('click', handleClickRef.current, {
                        once: true
                    });
                } else handleAndDispatchPointerDownOutsideEvent();
            }
            isPointerInsideReactTreeRef.current = false;
        };
        /**
     * if this hook executes in a component that mounts via a `pointerdown` event, the event
     * would bubble up to the document and trigger a `pointerDownOutside` event. We avoid
     * this by delaying the event listener registration on the document.
     * This is not React specific, but rather how the DOM works, ie:
     * ```
     * button.addEventListener('pointerdown', () => {
     *   console.log('I will log');
     *   document.addEventListener('pointerdown', () => {
     *     console.log('I will also log');
     *   })
     * });
     */ const timerId = window.setTimeout(()=>{
            document.addEventListener('pointerdown', handlePointerDown);
        }, 0);
        return ()=>{
            window.clearTimeout(timerId);
            document.removeEventListener('pointerdown', handlePointerDown);
            document.removeEventListener('click', handleClickRef.current);
        };
    }, [
        handlePointerDownOutside
    ]);
    return {
        // ensures we check React component tree (not just DOM tree)
        onPointerDownCapture: ()=>isPointerInsideReactTreeRef.current = true
    };
}
/**
 * Listens for when focus happens outside a react subtree.
 * Returns props to pass to the root (node) of the subtree we want to check.
 */ function $d715e0554b679f1f$var$useFocusOutside(onFocusOutside) {
    const handleFocusOutside = $g2vWm$radixuireactusecallbackref.useCallbackRef(onFocusOutside);
    const isFocusInsideReactTreeRef = $g2vWm$react.useRef(false);
    $g2vWm$react.useEffect(()=>{
        const handleFocus = (event)=>{
            if (event.target && !isFocusInsideReactTreeRef.current) {
                const eventDetail = {
                    originalEvent: event
                };
                $d715e0554b679f1f$var$handleAndDispatchCustomEvent($d715e0554b679f1f$var$FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
                    discrete: false
                });
            }
        };
        document.addEventListener('focusin', handleFocus);
        return ()=>document.removeEventListener('focusin', handleFocus)
        ;
    }, [
        handleFocusOutside
    ]);
    return {
        onFocusCapture: ()=>isFocusInsideReactTreeRef.current = true
        ,
        onBlurCapture: ()=>isFocusInsideReactTreeRef.current = false
    };
}
function $d715e0554b679f1f$var$dispatchUpdate() {
    const event = new CustomEvent($d715e0554b679f1f$var$CONTEXT_UPDATE);
    document.dispatchEvent(event);
}
function $d715e0554b679f1f$var$handleAndDispatchCustomEvent(name, handler, detail, { discrete: discrete  }) {
    const target = detail.originalEvent.target;
    const event = new CustomEvent(name, {
        bubbles: false,
        cancelable: true,
        detail: detail
    });
    if (handler) target.addEventListener(name, handler, {
        once: true
    });
    if (discrete) $g2vWm$radixuireactprimitive.dispatchDiscreteCustomEvent(target, event);
    else target.dispatchEvent(event);
}
const $d715e0554b679f1f$export$be92b6f5f03c0fe9 = $d715e0554b679f1f$export$177fb62ff3ec1f22;
const $d715e0554b679f1f$export$aecb2ddcb55c95be = $d715e0554b679f1f$export$4d5eb2109db14228;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 42900:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $cnctE$react = __webpack_require__(18038);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "FocusGuards", () => $71476a6ed7dbbaf3$export$ac5b58043b79449b);
$parcel$export(module.exports, "Root", () => $71476a6ed7dbbaf3$export$be92b6f5f03c0fe9);
$parcel$export(module.exports, "useFocusGuards", () => $71476a6ed7dbbaf3$export$b7ece24a22aeda8c);

/** Number of components which have requested interest to have focus guards */ let $71476a6ed7dbbaf3$var$count = 0;
function $71476a6ed7dbbaf3$export$ac5b58043b79449b(props) {
    $71476a6ed7dbbaf3$export$b7ece24a22aeda8c();
    return props.children;
}
/**
 * Injects a pair of focus guards at the edges of the whole DOM tree
 * to ensure `focusin` & `focusout` events can be caught consistently.
 */ function $71476a6ed7dbbaf3$export$b7ece24a22aeda8c() {
    $cnctE$react.useEffect(()=>{
        var _edgeGuards$, _edgeGuards$2;
        const edgeGuards = document.querySelectorAll('[data-radix-focus-guard]');
        document.body.insertAdjacentElement('afterbegin', (_edgeGuards$ = edgeGuards[0]) !== null && _edgeGuards$ !== void 0 ? _edgeGuards$ : $71476a6ed7dbbaf3$var$createFocusGuard());
        document.body.insertAdjacentElement('beforeend', (_edgeGuards$2 = edgeGuards[1]) !== null && _edgeGuards$2 !== void 0 ? _edgeGuards$2 : $71476a6ed7dbbaf3$var$createFocusGuard());
        $71476a6ed7dbbaf3$var$count++;
        return ()=>{
            if ($71476a6ed7dbbaf3$var$count === 1) document.querySelectorAll('[data-radix-focus-guard]').forEach((node)=>node.remove()
            );
            $71476a6ed7dbbaf3$var$count--;
        };
    }, []);
}
function $71476a6ed7dbbaf3$var$createFocusGuard() {
    const element = document.createElement('span');
    element.setAttribute('data-radix-focus-guard', '');
    element.tabIndex = 0;
    element.style.cssText = 'outline: none; opacity: 0; position: fixed; pointer-events: none';
    return element;
}
const $71476a6ed7dbbaf3$export$be92b6f5f03c0fe9 = $71476a6ed7dbbaf3$export$ac5b58043b79449b;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 97546:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $buum9$babelruntimehelpersextends = __webpack_require__(59651);
var $buum9$react = __webpack_require__(18038);
var $buum9$radixuireactcomposerefs = __webpack_require__(81447);
var $buum9$radixuireactprimitive = __webpack_require__(8622);
var $buum9$radixuireactusecallbackref = __webpack_require__(54318);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "FocusScope", () => $2bc01e66e04aa9ed$export$20e40289641fbbb6);
$parcel$export(module.exports, "Root", () => $2bc01e66e04aa9ed$export$be92b6f5f03c0fe9);





const $2bc01e66e04aa9ed$var$AUTOFOCUS_ON_MOUNT = 'focusScope.autoFocusOnMount';
const $2bc01e66e04aa9ed$var$AUTOFOCUS_ON_UNMOUNT = 'focusScope.autoFocusOnUnmount';
const $2bc01e66e04aa9ed$var$EVENT_OPTIONS = {
    bubbles: false,
    cancelable: true
};
/* -------------------------------------------------------------------------------------------------
 * FocusScope
 * -----------------------------------------------------------------------------------------------*/ const $2bc01e66e04aa9ed$var$FOCUS_SCOPE_NAME = 'FocusScope';
const $2bc01e66e04aa9ed$export$20e40289641fbbb6 = /*#__PURE__*/ $buum9$react.forwardRef((props, forwardedRef)=>{
    const { loop: loop = false , trapped: trapped = false , onMountAutoFocus: onMountAutoFocusProp , onUnmountAutoFocus: onUnmountAutoFocusProp , ...scopeProps } = props;
    const [container1, setContainer] = $buum9$react.useState(null);
    const onMountAutoFocus = $buum9$radixuireactusecallbackref.useCallbackRef(onMountAutoFocusProp);
    const onUnmountAutoFocus = $buum9$radixuireactusecallbackref.useCallbackRef(onUnmountAutoFocusProp);
    const lastFocusedElementRef = $buum9$react.useRef(null);
    const composedRefs = $buum9$radixuireactcomposerefs.useComposedRefs(forwardedRef, (node)=>setContainer(node)
    );
    const focusScope = $buum9$react.useRef({
        paused: false,
        pause () {
            this.paused = true;
        },
        resume () {
            this.paused = false;
        }
    }).current; // Takes care of trapping focus if focus is moved outside programmatically for example
    $buum9$react.useEffect(()=>{
        if (trapped) {
            function handleFocusIn(event) {
                if (focusScope.paused || !container1) return;
                const target = event.target;
                if (container1.contains(target)) lastFocusedElementRef.current = target;
                else $2bc01e66e04aa9ed$var$focus(lastFocusedElementRef.current, {
                    select: true
                });
            }
            function handleFocusOut(event) {
                if (focusScope.paused || !container1) return;
                if (!container1.contains(event.relatedTarget)) $2bc01e66e04aa9ed$var$focus(lastFocusedElementRef.current, {
                    select: true
                });
            }
            document.addEventListener('focusin', handleFocusIn);
            document.addEventListener('focusout', handleFocusOut);
            return ()=>{
                document.removeEventListener('focusin', handleFocusIn);
                document.removeEventListener('focusout', handleFocusOut);
            };
        }
    }, [
        trapped,
        container1,
        focusScope.paused
    ]);
    $buum9$react.useEffect(()=>{
        if (container1) {
            $2bc01e66e04aa9ed$var$focusScopesStack.add(focusScope);
            const previouslyFocusedElement = document.activeElement;
            const hasFocusedCandidate = container1.contains(previouslyFocusedElement);
            if (!hasFocusedCandidate) {
                const mountEvent = new CustomEvent($2bc01e66e04aa9ed$var$AUTOFOCUS_ON_MOUNT, $2bc01e66e04aa9ed$var$EVENT_OPTIONS);
                container1.addEventListener($2bc01e66e04aa9ed$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
                container1.dispatchEvent(mountEvent);
                if (!mountEvent.defaultPrevented) {
                    $2bc01e66e04aa9ed$var$focusFirst($2bc01e66e04aa9ed$var$removeLinks($2bc01e66e04aa9ed$var$getTabbableCandidates(container1)), {
                        select: true
                    });
                    if (document.activeElement === previouslyFocusedElement) $2bc01e66e04aa9ed$var$focus(container1);
                }
            }
            return ()=>{
                container1.removeEventListener($2bc01e66e04aa9ed$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus); // We hit a react bug (fixed in v17) with focusing in unmount.
                // We need to delay the focus a little to get around it for now.
                // See: https://github.com/facebook/react/issues/17894
                setTimeout(()=>{
                    const unmountEvent = new CustomEvent($2bc01e66e04aa9ed$var$AUTOFOCUS_ON_UNMOUNT, $2bc01e66e04aa9ed$var$EVENT_OPTIONS);
                    container1.addEventListener($2bc01e66e04aa9ed$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
                    container1.dispatchEvent(unmountEvent);
                    if (!unmountEvent.defaultPrevented) $2bc01e66e04aa9ed$var$focus(previouslyFocusedElement !== null && previouslyFocusedElement !== void 0 ? previouslyFocusedElement : document.body, {
                        select: true
                    });
                     // we need to remove the listener after we `dispatchEvent`
                    container1.removeEventListener($2bc01e66e04aa9ed$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
                    $2bc01e66e04aa9ed$var$focusScopesStack.remove(focusScope);
                }, 0);
            };
        }
    }, [
        container1,
        onMountAutoFocus,
        onUnmountAutoFocus,
        focusScope
    ]); // Takes care of looping focus (when tabbing whilst at the edges)
    const handleKeyDown = $buum9$react.useCallback((event)=>{
        if (!loop && !trapped) return;
        if (focusScope.paused) return;
        const isTabKey = event.key === 'Tab' && !event.altKey && !event.ctrlKey && !event.metaKey;
        const focusedElement = document.activeElement;
        if (isTabKey && focusedElement) {
            const container = event.currentTarget;
            const [first, last] = $2bc01e66e04aa9ed$var$getTabbableEdges(container);
            const hasTabbableElementsInside = first && last; // we can only wrap focus if we have tabbable edges
            if (!hasTabbableElementsInside) {
                if (focusedElement === container) event.preventDefault();
            } else {
                if (!event.shiftKey && focusedElement === last) {
                    event.preventDefault();
                    if (loop) $2bc01e66e04aa9ed$var$focus(first, {
                        select: true
                    });
                } else if (event.shiftKey && focusedElement === first) {
                    event.preventDefault();
                    if (loop) $2bc01e66e04aa9ed$var$focus(last, {
                        select: true
                    });
                }
            }
        }
    }, [
        loop,
        trapped,
        focusScope.paused
    ]);
    return /*#__PURE__*/ $buum9$react.createElement($buum9$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($buum9$babelruntimehelpersextends))({
        tabIndex: -1
    }, scopeProps, {
        ref: composedRefs,
        onKeyDown: handleKeyDown
    }));
});
/*#__PURE__*/ Object.assign($2bc01e66e04aa9ed$export$20e40289641fbbb6, {
    displayName: $2bc01e66e04aa9ed$var$FOCUS_SCOPE_NAME
});
/* -------------------------------------------------------------------------------------------------
 * Utils
 * -----------------------------------------------------------------------------------------------*/ /**
 * Attempts focusing the first element in a list of candidates.
 * Stops when focus has actually moved.
 */ function $2bc01e66e04aa9ed$var$focusFirst(candidates, { select: select = false  } = {}) {
    const previouslyFocusedElement = document.activeElement;
    for (const candidate of candidates){
        $2bc01e66e04aa9ed$var$focus(candidate, {
            select: select
        });
        if (document.activeElement !== previouslyFocusedElement) return;
    }
}
/**
 * Returns the first and last tabbable elements inside a container.
 */ function $2bc01e66e04aa9ed$var$getTabbableEdges(container) {
    const candidates = $2bc01e66e04aa9ed$var$getTabbableCandidates(container);
    const first = $2bc01e66e04aa9ed$var$findVisible(candidates, container);
    const last = $2bc01e66e04aa9ed$var$findVisible(candidates.reverse(), container);
    return [
        first,
        last
    ];
}
/**
 * Returns a list of potential tabbable candidates.
 *
 * NOTE: This is only a close approximation. For example it doesn't take into account cases like when
 * elements are not visible. This cannot be worked out easily by just reading a property, but rather
 * necessitate runtime knowledge (computed styles, etc). We deal with these cases separately.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker
 * Credit: https://github.com/discord/focus-layers/blob/master/src/util/wrapFocus.tsx#L1
 */ function $2bc01e66e04aa9ed$var$getTabbableCandidates(container) {
    const nodes = [];
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (node)=>{
            const isHiddenInput = node.tagName === 'INPUT' && node.type === 'hidden';
            if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP; // `.tabIndex` is not the same as the `tabindex` attribute. It works on the
            // runtime's understanding of tabbability, so this automatically accounts
            // for any kind of element that could be tabbed to.
            return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
    });
    while(walker.nextNode())nodes.push(walker.currentNode); // we do not take into account the order of nodes with positive `tabIndex` as it
    // hinders accessibility to have tab order different from visual order.
    return nodes;
}
/**
 * Returns the first visible element in a list.
 * NOTE: Only checks visibility up to the `container`.
 */ function $2bc01e66e04aa9ed$var$findVisible(elements, container) {
    for (const element of elements){
        // we stop checking if it's hidden at the `container` level (excluding)
        if (!$2bc01e66e04aa9ed$var$isHidden(element, {
            upTo: container
        })) return element;
    }
}
function $2bc01e66e04aa9ed$var$isHidden(node, { upTo: upTo  }) {
    if (getComputedStyle(node).visibility === 'hidden') return true;
    while(node){
        // we stop at `upTo` (excluding it)
        if (upTo !== undefined && node === upTo) return false;
        if (getComputedStyle(node).display === 'none') return true;
        node = node.parentElement;
    }
    return false;
}
function $2bc01e66e04aa9ed$var$isSelectableInput(element) {
    return element instanceof HTMLInputElement && 'select' in element;
}
function $2bc01e66e04aa9ed$var$focus(element, { select: select = false  } = {}) {
    // only focus if that element is focusable
    if (element && element.focus) {
        const previouslyFocusedElement = document.activeElement; // NOTE: we prevent scrolling on focus, to minimize jarring transitions for users
        element.focus({
            preventScroll: true
        }); // only select if its not the same element, it supports selection and we need to select
        if (element !== previouslyFocusedElement && $2bc01e66e04aa9ed$var$isSelectableInput(element) && select) element.select();
    }
}
/* -------------------------------------------------------------------------------------------------
 * FocusScope stack
 * -----------------------------------------------------------------------------------------------*/ const $2bc01e66e04aa9ed$var$focusScopesStack = $2bc01e66e04aa9ed$var$createFocusScopesStack();
function $2bc01e66e04aa9ed$var$createFocusScopesStack() {
    /** A stack of focus scopes, with the active one at the top */ let stack = [];
    return {
        add (focusScope) {
            // pause the currently active focus scope (at the top of the stack)
            const activeFocusScope = stack[0];
            if (focusScope !== activeFocusScope) activeFocusScope === null || activeFocusScope === void 0 || activeFocusScope.pause();
             // remove in case it already exists (because we'll re-add it at the top of the stack)
            stack = $2bc01e66e04aa9ed$var$arrayRemove(stack, focusScope);
            stack.unshift(focusScope);
        },
        remove (focusScope) {
            var _stack$;
            stack = $2bc01e66e04aa9ed$var$arrayRemove(stack, focusScope);
            (_stack$ = stack[0]) === null || _stack$ === void 0 || _stack$.resume();
        }
    };
}
function $2bc01e66e04aa9ed$var$arrayRemove(array, item) {
    const updatedArray = [
        ...array
    ];
    const index = updatedArray.indexOf(item);
    if (index !== -1) updatedArray.splice(index, 1);
    return updatedArray;
}
function $2bc01e66e04aa9ed$var$removeLinks(items) {
    return items.filter((item)=>item.tagName !== 'A'
    );
}
const $2bc01e66e04aa9ed$export$be92b6f5f03c0fe9 = $2bc01e66e04aa9ed$export$20e40289641fbbb6;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 61852:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $47woD$react = __webpack_require__(18038);
var $47woD$radixuireactuselayouteffect = __webpack_require__(97070);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "useId", () => $dc478e4659f630c5$export$f680877a34711e37);


const $dc478e4659f630c5$var$useReactId = $47woD$react['useId'.toString()] || (()=>undefined
);
let $dc478e4659f630c5$var$count = 0;
function $dc478e4659f630c5$export$f680877a34711e37(deterministicId) {
    const [id, setId] = $47woD$react.useState($dc478e4659f630c5$var$useReactId()); // React versions older than 18 will have client-side ids only.
    $47woD$radixuireactuselayouteffect.useLayoutEffect(()=>{
        if (!deterministicId) setId((reactId)=>reactId !== null && reactId !== void 0 ? reactId : String($dc478e4659f630c5$var$count++)
        );
    }, [
        deterministicId
    ]);
    return deterministicId || (id ? `radix-${id}` : '');
}




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 26475:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $amzHf$babelruntimehelpersextends = __webpack_require__(59651);
var $amzHf$react = __webpack_require__(18038);
var $amzHf$reactdom = __webpack_require__(98704);
var $amzHf$radixuireactprimitive = __webpack_require__(8622);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "Portal", () => $913a70b877676c16$export$602eac185826482c);
$parcel$export(module.exports, "Root", () => $913a70b877676c16$export$be92b6f5f03c0fe9);




/* -------------------------------------------------------------------------------------------------
 * Portal
 * -----------------------------------------------------------------------------------------------*/ const $913a70b877676c16$var$PORTAL_NAME = 'Portal';
const $913a70b877676c16$export$602eac185826482c = /*#__PURE__*/ $amzHf$react.forwardRef((props, forwardedRef)=>{
    var _globalThis$document;
    const { container: container = globalThis === null || globalThis === void 0 ? void 0 : (_globalThis$document = globalThis.document) === null || _globalThis$document === void 0 ? void 0 : _globalThis$document.body , ...portalProps } = props;
    return container ? /*#__PURE__*/ ($parcel$interopDefault($amzHf$reactdom)).createPortal(/*#__PURE__*/ $amzHf$react.createElement($amzHf$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($amzHf$babelruntimehelpersextends))({}, portalProps, {
        ref: forwardedRef
    })), container) : null;
});
/*#__PURE__*/ Object.assign($913a70b877676c16$export$602eac185826482c, {
    displayName: $913a70b877676c16$var$PORTAL_NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $913a70b877676c16$export$be92b6f5f03c0fe9 = $913a70b877676c16$export$602eac185826482c;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 74851:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $fnLeV$react = __webpack_require__(18038);
var $fnLeV$reactdom = __webpack_require__(98704);
var $fnLeV$radixuireactcomposerefs = __webpack_require__(81447);
var $fnLeV$radixuireactuselayouteffect = __webpack_require__(97070);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Presence", () => $a2fa0214bb2735a1$export$99c2b779aa4e8b8b);





function $8f63844556d0d3cd$export$3e6543de14f8614f(initialState, machine) {
    return $fnLeV$react.useReducer((state, event)=>{
        const nextState = machine[state][event];
        return nextState !== null && nextState !== void 0 ? nextState : state;
    }, initialState);
}


const $a2fa0214bb2735a1$export$99c2b779aa4e8b8b = (props)=>{
    const { present: present , children: children  } = props;
    const presence = $a2fa0214bb2735a1$var$usePresence(present);
    const child = typeof children === 'function' ? children({
        present: presence.isPresent
    }) : $fnLeV$react.Children.only(children);
    const ref = $fnLeV$radixuireactcomposerefs.useComposedRefs(presence.ref, child.ref);
    const forceMount = typeof children === 'function';
    return forceMount || presence.isPresent ? /*#__PURE__*/ $fnLeV$react.cloneElement(child, {
        ref: ref
    }) : null;
};
$a2fa0214bb2735a1$export$99c2b779aa4e8b8b.displayName = 'Presence';
/* -------------------------------------------------------------------------------------------------
 * usePresence
 * -----------------------------------------------------------------------------------------------*/ function $a2fa0214bb2735a1$var$usePresence(present) {
    const [node1, setNode] = $fnLeV$react.useState();
    const stylesRef = $fnLeV$react.useRef({});
    const prevPresentRef = $fnLeV$react.useRef(present);
    const prevAnimationNameRef = $fnLeV$react.useRef('none');
    const initialState = present ? 'mounted' : 'unmounted';
    const [state, send] = $8f63844556d0d3cd$export$3e6543de14f8614f(initialState, {
        mounted: {
            UNMOUNT: 'unmounted',
            ANIMATION_OUT: 'unmountSuspended'
        },
        unmountSuspended: {
            MOUNT: 'mounted',
            ANIMATION_END: 'unmounted'
        },
        unmounted: {
            MOUNT: 'mounted'
        }
    });
    $fnLeV$react.useEffect(()=>{
        const currentAnimationName = $a2fa0214bb2735a1$var$getAnimationName(stylesRef.current);
        prevAnimationNameRef.current = state === 'mounted' ? currentAnimationName : 'none';
    }, [
        state
    ]);
    $fnLeV$radixuireactuselayouteffect.useLayoutEffect(()=>{
        const styles = stylesRef.current;
        const wasPresent = prevPresentRef.current;
        const hasPresentChanged = wasPresent !== present;
        if (hasPresentChanged) {
            const prevAnimationName = prevAnimationNameRef.current;
            const currentAnimationName = $a2fa0214bb2735a1$var$getAnimationName(styles);
            if (present) send('MOUNT');
            else if (currentAnimationName === 'none' || (styles === null || styles === void 0 ? void 0 : styles.display) === 'none') // If there is no exit animation or the element is hidden, animations won't run
            // so we unmount instantly
            send('UNMOUNT');
            else {
                /**
         * When `present` changes to `false`, we check changes to animation-name to
         * determine whether an animation has started. We chose this approach (reading
         * computed styles) because there is no `animationrun` event and `animationstart`
         * fires after `animation-delay` has expired which would be too late.
         */ const isAnimating = prevAnimationName !== currentAnimationName;
                if (wasPresent && isAnimating) send('ANIMATION_OUT');
                else send('UNMOUNT');
            }
            prevPresentRef.current = present;
        }
    }, [
        present,
        send
    ]);
    $fnLeV$radixuireactuselayouteffect.useLayoutEffect(()=>{
        if (node1) {
            /**
       * Triggering an ANIMATION_OUT during an ANIMATION_IN will fire an `animationcancel`
       * event for ANIMATION_IN after we have entered `unmountSuspended` state. So, we
       * make sure we only trigger ANIMATION_END for the currently active animation.
       */ const handleAnimationEnd = (event)=>{
                const currentAnimationName = $a2fa0214bb2735a1$var$getAnimationName(stylesRef.current);
                const isCurrentAnimation = currentAnimationName.includes(event.animationName);
                if (event.target === node1 && isCurrentAnimation) // With React 18 concurrency this update is applied
                // a frame after the animation ends, creating a flash of visible content.
                // By manually flushing we ensure they sync within a frame, removing the flash.
                $fnLeV$reactdom.flushSync(()=>send('ANIMATION_END')
                );
            };
            const handleAnimationStart = (event)=>{
                if (event.target === node1) // if animation occurred, store its name as the previous animation.
                prevAnimationNameRef.current = $a2fa0214bb2735a1$var$getAnimationName(stylesRef.current);
            };
            node1.addEventListener('animationstart', handleAnimationStart);
            node1.addEventListener('animationcancel', handleAnimationEnd);
            node1.addEventListener('animationend', handleAnimationEnd);
            return ()=>{
                node1.removeEventListener('animationstart', handleAnimationStart);
                node1.removeEventListener('animationcancel', handleAnimationEnd);
                node1.removeEventListener('animationend', handleAnimationEnd);
            };
        } else // Transition to the unmounted state if the node is removed prematurely.
        // We avoid doing so during cleanup as the node may change but still exist.
        send('ANIMATION_END');
    }, [
        node1,
        send
    ]);
    return {
        isPresent: [
            'mounted',
            'unmountSuspended'
        ].includes(state),
        ref: $fnLeV$react.useCallback((node)=>{
            if (node) stylesRef.current = getComputedStyle(node);
            setNode(node);
        }, [])
    };
}
/* -----------------------------------------------------------------------------------------------*/ function $a2fa0214bb2735a1$var$getAnimationName(styles) {
    return (styles === null || styles === void 0 ? void 0 : styles.animationName) || 'none';
}




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 8622:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $iMixA$babelruntimehelpersextends = __webpack_require__(59651);
var $iMixA$react = __webpack_require__(18038);
var $iMixA$reactdom = __webpack_require__(98704);
var $iMixA$radixuireactslot = __webpack_require__(19919);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "Primitive", () => $c3def6332c2749a6$export$250ffa63cdc0d034);
$parcel$export(module.exports, "Root", () => $c3def6332c2749a6$export$be92b6f5f03c0fe9);
$parcel$export(module.exports, "dispatchDiscreteCustomEvent", () => $c3def6332c2749a6$export$6d1a0317bde7de7f);




const $c3def6332c2749a6$var$NODES = [
    'a',
    'button',
    'div',
    'h2',
    'h3',
    'img',
    'li',
    'nav',
    'ol',
    'p',
    'span',
    'svg',
    'ul'
]; // Temporary while we await merge of this fix:
// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/55396
// prettier-ignore
/* -------------------------------------------------------------------------------------------------
 * Primitive
 * -----------------------------------------------------------------------------------------------*/ const $c3def6332c2749a6$export$250ffa63cdc0d034 = $c3def6332c2749a6$var$NODES.reduce((primitive, node)=>{
    const Node = /*#__PURE__*/ $iMixA$react.forwardRef((props, forwardedRef)=>{
        const { asChild: asChild , ...primitiveProps } = props;
        const Comp = asChild ? $iMixA$radixuireactslot.Slot : node;
        $iMixA$react.useEffect(()=>{
            window[Symbol.for('radix-ui')] = true;
        }, []);
        return /*#__PURE__*/ $iMixA$react.createElement(Comp, ($parcel$interopDefault($iMixA$babelruntimehelpersextends))({}, primitiveProps, {
            ref: forwardedRef
        }));
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
/* -------------------------------------------------------------------------------------------------
 * Utils
 * -----------------------------------------------------------------------------------------------*/ /**
 * Flush custom event dispatch
 * https://github.com/radix-ui/primitives/pull/1378
 *
 * React batches *all* event handlers since version 18, this introduces certain considerations when using custom event types.
 *
 * Internally, React prioritises events in the following order:
 *  - discrete
 *  - continuous
 *  - default
 *
 * https://github.com/facebook/react/blob/a8a4742f1c54493df00da648a3f9d26e3db9c8b5/packages/react-dom/src/events/ReactDOMEventListener.js#L294-L350
 *
 * `discrete` is an  important distinction as updates within these events are applied immediately.
 * React however, is not able to infer the priority of custom event types due to how they are detected internally.
 * Because of this, it's possible for updates from custom events to be unexpectedly batched when
 * dispatched by another `discrete` event.
 *
 * In order to ensure that updates from custom events are applied predictably, we need to manually flush the batch.
 * This utility should be used when dispatching a custom event from within another `discrete` event, this utility
 * is not nessesary when dispatching known event types, or if dispatching a custom type inside a non-discrete event.
 * For example:
 *
 * dispatching a known click 👎
 * target.dispatchEvent(new Event(‘click’))
 *
 * dispatching a custom type within a non-discrete event 👎
 * onScroll={(event) => event.target.dispatchEvent(new CustomEvent(‘customType’))}
 *
 * dispatching a custom type within a `discrete` event 👍
 * onPointerDown={(event) => dispatchDiscreteCustomEvent(event.target, new CustomEvent(‘customType’))}
 *
 * Note: though React classifies `focus`, `focusin` and `focusout` events as `discrete`, it's  not recommended to use
 * this utility with them. This is because it's possible for those handlers to be called implicitly during render
 * e.g. when focus is within a component as it is unmounted, or when managing focus on mount.
 */ function $c3def6332c2749a6$export$6d1a0317bde7de7f(target, event) {
    if (target) $iMixA$reactdom.flushSync(()=>target.dispatchEvent(event)
    );
}
/* -----------------------------------------------------------------------------------------------*/ const $c3def6332c2749a6$export$be92b6f5f03c0fe9 = $c3def6332c2749a6$export$250ffa63cdc0d034;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 19919:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $dAvBt$babelruntimehelpersextends = __webpack_require__(59651);
var $dAvBt$react = __webpack_require__(18038);
var $dAvBt$radixuireactcomposerefs = __webpack_require__(81447);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "Slot", () => $82dc8d030dec7549$export$8c6ed5c666ac1360);
$parcel$export(module.exports, "Slottable", () => $82dc8d030dec7549$export$d9f1ccf0bdb05d45);
$parcel$export(module.exports, "Root", () => $82dc8d030dec7549$export$be92b6f5f03c0fe9);



/* -------------------------------------------------------------------------------------------------
 * Slot
 * -----------------------------------------------------------------------------------------------*/ const $82dc8d030dec7549$export$8c6ed5c666ac1360 = /*#__PURE__*/ $dAvBt$react.forwardRef((props, forwardedRef)=>{
    const { children: children , ...slotProps } = props;
    const childrenArray = $dAvBt$react.Children.toArray(children);
    const slottable = childrenArray.find($82dc8d030dec7549$var$isSlottable);
    if (slottable) {
        // the new element to render is the one passed as a child of `Slottable`
        const newElement = slottable.props.children;
        const newChildren = childrenArray.map((child)=>{
            if (child === slottable) {
                // because the new element will be the one rendered, we are only interested
                // in grabbing its children (`newElement.props.children`)
                if ($dAvBt$react.Children.count(newElement) > 1) return $dAvBt$react.Children.only(null);
                return /*#__PURE__*/ $dAvBt$react.isValidElement(newElement) ? newElement.props.children : null;
            } else return child;
        });
        return /*#__PURE__*/ $dAvBt$react.createElement($82dc8d030dec7549$var$SlotClone, ($parcel$interopDefault($dAvBt$babelruntimehelpersextends))({}, slotProps, {
            ref: forwardedRef
        }), /*#__PURE__*/ $dAvBt$react.isValidElement(newElement) ? /*#__PURE__*/ $dAvBt$react.cloneElement(newElement, undefined, newChildren) : null);
    }
    return /*#__PURE__*/ $dAvBt$react.createElement($82dc8d030dec7549$var$SlotClone, ($parcel$interopDefault($dAvBt$babelruntimehelpersextends))({}, slotProps, {
        ref: forwardedRef
    }), children);
});
$82dc8d030dec7549$export$8c6ed5c666ac1360.displayName = 'Slot';
/* -------------------------------------------------------------------------------------------------
 * SlotClone
 * -----------------------------------------------------------------------------------------------*/ const $82dc8d030dec7549$var$SlotClone = /*#__PURE__*/ $dAvBt$react.forwardRef((props, forwardedRef)=>{
    const { children: children , ...slotProps } = props;
    if (/*#__PURE__*/ $dAvBt$react.isValidElement(children)) return /*#__PURE__*/ $dAvBt$react.cloneElement(children, {
        ...$82dc8d030dec7549$var$mergeProps(slotProps, children.props),
        ref: $dAvBt$radixuireactcomposerefs.composeRefs(forwardedRef, children.ref)
    });
    return $dAvBt$react.Children.count(children) > 1 ? $dAvBt$react.Children.only(null) : null;
});
$82dc8d030dec7549$var$SlotClone.displayName = 'SlotClone';
/* -------------------------------------------------------------------------------------------------
 * Slottable
 * -----------------------------------------------------------------------------------------------*/ const $82dc8d030dec7549$export$d9f1ccf0bdb05d45 = ({ children: children  })=>{
    return /*#__PURE__*/ $dAvBt$react.createElement($dAvBt$react.Fragment, null, children);
};
/* ---------------------------------------------------------------------------------------------- */ function $82dc8d030dec7549$var$isSlottable(child) {
    return /*#__PURE__*/ $dAvBt$react.isValidElement(child) && child.type === $82dc8d030dec7549$export$d9f1ccf0bdb05d45;
}
function $82dc8d030dec7549$var$mergeProps(slotProps, childProps) {
    // all child props should override
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName); // if it's a handler, modify the override by composing the base handler
        if (isHandler) overrideProps[propName] = (...args)=>{
            childPropValue === null || childPropValue === void 0 || childPropValue(...args);
            slotPropValue === null || slotPropValue === void 0 || slotPropValue(...args);
        };
        else if (propName === 'style') overrideProps[propName] = {
            ...slotPropValue,
            ...childPropValue
        };
        else if (propName === 'className') overrideProps[propName] = [
            slotPropValue,
            childPropValue
        ].filter(Boolean).join(' ');
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}
const $82dc8d030dec7549$export$be92b6f5f03c0fe9 = $82dc8d030dec7549$export$8c6ed5c666ac1360;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 54318:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $92muK$react = __webpack_require__(18038);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "useCallbackRef", () => $28e03942f763e819$export$25bec8c6f54ee79a);

/**
 * A custom hook that converts a callback to a ref to avoid triggering re-renders when passed as a
 * prop or avoid re-executing effects when passed as a dependency
 */ function $28e03942f763e819$export$25bec8c6f54ee79a(callback) {
    const callbackRef = $92muK$react.useRef(callback);
    $92muK$react.useEffect(()=>{
        callbackRef.current = callback;
    }); // https://github.com/facebook/react/issues/19240
    return $92muK$react.useMemo(()=>(...args)=>{
            var _callbackRef$current;
            return (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef, ...args);
        }
    , []);
}




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 62152:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $ijazI$react = __webpack_require__(18038);
var $ijazI$radixuireactusecallbackref = __webpack_require__(54318);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "useControllableState", () => $b84d42d44371bff7$export$6f32135080cb4c3);


function $b84d42d44371bff7$export$6f32135080cb4c3({ prop: prop , defaultProp: defaultProp , onChange: onChange = ()=>{}  }) {
    const [uncontrolledProp, setUncontrolledProp] = $b84d42d44371bff7$var$useUncontrolledState({
        defaultProp: defaultProp,
        onChange: onChange
    });
    const isControlled = prop !== undefined;
    const value1 = isControlled ? prop : uncontrolledProp;
    const handleChange = $ijazI$radixuireactusecallbackref.useCallbackRef(onChange);
    const setValue = $ijazI$react.useCallback((nextValue)=>{
        if (isControlled) {
            const setter = nextValue;
            const value = typeof nextValue === 'function' ? setter(prop) : nextValue;
            if (value !== prop) handleChange(value);
        } else setUncontrolledProp(nextValue);
    }, [
        isControlled,
        prop,
        setUncontrolledProp,
        handleChange
    ]);
    return [
        value1,
        setValue
    ];
}
function $b84d42d44371bff7$var$useUncontrolledState({ defaultProp: defaultProp , onChange: onChange  }) {
    const uncontrolledState = $ijazI$react.useState(defaultProp);
    const [value] = uncontrolledState;
    const prevValueRef = $ijazI$react.useRef(value);
    const handleChange = $ijazI$radixuireactusecallbackref.useCallbackRef(onChange);
    $ijazI$react.useEffect(()=>{
        if (prevValueRef.current !== value) {
            handleChange(value);
            prevValueRef.current = value;
        }
    }, [
        value,
        prevValueRef,
        handleChange
    ]);
    return uncontrolledState;
}




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 89455:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $b0gz3$react = __webpack_require__(18038);
var $b0gz3$radixuireactusecallbackref = __webpack_require__(54318);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "useEscapeKeydown", () => $24c84e9f83c4454f$export$3a72a57244d6e765);


/**
 * Listens for when the escape key is down
 */ function $24c84e9f83c4454f$export$3a72a57244d6e765(onEscapeKeyDownProp) {
    const onEscapeKeyDown = $b0gz3$radixuireactusecallbackref.useCallbackRef(onEscapeKeyDownProp);
    $b0gz3$react.useEffect(()=>{
        const handleKeyDown = (event)=>{
            if (event.key === 'Escape') onEscapeKeyDown(event);
        };
        document.addEventListener('keydown', handleKeyDown);
        return ()=>document.removeEventListener('keydown', handleKeyDown)
        ;
    }, [
        onEscapeKeyDown
    ]);
}




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 97070:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $caHyQ$react = __webpack_require__(18038);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "useLayoutEffect", () => $ca21affb0542a8a4$export$e5c5a5f917a5871c);

/**
 * On the server, React emits a warning when calling `useLayoutEffect`.
 * This is because neither `useLayoutEffect` nor `useEffect` run on the server.
 * We use this safe version which suppresses the warning by replacing it with a noop on the server.
 *
 * See: https://reactjs.org/docs/hooks-reference.html#uselayouteffect
 */ const $ca21affb0542a8a4$export$e5c5a5f917a5871c = Boolean(globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) ? $caHyQ$react.useLayoutEffect : ()=>{};




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 40461:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var React = tslib_1.__importStar(__webpack_require__(18038));
var UI_1 = __webpack_require__(23483);
var sidecar_1 = tslib_1.__importDefault(__webpack_require__(57291));
var ReactRemoveScroll = React.forwardRef(function (props, ref) { return (React.createElement(UI_1.RemoveScroll, tslib_1.__assign({}, props, { ref: ref, sideCar: sidecar_1.default }))); });
ReactRemoveScroll.classNames = UI_1.RemoveScroll.classNames;
exports["default"] = ReactRemoveScroll;


/***/ }),

/***/ 97387:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RemoveScrollSideCar = exports.getDeltaXY = exports.getTouchXY = void 0;
var tslib_1 = __webpack_require__(53265);
var React = tslib_1.__importStar(__webpack_require__(18038));
var react_remove_scroll_bar_1 = __webpack_require__(45247);
var react_style_singleton_1 = __webpack_require__(66950);
var aggresiveCapture_1 = __webpack_require__(23475);
var handleScroll_1 = __webpack_require__(91437);
var getTouchXY = function (event) {
    return 'changedTouches' in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
exports.getTouchXY = getTouchXY;
var getDeltaXY = function (event) { return [event.deltaX, event.deltaY]; };
exports.getDeltaXY = getDeltaXY;
var extractRef = function (ref) {
    return ref && 'current' in ref ? ref.current : ref;
};
var deltaCompare = function (x, y) { return x[0] === y[0] && x[1] === y[1]; };
var generateStyle = function (id) { return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n"); };
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
    var shouldPreventQueue = React.useRef([]);
    var touchStartRef = React.useRef([0, 0]);
    var activeAxis = React.useRef();
    var id = React.useState(idCounter++)[0];
    var Style = React.useState(function () { return (0, react_style_singleton_1.styleSingleton)(); })[0];
    var lastProps = React.useRef(props);
    React.useEffect(function () {
        lastProps.current = props;
    }, [props]);
    React.useEffect(function () {
        if (props.inert) {
            document.body.classList.add("block-interactivity-".concat(id));
            var allow_1 = tslib_1.__spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
            allow_1.forEach(function (el) { return el.classList.add("allow-interactivity-".concat(id)); });
            return function () {
                document.body.classList.remove("block-interactivity-".concat(id));
                allow_1.forEach(function (el) { return el.classList.remove("allow-interactivity-".concat(id)); });
            };
        }
        return;
    }, [props.inert, props.lockRef.current, props.shards]);
    var shouldCancelEvent = React.useCallback(function (event, parent) {
        if ('touches' in event && event.touches.length === 2) {
            return !lastProps.current.allowPinchZoom;
        }
        var touch = (0, exports.getTouchXY)(event);
        var touchStart = touchStartRef.current;
        var deltaX = 'deltaX' in event ? event.deltaX : touchStart[0] - touch[0];
        var deltaY = 'deltaY' in event ? event.deltaY : touchStart[1] - touch[1];
        var currentAxis;
        var target = event.target;
        var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? 'h' : 'v';
        // allow horizontal touch move on Range inputs. They will not cause any scroll
        if ('touches' in event && moveDirection === 'h' && target.type === 'range') {
            return false;
        }
        var canBeScrolledInMainDirection = (0, handleScroll_1.locationCouldBeScrolled)(moveDirection, target);
        if (!canBeScrolledInMainDirection) {
            return true;
        }
        if (canBeScrolledInMainDirection) {
            currentAxis = moveDirection;
        }
        else {
            currentAxis = moveDirection === 'v' ? 'h' : 'v';
            canBeScrolledInMainDirection = (0, handleScroll_1.locationCouldBeScrolled)(moveDirection, target);
            // other axis might be not scrollable
        }
        if (!canBeScrolledInMainDirection) {
            return false;
        }
        if (!activeAxis.current && 'changedTouches' in event && (deltaX || deltaY)) {
            activeAxis.current = currentAxis;
        }
        if (!currentAxis) {
            return true;
        }
        var cancelingAxis = activeAxis.current || currentAxis;
        return (0, handleScroll_1.handleScroll)(cancelingAxis, parent, event, cancelingAxis === 'h' ? deltaX : deltaY, true);
    }, []);
    var shouldPrevent = React.useCallback(function (_event) {
        var event = _event;
        if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
            // not the last active
            return;
        }
        var delta = 'deltaY' in event ? (0, exports.getDeltaXY)(event) : (0, exports.getTouchXY)(event);
        var sourceEvent = shouldPreventQueue.current.filter(function (e) { return e.name === event.type && e.target === event.target && deltaCompare(e.delta, delta); })[0];
        // self event, and should be canceled
        if (sourceEvent && sourceEvent.should) {
            event.preventDefault();
            return;
        }
        // outside or shard event
        if (!sourceEvent) {
            var shardNodes = (lastProps.current.shards || [])
                .map(extractRef)
                .filter(Boolean)
                .filter(function (node) { return node.contains(event.target); });
            var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
            if (shouldStop) {
                event.preventDefault();
            }
        }
    }, []);
    var shouldCancel = React.useCallback(function (name, delta, target, should) {
        var event = { name: name, delta: delta, target: target, should: should };
        shouldPreventQueue.current.push(event);
        setTimeout(function () {
            shouldPreventQueue.current = shouldPreventQueue.current.filter(function (e) { return e !== event; });
        }, 1);
    }, []);
    var scrollTouchStart = React.useCallback(function (event) {
        touchStartRef.current = (0, exports.getTouchXY)(event);
        activeAxis.current = undefined;
    }, []);
    var scrollWheel = React.useCallback(function (event) {
        shouldCancel(event.type, (0, exports.getDeltaXY)(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    var scrollTouchMove = React.useCallback(function (event) {
        shouldCancel(event.type, (0, exports.getTouchXY)(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    React.useEffect(function () {
        lockStack.push(Style);
        props.setCallbacks({
            onScrollCapture: scrollWheel,
            onWheelCapture: scrollWheel,
            onTouchMoveCapture: scrollTouchMove,
        });
        document.addEventListener('wheel', shouldPrevent, aggresiveCapture_1.nonPassive);
        document.addEventListener('touchmove', shouldPrevent, aggresiveCapture_1.nonPassive);
        document.addEventListener('touchstart', scrollTouchStart, aggresiveCapture_1.nonPassive);
        return function () {
            lockStack = lockStack.filter(function (inst) { return inst !== Style; });
            document.removeEventListener('wheel', shouldPrevent, aggresiveCapture_1.nonPassive);
            document.removeEventListener('touchmove', shouldPrevent, aggresiveCapture_1.nonPassive);
            document.removeEventListener('touchstart', scrollTouchStart, aggresiveCapture_1.nonPassive);
        };
    }, []);
    var removeScrollBar = props.removeScrollBar, inert = props.inert;
    return (React.createElement(React.Fragment, null,
        inert ? React.createElement(Style, { styles: generateStyle(id) }) : null,
        removeScrollBar ? React.createElement(react_remove_scroll_bar_1.RemoveScrollBar, { gapMode: "margin" }) : null));
}
exports.RemoveScrollSideCar = RemoveScrollSideCar;


/***/ }),

/***/ 23483:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RemoveScroll = void 0;
var tslib_1 = __webpack_require__(53265);
var React = tslib_1.__importStar(__webpack_require__(18038));
var constants_1 = __webpack_require__(20641);
var use_callback_ref_1 = __webpack_require__(67974);
var medium_1 = __webpack_require__(45854);
var nothing = function () {
    return;
};
/**
 * Removes scrollbar from the page and contain the scroll within the Lock
 */
var RemoveScroll = React.forwardRef(function (props, parentRef) {
    var ref = React.useRef(null);
    var _a = React.useState({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing,
    }), callbacks = _a[0], setCallbacks = _a[1];
    var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? 'div' : _b, rest = tslib_1.__rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]);
    var SideCar = sideCar;
    var containerRef = (0, use_callback_ref_1.useMergeRefs)([ref, parentRef]);
    var containerProps = tslib_1.__assign(tslib_1.__assign({}, rest), callbacks);
    return (React.createElement(React.Fragment, null,
        enabled && (React.createElement(SideCar, { sideCar: medium_1.effectCar, removeScrollBar: removeScrollBar, shards: shards, noIsolation: noIsolation, inert: inert, setCallbacks: setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref })),
        forwardProps ? (React.cloneElement(React.Children.only(children), tslib_1.__assign(tslib_1.__assign({}, containerProps), { ref: containerRef }))) : (React.createElement(Container, tslib_1.__assign({}, containerProps, { className: className, ref: containerRef }), children))));
});
exports.RemoveScroll = RemoveScroll;
RemoveScroll.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false,
};
RemoveScroll.classNames = {
    fullWidth: constants_1.fullWidthClassName,
    zeroRight: constants_1.zeroRightClassName,
};


/***/ }),

/***/ 23475:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.nonPassive = void 0;
var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function () {
                passiveSupported = true;
                return true;
            },
        });
        // @ts-ignore
        window.addEventListener('test', options, options);
        // @ts-ignore
        window.removeEventListener('test', options, options);
    }
    catch (err) {
        passiveSupported = false;
    }
}
exports.nonPassive = passiveSupported ? { passive: false } : false;


/***/ }),

/***/ 91437:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleScroll = exports.locationCouldBeScrolled = void 0;
var elementCouldBeVScrolled = function (node) {
    var styles = window.getComputedStyle(node);
    return (styles.overflowY !== 'hidden' && // not-not-scrollable
        !(styles.overflowY === styles.overflowX && styles.overflowY === 'visible') // scrollable
    );
};
var elementCouldBeHScrolled = function (node) {
    var styles = window.getComputedStyle(node);
    return (styles.overflowX !== 'hidden' && // not-not-scrollable
        !(styles.overflowY === styles.overflowX && styles.overflowX === 'visible') // scrollable
    );
};
var locationCouldBeScrolled = function (axis, node) {
    var current = node;
    do {
        // Skip over shadow root
        if (typeof ShadowRoot !== 'undefined' && current instanceof ShadowRoot) {
            current = current.host;
        }
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
            var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
            if (s > d) {
                return true;
            }
        }
        current = current.parentNode;
    } while (current && current !== document.body);
    return false;
};
exports.locationCouldBeScrolled = locationCouldBeScrolled;
var getVScrollVariables = function (_a) {
    var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
    return [
        scrollTop,
        scrollHeight,
        clientHeight,
    ];
};
var getHScrollVariables = function (_a) {
    var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
    return [
        scrollLeft,
        scrollWidth,
        clientWidth,
    ];
};
var elementCouldBeScrolled = function (axis, node) {
    return axis === 'v' ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function (axis, node) {
    return axis === 'v' ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function (axis, direction) {
    /**
     * If the element's direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position,
     * and then increasingly negative as you scroll towards the end of the content.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
     */
    return axis === 'h' && direction === 'rtl' ? -1 : 1;
};
var handleScroll = function (axis, endTarget, event, sourceDelta, noOverscroll) {
    var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
    var delta = directionFactor * sourceDelta;
    // find scrollable target
    var target = event.target;
    var targetInLock = endTarget.contains(target);
    var shouldCancelScroll = false;
    var isDeltaPositive = delta > 0;
    var availableScroll = 0;
    var availableScrollTop = 0;
    do {
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - directionFactor * position;
        if (position || elementScroll) {
            if (elementCouldBeScrolled(axis, target)) {
                availableScroll += elementScroll;
                availableScrollTop += position;
            }
        }
        target = target.parentNode;
    } while (
    // portaled content
    (!targetInLock && target !== document.body) ||
        // self content
        (targetInLock && (endTarget.contains(target) || endTarget === target)));
    if (isDeltaPositive && ((noOverscroll && availableScroll === 0) || (!noOverscroll && delta > availableScroll))) {
        shouldCancelScroll = true;
    }
    else if (!isDeltaPositive &&
        ((noOverscroll && availableScrollTop === 0) || (!noOverscroll && -delta > availableScrollTop))) {
        shouldCancelScroll = true;
    }
    return shouldCancelScroll;
};
exports.handleScroll = handleScroll;


/***/ }),

/***/ 70435:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RemoveScroll = void 0;
var tslib_1 = __webpack_require__(53265);
var Combination_1 = tslib_1.__importDefault(__webpack_require__(40461));
exports.RemoveScroll = Combination_1.default;


/***/ }),

/***/ 45854:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.effectCar = void 0;
var use_sidecar_1 = __webpack_require__(32145);
exports.effectCar = (0, use_sidecar_1.createSidecarMedium)();


/***/ }),

/***/ 57291:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var use_sidecar_1 = __webpack_require__(32145);
var SideEffect_1 = __webpack_require__(97387);
var medium_1 = __webpack_require__(45854);
exports["default"] = (0, use_sidecar_1.exportSidecar)(medium_1.effectCar, SideEffect_1.RemoveScrollSideCar);


/***/ }),

/***/ 63136:
/***/ ((module) => {

// The scores are arranged so that a continuous match of characters will
// result in a total score of 1.
//
// The best case, this character is a match, and either this is the start
// of the string, or the previous character was also a match.
var SCORE_CONTINUE_MATCH = 1,

    // A new match at the start of a word scores better than a new match
    // elsewhere as it's more likely that the user will type the starts
    // of fragments.
    // (Our notion of word includes CamelCase and hypen-separated, etc.)
    SCORE_WORD_JUMP = 0.9,

    // Any other match isn't ideal, but we include it for completeness.
    SCORE_CHARACTER_JUMP = 0.3,

    // If the user transposed two letters, it should be signficantly penalized.
    //
    // i.e. "ouch" is more likely than "curtain" when "uc" is typed.
    SCORE_TRANSPOSITION = 0.1,

    // If the user jumped to half-way through a subsequent word, it should be
    // very significantly penalized.
    //
    // i.e. "loes" is very unlikely to match "loch ness".
    // NOTE: this is set to 0 for superhuman right now, but we may want to revisit.
    SCORE_LONG_JUMP = 0,

    // The goodness of a match should decay slightly with each missing
    // character.
    //
    // i.e. "bad" is more likely than "bard" when "bd" is typed.
    //
    // This will not change the order of suggestions based on SCORE_* until
    // 100 characters are inserted between matches.
    PENALTY_SKIPPED = 0.999,

    // The goodness of an exact-case match should be higher than a
    // case-insensitive match by a small amount.
    //
    // i.e. "HTML" is more likely than "haml" when "HM" is typed.
    //
    // This will not change the order of suggestions based on SCORE_* until
    // 1000 characters are inserted between matches.
    PENALTY_CASE_MISMATCH = 0.9999,

    // If the word has more characters than the user typed, it should
    // be penalised slightly.
    //
    // i.e. "html" is more likely than "html5" if I type "html".
    //
    // However, it may well be the case that there's a sensible secondary
    // ordering (like alphabetical) that it makes sense to rely on when
    // there are many prefix matches, so we don't make the penalty increase
    // with the number of tokens.
    PENALTY_NOT_COMPLETE = 0.99;

var IS_GAP_REGEXP = /[\\\/\-_+.# \t"@\[\(\{&]/,
    COUNT_GAPS_REGEXP = /[\\\/\-_+.# \t"@\[\(\{&]/g;

function commandScoreInner(string, abbreviation, lowerString, lowerAbbreviation, stringIndex, abbreviationIndex) {

    if (abbreviationIndex === abbreviation.length) {
        if (stringIndex === string.length) {
            return SCORE_CONTINUE_MATCH;

        }
        return PENALTY_NOT_COMPLETE;
    }

    var abbreviationChar = lowerAbbreviation.charAt(abbreviationIndex);
    var index = lowerString.indexOf(abbreviationChar, stringIndex);
    var highScore = 0;

    var score, transposedScore, wordBreaks;

    while (index >= 0) {

        score = commandScoreInner(string, abbreviation, lowerString, lowerAbbreviation, index + 1, abbreviationIndex + 1);
        if (score > highScore) {
            if (index === stringIndex) {
                score *= SCORE_CONTINUE_MATCH;
            } else if (IS_GAP_REGEXP.test(string.charAt(index - 1))) {
                score *= SCORE_WORD_JUMP;
                wordBreaks = string.slice(stringIndex, index - 1).match(COUNT_GAPS_REGEXP);
                if (wordBreaks && stringIndex > 0) {
                    score *= Math.pow(PENALTY_SKIPPED, wordBreaks.length);
                }
            } else if (IS_GAP_REGEXP.test(string.slice(stringIndex, index - 1))) {
                score *= SCORE_LONG_JUMP;
                if (stringIndex > 0) {
                    score *= Math.pow(PENALTY_SKIPPED, index - stringIndex);
                }
            } else {
                score *= SCORE_CHARACTER_JUMP;
                if (stringIndex > 0) {
                    score *= Math.pow(PENALTY_SKIPPED, index - stringIndex);
                }
            }

            if (string.charAt(index) !== abbreviation.charAt(abbreviationIndex)) {
                score *= PENALTY_CASE_MISMATCH;
            }

        }

        if (score < SCORE_TRANSPOSITION &&
                lowerString.charAt(index - 1) === lowerAbbreviation.charAt(abbreviationIndex + 1) &&
                lowerString.charAt(index - 1) !== lowerAbbreviation.charAt(abbreviationIndex)) {
            transposedScore = commandScoreInner(string, abbreviation, lowerString, lowerAbbreviation, index + 1, abbreviationIndex + 2);

            if (transposedScore * SCORE_TRANSPOSITION > score) {
                score = transposedScore * SCORE_TRANSPOSITION;
            }
        }

        if (score > highScore) {
            highScore = score;
        }

        index = lowerString.indexOf(abbreviationChar, index + 1);
    }

    return highScore;
}

function commandScore(string, abbreviation) {
    /* NOTE:
     * in the original, we used to do the lower-casing on each recursive call, but this meant that toLowerCase()
     * was the dominating cost in the algorithm, passing both is a little ugly, but considerably faster.
     */
    return commandScoreInner(string, abbreviation, string.toLowerCase(), abbreviation.toLowerCase(), 0, 0);
}

module.exports = commandScore;


/***/ }),

/***/ 2148:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addLocale", ({
    enumerable: true,
    get: function() {
        return addLocale;
    }
}));
const _normalizetrailingslash = __webpack_require__(16089);
const addLocale = function(path) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        args[_key - 1] = arguments[_key];
    }
    if (false) {}
    return path;
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-locale.js.map


/***/ }),

/***/ 89067:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getDomainLocale", ({
    enumerable: true,
    get: function() {
        return getDomainLocale;
    }
}));
const basePath = (/* unused pure expression or super */ null && ( false || ""));
function getDomainLocale(path, locale, locales, domainLocales) {
    if (false) {} else {
        return false;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-domain-locale.js.map


/***/ }),

/***/ 27977:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
const _interop_require_default = __webpack_require__(95967);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(18038));
const _resolvehref = __webpack_require__(87782);
const _islocalurl = __webpack_require__(71109);
const _formaturl = __webpack_require__(23938);
const _utils = __webpack_require__(59232);
const _addlocale = __webpack_require__(2148);
const _routercontext = __webpack_require__(24964);
const _approutercontext = __webpack_require__(3280);
const _useintersection = __webpack_require__(48670);
const _getdomainlocale = __webpack_require__(89067);
const _addbasepath = __webpack_require__(739);
const _routerreducertypes = __webpack_require__(50549);
const prefetched = new Set();
function prefetch(router, href, as, options, appOptions, isAppRouter) {
    if (true) {
        return;
    }
    // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    if (!isAppRouter && !(0, _islocalurl.isLocalURL)(href)) {
        return;
    }
    // We should only dedupe requests when experimental.optimisticClientCache is
    // disabled.
    if (!options.bypassPrefetchedCheck) {
        const locale = typeof options.locale !== "undefined" ? options.locale : "locale" in router ? router.locale : undefined;
        const prefetchedKey = href + "%" + as + "%" + locale;
        // If we've already fetched the key, then don't prefetch it again!
        if (prefetched.has(prefetchedKey)) {
            return;
        }
        // Mark this URL as prefetched.
        prefetched.add(prefetchedKey);
    }
    const prefetchPromise = isAppRouter ? router.prefetch(href, appOptions) : router.prefetch(href, as, options);
    // Prefetch the JSON page if asked (only in the client)
    // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch
    Promise.resolve(prefetchPromise).catch((err)=>{
        if (false) {}
    });
}
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute("target");
    return target && target !== "_self" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled) {
    const { nodeName  } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === "A";
    if (isAnchorNodeName && (isModifiedEvent(e) || // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    !isAppRouter && !(0, _islocalurl.isLocalURL)(href))) {
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    const navigate = ()=>{
        // If the router is an NextRouter instance it will have `beforePopState`
        if ("beforePopState" in router) {
            router[replace ? "replace" : "push"](href, as, {
                shallow,
                locale,
                scroll
            });
        } else {
            router[replace ? "replace" : "push"](as || href, {
                forceOptimisticNavigation: !prefetchEnabled
            });
        }
    };
    if (isAppRouter) {
        _react.default.startTransition(navigate);
    } else {
        navigate();
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === "string") {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
/**
 * React Component that enables client-side transitions between routes.
 */ const Link = /*#__PURE__*/ _react.default.forwardRef(function LinkComponent(props, forwardedRef) {
    let children;
    const { href: hrefProp , as: asProp , children: childrenProp , prefetch: prefetchProp = null , passHref , replace , shallow , scroll , locale , onClick , onMouseEnter: onMouseEnterProp , onTouchStart: onTouchStartProp , legacyBehavior =true === false , ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === "string" || typeof children === "number")) {
        children = /*#__PURE__*/ _react.default.createElement("a", null, children);
    }
    const prefetchEnabled = prefetchProp !== false;
    /**
     * The possible states for prefetch are:
     * - null: this is the default "auto" mode, where we will prefetch partially if the link is in the viewport
     * - true: we will prefetch if the link is visible and prefetch the full page, not just partially
     * - false: we will not prefetch if in the viewport at all
     */ const appPrefetchKind = prefetchProp === null ? _routerreducertypes.PrefetchKind.AUTO : _routerreducertypes.PrefetchKind.FULL;
    const pagesRouter = _react.default.useContext(_routercontext.RouterContext);
    const appRouter = _react.default.useContext(_approutercontext.AppRouterContext);
    const router = pagesRouter != null ? pagesRouter : appRouter;
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    if (false) {}
    if (false) {}
    const { href , as  } = _react.default.useMemo(()=>{
        if (!pagesRouter) {
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
        const [resolvedHref, resolvedAs] = (0, _resolvehref.resolveHref)(pagesRouter, hrefProp, true);
        return {
            href: resolvedHref,
            as: asProp ? (0, _resolvehref.resolveHref)(pagesRouter, asProp) : resolvedAs || resolvedHref
        };
    }, [
        pagesRouter,
        hrefProp,
        asProp
    ]);
    const previousHref = _react.default.useRef(href);
    const previousAs = _react.default.useRef(as);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (false) {} else {
            child = _react.default.Children.only(children);
        }
    } else {
        if (false) {}
    }
    const childRef = legacyBehavior ? child && typeof child === "object" && child.ref : forwardedRef;
    const [setIntersectionRef, isVisible, resetVisible] = (0, _useintersection.useIntersection)({
        rootMargin: "200px"
    });
    const setRef = _react.default.useCallback((el)=>{
        // Before the link getting observed, check if visible state need to be reset
        if (previousAs.current !== as || previousHref.current !== href) {
            resetVisible();
            previousAs.current = as;
            previousHref.current = href;
        }
        setIntersectionRef(el);
        if (childRef) {
            if (typeof childRef === "function") childRef(el);
            else if (typeof childRef === "object") {
                childRef.current = el;
            }
        }
    }, [
        as,
        childRef,
        href,
        resetVisible,
        setIntersectionRef
    ]);
    // Prefetch the URL if we haven't already and it's visible.
    _react.default.useEffect(()=>{
        // in dev, we only prefetch on hover to avoid wasting resources as the prefetch will trigger compiling the page.
        if (false) {}
        if (!router) {
            return;
        }
        // If we don't need to prefetch the URL, don't do prefetch.
        if (!isVisible || !prefetchEnabled) {
            return;
        }
        // Prefetch the URL.
        prefetch(router, href, as, {
            locale
        }, {
            kind: appPrefetchKind
        }, isAppRouter);
    }, [
        as,
        href,
        isVisible,
        locale,
        prefetchEnabled,
        pagesRouter == null ? void 0 : pagesRouter.locale,
        router,
        isAppRouter,
        appPrefetchKind
    ]);
    const childProps = {
        ref: setRef,
        onClick (e) {
            if (false) {}
            if (!legacyBehavior && typeof onClick === "function") {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === "function") {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === "function") {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === "function") {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled && isAppRouter) {
                return;
            }
            prefetch(router, href, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            }, {
                kind: appPrefetchKind
            }, isAppRouter);
        },
        onTouchStart (e) {
            if (!legacyBehavior && typeof onTouchStartProp === "function") {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === "function") {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled && isAppRouter) {
                return;
            }
            prefetch(router, href, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            }, {
                kind: appPrefetchKind
            }, isAppRouter);
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user.
    // If the url is absolute, we can bypass the logic to prepend the domain and locale.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === "a" && !("href" in child.props)) {
        const curLocale = typeof locale !== "undefined" ? locale : pagesRouter == null ? void 0 : pagesRouter.locale;
        // we only render domain locales if we are currently on a domain locale
        // so that locale links are still visitable in development/preview envs
        const localeDomain = (pagesRouter == null ? void 0 : pagesRouter.isLocaleDomain) && (0, _getdomainlocale.getDomainLocale)(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.locales, pagesRouter == null ? void 0 : pagesRouter.domainLocales);
        childProps.href = localeDomain || (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.defaultLocale));
    }
    return legacyBehavior ? /*#__PURE__*/ _react.default.cloneElement(child, childProps) : /*#__PURE__*/ _react.default.createElement("a", {
        ...restProps,
        ...childProps
    }, children);
});
const _default = Link;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map


/***/ }),

/***/ 66460:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    requestIdleCallback: function() {
        return requestIdleCallback;
    },
    cancelIdleCallback: function() {
        return cancelIdleCallback;
    }
});
const requestIdleCallback = typeof self !== "undefined" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
    let start = Date.now();
    return self.setTimeout(function() {
        cb({
            didTimeout: false,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - start));
            }
        });
    }, 1);
};
const cancelIdleCallback = typeof self !== "undefined" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
    return clearTimeout(id);
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-idle-callback.js.map


/***/ }),

/***/ 48670:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "useIntersection", ({
    enumerable: true,
    get: function() {
        return useIntersection;
    }
}));
const _react = __webpack_require__(18038);
const _requestidlecallback = __webpack_require__(66460);
const hasIntersectionObserver = typeof IntersectionObserver === "function";
const observers = new Map();
const idList = [];
function createObserver(options) {
    const id = {
        root: options.root || null,
        margin: options.rootMargin || ""
    };
    const existing = idList.find((obj)=>obj.root === id.root && obj.margin === id.margin);
    let instance;
    if (existing) {
        instance = observers.get(existing);
        if (instance) {
            return instance;
        }
    }
    const elements = new Map();
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            const callback = elements.get(entry.target);
            const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
            if (callback && isVisible) {
                callback(isVisible);
            }
        });
    }, options);
    instance = {
        id,
        observer,
        elements
    };
    idList.push(id);
    observers.set(id, instance);
    return instance;
}
function observe(element, callback, options) {
    const { id , observer , elements  } = createObserver(options);
    elements.set(element, callback);
    observer.observe(element);
    return function unobserve() {
        elements.delete(element);
        observer.unobserve(element);
        // Destroy observer when there's nothing left to watch:
        if (elements.size === 0) {
            observer.disconnect();
            observers.delete(id);
            const index = idList.findIndex((obj)=>obj.root === id.root && obj.margin === id.margin);
            if (index > -1) {
                idList.splice(index, 1);
            }
        }
    };
}
function useIntersection(param) {
    let { rootRef , rootMargin , disabled  } = param;
    const isDisabled = disabled || !hasIntersectionObserver;
    const [visible, setVisible] = (0, _react.useState)(false);
    const elementRef = (0, _react.useRef)(null);
    const setElement = (0, _react.useCallback)((element)=>{
        elementRef.current = element;
    }, []);
    (0, _react.useEffect)(()=>{
        if (hasIntersectionObserver) {
            if (isDisabled || visible) return;
            const element = elementRef.current;
            if (element && element.tagName) {
                const unobserve = observe(element, (isVisible)=>isVisible && setVisible(isVisible), {
                    root: rootRef == null ? void 0 : rootRef.current,
                    rootMargin
                });
                return unobserve;
            }
        } else {
            if (!visible) {
                const idleCallback = (0, _requestidlecallback.requestIdleCallback)(()=>setVisible(true));
                return ()=>(0, _requestidlecallback.cancelIdleCallback)(idleCallback);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isDisabled,
        rootMargin,
        rootRef,
        visible,
        elementRef.current
    ]);
    const resetVisible = (0, _react.useCallback)(()=>{
        setVisible(false);
    }, []);
    return [
        setElement,
        visible,
        resetVisible
    ];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-intersection.js.map


/***/ }),

/***/ 31621:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(27977)


/***/ }),

/***/ 59651:
/***/ ((module) => {

function _extends() {
  module.exports = _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}
module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 25580:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ $e02a7d9cb1dc128c$export$c74125a8e3af6bb2)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95866);
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49837);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59818);









// We have resorted to returning slots directly rather than exposing primitives that can then
// be slotted like `<CollectionItem as={Slot}>…</CollectionItem>`.
// This is because we encountered issues with generic types that cannot be statically analysed
// due to creating them dynamically via createCollection.
function $e02a7d9cb1dc128c$export$c74125a8e3af6bb2(name) {
    /* -----------------------------------------------------------------------------------------------
   * CollectionProvider
   * ---------------------------------------------------------------------------------------------*/ const PROVIDER_NAME = name + 'CollectionProvider';
    const [createCollectionContext, createCollectionScope] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__/* .createContextScope */ .b)(PROVIDER_NAME);
    const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
        collectionRef: {
            current: null
        },
        itemMap: new Map()
    });
    const CollectionProvider = (props)=>{
        const { scope: scope , children: children  } = props;
        const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
        const itemMap = react__WEBPACK_IMPORTED_MODULE_0__.useRef(new Map()).current;
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(CollectionProviderImpl, {
            scope: scope,
            itemMap: itemMap,
            collectionRef: ref
        }, children);
    };
    /*#__PURE__*/ Object.assign(CollectionProvider, {
        displayName: PROVIDER_NAME
    });
    /* -----------------------------------------------------------------------------------------------
   * CollectionSlot
   * ---------------------------------------------------------------------------------------------*/ const COLLECTION_SLOT_NAME = name + 'CollectionSlot';
    const CollectionSlot = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
        const { scope: scope , children: children  } = props;
        const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
        const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__/* .useComposedRefs */ .e)(forwardedRef, context.collectionRef);
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__/* .Slot */ .g7, {
            ref: composedRefs
        }, children);
    });
    /*#__PURE__*/ Object.assign(CollectionSlot, {
        displayName: COLLECTION_SLOT_NAME
    });
    /* -----------------------------------------------------------------------------------------------
   * CollectionItem
   * ---------------------------------------------------------------------------------------------*/ const ITEM_SLOT_NAME = name + 'CollectionItemSlot';
    const ITEM_DATA_ATTR = 'data-radix-collection-item';
    const CollectionItemSlot = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
        const { scope: scope , children: children , ...itemData } = props;
        const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
        const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__/* .useComposedRefs */ .e)(forwardedRef, ref);
        const context = useCollectionContext(ITEM_SLOT_NAME, scope);
        react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
            context.itemMap.set(ref, {
                ref: ref,
                ...itemData
            });
            return ()=>void context.itemMap.delete(ref)
            ;
        });
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__/* .Slot */ .g7, {
            [ITEM_DATA_ATTR]: '',
            ref: composedRefs
        }, children);
    });
    /*#__PURE__*/ Object.assign(CollectionItemSlot, {
        displayName: ITEM_SLOT_NAME
    });
    /* -----------------------------------------------------------------------------------------------
   * useCollection
   * ---------------------------------------------------------------------------------------------*/ function useCollection(scope) {
        const context = useCollectionContext(name + 'CollectionConsumer', scope);
        const getItems = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>{
            const collectionNode = context.collectionRef.current;
            if (!collectionNode) return [];
            const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
            const items = Array.from(context.itemMap.values());
            const orderedItems = items.sort((a, b)=>orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)
            );
            return orderedItems;
        }, [
            context.collectionRef,
            context.itemMap
        ]);
        return getItems;
    }
    return [
        {
            Provider: CollectionProvider,
            Slot: CollectionSlot,
            ItemSlot: CollectionItemSlot
        },
        useCollection,
        createCollectionScope
    ];
}





//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 64416:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gm: () => (/* binding */ $f631663db3294ace$export$b39126d51d94e6f3)
/* harmony export */ });
/* unused harmony exports Provider, DirectionProvider */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);



const $f631663db3294ace$var$DirectionContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);
/* -------------------------------------------------------------------------------------------------
 * Direction
 * -----------------------------------------------------------------------------------------------*/ const $f631663db3294ace$export$c760c09fdd558351 = (props)=>{
    const { dir: dir , children: children  } = props;
    return /*#__PURE__*/ $7Gjcd$createElement($f631663db3294ace$var$DirectionContext.Provider, {
        value: dir
    }, children);
};
/* -----------------------------------------------------------------------------------------------*/ function $f631663db3294ace$export$b39126d51d94e6f3(localDir) {
    const globalDir = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)($f631663db3294ace$var$DirectionContext);
    return localDir || globalDir || 'ltr';
}
const $f631663db3294ace$export$2881499e37b75b9a = (/* unused pure expression or super */ null && ($f631663db3294ace$export$c760c09fdd558351));





//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 86820:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  oC: () => (/* binding */ $d08ef79370b62062$export$16ce288f89fa631c),
  VY: () => (/* binding */ $d08ef79370b62062$export$7c6e2c02157bb7d2),
  ZA: () => (/* binding */ $d08ef79370b62062$export$eb2fcfdbd7ba97d4),
  ck: () => (/* binding */ $d08ef79370b62062$export$6d08773d2e66f8f2),
  wU: () => (/* binding */ $d08ef79370b62062$export$c3468e2714d175fa),
  __: () => (/* binding */ $d08ef79370b62062$export$b04be29aa201d4f5),
  Uv: () => (/* binding */ $d08ef79370b62062$export$602eac185826482c),
  Ee: () => (/* binding */ $d08ef79370b62062$export$a98f0dcb43a68a25),
  Rk: () => (/* binding */ $d08ef79370b62062$export$371ab307eab489c0),
  fC: () => (/* binding */ $d08ef79370b62062$export$be92b6f5f03c0fe9),
  Z0: () => (/* binding */ $d08ef79370b62062$export$1ff3c3f08ae963c0),
  Tr: () => (/* binding */ $d08ef79370b62062$export$d7a01e11500dfb6f),
  tu: () => (/* binding */ $d08ef79370b62062$export$6d4de93b380beddf),
  fF: () => (/* binding */ $d08ef79370b62062$export$2ea8a7a591ac5eac),
  xz: () => (/* binding */ $d08ef79370b62062$export$41fb9f06171c75f4)
});

// UNUSED EXPORTS: Arrow, DropdownMenu, DropdownMenuArrow, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuItemIndicator, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, createDropdownMenuScope

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(69885);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@radix-ui/primitive/dist/index.mjs
var dist = __webpack_require__(14958);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var react_compose_refs_dist = __webpack_require__(49837);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-context/dist/index.mjs
var react_context_dist = __webpack_require__(95866);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var react_use_controllable_state_dist = __webpack_require__(64352);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-primitive/dist/index.mjs
var react_primitive_dist = __webpack_require__(15585);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-collection/dist/index.mjs
var react_collection_dist = __webpack_require__(25580);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-direction/dist/index.mjs
var react_direction_dist = __webpack_require__(64416);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs + 1 modules
var react_dismissable_layer_dist = __webpack_require__(85009);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var react_focus_guards_dist = __webpack_require__(80573);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var react_focus_scope_dist = __webpack_require__(69586);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-id/dist/index.mjs
var react_id_dist = __webpack_require__(81042);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-popper/dist/index.mjs + 4 modules
var react_popper_dist = __webpack_require__(88242);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-portal/dist/index.mjs
var react_portal_dist = __webpack_require__(23214);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-presence/dist/index.mjs
var react_presence_dist = __webpack_require__(84261);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var react_use_callback_ref_dist = __webpack_require__(76601);
;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-roving-focus/dist/index.mjs























const $d7bdfb9eb0fdf311$var$ENTRY_FOCUS = 'rovingFocusGroup.onEntryFocus';
const $d7bdfb9eb0fdf311$var$EVENT_OPTIONS = {
    bubbles: false,
    cancelable: true
};
/* -------------------------------------------------------------------------------------------------
 * RovingFocusGroup
 * -----------------------------------------------------------------------------------------------*/ const $d7bdfb9eb0fdf311$var$GROUP_NAME = 'RovingFocusGroup';
const [$d7bdfb9eb0fdf311$var$Collection, $d7bdfb9eb0fdf311$var$useCollection, $d7bdfb9eb0fdf311$var$createCollectionScope] = (0,react_collection_dist/* createCollection */.B)($d7bdfb9eb0fdf311$var$GROUP_NAME);
const [$d7bdfb9eb0fdf311$var$createRovingFocusGroupContext, $d7bdfb9eb0fdf311$export$c7109489551a4f4] = (0,react_context_dist/* createContextScope */.b)($d7bdfb9eb0fdf311$var$GROUP_NAME, [
    $d7bdfb9eb0fdf311$var$createCollectionScope
]);
const [$d7bdfb9eb0fdf311$var$RovingFocusProvider, $d7bdfb9eb0fdf311$var$useRovingFocusContext] = $d7bdfb9eb0fdf311$var$createRovingFocusGroupContext($d7bdfb9eb0fdf311$var$GROUP_NAME);
const $d7bdfb9eb0fdf311$export$8699f7c8af148338 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    return /*#__PURE__*/ (0,react_.createElement)($d7bdfb9eb0fdf311$var$Collection.Provider, {
        scope: props.__scopeRovingFocusGroup
    }, /*#__PURE__*/ (0,react_.createElement)($d7bdfb9eb0fdf311$var$Collection.Slot, {
        scope: props.__scopeRovingFocusGroup
    }, /*#__PURE__*/ (0,react_.createElement)($d7bdfb9eb0fdf311$var$RovingFocusGroupImpl, (0,esm_extends/* default */.Z)({}, props, {
        ref: forwardedRef
    }))));
});
/*#__PURE__*/ Object.assign($d7bdfb9eb0fdf311$export$8699f7c8af148338, {
    displayName: $d7bdfb9eb0fdf311$var$GROUP_NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $d7bdfb9eb0fdf311$var$RovingFocusGroupImpl = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeRovingFocusGroup: __scopeRovingFocusGroup , orientation: orientation , loop: loop = false , dir: dir , currentTabStopId: currentTabStopIdProp , defaultCurrentTabStopId: defaultCurrentTabStopId , onCurrentTabStopIdChange: onCurrentTabStopIdChange , onEntryFocus: onEntryFocus , ...groupProps } = props;
    const ref = (0,react_.useRef)(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, ref);
    const direction = (0,react_direction_dist/* useDirection */.gm)(dir);
    const [currentTabStopId = null, setCurrentTabStopId] = (0,react_use_controllable_state_dist/* useControllableState */.T)({
        prop: currentTabStopIdProp,
        defaultProp: defaultCurrentTabStopId,
        onChange: onCurrentTabStopIdChange
    });
    const [isTabbingBackOut, setIsTabbingBackOut] = (0,react_.useState)(false);
    const handleEntryFocus = (0,react_use_callback_ref_dist/* useCallbackRef */.W)(onEntryFocus);
    const getItems = $d7bdfb9eb0fdf311$var$useCollection(__scopeRovingFocusGroup);
    const isClickFocusRef = (0,react_.useRef)(false);
    const [focusableItemsCount, setFocusableItemsCount] = (0,react_.useState)(0);
    (0,react_.useEffect)(()=>{
        const node = ref.current;
        if (node) {
            node.addEventListener($d7bdfb9eb0fdf311$var$ENTRY_FOCUS, handleEntryFocus);
            return ()=>node.removeEventListener($d7bdfb9eb0fdf311$var$ENTRY_FOCUS, handleEntryFocus)
            ;
        }
    }, [
        handleEntryFocus
    ]);
    return /*#__PURE__*/ (0,react_.createElement)($d7bdfb9eb0fdf311$var$RovingFocusProvider, {
        scope: __scopeRovingFocusGroup,
        orientation: orientation,
        dir: direction,
        loop: loop,
        currentTabStopId: currentTabStopId,
        onItemFocus: (0,react_.useCallback)((tabStopId)=>setCurrentTabStopId(tabStopId)
        , [
            setCurrentTabStopId
        ]),
        onItemShiftTab: (0,react_.useCallback)(()=>setIsTabbingBackOut(true)
        , []),
        onFocusableItemAdd: (0,react_.useCallback)(()=>setFocusableItemsCount((prevCount)=>prevCount + 1
            )
        , []),
        onFocusableItemRemove: (0,react_.useCallback)(()=>setFocusableItemsCount((prevCount)=>prevCount - 1
            )
        , [])
    }, /*#__PURE__*/ (0,react_.createElement)(react_primitive_dist/* Primitive */.WV.div, (0,esm_extends/* default */.Z)({
        tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
        "data-orientation": orientation
    }, groupProps, {
        ref: composedRefs,
        style: {
            outline: 'none',
            ...props.style
        },
        onMouseDown: (0,dist/* composeEventHandlers */.M)(props.onMouseDown, ()=>{
            isClickFocusRef.current = true;
        }),
        onFocus: (0,dist/* composeEventHandlers */.M)(props.onFocus, (event)=>{
            // We normally wouldn't need this check, because we already check
            // that the focus is on the current target and not bubbling to it.
            // We do this because Safari doesn't focus buttons when clicked, and
            // instead, the wrapper will get focused and not through a bubbling event.
            const isKeyboardFocus = !isClickFocusRef.current;
            if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
                const entryFocusEvent = new CustomEvent($d7bdfb9eb0fdf311$var$ENTRY_FOCUS, $d7bdfb9eb0fdf311$var$EVENT_OPTIONS);
                event.currentTarget.dispatchEvent(entryFocusEvent);
                if (!entryFocusEvent.defaultPrevented) {
                    const items = getItems().filter((item)=>item.focusable
                    );
                    const activeItem = items.find((item)=>item.active
                    );
                    const currentItem = items.find((item)=>item.id === currentTabStopId
                    );
                    const candidateItems = [
                        activeItem,
                        currentItem,
                        ...items
                    ].filter(Boolean);
                    const candidateNodes = candidateItems.map((item)=>item.ref.current
                    );
                    $d7bdfb9eb0fdf311$var$focusFirst(candidateNodes);
                }
            }
            isClickFocusRef.current = false;
        }),
        onBlur: (0,dist/* composeEventHandlers */.M)(props.onBlur, ()=>setIsTabbingBackOut(false)
        )
    })));
});
/* -------------------------------------------------------------------------------------------------
 * RovingFocusGroupItem
 * -----------------------------------------------------------------------------------------------*/ const $d7bdfb9eb0fdf311$var$ITEM_NAME = 'RovingFocusGroupItem';
const $d7bdfb9eb0fdf311$export$ab9df7c53fe8454 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeRovingFocusGroup: __scopeRovingFocusGroup , focusable: focusable = true , active: active = false , tabStopId: tabStopId , ...itemProps } = props;
    const autoId = (0,react_id_dist/* useId */.M)();
    const id = tabStopId || autoId;
    const context = $d7bdfb9eb0fdf311$var$useRovingFocusContext($d7bdfb9eb0fdf311$var$ITEM_NAME, __scopeRovingFocusGroup);
    const isCurrentTabStop = context.currentTabStopId === id;
    const getItems = $d7bdfb9eb0fdf311$var$useCollection(__scopeRovingFocusGroup);
    const { onFocusableItemAdd: onFocusableItemAdd , onFocusableItemRemove: onFocusableItemRemove  } = context;
    (0,react_.useEffect)(()=>{
        if (focusable) {
            onFocusableItemAdd();
            return ()=>onFocusableItemRemove()
            ;
        }
    }, [
        focusable,
        onFocusableItemAdd,
        onFocusableItemRemove
    ]);
    return /*#__PURE__*/ (0,react_.createElement)($d7bdfb9eb0fdf311$var$Collection.ItemSlot, {
        scope: __scopeRovingFocusGroup,
        id: id,
        focusable: focusable,
        active: active
    }, /*#__PURE__*/ (0,react_.createElement)(react_primitive_dist/* Primitive */.WV.span, (0,esm_extends/* default */.Z)({
        tabIndex: isCurrentTabStop ? 0 : -1,
        "data-orientation": context.orientation
    }, itemProps, {
        ref: forwardedRef,
        onMouseDown: (0,dist/* composeEventHandlers */.M)(props.onMouseDown, (event)=>{
            // We prevent focusing non-focusable items on `mousedown`.
            // Even though the item has tabIndex={-1}, that only means take it out of the tab order.
            if (!focusable) event.preventDefault(); // Safari doesn't focus a button when clicked so we run our logic on mousedown also
            else context.onItemFocus(id);
        }),
        onFocus: (0,dist/* composeEventHandlers */.M)(props.onFocus, ()=>context.onItemFocus(id)
        ),
        onKeyDown: (0,dist/* composeEventHandlers */.M)(props.onKeyDown, (event)=>{
            if (event.key === 'Tab' && event.shiftKey) {
                context.onItemShiftTab();
                return;
            }
            if (event.target !== event.currentTarget) return;
            const focusIntent = $d7bdfb9eb0fdf311$var$getFocusIntent(event, context.orientation, context.dir);
            if (focusIntent !== undefined) {
                event.preventDefault();
                const items = getItems().filter((item)=>item.focusable
                );
                let candidateNodes = items.map((item)=>item.ref.current
                );
                if (focusIntent === 'last') candidateNodes.reverse();
                else if (focusIntent === 'prev' || focusIntent === 'next') {
                    if (focusIntent === 'prev') candidateNodes.reverse();
                    const currentIndex = candidateNodes.indexOf(event.currentTarget);
                    candidateNodes = context.loop ? $d7bdfb9eb0fdf311$var$wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
                }
                /**
         * Imperative focus during keydown is risky so we prevent React's batching updates
         * to avoid potential bugs. See: https://github.com/facebook/react/issues/20332
         */ setTimeout(()=>$d7bdfb9eb0fdf311$var$focusFirst(candidateNodes)
                );
            }
        })
    })));
});
/*#__PURE__*/ Object.assign($d7bdfb9eb0fdf311$export$ab9df7c53fe8454, {
    displayName: $d7bdfb9eb0fdf311$var$ITEM_NAME
});
/* -----------------------------------------------------------------------------------------------*/ // prettier-ignore
const $d7bdfb9eb0fdf311$var$MAP_KEY_TO_FOCUS_INTENT = {
    ArrowLeft: 'prev',
    ArrowUp: 'prev',
    ArrowRight: 'next',
    ArrowDown: 'next',
    PageUp: 'first',
    Home: 'first',
    PageDown: 'last',
    End: 'last'
};
function $d7bdfb9eb0fdf311$var$getDirectionAwareKey(key, dir) {
    if (dir !== 'rtl') return key;
    return key === 'ArrowLeft' ? 'ArrowRight' : key === 'ArrowRight' ? 'ArrowLeft' : key;
}
function $d7bdfb9eb0fdf311$var$getFocusIntent(event, orientation, dir) {
    const key = $d7bdfb9eb0fdf311$var$getDirectionAwareKey(event.key, dir);
    if (orientation === 'vertical' && [
        'ArrowLeft',
        'ArrowRight'
    ].includes(key)) return undefined;
    if (orientation === 'horizontal' && [
        'ArrowUp',
        'ArrowDown'
    ].includes(key)) return undefined;
    return $d7bdfb9eb0fdf311$var$MAP_KEY_TO_FOCUS_INTENT[key];
}
function $d7bdfb9eb0fdf311$var$focusFirst(candidates) {
    const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
    for (const candidate of candidates){
        // if focus is already where we want to go, we don't want to keep going through the candidates
        if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
        candidate.focus();
        if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
    }
}
/**
 * Wraps an array around itself at a given start index
 * Example: `wrapArray(['a', 'b', 'c', 'd'], 2) === ['c', 'd', 'a', 'b']`
 */ function $d7bdfb9eb0fdf311$var$wrapArray(array, startIndex) {
    return array.map((_, index)=>array[(startIndex + index) % array.length]
    );
}
const $d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9 = $d7bdfb9eb0fdf311$export$8699f7c8af148338;
const $d7bdfb9eb0fdf311$export$6d08773d2e66f8f2 = $d7bdfb9eb0fdf311$export$ab9df7c53fe8454;





//# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ./node_modules/@radix-ui/react-slot/dist/index.mjs
var react_slot_dist = __webpack_require__(59818);
// EXTERNAL MODULE: ./node_modules/aria-hidden/dist/es5/index.js
var es5 = __webpack_require__(36860);
// EXTERNAL MODULE: ./node_modules/react-remove-scroll/dist/es5/index.js
var dist_es5 = __webpack_require__(88162);
;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-menu/dist/index.mjs











































const $6cc32821e9371a1c$var$SELECTION_KEYS = [
    'Enter',
    ' '
];
const $6cc32821e9371a1c$var$FIRST_KEYS = [
    'ArrowDown',
    'PageUp',
    'Home'
];
const $6cc32821e9371a1c$var$LAST_KEYS = [
    'ArrowUp',
    'PageDown',
    'End'
];
const $6cc32821e9371a1c$var$FIRST_LAST_KEYS = [
    ...$6cc32821e9371a1c$var$FIRST_KEYS,
    ...$6cc32821e9371a1c$var$LAST_KEYS
];
const $6cc32821e9371a1c$var$SUB_OPEN_KEYS = {
    ltr: [
        ...$6cc32821e9371a1c$var$SELECTION_KEYS,
        'ArrowRight'
    ],
    rtl: [
        ...$6cc32821e9371a1c$var$SELECTION_KEYS,
        'ArrowLeft'
    ]
};
const $6cc32821e9371a1c$var$SUB_CLOSE_KEYS = {
    ltr: [
        'ArrowLeft'
    ],
    rtl: [
        'ArrowRight'
    ]
};
/* -------------------------------------------------------------------------------------------------
 * Menu
 * -----------------------------------------------------------------------------------------------*/ const $6cc32821e9371a1c$var$MENU_NAME = 'Menu';
const [$6cc32821e9371a1c$var$Collection, $6cc32821e9371a1c$var$useCollection, $6cc32821e9371a1c$var$createCollectionScope] = (0,react_collection_dist/* createCollection */.B)($6cc32821e9371a1c$var$MENU_NAME);
const [$6cc32821e9371a1c$var$createMenuContext, $6cc32821e9371a1c$export$4027731b685e72eb] = (0,react_context_dist/* createContextScope */.b)($6cc32821e9371a1c$var$MENU_NAME, [
    $6cc32821e9371a1c$var$createCollectionScope,
    react_popper_dist/* createPopperScope */.D7,
    $d7bdfb9eb0fdf311$export$c7109489551a4f4
]);
const $6cc32821e9371a1c$var$usePopperScope = (0,react_popper_dist/* createPopperScope */.D7)();
const $6cc32821e9371a1c$var$useRovingFocusGroupScope = $d7bdfb9eb0fdf311$export$c7109489551a4f4();
const [$6cc32821e9371a1c$var$MenuProvider, $6cc32821e9371a1c$var$useMenuContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$MENU_NAME);
const [$6cc32821e9371a1c$var$MenuRootProvider, $6cc32821e9371a1c$var$useMenuRootContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$MENU_NAME);
const $6cc32821e9371a1c$export$d9b273488cd8ce6f = (props)=>{
    const { __scopeMenu: __scopeMenu , open: open = false , children: children , dir: dir , onOpenChange: onOpenChange , modal: modal = true  } = props;
    const popperScope = $6cc32821e9371a1c$var$usePopperScope(__scopeMenu);
    const [content, setContent] = (0,react_.useState)(null);
    const isUsingKeyboardRef = (0,react_.useRef)(false);
    const handleOpenChange = (0,react_use_callback_ref_dist/* useCallbackRef */.W)(onOpenChange);
    const direction = (0,react_direction_dist/* useDirection */.gm)(dir);
    (0,react_.useEffect)(()=>{
        // Capture phase ensures we set the boolean before any side effects execute
        // in response to the key or pointer event as they might depend on this value.
        const handleKeyDown = ()=>{
            isUsingKeyboardRef.current = true;
            document.addEventListener('pointerdown', handlePointer, {
                capture: true,
                once: true
            });
            document.addEventListener('pointermove', handlePointer, {
                capture: true,
                once: true
            });
        };
        const handlePointer = ()=>isUsingKeyboardRef.current = false
        ;
        document.addEventListener('keydown', handleKeyDown, {
            capture: true
        });
        return ()=>{
            document.removeEventListener('keydown', handleKeyDown, {
                capture: true
            });
            document.removeEventListener('pointerdown', handlePointer, {
                capture: true
            });
            document.removeEventListener('pointermove', handlePointer, {
                capture: true
            });
        };
    }, []);
    return /*#__PURE__*/ (0,react_.createElement)(react_popper_dist/* Root */.fC, popperScope, /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$var$MenuProvider, {
        scope: __scopeMenu,
        open: open,
        onOpenChange: handleOpenChange,
        content: content,
        onContentChange: setContent
    }, /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$var$MenuRootProvider, {
        scope: __scopeMenu,
        onClose: (0,react_.useCallback)(()=>handleOpenChange(false)
        , [
            handleOpenChange
        ]),
        isUsingKeyboardRef: isUsingKeyboardRef,
        dir: direction,
        modal: modal
    }, children)));
};
/*#__PURE__*/ Object.assign($6cc32821e9371a1c$export$d9b273488cd8ce6f, {
    displayName: $6cc32821e9371a1c$var$MENU_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuAnchor
 * -----------------------------------------------------------------------------------------------*/ const $6cc32821e9371a1c$var$ANCHOR_NAME = 'MenuAnchor';
const $6cc32821e9371a1c$export$9fa5ebd18bee4d43 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeMenu: __scopeMenu , ...anchorProps } = props;
    const popperScope = $6cc32821e9371a1c$var$usePopperScope(__scopeMenu);
    return /*#__PURE__*/ (0,react_.createElement)(react_popper_dist/* Anchor */.ee, (0,esm_extends/* default */.Z)({}, popperScope, anchorProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($6cc32821e9371a1c$export$9fa5ebd18bee4d43, {
    displayName: $6cc32821e9371a1c$var$ANCHOR_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuPortal
 * -----------------------------------------------------------------------------------------------*/ const $6cc32821e9371a1c$var$PORTAL_NAME = 'MenuPortal';
const [$6cc32821e9371a1c$var$PortalProvider, $6cc32821e9371a1c$var$usePortalContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$PORTAL_NAME, {
    forceMount: undefined
});
const $6cc32821e9371a1c$export$793392f970497feb = (props)=>{
    const { __scopeMenu: __scopeMenu , forceMount: forceMount , children: children , container: container  } = props;
    const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$PORTAL_NAME, __scopeMenu);
    return /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$var$PortalProvider, {
        scope: __scopeMenu,
        forceMount: forceMount
    }, /*#__PURE__*/ (0,react_.createElement)(react_presence_dist/* Presence */.z, {
        present: forceMount || context.open
    }, /*#__PURE__*/ (0,react_.createElement)(react_portal_dist/* Portal */.h, {
        asChild: true,
        container: container
    }, children)));
};
/*#__PURE__*/ Object.assign($6cc32821e9371a1c$export$793392f970497feb, {
    displayName: $6cc32821e9371a1c$var$PORTAL_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuContent
 * -----------------------------------------------------------------------------------------------*/ const $6cc32821e9371a1c$var$CONTENT_NAME = 'MenuContent';
const [$6cc32821e9371a1c$var$MenuContentProvider, $6cc32821e9371a1c$var$useMenuContentContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$CONTENT_NAME);
const $6cc32821e9371a1c$export$479f0f2f71193efe = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const portalContext = $6cc32821e9371a1c$var$usePortalContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
    const { forceMount: forceMount = portalContext.forceMount , ...contentProps } = props;
    const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
    const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
    return /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$var$Collection.Provider, {
        scope: props.__scopeMenu
    }, /*#__PURE__*/ (0,react_.createElement)(react_presence_dist/* Presence */.z, {
        present: forceMount || context.open
    }, /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$var$Collection.Slot, {
        scope: props.__scopeMenu
    }, rootContext.modal ? /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$var$MenuRootContentModal, (0,esm_extends/* default */.Z)({}, contentProps, {
        ref: forwardedRef
    })) : /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$var$MenuRootContentNonModal, (0,esm_extends/* default */.Z)({}, contentProps, {
        ref: forwardedRef
    })))));
});
/* ---------------------------------------------------------------------------------------------- */ const $6cc32821e9371a1c$var$MenuRootContentModal = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
    const ref = (0,react_.useRef)(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, ref); // Hide everything from ARIA except the `MenuContent`
    (0,react_.useEffect)(()=>{
        const content = ref.current;
        if (content) return (0,es5.hideOthers)(content);
    }, []);
    return /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$var$MenuContentImpl, (0,esm_extends/* default */.Z)({}, props, {
        ref: composedRefs // we make sure we're not trapping once it's been closed
        ,
        trapFocus: context.open // make sure to only disable pointer events when open
        ,
        disableOutsidePointerEvents: context.open,
        disableOutsideScroll: true // When focus is trapped, a `focusout` event may still happen.
        ,
        onFocusOutside: (0,dist/* composeEventHandlers */.M)(props.onFocusOutside, (event)=>event.preventDefault()
        , {
            checkForDefaultPrevented: false
        }),
        onDismiss: ()=>context.onOpenChange(false)
    }));
});
const $6cc32821e9371a1c$var$MenuRootContentNonModal = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
    return /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$var$MenuContentImpl, (0,esm_extends/* default */.Z)({}, props, {
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        disableOutsideScroll: false,
        onDismiss: ()=>context.onOpenChange(false)
    }));
});
/* ---------------------------------------------------------------------------------------------- */ const $6cc32821e9371a1c$var$MenuContentImpl = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeMenu: __scopeMenu , loop: loop = false , trapFocus: trapFocus , onOpenAutoFocus: onOpenAutoFocus , onCloseAutoFocus: onCloseAutoFocus , disableOutsidePointerEvents: disableOutsidePointerEvents , onEntryFocus: onEntryFocus , onEscapeKeyDown: onEscapeKeyDown , onPointerDownOutside: onPointerDownOutside , onFocusOutside: onFocusOutside , onInteractOutside: onInteractOutside , onDismiss: onDismiss , disableOutsideScroll: disableOutsideScroll , ...contentProps } = props;
    const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, __scopeMenu);
    const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$CONTENT_NAME, __scopeMenu);
    const popperScope = $6cc32821e9371a1c$var$usePopperScope(__scopeMenu);
    const rovingFocusGroupScope = $6cc32821e9371a1c$var$useRovingFocusGroupScope(__scopeMenu);
    const getItems = $6cc32821e9371a1c$var$useCollection(__scopeMenu);
    const [currentItemId, setCurrentItemId] = (0,react_.useState)(null);
    const contentRef = (0,react_.useRef)(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, contentRef, context.onContentChange);
    const timerRef = (0,react_.useRef)(0);
    const searchRef = (0,react_.useRef)('');
    const pointerGraceTimerRef = (0,react_.useRef)(0);
    const pointerGraceIntentRef = (0,react_.useRef)(null);
    const pointerDirRef = (0,react_.useRef)('right');
    const lastPointerXRef = (0,react_.useRef)(0);
    const ScrollLockWrapper = disableOutsideScroll ? dist_es5/* RemoveScroll */.f : react_.Fragment;
    const scrollLockWrapperProps = disableOutsideScroll ? {
        as: react_slot_dist/* Slot */.g7,
        allowPinchZoom: true
    } : undefined;
    const handleTypeaheadSearch = (key)=>{
        var _items$find, _items$find2;
        const search = searchRef.current + key;
        const items = getItems().filter((item)=>!item.disabled
        );
        const currentItem = document.activeElement;
        const currentMatch = (_items$find = items.find((item)=>item.ref.current === currentItem
        )) === null || _items$find === void 0 ? void 0 : _items$find.textValue;
        const values = items.map((item)=>item.textValue
        );
        const nextMatch = $6cc32821e9371a1c$var$getNextMatch(values, search, currentMatch);
        const newItem = (_items$find2 = items.find((item)=>item.textValue === nextMatch
        )) === null || _items$find2 === void 0 ? void 0 : _items$find2.ref.current; // Reset `searchRef` 1 second after it was last updated
        (function updateSearch(value) {
            searchRef.current = value;
            window.clearTimeout(timerRef.current);
            if (value !== '') timerRef.current = window.setTimeout(()=>updateSearch('')
            , 1000);
        })(search);
        if (newItem) /**
       * Imperative focus during keydown is risky so we prevent React's batching updates
       * to avoid potential bugs. See: https://github.com/facebook/react/issues/20332
       */ setTimeout(()=>newItem.focus()
        );
    };
    (0,react_.useEffect)(()=>{
        return ()=>window.clearTimeout(timerRef.current)
        ;
    }, []); // Make sure the whole tree has focus guards as our `MenuContent` may be
    // the last element in the DOM (beacuse of the `Portal`)
    (0,react_focus_guards_dist/* useFocusGuards */.EW)();
    const isPointerMovingToSubmenu = (0,react_.useCallback)((event)=>{
        var _pointerGraceIntentRe, _pointerGraceIntentRe2;
        const isMovingTowards = pointerDirRef.current === ((_pointerGraceIntentRe = pointerGraceIntentRef.current) === null || _pointerGraceIntentRe === void 0 ? void 0 : _pointerGraceIntentRe.side);
        return isMovingTowards && $6cc32821e9371a1c$var$isPointerInGraceArea(event, (_pointerGraceIntentRe2 = pointerGraceIntentRef.current) === null || _pointerGraceIntentRe2 === void 0 ? void 0 : _pointerGraceIntentRe2.area);
    }, []);
    return /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$var$MenuContentProvider, {
        scope: __scopeMenu,
        searchRef: searchRef,
        onItemEnter: (0,react_.useCallback)((event)=>{
            if (isPointerMovingToSubmenu(event)) event.preventDefault();
        }, [
            isPointerMovingToSubmenu
        ]),
        onItemLeave: (0,react_.useCallback)((event)=>{
            var _contentRef$current;
            if (isPointerMovingToSubmenu(event)) return;
            (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 || _contentRef$current.focus();
            setCurrentItemId(null);
        }, [
            isPointerMovingToSubmenu
        ]),
        onTriggerLeave: (0,react_.useCallback)((event)=>{
            if (isPointerMovingToSubmenu(event)) event.preventDefault();
        }, [
            isPointerMovingToSubmenu
        ]),
        pointerGraceTimerRef: pointerGraceTimerRef,
        onPointerGraceIntentChange: (0,react_.useCallback)((intent)=>{
            pointerGraceIntentRef.current = intent;
        }, [])
    }, /*#__PURE__*/ (0,react_.createElement)(ScrollLockWrapper, scrollLockWrapperProps, /*#__PURE__*/ (0,react_.createElement)(react_focus_scope_dist/* FocusScope */.M, {
        asChild: true,
        trapped: trapFocus,
        onMountAutoFocus: (0,dist/* composeEventHandlers */.M)(onOpenAutoFocus, (event)=>{
            var _contentRef$current2;
            // when opening, explicitly focus the content area only and leave
            // `onEntryFocus` in  control of focusing first item
            event.preventDefault();
            (_contentRef$current2 = contentRef.current) === null || _contentRef$current2 === void 0 || _contentRef$current2.focus();
        }),
        onUnmountAutoFocus: onCloseAutoFocus
    }, /*#__PURE__*/ (0,react_.createElement)(react_dismissable_layer_dist/* DismissableLayer */.XB, {
        asChild: true,
        disableOutsidePointerEvents: disableOutsidePointerEvents,
        onEscapeKeyDown: onEscapeKeyDown,
        onPointerDownOutside: onPointerDownOutside,
        onFocusOutside: onFocusOutside,
        onInteractOutside: onInteractOutside,
        onDismiss: onDismiss
    }, /*#__PURE__*/ (0,react_.createElement)($d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9, (0,esm_extends/* default */.Z)({
        asChild: true
    }, rovingFocusGroupScope, {
        dir: rootContext.dir,
        orientation: "vertical",
        loop: loop,
        currentTabStopId: currentItemId,
        onCurrentTabStopIdChange: setCurrentItemId,
        onEntryFocus: (0,dist/* composeEventHandlers */.M)(onEntryFocus, (event)=>{
            // only focus first item when using keyboard
            if (!rootContext.isUsingKeyboardRef.current) event.preventDefault();
        })
    }), /*#__PURE__*/ (0,react_.createElement)(react_popper_dist/* Content */.VY, (0,esm_extends/* default */.Z)({
        role: "menu",
        "aria-orientation": "vertical",
        "data-state": $6cc32821e9371a1c$var$getOpenState(context.open),
        "data-radix-menu-content": "",
        dir: rootContext.dir
    }, popperScope, contentProps, {
        ref: composedRefs,
        style: {
            outline: 'none',
            ...contentProps.style
        },
        onKeyDown: (0,dist/* composeEventHandlers */.M)(contentProps.onKeyDown, (event)=>{
            // submenu key events bubble through portals. We only care about keys in this menu.
            const target = event.target;
            const isKeyDownInside = target.closest('[data-radix-menu-content]') === event.currentTarget;
            const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
            const isCharacterKey = event.key.length === 1;
            if (isKeyDownInside) {
                // menus should not be navigated using tab key so we prevent it
                if (event.key === 'Tab') event.preventDefault();
                if (!isModifierKey && isCharacterKey) handleTypeaheadSearch(event.key);
            } // focus first/last item based on key pressed
            const content = contentRef.current;
            if (event.target !== content) return;
            if (!$6cc32821e9371a1c$var$FIRST_LAST_KEYS.includes(event.key)) return;
            event.preventDefault();
            const items = getItems().filter((item)=>!item.disabled
            );
            const candidateNodes = items.map((item)=>item.ref.current
            );
            if ($6cc32821e9371a1c$var$LAST_KEYS.includes(event.key)) candidateNodes.reverse();
            $6cc32821e9371a1c$var$focusFirst(candidateNodes);
        }),
        onBlur: (0,dist/* composeEventHandlers */.M)(props.onBlur, (event)=>{
            // clear search buffer when leaving the menu
            if (!event.currentTarget.contains(event.target)) {
                window.clearTimeout(timerRef.current);
                searchRef.current = '';
            }
        }),
        onPointerMove: (0,dist/* composeEventHandlers */.M)(props.onPointerMove, $6cc32821e9371a1c$var$whenMouse((event)=>{
            const target = event.target;
            const pointerXHasChanged = lastPointerXRef.current !== event.clientX; // We don't use `event.movementX` for this check because Safari will
            // always return `0` on a pointer event.
            if (event.currentTarget.contains(target) && pointerXHasChanged) {
                const newDir = event.clientX > lastPointerXRef.current ? 'right' : 'left';
                pointerDirRef.current = newDir;
                lastPointerXRef.current = event.clientX;
            }
        }))
    })))))));
});
/*#__PURE__*/ Object.assign($6cc32821e9371a1c$export$479f0f2f71193efe, {
    displayName: $6cc32821e9371a1c$var$CONTENT_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuGroup
 * -----------------------------------------------------------------------------------------------*/ const $6cc32821e9371a1c$var$GROUP_NAME = 'MenuGroup';
const $6cc32821e9371a1c$export$22a631d1f72787bb = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeMenu: __scopeMenu , ...groupProps } = props;
    return /*#__PURE__*/ (0,react_.createElement)(react_primitive_dist/* Primitive */.WV.div, (0,esm_extends/* default */.Z)({
        role: "group"
    }, groupProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($6cc32821e9371a1c$export$22a631d1f72787bb, {
    displayName: $6cc32821e9371a1c$var$GROUP_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuLabel
 * -----------------------------------------------------------------------------------------------*/ const $6cc32821e9371a1c$var$LABEL_NAME = 'MenuLabel';
const $6cc32821e9371a1c$export$dd37bec0e8a99143 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeMenu: __scopeMenu , ...labelProps } = props;
    return /*#__PURE__*/ (0,react_.createElement)(react_primitive_dist/* Primitive */.WV.div, (0,esm_extends/* default */.Z)({}, labelProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($6cc32821e9371a1c$export$dd37bec0e8a99143, {
    displayName: $6cc32821e9371a1c$var$LABEL_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuItem
 * -----------------------------------------------------------------------------------------------*/ const $6cc32821e9371a1c$var$ITEM_NAME = 'MenuItem';
const $6cc32821e9371a1c$var$ITEM_SELECT = 'menu.itemSelect';
const $6cc32821e9371a1c$export$2ce376c2cc3355c8 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { disabled: disabled = false , onSelect: onSelect , ...itemProps } = props;
    const ref = (0,react_.useRef)(null);
    const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$ITEM_NAME, props.__scopeMenu);
    const contentContext = $6cc32821e9371a1c$var$useMenuContentContext($6cc32821e9371a1c$var$ITEM_NAME, props.__scopeMenu);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, ref);
    const isPointerDownRef = (0,react_.useRef)(false);
    const handleSelect = ()=>{
        const menuItem = ref.current;
        if (!disabled && menuItem) {
            const itemSelectEvent = new CustomEvent($6cc32821e9371a1c$var$ITEM_SELECT, {
                bubbles: true,
                cancelable: true
            });
            menuItem.addEventListener($6cc32821e9371a1c$var$ITEM_SELECT, (event)=>onSelect === null || onSelect === void 0 ? void 0 : onSelect(event)
            , {
                once: true
            });
            (0,react_primitive_dist/* dispatchDiscreteCustomEvent */.jH)(menuItem, itemSelectEvent);
            if (itemSelectEvent.defaultPrevented) isPointerDownRef.current = false;
            else rootContext.onClose();
        }
    };
    return /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$var$MenuItemImpl, (0,esm_extends/* default */.Z)({}, itemProps, {
        ref: composedRefs,
        disabled: disabled,
        onClick: (0,dist/* composeEventHandlers */.M)(props.onClick, handleSelect),
        onPointerDown: (event)=>{
            var _props$onPointerDown;
            (_props$onPointerDown = props.onPointerDown) === null || _props$onPointerDown === void 0 || _props$onPointerDown.call(props, event);
            isPointerDownRef.current = true;
        },
        onPointerUp: (0,dist/* composeEventHandlers */.M)(props.onPointerUp, (event)=>{
            var _event$currentTarget;
            // Pointer down can move to a different menu item which should activate it on pointer up.
            // We dispatch a click for selection to allow composition with click based triggers and to
            // prevent Firefox from getting stuck in text selection mode when the menu closes.
            if (!isPointerDownRef.current) (_event$currentTarget = event.currentTarget) === null || _event$currentTarget === void 0 || _event$currentTarget.click();
        }),
        onKeyDown: (0,dist/* composeEventHandlers */.M)(props.onKeyDown, (event)=>{
            const isTypingAhead = contentContext.searchRef.current !== '';
            if (disabled || isTypingAhead && event.key === ' ') return;
            if ($6cc32821e9371a1c$var$SELECTION_KEYS.includes(event.key)) {
                event.currentTarget.click();
                /**
         * We prevent default browser behaviour for selection keys as they should trigger
         * a selection only:
         * - prevents space from scrolling the page.
         * - if keydown causes focus to move, prevents keydown from firing on the new target.
         */ event.preventDefault();
            }
        })
    }));
});
/*#__PURE__*/ Object.assign($6cc32821e9371a1c$export$2ce376c2cc3355c8, {
    displayName: $6cc32821e9371a1c$var$ITEM_NAME
});
/* ---------------------------------------------------------------------------------------------- */ const $6cc32821e9371a1c$var$MenuItemImpl = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeMenu: __scopeMenu , disabled: disabled = false , textValue: textValue , ...itemProps } = props;
    const contentContext = $6cc32821e9371a1c$var$useMenuContentContext($6cc32821e9371a1c$var$ITEM_NAME, __scopeMenu);
    const rovingFocusGroupScope = $6cc32821e9371a1c$var$useRovingFocusGroupScope(__scopeMenu);
    const ref = (0,react_.useRef)(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, ref);
    const [isFocused, setIsFocused] = (0,react_.useState)(false); // get the item's `.textContent` as default strategy for typeahead `textValue`
    const [textContent, setTextContent] = (0,react_.useState)('');
    (0,react_.useEffect)(()=>{
        const menuItem = ref.current;
        if (menuItem) {
            var _menuItem$textContent;
            setTextContent(((_menuItem$textContent = menuItem.textContent) !== null && _menuItem$textContent !== void 0 ? _menuItem$textContent : '').trim());
        }
    }, [
        itemProps.children
    ]);
    return /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$var$Collection.ItemSlot, {
        scope: __scopeMenu,
        disabled: disabled,
        textValue: textValue !== null && textValue !== void 0 ? textValue : textContent
    }, /*#__PURE__*/ (0,react_.createElement)($d7bdfb9eb0fdf311$export$6d08773d2e66f8f2, (0,esm_extends/* default */.Z)({
        asChild: true
    }, rovingFocusGroupScope, {
        focusable: !disabled
    }), /*#__PURE__*/ (0,react_.createElement)(react_primitive_dist/* Primitive */.WV.div, (0,esm_extends/* default */.Z)({
        role: "menuitem",
        "data-highlighted": isFocused ? '' : undefined,
        "aria-disabled": disabled || undefined,
        "data-disabled": disabled ? '' : undefined
    }, itemProps, {
        ref: composedRefs,
        onPointerMove: (0,dist/* composeEventHandlers */.M)(props.onPointerMove, $6cc32821e9371a1c$var$whenMouse((event)=>{
            if (disabled) contentContext.onItemLeave(event);
            else {
                contentContext.onItemEnter(event);
                if (!event.defaultPrevented) {
                    const item = event.currentTarget;
                    item.focus();
                }
            }
        })),
        onPointerLeave: (0,dist/* composeEventHandlers */.M)(props.onPointerLeave, $6cc32821e9371a1c$var$whenMouse((event)=>contentContext.onItemLeave(event)
        )),
        onFocus: (0,dist/* composeEventHandlers */.M)(props.onFocus, ()=>setIsFocused(true)
        ),
        onBlur: (0,dist/* composeEventHandlers */.M)(props.onBlur, ()=>setIsFocused(false)
        )
    }))));
});
/* -------------------------------------------------------------------------------------------------
 * MenuCheckboxItem
 * -----------------------------------------------------------------------------------------------*/ const $6cc32821e9371a1c$var$CHECKBOX_ITEM_NAME = 'MenuCheckboxItem';
const $6cc32821e9371a1c$export$f6f243521332502d = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { checked: checked = false , onCheckedChange: onCheckedChange , ...checkboxItemProps } = props;
    return /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$var$ItemIndicatorProvider, {
        scope: props.__scopeMenu,
        checked: checked
    }, /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$export$2ce376c2cc3355c8, (0,esm_extends/* default */.Z)({
        role: "menuitemcheckbox",
        "aria-checked": $6cc32821e9371a1c$var$isIndeterminate(checked) ? 'mixed' : checked
    }, checkboxItemProps, {
        ref: forwardedRef,
        "data-state": $6cc32821e9371a1c$var$getCheckedState(checked),
        onSelect: (0,dist/* composeEventHandlers */.M)(checkboxItemProps.onSelect, ()=>onCheckedChange === null || onCheckedChange === void 0 ? void 0 : onCheckedChange($6cc32821e9371a1c$var$isIndeterminate(checked) ? true : !checked)
        , {
            checkForDefaultPrevented: false
        })
    })));
});
/*#__PURE__*/ Object.assign($6cc32821e9371a1c$export$f6f243521332502d, {
    displayName: $6cc32821e9371a1c$var$CHECKBOX_ITEM_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuRadioGroup
 * -----------------------------------------------------------------------------------------------*/ const $6cc32821e9371a1c$var$RADIO_GROUP_NAME = 'MenuRadioGroup';
const [$6cc32821e9371a1c$var$RadioGroupProvider, $6cc32821e9371a1c$var$useRadioGroupContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$RADIO_GROUP_NAME, {
    value: undefined,
    onValueChange: ()=>{}
});
const $6cc32821e9371a1c$export$ea2200c9eee416b3 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { value: value , onValueChange: onValueChange , ...groupProps } = props;
    const handleValueChange = (0,react_use_callback_ref_dist/* useCallbackRef */.W)(onValueChange);
    return /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$var$RadioGroupProvider, {
        scope: props.__scopeMenu,
        value: value,
        onValueChange: handleValueChange
    }, /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$export$22a631d1f72787bb, (0,esm_extends/* default */.Z)({}, groupProps, {
        ref: forwardedRef
    })));
});
/*#__PURE__*/ Object.assign($6cc32821e9371a1c$export$ea2200c9eee416b3, {
    displayName: $6cc32821e9371a1c$var$RADIO_GROUP_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuRadioItem
 * -----------------------------------------------------------------------------------------------*/ const $6cc32821e9371a1c$var$RADIO_ITEM_NAME = 'MenuRadioItem';
const $6cc32821e9371a1c$export$69bd225e9817f6d0 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { value: value , ...radioItemProps } = props;
    const context = $6cc32821e9371a1c$var$useRadioGroupContext($6cc32821e9371a1c$var$RADIO_ITEM_NAME, props.__scopeMenu);
    const checked = value === context.value;
    return /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$var$ItemIndicatorProvider, {
        scope: props.__scopeMenu,
        checked: checked
    }, /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$export$2ce376c2cc3355c8, (0,esm_extends/* default */.Z)({
        role: "menuitemradio",
        "aria-checked": checked
    }, radioItemProps, {
        ref: forwardedRef,
        "data-state": $6cc32821e9371a1c$var$getCheckedState(checked),
        onSelect: (0,dist/* composeEventHandlers */.M)(radioItemProps.onSelect, ()=>{
            var _context$onValueChang;
            return (_context$onValueChang = context.onValueChange) === null || _context$onValueChang === void 0 ? void 0 : _context$onValueChang.call(context, value);
        }, {
            checkForDefaultPrevented: false
        })
    })));
});
/*#__PURE__*/ Object.assign($6cc32821e9371a1c$export$69bd225e9817f6d0, {
    displayName: $6cc32821e9371a1c$var$RADIO_ITEM_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuItemIndicator
 * -----------------------------------------------------------------------------------------------*/ const $6cc32821e9371a1c$var$ITEM_INDICATOR_NAME = 'MenuItemIndicator';
const [$6cc32821e9371a1c$var$ItemIndicatorProvider, $6cc32821e9371a1c$var$useItemIndicatorContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$ITEM_INDICATOR_NAME, {
    checked: false
});
const $6cc32821e9371a1c$export$a2593e23056970a3 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeMenu: __scopeMenu , forceMount: forceMount , ...itemIndicatorProps } = props;
    const indicatorContext = $6cc32821e9371a1c$var$useItemIndicatorContext($6cc32821e9371a1c$var$ITEM_INDICATOR_NAME, __scopeMenu);
    return /*#__PURE__*/ (0,react_.createElement)(react_presence_dist/* Presence */.z, {
        present: forceMount || $6cc32821e9371a1c$var$isIndeterminate(indicatorContext.checked) || indicatorContext.checked === true
    }, /*#__PURE__*/ (0,react_.createElement)(react_primitive_dist/* Primitive */.WV.span, (0,esm_extends/* default */.Z)({}, itemIndicatorProps, {
        ref: forwardedRef,
        "data-state": $6cc32821e9371a1c$var$getCheckedState(indicatorContext.checked)
    })));
});
/*#__PURE__*/ Object.assign($6cc32821e9371a1c$export$a2593e23056970a3, {
    displayName: $6cc32821e9371a1c$var$ITEM_INDICATOR_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuSeparator
 * -----------------------------------------------------------------------------------------------*/ const $6cc32821e9371a1c$var$SEPARATOR_NAME = 'MenuSeparator';
const $6cc32821e9371a1c$export$1cec7dcdd713e220 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeMenu: __scopeMenu , ...separatorProps } = props;
    return /*#__PURE__*/ (0,react_.createElement)(react_primitive_dist/* Primitive */.WV.div, (0,esm_extends/* default */.Z)({
        role: "separator",
        "aria-orientation": "horizontal"
    }, separatorProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($6cc32821e9371a1c$export$1cec7dcdd713e220, {
    displayName: $6cc32821e9371a1c$var$SEPARATOR_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuArrow
 * -----------------------------------------------------------------------------------------------*/ const $6cc32821e9371a1c$var$ARROW_NAME = 'MenuArrow';
const $6cc32821e9371a1c$export$bcdda4773debf5fa = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeMenu: __scopeMenu , ...arrowProps } = props;
    const popperScope = $6cc32821e9371a1c$var$usePopperScope(__scopeMenu);
    return /*#__PURE__*/ (0,react_.createElement)(react_popper_dist/* Arrow */.Eh, (0,esm_extends/* default */.Z)({}, popperScope, arrowProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($6cc32821e9371a1c$export$bcdda4773debf5fa, {
    displayName: $6cc32821e9371a1c$var$ARROW_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuSub
 * -----------------------------------------------------------------------------------------------*/ const $6cc32821e9371a1c$var$SUB_NAME = 'MenuSub';
const [$6cc32821e9371a1c$var$MenuSubProvider, $6cc32821e9371a1c$var$useMenuSubContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$SUB_NAME);
const $6cc32821e9371a1c$export$71bdb9d1e2909932 = (props)=>{
    const { __scopeMenu: __scopeMenu , children: children , open: open = false , onOpenChange: onOpenChange  } = props;
    const parentMenuContext = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$SUB_NAME, __scopeMenu);
    const popperScope = $6cc32821e9371a1c$var$usePopperScope(__scopeMenu);
    const [trigger, setTrigger] = (0,react_.useState)(null);
    const [content, setContent] = (0,react_.useState)(null);
    const handleOpenChange = (0,react_use_callback_ref_dist/* useCallbackRef */.W)(onOpenChange); // Prevent the parent menu from reopening with open submenus.
    (0,react_.useEffect)(()=>{
        if (parentMenuContext.open === false) handleOpenChange(false);
        return ()=>handleOpenChange(false)
        ;
    }, [
        parentMenuContext.open,
        handleOpenChange
    ]);
    return /*#__PURE__*/ (0,react_.createElement)(react_popper_dist/* Root */.fC, popperScope, /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$var$MenuProvider, {
        scope: __scopeMenu,
        open: open,
        onOpenChange: handleOpenChange,
        content: content,
        onContentChange: setContent
    }, /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$var$MenuSubProvider, {
        scope: __scopeMenu,
        contentId: (0,react_id_dist/* useId */.M)(),
        triggerId: (0,react_id_dist/* useId */.M)(),
        trigger: trigger,
        onTriggerChange: setTrigger
    }, children)));
};
/*#__PURE__*/ Object.assign($6cc32821e9371a1c$export$71bdb9d1e2909932, {
    displayName: $6cc32821e9371a1c$var$SUB_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuSubTrigger
 * -----------------------------------------------------------------------------------------------*/ const $6cc32821e9371a1c$var$SUB_TRIGGER_NAME = 'MenuSubTrigger';
const $6cc32821e9371a1c$export$5fbbb3ba7297405f = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$SUB_TRIGGER_NAME, props.__scopeMenu);
    const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$SUB_TRIGGER_NAME, props.__scopeMenu);
    const subContext = $6cc32821e9371a1c$var$useMenuSubContext($6cc32821e9371a1c$var$SUB_TRIGGER_NAME, props.__scopeMenu);
    const contentContext = $6cc32821e9371a1c$var$useMenuContentContext($6cc32821e9371a1c$var$SUB_TRIGGER_NAME, props.__scopeMenu);
    const openTimerRef = (0,react_.useRef)(null);
    const { pointerGraceTimerRef: pointerGraceTimerRef , onPointerGraceIntentChange: onPointerGraceIntentChange  } = contentContext;
    const scope = {
        __scopeMenu: props.__scopeMenu
    };
    const clearOpenTimer = (0,react_.useCallback)(()=>{
        if (openTimerRef.current) window.clearTimeout(openTimerRef.current);
        openTimerRef.current = null;
    }, []);
    (0,react_.useEffect)(()=>clearOpenTimer
    , [
        clearOpenTimer
    ]);
    (0,react_.useEffect)(()=>{
        const pointerGraceTimer = pointerGraceTimerRef.current;
        return ()=>{
            window.clearTimeout(pointerGraceTimer);
            onPointerGraceIntentChange(null);
        };
    }, [
        pointerGraceTimerRef,
        onPointerGraceIntentChange
    ]);
    return /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$export$9fa5ebd18bee4d43, (0,esm_extends/* default */.Z)({
        asChild: true
    }, scope), /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$var$MenuItemImpl, (0,esm_extends/* default */.Z)({
        id: subContext.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": context.open,
        "aria-controls": subContext.contentId,
        "data-state": $6cc32821e9371a1c$var$getOpenState(context.open)
    }, props, {
        ref: (0,react_compose_refs_dist/* composeRefs */.F)(forwardedRef, subContext.onTriggerChange) // This is redundant for mouse users but we cannot determine pointer type from
        ,
        onClick: (event)=>{
            var _props$onClick;
            (_props$onClick = props.onClick) === null || _props$onClick === void 0 || _props$onClick.call(props, event);
            if (props.disabled || event.defaultPrevented) return;
            /**
       * We manually focus because iOS Safari doesn't always focus on click (e.g. buttons)
       * and we rely heavily on `onFocusOutside` for submenus to close when switching
       * between separate submenus.
       */ event.currentTarget.focus();
            if (!context.open) context.onOpenChange(true);
        },
        onPointerMove: (0,dist/* composeEventHandlers */.M)(props.onPointerMove, $6cc32821e9371a1c$var$whenMouse((event)=>{
            contentContext.onItemEnter(event);
            if (event.defaultPrevented) return;
            if (!props.disabled && !context.open && !openTimerRef.current) {
                contentContext.onPointerGraceIntentChange(null);
                openTimerRef.current = window.setTimeout(()=>{
                    context.onOpenChange(true);
                    clearOpenTimer();
                }, 100);
            }
        })),
        onPointerLeave: (0,dist/* composeEventHandlers */.M)(props.onPointerLeave, $6cc32821e9371a1c$var$whenMouse((event)=>{
            var _context$content;
            clearOpenTimer();
            const contentRect = (_context$content = context.content) === null || _context$content === void 0 ? void 0 : _context$content.getBoundingClientRect();
            if (contentRect) {
                var _context$content2;
                // TODO: make sure to update this when we change positioning logic
                const side = (_context$content2 = context.content) === null || _context$content2 === void 0 ? void 0 : _context$content2.dataset.side;
                const rightSide = side === 'right';
                const bleed = rightSide ? -5 : 5;
                const contentNearEdge = contentRect[rightSide ? 'left' : 'right'];
                const contentFarEdge = contentRect[rightSide ? 'right' : 'left'];
                contentContext.onPointerGraceIntentChange({
                    area: [
                        // consistently within polygon bounds
                        {
                            x: event.clientX + bleed,
                            y: event.clientY
                        },
                        {
                            x: contentNearEdge,
                            y: contentRect.top
                        },
                        {
                            x: contentFarEdge,
                            y: contentRect.top
                        },
                        {
                            x: contentFarEdge,
                            y: contentRect.bottom
                        },
                        {
                            x: contentNearEdge,
                            y: contentRect.bottom
                        }
                    ],
                    side: side
                });
                window.clearTimeout(pointerGraceTimerRef.current);
                pointerGraceTimerRef.current = window.setTimeout(()=>contentContext.onPointerGraceIntentChange(null)
                , 300);
            } else {
                contentContext.onTriggerLeave(event);
                if (event.defaultPrevented) return; // There's 100ms where the user may leave an item before the submenu was opened.
                contentContext.onPointerGraceIntentChange(null);
            }
        })),
        onKeyDown: (0,dist/* composeEventHandlers */.M)(props.onKeyDown, (event)=>{
            const isTypingAhead = contentContext.searchRef.current !== '';
            if (props.disabled || isTypingAhead && event.key === ' ') return;
            if ($6cc32821e9371a1c$var$SUB_OPEN_KEYS[rootContext.dir].includes(event.key)) {
                var _context$content3;
                context.onOpenChange(true); // The trigger may hold focus if opened via pointer interaction
                // so we ensure content is given focus again when switching to keyboard.
                (_context$content3 = context.content) === null || _context$content3 === void 0 || _context$content3.focus(); // prevent window from scrolling
                event.preventDefault();
            }
        })
    })));
});
/*#__PURE__*/ Object.assign($6cc32821e9371a1c$export$5fbbb3ba7297405f, {
    displayName: $6cc32821e9371a1c$var$SUB_TRIGGER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuSubContent
 * -----------------------------------------------------------------------------------------------*/ const $6cc32821e9371a1c$var$SUB_CONTENT_NAME = 'MenuSubContent';
const $6cc32821e9371a1c$export$e7142ab31822bde6 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const portalContext = $6cc32821e9371a1c$var$usePortalContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
    const { forceMount: forceMount = portalContext.forceMount , ...subContentProps } = props;
    const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
    const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
    const subContext = $6cc32821e9371a1c$var$useMenuSubContext($6cc32821e9371a1c$var$SUB_CONTENT_NAME, props.__scopeMenu);
    const ref = (0,react_.useRef)(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, ref);
    return /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$var$Collection.Provider, {
        scope: props.__scopeMenu
    }, /*#__PURE__*/ (0,react_.createElement)(react_presence_dist/* Presence */.z, {
        present: forceMount || context.open
    }, /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$var$Collection.Slot, {
        scope: props.__scopeMenu
    }, /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$var$MenuContentImpl, (0,esm_extends/* default */.Z)({
        id: subContext.contentId,
        "aria-labelledby": subContext.triggerId
    }, subContentProps, {
        ref: composedRefs,
        align: "start",
        side: rootContext.dir === 'rtl' ? 'left' : 'right',
        disableOutsidePointerEvents: false,
        disableOutsideScroll: false,
        trapFocus: false,
        onOpenAutoFocus: (event)=>{
            var _ref$current;
            // when opening a submenu, focus content for keyboard users only
            if (rootContext.isUsingKeyboardRef.current) (_ref$current = ref.current) === null || _ref$current === void 0 || _ref$current.focus();
            event.preventDefault();
        } // The menu might close because of focusing another menu item in the parent menu. We
        ,
        onCloseAutoFocus: (event)=>event.preventDefault()
        ,
        onFocusOutside: (0,dist/* composeEventHandlers */.M)(props.onFocusOutside, (event)=>{
            // We prevent closing when the trigger is focused to avoid triggering a re-open animation
            // on pointer interaction.
            if (event.target !== subContext.trigger) context.onOpenChange(false);
        }),
        onEscapeKeyDown: (0,dist/* composeEventHandlers */.M)(props.onEscapeKeyDown, (event)=>{
            rootContext.onClose(); // ensure pressing escape in submenu doesn't escape full screen mode
            event.preventDefault();
        }),
        onKeyDown: (0,dist/* composeEventHandlers */.M)(props.onKeyDown, (event)=>{
            // Submenu key events bubble through portals. We only care about keys in this menu.
            const isKeyDownInside = event.currentTarget.contains(event.target);
            const isCloseKey = $6cc32821e9371a1c$var$SUB_CLOSE_KEYS[rootContext.dir].includes(event.key);
            if (isKeyDownInside && isCloseKey) {
                var _subContext$trigger;
                context.onOpenChange(false); // We focus manually because we prevented it in `onCloseAutoFocus`
                (_subContext$trigger = subContext.trigger) === null || _subContext$trigger === void 0 || _subContext$trigger.focus(); // prevent window from scrolling
                event.preventDefault();
            }
        })
    })))));
});
/*#__PURE__*/ Object.assign($6cc32821e9371a1c$export$e7142ab31822bde6, {
    displayName: $6cc32821e9371a1c$var$SUB_CONTENT_NAME
});
/* -----------------------------------------------------------------------------------------------*/ function $6cc32821e9371a1c$var$getOpenState(open) {
    return open ? 'open' : 'closed';
}
function $6cc32821e9371a1c$var$isIndeterminate(checked) {
    return checked === 'indeterminate';
}
function $6cc32821e9371a1c$var$getCheckedState(checked) {
    return $6cc32821e9371a1c$var$isIndeterminate(checked) ? 'indeterminate' : checked ? 'checked' : 'unchecked';
}
function $6cc32821e9371a1c$var$focusFirst(candidates) {
    const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
    for (const candidate of candidates){
        // if focus is already where we want to go, we don't want to keep going through the candidates
        if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
        candidate.focus();
        if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
    }
}
/**
 * Wraps an array around itself at a given start index
 * Example: `wrapArray(['a', 'b', 'c', 'd'], 2) === ['c', 'd', 'a', 'b']`
 */ function $6cc32821e9371a1c$var$wrapArray(array, startIndex) {
    return array.map((_, index)=>array[(startIndex + index) % array.length]
    );
}
/**
 * This is the "meat" of the typeahead matching logic. It takes in all the values,
 * the search and the current match, and returns the next match (or `undefined`).
 *
 * We normalize the search because if a user has repeatedly pressed a character,
 * we want the exact same behavior as if we only had that one character
 * (ie. cycle through options starting with that character)
 *
 * We also reorder the values by wrapping the array around the current match.
 * This is so we always look forward from the current match, and picking the first
 * match will always be the correct one.
 *
 * Finally, if the normalized search is exactly one character, we exclude the
 * current match from the values because otherwise it would be the first to match always
 * and focus would never move. This is as opposed to the regular case, where we
 * don't want focus to move if the current match still matches.
 */ function $6cc32821e9371a1c$var$getNextMatch(values, search, currentMatch) {
    const isRepeated = search.length > 1 && Array.from(search).every((char)=>char === search[0]
    );
    const normalizedSearch = isRepeated ? search[0] : search;
    const currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
    let wrappedValues = $6cc32821e9371a1c$var$wrapArray(values, Math.max(currentMatchIndex, 0));
    const excludeCurrentMatch = normalizedSearch.length === 1;
    if (excludeCurrentMatch) wrappedValues = wrappedValues.filter((v)=>v !== currentMatch
    );
    const nextMatch = wrappedValues.find((value)=>value.toLowerCase().startsWith(normalizedSearch.toLowerCase())
    );
    return nextMatch !== currentMatch ? nextMatch : undefined;
}
// Determine if a point is inside of a polygon.
// Based on https://github.com/substack/point-in-polygon
function $6cc32821e9371a1c$var$isPointInPolygon(point, polygon) {
    const { x: x , y: y  } = point;
    let inside = false;
    for(let i = 0, j = polygon.length - 1; i < polygon.length; j = i++){
        const xi = polygon[i].x;
        const yi = polygon[i].y;
        const xj = polygon[j].x;
        const yj = polygon[j].y; // prettier-ignore
        const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
        if (intersect) inside = !inside;
    }
    return inside;
}
function $6cc32821e9371a1c$var$isPointerInGraceArea(event, area) {
    if (!area) return false;
    const cursorPos = {
        x: event.clientX,
        y: event.clientY
    };
    return $6cc32821e9371a1c$var$isPointInPolygon(cursorPos, area);
}
function $6cc32821e9371a1c$var$whenMouse(handler) {
    return (event)=>event.pointerType === 'mouse' ? handler(event) : undefined
    ;
}
const $6cc32821e9371a1c$export$be92b6f5f03c0fe9 = $6cc32821e9371a1c$export$d9b273488cd8ce6f;
const $6cc32821e9371a1c$export$b688253958b8dfe7 = $6cc32821e9371a1c$export$9fa5ebd18bee4d43;
const $6cc32821e9371a1c$export$602eac185826482c = $6cc32821e9371a1c$export$793392f970497feb;
const $6cc32821e9371a1c$export$7c6e2c02157bb7d2 = $6cc32821e9371a1c$export$479f0f2f71193efe;
const $6cc32821e9371a1c$export$eb2fcfdbd7ba97d4 = $6cc32821e9371a1c$export$22a631d1f72787bb;
const $6cc32821e9371a1c$export$b04be29aa201d4f5 = $6cc32821e9371a1c$export$dd37bec0e8a99143;
const $6cc32821e9371a1c$export$6d08773d2e66f8f2 = $6cc32821e9371a1c$export$2ce376c2cc3355c8;
const $6cc32821e9371a1c$export$16ce288f89fa631c = $6cc32821e9371a1c$export$f6f243521332502d;
const $6cc32821e9371a1c$export$a98f0dcb43a68a25 = $6cc32821e9371a1c$export$ea2200c9eee416b3;
const $6cc32821e9371a1c$export$371ab307eab489c0 = $6cc32821e9371a1c$export$69bd225e9817f6d0;
const $6cc32821e9371a1c$export$c3468e2714d175fa = $6cc32821e9371a1c$export$a2593e23056970a3;
const $6cc32821e9371a1c$export$1ff3c3f08ae963c0 = $6cc32821e9371a1c$export$1cec7dcdd713e220;
const $6cc32821e9371a1c$export$21b07c8f274aebd5 = $6cc32821e9371a1c$export$bcdda4773debf5fa;
const $6cc32821e9371a1c$export$d7a01e11500dfb6f = $6cc32821e9371a1c$export$71bdb9d1e2909932;
const $6cc32821e9371a1c$export$2ea8a7a591ac5eac = $6cc32821e9371a1c$export$5fbbb3ba7297405f;
const $6cc32821e9371a1c$export$6d4de93b380beddf = $6cc32821e9371a1c$export$e7142ab31822bde6;





//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs




















/* -------------------------------------------------------------------------------------------------
 * DropdownMenu
 * -----------------------------------------------------------------------------------------------*/ const $d08ef79370b62062$var$DROPDOWN_MENU_NAME = 'DropdownMenu';
const [$d08ef79370b62062$var$createDropdownMenuContext, $d08ef79370b62062$export$c0623cd925aeb687] = (0,react_context_dist/* createContextScope */.b)($d08ef79370b62062$var$DROPDOWN_MENU_NAME, [
    $6cc32821e9371a1c$export$4027731b685e72eb
]);
const $d08ef79370b62062$var$useMenuScope = $6cc32821e9371a1c$export$4027731b685e72eb();
const [$d08ef79370b62062$var$DropdownMenuProvider, $d08ef79370b62062$var$useDropdownMenuContext] = $d08ef79370b62062$var$createDropdownMenuContext($d08ef79370b62062$var$DROPDOWN_MENU_NAME);
const $d08ef79370b62062$export$e44a253a59704894 = (props)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , children: children , dir: dir , open: openProp , defaultOpen: defaultOpen , onOpenChange: onOpenChange , modal: modal = true  } = props;
    const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
    const triggerRef = (0,react_.useRef)(null);
    const [open = false, setOpen] = (0,react_use_controllable_state_dist/* useControllableState */.T)({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    return /*#__PURE__*/ (0,react_.createElement)($d08ef79370b62062$var$DropdownMenuProvider, {
        scope: __scopeDropdownMenu,
        triggerId: (0,react_id_dist/* useId */.M)(),
        triggerRef: triggerRef,
        contentId: (0,react_id_dist/* useId */.M)(),
        open: open,
        onOpenChange: setOpen,
        onOpenToggle: (0,react_.useCallback)(()=>setOpen((prevOpen)=>!prevOpen
            )
        , [
            setOpen
        ]),
        modal: modal
    }, /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$export$be92b6f5f03c0fe9, (0,esm_extends/* default */.Z)({}, menuScope, {
        open: open,
        onOpenChange: setOpen,
        dir: dir,
        modal: modal
    }), children));
};
/*#__PURE__*/ Object.assign($d08ef79370b62062$export$e44a253a59704894, {
    displayName: $d08ef79370b62062$var$DROPDOWN_MENU_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuTrigger
 * -----------------------------------------------------------------------------------------------*/ const $d08ef79370b62062$var$TRIGGER_NAME = 'DropdownMenuTrigger';
const $d08ef79370b62062$export$d2469213b3befba9 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , disabled: disabled = false , ...triggerProps } = props;
    const context = $d08ef79370b62062$var$useDropdownMenuContext($d08ef79370b62062$var$TRIGGER_NAME, __scopeDropdownMenu);
    const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
    return /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$export$b688253958b8dfe7, (0,esm_extends/* default */.Z)({
        asChild: true
    }, menuScope), /*#__PURE__*/ (0,react_.createElement)(react_primitive_dist/* Primitive */.WV.button, (0,esm_extends/* default */.Z)({
        type: "button",
        id: context.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": context.open,
        "aria-controls": context.open ? context.contentId : undefined,
        "data-state": context.open ? 'open' : 'closed',
        "data-disabled": disabled ? '' : undefined,
        disabled: disabled
    }, triggerProps, {
        ref: (0,react_compose_refs_dist/* composeRefs */.F)(forwardedRef, context.triggerRef),
        onPointerDown: (0,dist/* composeEventHandlers */.M)(props.onPointerDown, (event)=>{
            // only call handler if it's the left button (mousedown gets triggered by all mouse buttons)
            // but not when the control key is pressed (avoiding MacOS right click)
            if (!disabled && event.button === 0 && event.ctrlKey === false) {
                context.onOpenToggle(); // prevent trigger focusing when opening
                // this allows the content to be given focus without competition
                if (!context.open) event.preventDefault();
            }
        }),
        onKeyDown: (0,dist/* composeEventHandlers */.M)(props.onKeyDown, (event)=>{
            if (disabled) return;
            if ([
                'Enter',
                ' '
            ].includes(event.key)) context.onOpenToggle();
            if (event.key === 'ArrowDown') context.onOpenChange(true); // prevent keydown from scrolling window / first focused item to execute
            // that keydown (inadvertently closing the menu)
            if ([
                'Enter',
                ' ',
                'ArrowDown'
            ].includes(event.key)) event.preventDefault();
        })
    })));
});
/*#__PURE__*/ Object.assign($d08ef79370b62062$export$d2469213b3befba9, {
    displayName: $d08ef79370b62062$var$TRIGGER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuPortal
 * -----------------------------------------------------------------------------------------------*/ const $d08ef79370b62062$var$PORTAL_NAME = 'DropdownMenuPortal';
const $d08ef79370b62062$export$cd369b4d4d54efc9 = (props)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , ...portalProps } = props;
    const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
    return /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$export$602eac185826482c, (0,esm_extends/* default */.Z)({}, menuScope, portalProps));
};
/*#__PURE__*/ Object.assign($d08ef79370b62062$export$cd369b4d4d54efc9, {
    displayName: $d08ef79370b62062$var$PORTAL_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuContent
 * -----------------------------------------------------------------------------------------------*/ const $d08ef79370b62062$var$CONTENT_NAME = 'DropdownMenuContent';
const $d08ef79370b62062$export$6e76d93a37c01248 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , ...contentProps } = props;
    const context = $d08ef79370b62062$var$useDropdownMenuContext($d08ef79370b62062$var$CONTENT_NAME, __scopeDropdownMenu);
    const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
    const hasInteractedOutsideRef = (0,react_.useRef)(false);
    return /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$export$7c6e2c02157bb7d2, (0,esm_extends/* default */.Z)({
        id: context.contentId,
        "aria-labelledby": context.triggerId
    }, menuScope, contentProps, {
        ref: forwardedRef,
        onCloseAutoFocus: (0,dist/* composeEventHandlers */.M)(props.onCloseAutoFocus, (event)=>{
            var _context$triggerRef$c;
            if (!hasInteractedOutsideRef.current) (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
            hasInteractedOutsideRef.current = false; // Always prevent auto focus because we either focus manually or want user agent focus
            event.preventDefault();
        }),
        onInteractOutside: (0,dist/* composeEventHandlers */.M)(props.onInteractOutside, (event)=>{
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            if (!context.modal || isRightClick) hasInteractedOutsideRef.current = true;
        }),
        style: {
            ...props.style,
            '--radix-dropdown-menu-content-transform-origin': 'var(--radix-popper-transform-origin)',
            '--radix-dropdown-menu-content-available-width': 'var(--radix-popper-available-width)',
            '--radix-dropdown-menu-content-available-height': 'var(--radix-popper-available-height)',
            '--radix-dropdown-menu-trigger-width': 'var(--radix-popper-anchor-width)',
            '--radix-dropdown-menu-trigger-height': 'var(--radix-popper-anchor-height)'
        }
    }));
});
/*#__PURE__*/ Object.assign($d08ef79370b62062$export$6e76d93a37c01248, {
    displayName: $d08ef79370b62062$var$CONTENT_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuGroup
 * -----------------------------------------------------------------------------------------------*/ const $d08ef79370b62062$var$GROUP_NAME = 'DropdownMenuGroup';
const $d08ef79370b62062$export$246bebaba3a2f70e = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , ...groupProps } = props;
    const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
    return /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$export$eb2fcfdbd7ba97d4, (0,esm_extends/* default */.Z)({}, menuScope, groupProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($d08ef79370b62062$export$246bebaba3a2f70e, {
    displayName: $d08ef79370b62062$var$GROUP_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuLabel
 * -----------------------------------------------------------------------------------------------*/ const $d08ef79370b62062$var$LABEL_NAME = 'DropdownMenuLabel';
const $d08ef79370b62062$export$76e48c5b57f24495 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , ...labelProps } = props;
    const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
    return /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$export$b04be29aa201d4f5, (0,esm_extends/* default */.Z)({}, menuScope, labelProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($d08ef79370b62062$export$76e48c5b57f24495, {
    displayName: $d08ef79370b62062$var$LABEL_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuItem
 * -----------------------------------------------------------------------------------------------*/ const $d08ef79370b62062$var$ITEM_NAME = 'DropdownMenuItem';
const $d08ef79370b62062$export$ed97964d1871885d = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , ...itemProps } = props;
    const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
    return /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$export$6d08773d2e66f8f2, (0,esm_extends/* default */.Z)({}, menuScope, itemProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($d08ef79370b62062$export$ed97964d1871885d, {
    displayName: $d08ef79370b62062$var$ITEM_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuCheckboxItem
 * -----------------------------------------------------------------------------------------------*/ const $d08ef79370b62062$var$CHECKBOX_ITEM_NAME = 'DropdownMenuCheckboxItem';
const $d08ef79370b62062$export$53a69729da201fa9 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , ...checkboxItemProps } = props;
    const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
    return /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$export$16ce288f89fa631c, (0,esm_extends/* default */.Z)({}, menuScope, checkboxItemProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($d08ef79370b62062$export$53a69729da201fa9, {
    displayName: $d08ef79370b62062$var$CHECKBOX_ITEM_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuRadioGroup
 * -----------------------------------------------------------------------------------------------*/ const $d08ef79370b62062$var$RADIO_GROUP_NAME = 'DropdownMenuRadioGroup';
const $d08ef79370b62062$export$3323ad73d55f587e = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , ...radioGroupProps } = props;
    const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
    return /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$export$a98f0dcb43a68a25, (0,esm_extends/* default */.Z)({}, menuScope, radioGroupProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($d08ef79370b62062$export$3323ad73d55f587e, {
    displayName: $d08ef79370b62062$var$RADIO_GROUP_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuRadioItem
 * -----------------------------------------------------------------------------------------------*/ const $d08ef79370b62062$var$RADIO_ITEM_NAME = 'DropdownMenuRadioItem';
const $d08ef79370b62062$export$e4f69b41b1637536 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , ...radioItemProps } = props;
    const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
    return /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$export$371ab307eab489c0, (0,esm_extends/* default */.Z)({}, menuScope, radioItemProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($d08ef79370b62062$export$e4f69b41b1637536, {
    displayName: $d08ef79370b62062$var$RADIO_ITEM_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuItemIndicator
 * -----------------------------------------------------------------------------------------------*/ const $d08ef79370b62062$var$INDICATOR_NAME = 'DropdownMenuItemIndicator';
const $d08ef79370b62062$export$42355ae145153fb6 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , ...itemIndicatorProps } = props;
    const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
    return /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$export$c3468e2714d175fa, (0,esm_extends/* default */.Z)({}, menuScope, itemIndicatorProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($d08ef79370b62062$export$42355ae145153fb6, {
    displayName: $d08ef79370b62062$var$INDICATOR_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuSeparator
 * -----------------------------------------------------------------------------------------------*/ const $d08ef79370b62062$var$SEPARATOR_NAME = 'DropdownMenuSeparator';
const $d08ef79370b62062$export$da160178fd3bc7e9 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , ...separatorProps } = props;
    const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
    return /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$export$1ff3c3f08ae963c0, (0,esm_extends/* default */.Z)({}, menuScope, separatorProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($d08ef79370b62062$export$da160178fd3bc7e9, {
    displayName: $d08ef79370b62062$var$SEPARATOR_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuArrow
 * -----------------------------------------------------------------------------------------------*/ const $d08ef79370b62062$var$ARROW_NAME = 'DropdownMenuArrow';
const $d08ef79370b62062$export$34b8980744021ec5 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , ...arrowProps } = props;
    const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
    return /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$export$21b07c8f274aebd5, (0,esm_extends/* default */.Z)({}, menuScope, arrowProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($d08ef79370b62062$export$34b8980744021ec5, {
    displayName: $d08ef79370b62062$var$ARROW_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuSub
 * -----------------------------------------------------------------------------------------------*/ const $d08ef79370b62062$export$2f307d81a64f5442 = (props)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , children: children , open: openProp , onOpenChange: onOpenChange , defaultOpen: defaultOpen  } = props;
    const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
    const [open = false, setOpen] = (0,react_use_controllable_state_dist/* useControllableState */.T)({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    return /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$export$d7a01e11500dfb6f, (0,esm_extends/* default */.Z)({}, menuScope, {
        open: open,
        onOpenChange: setOpen
    }), children);
};
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuSubTrigger
 * -----------------------------------------------------------------------------------------------*/ const $d08ef79370b62062$var$SUB_TRIGGER_NAME = 'DropdownMenuSubTrigger';
const $d08ef79370b62062$export$21dcb7ec56f874cf = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , ...subTriggerProps } = props;
    const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
    return /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$export$2ea8a7a591ac5eac, (0,esm_extends/* default */.Z)({}, menuScope, subTriggerProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($d08ef79370b62062$export$21dcb7ec56f874cf, {
    displayName: $d08ef79370b62062$var$SUB_TRIGGER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuSubContent
 * -----------------------------------------------------------------------------------------------*/ const $d08ef79370b62062$var$SUB_CONTENT_NAME = 'DropdownMenuSubContent';
const $d08ef79370b62062$export$f34ec8bc2482cc5f = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , ...subContentProps } = props;
    const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
    return /*#__PURE__*/ (0,react_.createElement)($6cc32821e9371a1c$export$6d4de93b380beddf, (0,esm_extends/* default */.Z)({}, menuScope, subContentProps, {
        ref: forwardedRef,
        style: {
            ...props.style,
            '--radix-dropdown-menu-content-transform-origin': 'var(--radix-popper-transform-origin)',
            '--radix-dropdown-menu-content-available-width': 'var(--radix-popper-available-width)',
            '--radix-dropdown-menu-content-available-height': 'var(--radix-popper-available-height)',
            '--radix-dropdown-menu-trigger-width': 'var(--radix-popper-anchor-width)',
            '--radix-dropdown-menu-trigger-height': 'var(--radix-popper-anchor-height)'
        }
    }));
});
/*#__PURE__*/ Object.assign($d08ef79370b62062$export$f34ec8bc2482cc5f, {
    displayName: $d08ef79370b62062$var$SUB_CONTENT_NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $d08ef79370b62062$export$be92b6f5f03c0fe9 = $d08ef79370b62062$export$e44a253a59704894;
const $d08ef79370b62062$export$41fb9f06171c75f4 = $d08ef79370b62062$export$d2469213b3befba9;
const $d08ef79370b62062$export$602eac185826482c = $d08ef79370b62062$export$cd369b4d4d54efc9;
const $d08ef79370b62062$export$7c6e2c02157bb7d2 = $d08ef79370b62062$export$6e76d93a37c01248;
const $d08ef79370b62062$export$eb2fcfdbd7ba97d4 = $d08ef79370b62062$export$246bebaba3a2f70e;
const $d08ef79370b62062$export$b04be29aa201d4f5 = $d08ef79370b62062$export$76e48c5b57f24495;
const $d08ef79370b62062$export$6d08773d2e66f8f2 = $d08ef79370b62062$export$ed97964d1871885d;
const $d08ef79370b62062$export$16ce288f89fa631c = $d08ef79370b62062$export$53a69729da201fa9;
const $d08ef79370b62062$export$a98f0dcb43a68a25 = $d08ef79370b62062$export$3323ad73d55f587e;
const $d08ef79370b62062$export$371ab307eab489c0 = $d08ef79370b62062$export$e4f69b41b1637536;
const $d08ef79370b62062$export$c3468e2714d175fa = $d08ef79370b62062$export$42355ae145153fb6;
const $d08ef79370b62062$export$1ff3c3f08ae963c0 = $d08ef79370b62062$export$da160178fd3bc7e9;
const $d08ef79370b62062$export$21b07c8f274aebd5 = (/* unused pure expression or super */ null && ($d08ef79370b62062$export$34b8980744021ec5));
const $d08ef79370b62062$export$d7a01e11500dfb6f = $d08ef79370b62062$export$2f307d81a64f5442;
const $d08ef79370b62062$export$2ea8a7a591ac5eac = $d08ef79370b62062$export$21dcb7ec56f874cf;
const $d08ef79370b62062$export$6d4de93b380beddf = $d08ef79370b62062$export$f34ec8bc2482cc5f;





//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 4535:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VY: () => (/* binding */ $cb5cc270b50c6fcd$export$7c6e2c02157bb7d2),
/* harmony export */   fC: () => (/* binding */ $cb5cc270b50c6fcd$export$be92b6f5f03c0fe9),
/* harmony export */   h_: () => (/* binding */ $cb5cc270b50c6fcd$export$602eac185826482c),
/* harmony export */   xz: () => (/* binding */ $cb5cc270b50c6fcd$export$41fb9f06171c75f4)
/* harmony export */ });
/* unused harmony exports createPopoverScope, Popover, PopoverAnchor, PopoverTrigger, PopoverPortal, PopoverContent, PopoverClose, PopoverArrow, Anchor, Close, Arrow */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69885);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14958);
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49837);
/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95866);
/* harmony import */ var _radix_ui_react_dismissable_layer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(85009);
/* harmony import */ var _radix_ui_react_focus_guards__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(80573);
/* harmony import */ var _radix_ui_react_focus_scope__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(69586);
/* harmony import */ var _radix_ui_react_id__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81042);
/* harmony import */ var _radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88242);
/* harmony import */ var _radix_ui_react_portal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(23214);
/* harmony import */ var _radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(84261);
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15585);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(59818);
/* harmony import */ var _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64352);
/* harmony import */ var aria_hidden__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36860);
/* harmony import */ var react_remove_scroll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(88162);




































/* -------------------------------------------------------------------------------------------------
 * Popover
 * -----------------------------------------------------------------------------------------------*/ const $cb5cc270b50c6fcd$var$POPOVER_NAME = 'Popover';
const [$cb5cc270b50c6fcd$var$createPopoverContext, $cb5cc270b50c6fcd$export$c8393c9e73286932] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__/* .createContextScope */ .b)($cb5cc270b50c6fcd$var$POPOVER_NAME, [
    _radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_2__/* .createPopperScope */ .D7
]);
const $cb5cc270b50c6fcd$var$usePopperScope = (0,_radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_2__/* .createPopperScope */ .D7)();
const [$cb5cc270b50c6fcd$var$PopoverProvider, $cb5cc270b50c6fcd$var$usePopoverContext] = $cb5cc270b50c6fcd$var$createPopoverContext($cb5cc270b50c6fcd$var$POPOVER_NAME);
const $cb5cc270b50c6fcd$export$5b6b19405a83ff9d = (props)=>{
    const { __scopePopover: __scopePopover , children: children , open: openProp , defaultOpen: defaultOpen , onOpenChange: onOpenChange , modal: modal = false  } = props;
    const popperScope = $cb5cc270b50c6fcd$var$usePopperScope(__scopePopover);
    const triggerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const [hasCustomAnchor, setHasCustomAnchor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [open = false, setOpen] = (0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__/* .useControllableState */ .T)({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC, popperScope, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($cb5cc270b50c6fcd$var$PopoverProvider, {
        scope: __scopePopover,
        contentId: (0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_4__/* .useId */ .M)(),
        triggerRef: triggerRef,
        open: open,
        onOpenChange: setOpen,
        onOpenToggle: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>setOpen((prevOpen)=>!prevOpen
            )
        , [
            setOpen
        ]),
        hasCustomAnchor: hasCustomAnchor,
        onCustomAnchorAdd: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>setHasCustomAnchor(true)
        , []),
        onCustomAnchorRemove: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>setHasCustomAnchor(false)
        , []),
        modal: modal
    }, children));
};
/*#__PURE__*/ Object.assign($cb5cc270b50c6fcd$export$5b6b19405a83ff9d, {
    displayName: $cb5cc270b50c6fcd$var$POPOVER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * PopoverAnchor
 * -----------------------------------------------------------------------------------------------*/ const $cb5cc270b50c6fcd$var$ANCHOR_NAME = 'PopoverAnchor';
const $cb5cc270b50c6fcd$export$96e5381f42521a79 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopePopover: __scopePopover , ...anchorProps } = props;
    const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$ANCHOR_NAME, __scopePopover);
    const popperScope = $cb5cc270b50c6fcd$var$usePopperScope(__scopePopover);
    const { onCustomAnchorAdd: onCustomAnchorAdd , onCustomAnchorRemove: onCustomAnchorRemove  } = context;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        onCustomAnchorAdd();
        return ()=>onCustomAnchorRemove()
        ;
    }, [
        onCustomAnchorAdd,
        onCustomAnchorRemove
    ]);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_2__/* .Anchor */ .ee, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({}, popperScope, anchorProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($cb5cc270b50c6fcd$export$96e5381f42521a79, {
    displayName: $cb5cc270b50c6fcd$var$ANCHOR_NAME
});
/* -------------------------------------------------------------------------------------------------
 * PopoverTrigger
 * -----------------------------------------------------------------------------------------------*/ const $cb5cc270b50c6fcd$var$TRIGGER_NAME = 'PopoverTrigger';
const $cb5cc270b50c6fcd$export$7dacb05d26466c3 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopePopover: __scopePopover , ...triggerProps } = props;
    const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$TRIGGER_NAME, __scopePopover);
    const popperScope = $cb5cc270b50c6fcd$var$usePopperScope(__scopePopover);
    const composedTriggerRef = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_6__/* .useComposedRefs */ .e)(forwardedRef, context.triggerRef);
    const trigger = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__/* .Primitive */ .WV.button, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": $cb5cc270b50c6fcd$var$getState(context.open)
    }, triggerProps, {
        ref: composedTriggerRef,
        onClick: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__/* .composeEventHandlers */ .M)(props.onClick, context.onOpenToggle)
    }));
    return context.hasCustomAnchor ? trigger : /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_2__/* .Anchor */ .ee, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
        asChild: true
    }, popperScope), trigger);
});
/*#__PURE__*/ Object.assign($cb5cc270b50c6fcd$export$7dacb05d26466c3, {
    displayName: $cb5cc270b50c6fcd$var$TRIGGER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * PopoverPortal
 * -----------------------------------------------------------------------------------------------*/ const $cb5cc270b50c6fcd$var$PORTAL_NAME = 'PopoverPortal';
const [$cb5cc270b50c6fcd$var$PortalProvider, $cb5cc270b50c6fcd$var$usePortalContext] = $cb5cc270b50c6fcd$var$createPopoverContext($cb5cc270b50c6fcd$var$PORTAL_NAME, {
    forceMount: undefined
});
const $cb5cc270b50c6fcd$export$dd679ffb4362d2d4 = (props)=>{
    const { __scopePopover: __scopePopover , forceMount: forceMount , children: children , container: container  } = props;
    const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$PORTAL_NAME, __scopePopover);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($cb5cc270b50c6fcd$var$PortalProvider, {
        scope: __scopePopover,
        forceMount: forceMount
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_9__/* .Presence */ .z, {
        present: forceMount || context.open
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_portal__WEBPACK_IMPORTED_MODULE_10__/* .Portal */ .h, {
        asChild: true,
        container: container
    }, children)));
};
/*#__PURE__*/ Object.assign($cb5cc270b50c6fcd$export$dd679ffb4362d2d4, {
    displayName: $cb5cc270b50c6fcd$var$PORTAL_NAME
});
/* -------------------------------------------------------------------------------------------------
 * PopoverContent
 * -----------------------------------------------------------------------------------------------*/ const $cb5cc270b50c6fcd$var$CONTENT_NAME = 'PopoverContent';
const $cb5cc270b50c6fcd$export$d7e1f420b25549ff = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const portalContext = $cb5cc270b50c6fcd$var$usePortalContext($cb5cc270b50c6fcd$var$CONTENT_NAME, props.__scopePopover);
    const { forceMount: forceMount = portalContext.forceMount , ...contentProps } = props;
    const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CONTENT_NAME, props.__scopePopover);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_9__/* .Presence */ .z, {
        present: forceMount || context.open
    }, context.modal ? /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($cb5cc270b50c6fcd$var$PopoverContentModal, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({}, contentProps, {
        ref: forwardedRef
    })) : /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($cb5cc270b50c6fcd$var$PopoverContentNonModal, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({}, contentProps, {
        ref: forwardedRef
    })));
});
/*#__PURE__*/ Object.assign($cb5cc270b50c6fcd$export$d7e1f420b25549ff, {
    displayName: $cb5cc270b50c6fcd$var$CONTENT_NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $cb5cc270b50c6fcd$var$PopoverContentModal = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CONTENT_NAME, props.__scopePopover);
    const contentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_6__/* .useComposedRefs */ .e)(forwardedRef, contentRef);
    const isRightClickOutsideRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false); // aria-hide everything except the content (better supported equivalent to setting aria-modal)
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const content = contentRef.current;
        if (content) return (0,aria_hidden__WEBPACK_IMPORTED_MODULE_11__.hideOthers)(content);
    }, []);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_remove_scroll__WEBPACK_IMPORTED_MODULE_12__/* .RemoveScroll */ .f, {
        as: _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_13__/* .Slot */ .g7,
        allowPinchZoom: true
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($cb5cc270b50c6fcd$var$PopoverContentImpl, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({}, props, {
        ref: composedRefs // we make sure we're not trapping once it's been closed
        ,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__/* .composeEventHandlers */ .M)(props.onCloseAutoFocus, (event)=>{
            var _context$triggerRef$c;
            event.preventDefault();
            if (!isRightClickOutsideRef.current) (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
        }),
        onPointerDownOutside: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__/* .composeEventHandlers */ .M)(props.onPointerDownOutside, (event)=>{
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            isRightClickOutsideRef.current = isRightClick;
        }, {
            checkForDefaultPrevented: false
        }) // When focus is trapped, a `focusout` event may still happen.
        ,
        onFocusOutside: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__/* .composeEventHandlers */ .M)(props.onFocusOutside, (event)=>event.preventDefault()
        , {
            checkForDefaultPrevented: false
        })
    })));
});
const $cb5cc270b50c6fcd$var$PopoverContentNonModal = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CONTENT_NAME, props.__scopePopover);
    const hasInteractedOutsideRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    const hasPointerDownOutsideRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($cb5cc270b50c6fcd$var$PopoverContentImpl, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({}, props, {
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event)=>{
            var _props$onCloseAutoFoc;
            (_props$onCloseAutoFoc = props.onCloseAutoFocus) === null || _props$onCloseAutoFoc === void 0 || _props$onCloseAutoFoc.call(props, event);
            if (!event.defaultPrevented) {
                var _context$triggerRef$c2;
                if (!hasInteractedOutsideRef.current) (_context$triggerRef$c2 = context.triggerRef.current) === null || _context$triggerRef$c2 === void 0 || _context$triggerRef$c2.focus(); // Always prevent auto focus because we either focus manually or want user agent focus
                event.preventDefault();
            }
            hasInteractedOutsideRef.current = false;
            hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event)=>{
            var _props$onInteractOuts, _context$triggerRef$c3;
            (_props$onInteractOuts = props.onInteractOutside) === null || _props$onInteractOuts === void 0 || _props$onInteractOuts.call(props, event);
            if (!event.defaultPrevented) {
                hasInteractedOutsideRef.current = true;
                if (event.detail.originalEvent.type === 'pointerdown') hasPointerDownOutsideRef.current = true;
            } // Prevent dismissing when clicking the trigger.
            // As the trigger is already setup to close, without doing so would
            // cause it to close and immediately open.
            const target = event.target;
            const targetIsTrigger = (_context$triggerRef$c3 = context.triggerRef.current) === null || _context$triggerRef$c3 === void 0 ? void 0 : _context$triggerRef$c3.contains(target);
            if (targetIsTrigger) event.preventDefault(); // On Safari if the trigger is inside a container with tabIndex={0}, when clicked
            // we will get the pointer down outside event on the trigger, but then a subsequent
            // focus outside event on the container, we ignore any focus outside event when we've
            // already had a pointer down outside event.
            if (event.detail.originalEvent.type === 'focusin' && hasPointerDownOutsideRef.current) event.preventDefault();
        }
    }));
});
/* -----------------------------------------------------------------------------------------------*/ const $cb5cc270b50c6fcd$var$PopoverContentImpl = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopePopover: __scopePopover , trapFocus: trapFocus , onOpenAutoFocus: onOpenAutoFocus , onCloseAutoFocus: onCloseAutoFocus , disableOutsidePointerEvents: disableOutsidePointerEvents , onEscapeKeyDown: onEscapeKeyDown , onPointerDownOutside: onPointerDownOutside , onFocusOutside: onFocusOutside , onInteractOutside: onInteractOutside , ...contentProps } = props;
    const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CONTENT_NAME, __scopePopover);
    const popperScope = $cb5cc270b50c6fcd$var$usePopperScope(__scopePopover); // Make sure the whole tree has focus guards as our `Popover` may be
    // the last element in the DOM (beacuse of the `Portal`)
    (0,_radix_ui_react_focus_guards__WEBPACK_IMPORTED_MODULE_14__/* .useFocusGuards */ .EW)();
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_focus_scope__WEBPACK_IMPORTED_MODULE_15__/* .FocusScope */ .M, {
        asChild: true,
        loop: true,
        trapped: trapFocus,
        onMountAutoFocus: onOpenAutoFocus,
        onUnmountAutoFocus: onCloseAutoFocus
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_dismissable_layer__WEBPACK_IMPORTED_MODULE_16__/* .DismissableLayer */ .XB, {
        asChild: true,
        disableOutsidePointerEvents: disableOutsidePointerEvents,
        onInteractOutside: onInteractOutside,
        onEscapeKeyDown: onEscapeKeyDown,
        onPointerDownOutside: onPointerDownOutside,
        onFocusOutside: onFocusOutside,
        onDismiss: ()=>context.onOpenChange(false)
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
        "data-state": $cb5cc270b50c6fcd$var$getState(context.open),
        role: "dialog",
        id: context.contentId
    }, popperScope, contentProps, {
        ref: forwardedRef,
        style: {
            ...contentProps.style,
            '--radix-popover-content-transform-origin': 'var(--radix-popper-transform-origin)',
            '--radix-popover-content-available-width': 'var(--radix-popper-available-width)',
            '--radix-popover-content-available-height': 'var(--radix-popper-available-height)',
            '--radix-popover-trigger-width': 'var(--radix-popper-anchor-width)',
            '--radix-popover-trigger-height': 'var(--radix-popper-anchor-height)'
        }
    }))));
});
/* -------------------------------------------------------------------------------------------------
 * PopoverClose
 * -----------------------------------------------------------------------------------------------*/ const $cb5cc270b50c6fcd$var$CLOSE_NAME = 'PopoverClose';
const $cb5cc270b50c6fcd$export$d6ac43ebaa40d53e = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopePopover: __scopePopover , ...closeProps } = props;
    const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CLOSE_NAME, __scopePopover);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__/* .Primitive */ .WV.button, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
        type: "button"
    }, closeProps, {
        ref: forwardedRef,
        onClick: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__/* .composeEventHandlers */ .M)(props.onClick, ()=>context.onOpenChange(false)
        )
    }));
});
/*#__PURE__*/ Object.assign($cb5cc270b50c6fcd$export$d6ac43ebaa40d53e, {
    displayName: $cb5cc270b50c6fcd$var$CLOSE_NAME
});
/* -------------------------------------------------------------------------------------------------
 * PopoverArrow
 * -----------------------------------------------------------------------------------------------*/ const $cb5cc270b50c6fcd$var$ARROW_NAME = 'PopoverArrow';
const $cb5cc270b50c6fcd$export$3152841115e061b2 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopePopover: __scopePopover , ...arrowProps } = props;
    const popperScope = $cb5cc270b50c6fcd$var$usePopperScope(__scopePopover);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_2__/* .Arrow */ .Eh, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({}, popperScope, arrowProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($cb5cc270b50c6fcd$export$3152841115e061b2, {
    displayName: $cb5cc270b50c6fcd$var$ARROW_NAME
});
/* -----------------------------------------------------------------------------------------------*/ function $cb5cc270b50c6fcd$var$getState(open) {
    return open ? 'open' : 'closed';
}
const $cb5cc270b50c6fcd$export$be92b6f5f03c0fe9 = $cb5cc270b50c6fcd$export$5b6b19405a83ff9d;
const $cb5cc270b50c6fcd$export$b688253958b8dfe7 = (/* unused pure expression or super */ null && ($cb5cc270b50c6fcd$export$96e5381f42521a79));
const $cb5cc270b50c6fcd$export$41fb9f06171c75f4 = $cb5cc270b50c6fcd$export$7dacb05d26466c3;
const $cb5cc270b50c6fcd$export$602eac185826482c = $cb5cc270b50c6fcd$export$dd679ffb4362d2d4;
const $cb5cc270b50c6fcd$export$7c6e2c02157bb7d2 = $cb5cc270b50c6fcd$export$d7e1f420b25549ff;
const $cb5cc270b50c6fcd$export$f39c2d165cd861fe = (/* unused pure expression or super */ null && ($cb5cc270b50c6fcd$export$d6ac43ebaa40d53e));
const $cb5cc270b50c6fcd$export$21b07c8f274aebd5 = (/* unused pure expression or super */ null && ($cb5cc270b50c6fcd$export$3152841115e061b2));





//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 88242:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ee: () => (/* binding */ $cf1ac5d9fe0e8206$export$b688253958b8dfe7),
  Eh: () => (/* binding */ $cf1ac5d9fe0e8206$export$21b07c8f274aebd5),
  VY: () => (/* binding */ $cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2),
  fC: () => (/* binding */ $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9),
  D7: () => (/* binding */ $cf1ac5d9fe0e8206$export$722aac194ae923)
});

// UNUSED EXPORTS: ALIGN_OPTIONS, Popper, PopperAnchor, PopperArrow, PopperContent, SIDE_OPTIONS

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(69885);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function getAlignment(placement) {
  return placement.split('-')[1];
}

function getLengthFromAxis(axis) {
  return axis === 'y' ? 'height' : 'width';
}

function getSide(placement) {
  return placement.split('-')[0];
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].includes(getSide(placement)) ? 'x' : 'y';
}

function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  const commonAlign = reference[length] / 2 - floating[length] / 2;
  const side = getSide(placement);
  const isVertical = mainAxis === 'x';
  let coords;
  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case 'start':
      coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case 'end':
      coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain positioning strategy.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */
const computePosition = async (reference, floating, config) => {
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
      continue;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};

function evaluate(value, param) {
  return typeof value === 'function' ? value(param) : value;
}

function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}

function getSideObjectFromPadding(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}

function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getSideObjectFromPadding(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === 'floating' ? {
    ...rects.floating,
    x,
    y
  } : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
  const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}

const min = Math.min;
const max = Math.max;

function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = options => ({
  name: 'arrow',
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform,
      elements
    } = state;
    // Since `element` is required, we don't Partial<> the type.
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getSideObjectFromPadding(padding);
    const coords = {
      x,
      y
    };
    const axis = getMainAxisFromPlacement(placement);
    const length = getLengthFromAxis(axis);
    const arrowDimensions = await platform.getDimensions(element);
    const isYAxis = axis === 'y';
    const minProp = isYAxis ? 'top' : 'left';
    const maxProp = isYAxis ? 'bottom' : 'right';
    const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;

    // DOM platform can return `window` as the `offsetParent`.
    if (!clientSize || !(await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent)))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;

    // If the padding is large enough that it causes the arrow to no longer be
    // centered, modify the padding so that it is centered.
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);

    // Make sure the arrow doesn't overflow the floating element if the center
    // point is outside the floating element's bounds.
    const min$1 = minPadding;
    const max = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset = within(min$1, center, max);

    // If the reference is small enough that the arrow's padding causes it to
    // to point to nothing for an aligned placement, adjust the offset of the
    // floating element itself. This stops `shift()` from taking action, but can
    // be worked around by calling it again after the `arrow()` if desired.
    const shouldAddOffset = getAlignment(placement) != null && center != offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? min$1 - center : max - center : 0;
    return {
      [axis]: coords[axis] - alignmentOffset,
      data: {
        [axis]: offset,
        centerOffset: center - offset + alignmentOffset
      }
    };
  }
});

const sides = ['top', 'right', 'bottom', 'left'];
const allPlacements = /*#__PURE__*/(/* unused pure expression or super */ null && (sides.reduce((acc, side) => acc.concat(side, side + "-start", side + "-end"), [])));

const oppositeSideMap = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
}

function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  let mainAlignmentSide = mainAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return {
    main: mainAlignmentSide,
    cross: getOppositePlacement(mainAlignmentSide)
  };
}

const oppositeAlignmentMap = {
  start: 'end',
  end: 'start'
};
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
}

function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter(placement => getAlignment(placement) === alignment), ...allowedPlacements.filter(placement => getAlignment(placement) !== alignment)] : allowedPlacements.filter(placement => getSide(placement) === placement);
  return allowedPlacementsSortedByAlignment.filter(placement => {
    if (alignment) {
      return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
    }
    return true;
  });
}
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */
const autoPlacement = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'autoPlacement',
    options,
    async fn(state) {
      var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
      const {
        rects,
        middlewareData,
        placement,
        platform,
        elements
      } = state;
      const {
        crossAxis = false,
        alignment,
        allowedPlacements = allPlacements,
        autoAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      const placements = alignment !== undefined || allowedPlacements === allPlacements ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
      const currentPlacement = placements[currentIndex];
      if (currentPlacement == null) {
        return {};
      }
      const {
        main,
        cross
      } = getAlignmentSides(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));

      // Make `computeCoords` start from the right place.
      if (placement !== currentPlacement) {
        return {
          reset: {
            placement: placements[0]
          }
        };
      }
      const currentOverflows = [overflow[getSide(currentPlacement)], overflow[main], overflow[cross]];
      const allOverflows = [...(((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || []), {
        placement: currentPlacement,
        overflows: currentOverflows
      }];
      const nextPlacement = placements[currentIndex + 1];

      // There are more placements to check.
      if (nextPlacement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: nextPlacement
          }
        };
      }
      const placementsSortedByMostSpace = allOverflows.map(d => {
        const alignment = getAlignment(d.placement);
        return [d.placement, alignment && crossAxis ?
        // Check along the mainAxis and main crossAxis side.
        d.overflows.slice(0, 2).reduce((acc, v) => acc + v, 0) :
        // Check only the mainAxis.
        d.overflows[0], d.overflows];
      }).sort((a, b) => a[1] - b[1]);
      const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter(d => d[2].slice(0,
      // Aligned placements should not check their opposite crossAxis
      // side.
      getAlignment(d[0]) ? 2 : 3).every(v => v <= 0));
      const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
      if (resetPlacement !== placement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: resetPlacement
          }
        };
      }
      return {};
    }
  };
};

function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}

function getSideList(side, isStart, rtl) {
  const lr = ['left', 'right'];
  const rl = ['right', 'left'];
  const tb = ['top', 'bottom'];
  const bt = ['bottom', 'top'];
  switch (side) {
    case 'top':
    case 'bottom':
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case 'left':
    case 'right':
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === 'start', rtl);
  if (alignment) {
    list = list.map(side => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'flip',
    options,
    async fn(state) {
      var _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = 'bestFit',
        fallbackAxisSideDirection = 'none',
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== 'none') {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const {
          main,
          cross
        } = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[main], overflow[cross]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];

      // One or more sides is overflowing.
      if (!overflows.every(side => side <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          // Try next placement and re-run the lifecycle.
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }

        // First, find the candidates that fit on the mainAxis side of overflow,
        // then find the placement that fits the best on the main crossAxis side.
        let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

        // Otherwise fallback.
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case 'bestFit':
              {
                var _overflowsData$map$so;
                const placement = (_overflowsData$map$so = overflowsData.map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
                if (placement) {
                  resetPlacement = placement;
                }
                break;
              }
            case 'initialPlacement':
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};

function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some(side => overflow[side] >= 0);
}
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const hide = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'hide',
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = 'referenceHidden',
        ...detectOverflowOptions
      } = evaluate(options, state);
      switch (strategy) {
        case 'referenceHidden':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              elementContext: 'reference'
            });
            const offsets = getSideOffsets(overflow, rects.reference);
            return {
              data: {
                referenceHiddenOffsets: offsets,
                referenceHidden: isAnySideFullyClipped(offsets)
              }
            };
          }
        case 'escaped':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              altBoundary: true
            });
            const offsets = getSideOffsets(overflow, rects.floating);
            return {
              data: {
                escapedOffsets: offsets,
                escaped: isAnySideFullyClipped(offsets)
              }
            };
          }
        default:
          {
            return {};
          }
      }
    }
  };
};

function getBoundingRect(rects) {
  const minX = min(...rects.map(rect => rect.left));
  const minY = min(...rects.map(rect => rect.top));
  const maxX = max(...rects.map(rect => rect.right));
  const maxY = max(...rects.map(rect => rect.bottom));
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  };
}
function getRectsByLine(rects) {
  const sortedRects = rects.slice().sort((a, b) => a.y - b.y);
  const groups = [];
  let prevRect = null;
  for (let i = 0; i < sortedRects.length; i++) {
    const rect = sortedRects[i];
    if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) {
      groups.push([rect]);
    } else {
      groups[groups.length - 1].push(rect);
    }
    prevRect = rect;
  }
  return groups.map(rect => rectToClientRect(getBoundingRect(rect)));
}
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */
const inline = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'inline',
    options,
    async fn(state) {
      const {
        placement,
        elements,
        rects,
        platform,
        strategy
      } = state;
      // A MouseEvent's client{X,Y} coords can be up to 2 pixels off a
      // ClientRect's bounds, despite the event listener being triggered. A
      // padding of 2 seems to handle this issue.
      const {
        padding = 2,
        x,
        y
      } = evaluate(options, state);
      const nativeClientRects = Array.from((await (platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference))) || []);
      const clientRects = getRectsByLine(nativeClientRects);
      const fallback = rectToClientRect(getBoundingRect(nativeClientRects));
      const paddingObject = getSideObjectFromPadding(padding);
      function getBoundingClientRect() {
        // There are two rects and they are disjoined.
        if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
          // Find the first rect in which the point is fully inside.
          return clientRects.find(rect => x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
        }

        // There are 2 or more connected rects.
        if (clientRects.length >= 2) {
          if (getMainAxisFromPlacement(placement) === 'x') {
            const firstRect = clientRects[0];
            const lastRect = clientRects[clientRects.length - 1];
            const isTop = getSide(placement) === 'top';
            const top = firstRect.top;
            const bottom = lastRect.bottom;
            const left = isTop ? firstRect.left : lastRect.left;
            const right = isTop ? firstRect.right : lastRect.right;
            const width = right - left;
            const height = bottom - top;
            return {
              top,
              bottom,
              left,
              right,
              width,
              height,
              x: left,
              y: top
            };
          }
          const isLeftSide = getSide(placement) === 'left';
          const maxRight = max(...clientRects.map(rect => rect.right));
          const minLeft = min(...clientRects.map(rect => rect.left));
          const measureRects = clientRects.filter(rect => isLeftSide ? rect.left === minLeft : rect.right === maxRight);
          const top = measureRects[0].top;
          const bottom = measureRects[measureRects.length - 1].bottom;
          const left = minLeft;
          const right = maxRight;
          const width = right - left;
          const height = bottom - top;
          return {
            top,
            bottom,
            left,
            right,
            width,
            height,
            x: left,
            y: top
          };
        }
        return fallback;
      }
      const resetRects = await platform.getElementRects({
        reference: {
          getBoundingClientRect
        },
        floating: elements.floating,
        strategy
      });
      if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
        return {
          reset: {
            rects: resetRects
          }
        };
      }
      return {};
    }
  };
};

async function convertValueToCoords(state, options) {
  const {
    placement,
    platform,
    elements
  } = state;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getMainAxisFromPlacement(placement) === 'x';
  const mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);

  // eslint-disable-next-line prefer-const
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === 'number' ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === 'number') {
    crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset = function (options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: 'offset',
    options,
    async fn(state) {
      const {
        x,
        y
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: diffCoords
      };
    }
  };
};

function getCrossAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'shift',
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: _ref => {
            let {
              x,
              y
            } = _ref;
            return {
              x,
              y
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const mainAxis = getMainAxisFromPlacement(getSide(placement));
      const crossAxis = getCrossAxis(mainAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === 'y' ? 'top' : 'left';
        const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
        const min = mainAxisCoord + overflow[minSide];
        const max = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = within(min, mainAxisCoord, max);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === 'y' ? 'top' : 'left';
        const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
        const min = crossAxisCoord + overflow[minSide];
        const max = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = within(min, crossAxisCoord, max);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
};
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
const limitShift = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const mainAxis = getMainAxisFromPlacement(placement);
      const crossAxis = getCrossAxis(mainAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset, state);
      const computedOffset = typeof rawOffset === 'number' ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === 'y' ? 'height' : 'width';
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === 'y' ? 'width' : 'height';
        const isOriginSide = ['top', 'left'].includes(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'size',
    options,
    async fn(state) {
      const {
        placement,
        rects,
        platform,
        elements
      } = state;
      const {
        apply = () => {},
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const axis = getMainAxisFromPlacement(placement);
      const isXAxis = axis === 'x';
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === 'top' || side === 'bottom') {
        heightSide = side;
        widthSide = alignment === ((await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating))) ? 'start' : 'end') ? 'left' : 'right';
      } else {
        widthSide = side;
        heightSide = alignment === 'end' ? 'top' : 'bottom';
      }
      const overflowAvailableHeight = height - overflow[heightSide];
      const overflowAvailableWidth = width - overflow[widthSide];
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if (isXAxis) {
        const maximumClippingWidth = width - overflow.left - overflow.right;
        availableWidth = alignment || noShift ? min(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
      } else {
        const maximumClippingHeight = height - overflow.top - overflow.bottom;
        availableHeight = alignment || noShift ? min(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isXAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};



;// CONCATENATED MODULE: ./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs



function getWindow(node) {
  var _node$ownerDocument;
  return ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}

function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}

function isNode(value) {
  return value instanceof getWindow(value).Node;
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || '').toLowerCase();
  }
  // Mocked nodes in testing environments may not be instances of Node. By
  // returning `#document` an infinite loop won't occur.
  // https://github.com/floating-ui/floating-ui/issues/2317
  return '#document';
}

function isHTMLElement(value) {
  return value instanceof getWindow(value).HTMLElement;
}
function isElement(value) {
  return value instanceof getWindow(value).Element;
}
function isShadowRoot(node) {
  // Browsers without `ShadowRoot` support.
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }
  return node instanceof getWindow(node).ShadowRoot || node instanceof ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
}
function isTableElement(element) {
  return ['table', 'td', 'th'].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const safari = isSafari();
  const css = getComputedStyle$1(element);

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  return css.transform !== 'none' || css.perspective !== 'none' || !safari && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !safari && (css.filter ? css.filter !== 'none' : false) || ['transform', 'perspective', 'filter'].some(value => (css.willChange || '').includes(value)) || ['paint', 'layout', 'strict', 'content'].some(value => (css.contain || '').includes(value));
}
function isSafari() {
  if (typeof CSS === 'undefined' || !CSS.supports) return false;
  return CSS.supports('-webkit-backdrop-filter', 'none');
}
function isLastTraversableNode(node) {
  return ['html', 'body', '#document'].includes(getNodeName(node));
}

const floating_ui_dom_min = Math.min;
const floating_ui_dom_max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createEmptyCoords = v => ({
  x: v,
  y: v
});

function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  // In testing environments, the `width` and `height` properties are empty
  // strings for SVG elements, returning NaN. Fallback to `0` in this case.
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}

function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}

function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createEmptyCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}

const noOffsets = /*#__PURE__*/createEmptyCoords(0);
function getVisualOffsets(element, isFixed, floatingOffsetParent) {
  var _win$visualViewport, _win$visualViewport2;
  if (isFixed === void 0) {
    isFixed = true;
  }
  if (!isSafari()) {
    return noOffsets;
  }
  const win = element ? getWindow(element) : window;
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== win) {
    return noOffsets;
  }
  return {
    x: ((_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) || 0,
    y: ((_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) || 0
  };
}

function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createEmptyCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = getVisualOffsets(domElement, isFixedStrategy, offsetParent);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentIFrame = win.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== win) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}

function getDocumentElement(node) {
  return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
}

function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createEmptyCoords(1);
  const offsets = createEmptyCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== 'fixed') {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = floating_ui_dom_max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = floating_ui_dom_max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === 'rtl') {
    x += floating_ui_dom_max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }
  const result =
  // Step into the shadow DOM of the parent of a slotted node.
  node.assignedSlot ||
  // DOM Element detected.
  node.parentNode ||
  // ShadowRoot detected.
  isShadowRoot(node) && node.host ||
  // Fallback.
  getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}

function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}

function getOverflowAncestors(node, list) {
  var _node$ownerDocument;
  if (list === void 0) {
    list = [];
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor));
}

function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isSafari();
    if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}

// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createEmptyCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === 'viewport') {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}

// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element).filter(el => isElement(el) && getNodeName(el) !== 'body');
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === 'fixed';
  let currentNode = elementIsFixed ? getParentNode(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(ancestor => ancestor !== currentNode);
    } else {
      // Record last containing block for next iteration.
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === 'clippingAncestors' ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = floating_ui_dom_max(rect.top, accRect.top);
    accRect.right = floating_ui_dom_min(rect.right, accRect.right);
    accRect.bottom = floating_ui_dom_min(rect.bottom, accRect.bottom);
    accRect.left = floating_ui_dom_max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}

function getDimensions(element) {
  return getCssDimensions(element);
}

function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === 'fixed') {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
  const window = getWindow(element);
  if (!isHTMLElement(element)) {
    return window;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static' && !isContainingBlock(offsetParent))) {
    return window;
  }
  return offsetParent || getContainingBlock(element) || window;
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === 'fixed';
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createEmptyCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

const platform = {
  getClippingRect,
  convertOffsetParentRelativeRectToViewportRelativeRect,
  isElement,
  getDimensions,
  getOffsetParent,
  getDocumentElement,
  getScale,
  async getElementRects(_ref) {
    let {
      reference,
      floating,
      strategy
    } = _ref;
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    return {
      reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
      floating: {
        x: 0,
        y: 0,
        ...(await getDimensionsFn(floating))
      }
    };
  },
  getClientRects: element => Array.from(element.getClientRects()),
  isRTL: element => getComputedStyle$1(element).direction === 'rtl'
};

// https://samthor.au/2021/observing-dom/
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    clearTimeout(timeoutId);
    io && io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    let isFirstUpdate = true;
    io = new IntersectionObserver(entries => {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 100);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }, {
      rootMargin,
      threshold: floating_ui_dom_max(0, floating_ui_dom_min(1, threshold)) || 1
    });
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}

/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = true,
    layoutShift = typeof IntersectionObserver === 'function',
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...(referenceEl ? getOverflowAncestors(referenceEl) : []), ...getOverflowAncestors(floating)] : [];
  ancestors.forEach(ancestor => {
    ancestorScroll && ancestor.addEventListener('scroll', update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener('resize', update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver(update);
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.removeEventListener('scroll', update);
      ancestorResize && ancestor.removeEventListener('resize', update);
    });
    cleanupIo && cleanupIo();
    resizeObserver && resizeObserver.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain CSS positioning
 * strategy.
 */
const floating_ui_dom_computePosition = (reference, floating, options) => {
  // This caches the expensive `getClippingElementAncestors` function so that
  // multiple lifecycle resets re-use the same result. It only lives for a
  // single call. If other functions become expensive, we can add them as well.
  const cache = new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};



// EXTERNAL MODULE: external "next/dist/compiled/react-dom/server-rendering-stub"
var server_rendering_stub_ = __webpack_require__(98704);
;// CONCATENATED MODULE: ./node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js






/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */
const floating_ui_react_dom_esm_arrow = options => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, 'current');
  }
  return {
    name: 'arrow',
    options,
    fn(state) {
      const {
        element,
        padding
      } = typeof options === 'function' ? options(state) : options;
      if (element && isRef(element)) {
        if (element.current != null) {
          return arrow({
            element: element.current,
            padding
          }).fn(state);
        }
        return {};
      } else if (element) {
        return arrow({
          element,
          padding
        }).fn(state);
      }
      return {};
    }
  };
};

var index = typeof document !== 'undefined' ? react_.useLayoutEffect : react_.useEffect;

// Fork of `fast-deep-equal` that only does the comparisons we need and compares
// functions
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === 'function' && a.toString() === b.toString()) {
    return true;
  }
  let length, i, keys;
  if (a && b && typeof a == 'object') {
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0;) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0;) {
      const key = keys[i];
      if (key === '_owner' && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}

function getDPR(element) {
  if (typeof window === 'undefined') {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}

function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}

function useLatestRef(value) {
  const ref = react_.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}

/**
 * Provides data to position a floating element.
 * @see https://floating-ui.com/docs/react
 */
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = react_.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = react_.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = react_.useState(null);
  const [_floating, _setFloating] = react_.useState(null);
  const setReference = react_.useCallback(node => {
    if (node != referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, [_setReference]);
  const setFloating = react_.useCallback(node => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, [_setFloating]);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = react_.useRef(null);
  const floatingRef = react_.useRef(null);
  const dataRef = react_.useRef(data);
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform);
  const update = react_.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    floating_ui_dom_computePosition(referenceRef.current, floatingRef.current, config).then(data => {
      const fullData = {
        ...data,
        isPositioned: true
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        server_rendering_stub_.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData(data => ({
        ...data,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = react_.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl) referenceRef.current = referenceEl;
    if (floatingEl) floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      } else {
        update();
      }
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef]);
  const refs = react_.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = react_.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = react_.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...(getDPR(elements.floating) >= 1.5 && {
          willChange: 'transform'
        })
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return react_.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}



// EXTERNAL MODULE: ./node_modules/@radix-ui/react-primitive/dist/index.mjs
var dist = __webpack_require__(15585);
;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-arrow/dist/index.mjs







/* -------------------------------------------------------------------------------------------------
 * Arrow
 * -----------------------------------------------------------------------------------------------*/ const $7e8f5cd07187803e$var$NAME = 'Arrow';
const $7e8f5cd07187803e$export$21b07c8f274aebd5 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { children: children , width: width = 10 , height: height = 5 , ...arrowProps } = props;
    return /*#__PURE__*/ (0,react_.createElement)(dist/* Primitive */.WV.svg, (0,esm_extends/* default */.Z)({}, arrowProps, {
        ref: forwardedRef,
        width: width,
        height: height,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none"
    }), props.asChild ? children : /*#__PURE__*/ (0,react_.createElement)("polygon", {
        points: "0,0 30,0 15,10"
    }));
});
/*#__PURE__*/ Object.assign($7e8f5cd07187803e$export$21b07c8f274aebd5, {
    displayName: $7e8f5cd07187803e$var$NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $7e8f5cd07187803e$export$be92b6f5f03c0fe9 = $7e8f5cd07187803e$export$21b07c8f274aebd5;





//# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ./node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var react_compose_refs_dist = __webpack_require__(49837);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-context/dist/index.mjs
var react_context_dist = __webpack_require__(95866);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var react_use_callback_ref_dist = __webpack_require__(76601);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var react_use_layout_effect_dist = __webpack_require__(72660);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-size/dist/index.mjs
var react_use_size_dist = __webpack_require__(97020);
;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-popper/dist/index.mjs





















const $cf1ac5d9fe0e8206$export$36f0086da09c4b9f = (/* unused pure expression or super */ null && ([
    'top',
    'right',
    'bottom',
    'left'
]));
const $cf1ac5d9fe0e8206$export$3671ffab7b302fc9 = (/* unused pure expression or super */ null && ([
    'start',
    'center',
    'end'
]));
/* -------------------------------------------------------------------------------------------------
 * Popper
 * -----------------------------------------------------------------------------------------------*/ const $cf1ac5d9fe0e8206$var$POPPER_NAME = 'Popper';
const [$cf1ac5d9fe0e8206$var$createPopperContext, $cf1ac5d9fe0e8206$export$722aac194ae923] = (0,react_context_dist/* createContextScope */.b)($cf1ac5d9fe0e8206$var$POPPER_NAME);
const [$cf1ac5d9fe0e8206$var$PopperProvider, $cf1ac5d9fe0e8206$var$usePopperContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$POPPER_NAME);
const $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9 = (props)=>{
    const { __scopePopper: __scopePopper , children: children  } = props;
    const [anchor, setAnchor] = (0,react_.useState)(null);
    return /*#__PURE__*/ (0,react_.createElement)($cf1ac5d9fe0e8206$var$PopperProvider, {
        scope: __scopePopper,
        anchor: anchor,
        onAnchorChange: setAnchor
    }, children);
};
/*#__PURE__*/ Object.assign($cf1ac5d9fe0e8206$export$badac9ada3a0bdf9, {
    displayName: $cf1ac5d9fe0e8206$var$POPPER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * PopperAnchor
 * -----------------------------------------------------------------------------------------------*/ const $cf1ac5d9fe0e8206$var$ANCHOR_NAME = 'PopperAnchor';
const $cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopePopper: __scopePopper , virtualRef: virtualRef , ...anchorProps } = props;
    const context = $cf1ac5d9fe0e8206$var$usePopperContext($cf1ac5d9fe0e8206$var$ANCHOR_NAME, __scopePopper);
    const ref = (0,react_.useRef)(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, ref);
    (0,react_.useEffect)(()=>{
        // Consumer can anchor the popper to something that isn't
        // a DOM node e.g. pointer position, so we override the
        // `anchorRef` with their virtual ref in this case.
        context.onAnchorChange((virtualRef === null || virtualRef === void 0 ? void 0 : virtualRef.current) || ref.current);
    });
    return virtualRef ? null : /*#__PURE__*/ (0,react_.createElement)(dist/* Primitive */.WV.div, (0,esm_extends/* default */.Z)({}, anchorProps, {
        ref: composedRefs
    }));
});
/*#__PURE__*/ Object.assign($cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d, {
    displayName: $cf1ac5d9fe0e8206$var$ANCHOR_NAME
});
/* -------------------------------------------------------------------------------------------------
 * PopperContent
 * -----------------------------------------------------------------------------------------------*/ const $cf1ac5d9fe0e8206$var$CONTENT_NAME = 'PopperContent';
const [$cf1ac5d9fe0e8206$var$PopperContentProvider, $cf1ac5d9fe0e8206$var$useContentContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME);
const $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    var _arrowSize$width, _arrowSize$height, _middlewareData$arrow, _middlewareData$arrow2, _middlewareData$arrow3, _middlewareData$trans, _middlewareData$trans2, _middlewareData$hide;
    const { __scopePopper: __scopePopper , side: side = 'bottom' , sideOffset: sideOffset = 0 , align: align = 'center' , alignOffset: alignOffset = 0 , arrowPadding: arrowPadding = 0 , collisionBoundary: collisionBoundary = [] , collisionPadding: collisionPaddingProp = 0 , sticky: sticky = 'partial' , hideWhenDetached: hideWhenDetached = false , avoidCollisions: avoidCollisions = true , onPlaced: onPlaced , ...contentProps } = props;
    const context = $cf1ac5d9fe0e8206$var$usePopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME, __scopePopper);
    const [content, setContent] = (0,react_.useState)(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, (node)=>setContent(node)
    );
    const [arrow, setArrow] = (0,react_.useState)(null);
    const arrowSize = (0,react_use_size_dist/* useSize */.t)(arrow);
    const arrowWidth = (_arrowSize$width = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.width) !== null && _arrowSize$width !== void 0 ? _arrowSize$width : 0;
    const arrowHeight = (_arrowSize$height = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.height) !== null && _arrowSize$height !== void 0 ? _arrowSize$height : 0;
    const desiredPlacement = side + (align !== 'center' ? '-' + align : '');
    const collisionPadding = typeof collisionPaddingProp === 'number' ? collisionPaddingProp : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...collisionPaddingProp
    };
    const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [
        collisionBoundary
    ];
    const hasExplicitBoundaries = boundary.length > 0;
    const detectOverflowOptions = {
        padding: collisionPadding,
        boundary: boundary.filter($cf1ac5d9fe0e8206$var$isNotNull),
        // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
        altBoundary: hasExplicitBoundaries
    };
    const { refs: refs , floatingStyles: floatingStyles , placement: placement , isPositioned: isPositioned , middlewareData: middlewareData  } = useFloating({
        // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
        strategy: 'fixed',
        placement: desiredPlacement,
        whileElementsMounted: autoUpdate,
        elements: {
            reference: context.anchor
        },
        middleware: [
            offset({
                mainAxis: sideOffset + arrowHeight,
                alignmentAxis: alignOffset
            }),
            avoidCollisions && shift({
                mainAxis: true,
                crossAxis: false,
                limiter: sticky === 'partial' ? limitShift() : undefined,
                ...detectOverflowOptions
            }),
            avoidCollisions && flip({
                ...detectOverflowOptions
            }),
            size({
                ...detectOverflowOptions,
                apply: ({ elements: elements , rects: rects , availableWidth: availableWidth , availableHeight: availableHeight  })=>{
                    const { width: anchorWidth , height: anchorHeight  } = rects.reference;
                    const contentStyle = elements.floating.style;
                    contentStyle.setProperty('--radix-popper-available-width', `${availableWidth}px`);
                    contentStyle.setProperty('--radix-popper-available-height', `${availableHeight}px`);
                    contentStyle.setProperty('--radix-popper-anchor-width', `${anchorWidth}px`);
                    contentStyle.setProperty('--radix-popper-anchor-height', `${anchorHeight}px`);
                }
            }),
            arrow && floating_ui_react_dom_esm_arrow({
                element: arrow,
                padding: arrowPadding
            }),
            $cf1ac5d9fe0e8206$var$transformOrigin({
                arrowWidth: arrowWidth,
                arrowHeight: arrowHeight
            }),
            hideWhenDetached && hide({
                strategy: 'referenceHidden'
            })
        ]
    });
    const [placedSide, placedAlign] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement);
    const handlePlaced = (0,react_use_callback_ref_dist/* useCallbackRef */.W)(onPlaced);
    (0,react_use_layout_effect_dist/* useLayoutEffect */.b)(()=>{
        if (isPositioned) handlePlaced === null || handlePlaced === void 0 || handlePlaced();
    }, [
        isPositioned,
        handlePlaced
    ]);
    const arrowX = (_middlewareData$arrow = middlewareData.arrow) === null || _middlewareData$arrow === void 0 ? void 0 : _middlewareData$arrow.x;
    const arrowY = (_middlewareData$arrow2 = middlewareData.arrow) === null || _middlewareData$arrow2 === void 0 ? void 0 : _middlewareData$arrow2.y;
    const cannotCenterArrow = ((_middlewareData$arrow3 = middlewareData.arrow) === null || _middlewareData$arrow3 === void 0 ? void 0 : _middlewareData$arrow3.centerOffset) !== 0;
    const [contentZIndex, setContentZIndex] = (0,react_.useState)();
    (0,react_use_layout_effect_dist/* useLayoutEffect */.b)(()=>{
        if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
    }, [
        content
    ]);
    return /*#__PURE__*/ (0,react_.createElement)("div", {
        ref: refs.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...floatingStyles,
            transform: isPositioned ? floatingStyles.transform : 'translate(0, -200%)',
            // keep off the page when measuring
            minWidth: 'max-content',
            zIndex: contentZIndex,
            ['--radix-popper-transform-origin']: [
                (_middlewareData$trans = middlewareData.transformOrigin) === null || _middlewareData$trans === void 0 ? void 0 : _middlewareData$trans.x,
                (_middlewareData$trans2 = middlewareData.transformOrigin) === null || _middlewareData$trans2 === void 0 ? void 0 : _middlewareData$trans2.y
            ].join(' ')
        } // Floating UI interally calculates logical alignment based the `dir` attribute on
        ,
        dir: props.dir
    }, /*#__PURE__*/ (0,react_.createElement)($cf1ac5d9fe0e8206$var$PopperContentProvider, {
        scope: __scopePopper,
        placedSide: placedSide,
        onArrowChange: setArrow,
        arrowX: arrowX,
        arrowY: arrowY,
        shouldHideArrow: cannotCenterArrow
    }, /*#__PURE__*/ (0,react_.createElement)(dist/* Primitive */.WV.div, (0,esm_extends/* default */.Z)({
        "data-side": placedSide,
        "data-align": placedAlign
    }, contentProps, {
        ref: composedRefs,
        style: {
            ...contentProps.style,
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: !isPositioned ? 'none' : undefined,
            // hide the content if using the hide middleware and should be hidden
            opacity: (_middlewareData$hide = middlewareData.hide) !== null && _middlewareData$hide !== void 0 && _middlewareData$hide.referenceHidden ? 0 : undefined
        }
    }))));
});
/*#__PURE__*/ Object.assign($cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc, {
    displayName: $cf1ac5d9fe0e8206$var$CONTENT_NAME
});
/* -------------------------------------------------------------------------------------------------
 * PopperArrow
 * -----------------------------------------------------------------------------------------------*/ const $cf1ac5d9fe0e8206$var$ARROW_NAME = 'PopperArrow';
const $cf1ac5d9fe0e8206$var$OPPOSITE_SIDE = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right'
};
const $cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0 = /*#__PURE__*/ (0,react_.forwardRef)(function $cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0(props, forwardedRef) {
    const { __scopePopper: __scopePopper , ...arrowProps } = props;
    const contentContext = $cf1ac5d9fe0e8206$var$useContentContext($cf1ac5d9fe0e8206$var$ARROW_NAME, __scopePopper);
    const baseSide = $cf1ac5d9fe0e8206$var$OPPOSITE_SIDE[contentContext.placedSide];
    return(/*#__PURE__*/ // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    (0,react_.createElement)("span", {
        ref: contentContext.onArrowChange,
        style: {
            position: 'absolute',
            left: contentContext.arrowX,
            top: contentContext.arrowY,
            [baseSide]: 0,
            transformOrigin: {
                top: '',
                right: '0 0',
                bottom: 'center 0',
                left: '100% 0'
            }[contentContext.placedSide],
            transform: {
                top: 'translateY(100%)',
                right: 'translateY(50%) rotate(90deg) translateX(-50%)',
                bottom: `rotate(180deg)`,
                left: 'translateY(50%) rotate(-90deg) translateX(50%)'
            }[contentContext.placedSide],
            visibility: contentContext.shouldHideArrow ? 'hidden' : undefined
        }
    }, /*#__PURE__*/ (0,react_.createElement)($7e8f5cd07187803e$export$be92b6f5f03c0fe9, (0,esm_extends/* default */.Z)({}, arrowProps, {
        ref: forwardedRef,
        style: {
            ...arrowProps.style,
            // ensures the element can be measured correctly (mostly for if SVG)
            display: 'block'
        }
    }))));
});
/*#__PURE__*/ Object.assign($cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0, {
    displayName: $cf1ac5d9fe0e8206$var$ARROW_NAME
});
/* -----------------------------------------------------------------------------------------------*/ function $cf1ac5d9fe0e8206$var$isNotNull(value) {
    return value !== null;
}
const $cf1ac5d9fe0e8206$var$transformOrigin = (options)=>({
        name: 'transformOrigin',
        options: options,
        fn (data) {
            var _middlewareData$arrow4, _middlewareData$arrow5, _middlewareData$arrow6, _middlewareData$arrow7, _middlewareData$arrow8;
            const { placement: placement , rects: rects , middlewareData: middlewareData  } = data;
            const cannotCenterArrow = ((_middlewareData$arrow4 = middlewareData.arrow) === null || _middlewareData$arrow4 === void 0 ? void 0 : _middlewareData$arrow4.centerOffset) !== 0;
            const isArrowHidden = cannotCenterArrow;
            const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
            const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
            const [placedSide, placedAlign] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement);
            const noArrowAlign = {
                start: '0%',
                center: '50%',
                end: '100%'
            }[placedAlign];
            const arrowXCenter = ((_middlewareData$arrow5 = (_middlewareData$arrow6 = middlewareData.arrow) === null || _middlewareData$arrow6 === void 0 ? void 0 : _middlewareData$arrow6.x) !== null && _middlewareData$arrow5 !== void 0 ? _middlewareData$arrow5 : 0) + arrowWidth / 2;
            const arrowYCenter = ((_middlewareData$arrow7 = (_middlewareData$arrow8 = middlewareData.arrow) === null || _middlewareData$arrow8 === void 0 ? void 0 : _middlewareData$arrow8.y) !== null && _middlewareData$arrow7 !== void 0 ? _middlewareData$arrow7 : 0) + arrowHeight / 2;
            let x = '';
            let y = '';
            if (placedSide === 'bottom') {
                x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
                y = `${-arrowHeight}px`;
            } else if (placedSide === 'top') {
                x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
                y = `${rects.floating.height + arrowHeight}px`;
            } else if (placedSide === 'right') {
                x = `${-arrowHeight}px`;
                y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
            } else if (placedSide === 'left') {
                x = `${rects.floating.width + arrowHeight}px`;
                y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
            }
            return {
                data: {
                    x: x,
                    y: y
                }
            };
        }
    })
;
function $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement) {
    const [side, align = 'center'] = placement.split('-');
    return [
        side,
        align
    ];
}
const $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9 = $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9;
const $cf1ac5d9fe0e8206$export$b688253958b8dfe7 = $cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d;
const $cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2 = $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc;
const $cf1ac5d9fe0e8206$export$21b07c8f274aebd5 = $cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0;





//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 48483:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ $89eedd556c436f6a$export$be92b6f5f03c0fe9)
/* harmony export */ });
/* unused harmony export Separator */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69885);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15585);







/* -------------------------------------------------------------------------------------------------
 *  Separator
 * -----------------------------------------------------------------------------------------------*/ const $89eedd556c436f6a$var$NAME = 'Separator';
const $89eedd556c436f6a$var$DEFAULT_ORIENTATION = 'horizontal';
const $89eedd556c436f6a$var$ORIENTATIONS = [
    'horizontal',
    'vertical'
];
const $89eedd556c436f6a$export$1ff3c3f08ae963c0 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { decorative: decorative , orientation: orientationProp = $89eedd556c436f6a$var$DEFAULT_ORIENTATION , ...domProps } = props;
    const orientation = $89eedd556c436f6a$var$isValidOrientation(orientationProp) ? orientationProp : $89eedd556c436f6a$var$DEFAULT_ORIENTATION; // `aria-orientation` defaults to `horizontal` so we only need it if `orientation` is vertical
    const ariaOrientation = orientation === 'vertical' ? orientation : undefined;
    const semanticProps = decorative ? {
        role: 'none'
    } : {
        'aria-orientation': ariaOrientation,
        role: 'separator'
    };
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_1__/* .Primitive */ .WV.div, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
        "data-orientation": orientation
    }, semanticProps, domProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($89eedd556c436f6a$export$1ff3c3f08ae963c0, {
    displayName: $89eedd556c436f6a$var$NAME
});
$89eedd556c436f6a$export$1ff3c3f08ae963c0.propTypes = {
    orientation (props, propName, componentName) {
        const propValue = props[propName];
        const strVal = String(propValue);
        if (propValue && !$89eedd556c436f6a$var$isValidOrientation(propValue)) return new Error($89eedd556c436f6a$var$getInvalidOrientationError(strVal, componentName));
        return null;
    }
};
/* -----------------------------------------------------------------------------------------------*/ // Split this out for clearer readability of the error message.
function $89eedd556c436f6a$var$getInvalidOrientationError(value, componentName) {
    return `Invalid prop \`orientation\` of value \`${value}\` supplied to \`${componentName}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${$89eedd556c436f6a$var$DEFAULT_ORIENTATION}\`.`;
}
function $89eedd556c436f6a$var$isValidOrientation(orientation) {
    return $89eedd556c436f6a$var$ORIENTATIONS.includes(orientation);
}
const $89eedd556c436f6a$export$be92b6f5f03c0fe9 = $89eedd556c436f6a$export$1ff3c3f08ae963c0;





//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 97020:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ $db6c3485150b8e66$export$1ab7ae714698c4b8)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72660);





function $db6c3485150b8e66$export$1ab7ae714698c4b8(element) {
    const [size, setSize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutEffect */ .b)(()=>{
        if (element) {
            // provide size as early as possible
            setSize({
                width: element.offsetWidth,
                height: element.offsetHeight
            });
            const resizeObserver = new ResizeObserver((entries)=>{
                if (!Array.isArray(entries)) return;
                 // Since we only observe the one element, we don't need to loop over the
                // array
                if (!entries.length) return;
                const entry = entries[0];
                let width;
                let height;
                if ('borderBoxSize' in entry) {
                    const borderSizeEntry = entry['borderBoxSize']; // iron out differences between browsers
                    const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
                    width = borderSize['inlineSize'];
                    height = borderSize['blockSize'];
                } else {
                    // for browsers that don't support `borderBoxSize`
                    // we calculate it ourselves to get the correct border box.
                    width = element.offsetWidth;
                    height = element.offsetHeight;
                }
                setSize({
                    width: width,
                    height: height
                });
            });
            resizeObserver.observe(element, {
                box: 'border-box'
            });
            return ()=>resizeObserver.unobserve(element)
            ;
        } else // We only want to reset to `undefined` when the element becomes `null`,
        // not if it changes to another element.
        setSize(undefined);
    }, [
        element
    ]);
    return size;
}





//# sourceMappingURL=index.mjs.map


/***/ })

};
;