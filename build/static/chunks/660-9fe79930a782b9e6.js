"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[660],{62300:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(61750);let l=(0,r.Z)("ChevronDown",[["polyline",{points:"6 9 12 15 18 9",key:"1do0m2"}]])},70747:function(e,t,n){n.d(t,{VY:function(){return eb},ZA:function(){return ex},JO:function(){return ew},ck:function(){return eS},wU:function(){return e_},eT:function(){return ek},__:function(){return eC},h_:function(){return ey},fC:function(){return em},Z0:function(){return eM},xz:function(){return eh},B4:function(){return eg},l_:function(){return eE}});var r=n(40431),l=n(86006),o=n(8431);function a(e,[t,n]){return Math.min(n,Math.max(t,e))}var i=n(1928),u=n(79455),c=n(81084),d=n(38899),s=n(84924),p=n(36841),f=n(76808),v=n(63961),m=n(70757),h=n(46998),g=n(187),w=n(76899),y=n(1095),b=n(46868),E=n(85740),x=n(6423),C=n(93414);let S=(0,l.forwardRef)((e,t)=>(0,l.createElement)(w.WV.span,(0,r.Z)({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}})));var k=n(472),_=n(34182);let M=[" ","Enter","ArrowUp","ArrowDown"],R=[" ","Enter"],D="Select",[P,I,T]=(0,u.B)(D),[V,W]=(0,d.b)(D,[T,h.D7]),O=(0,h.D7)(),[Z,L]=V(D),[N,H]=V(D),A=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,disabled:o=!1,...a}=e,u=O(n),d=L("SelectTrigger",n),s=d.disabled||o,p=(0,c.e)(t,d.onTriggerChange),f=I(n),[v,m,g]=ef(e=>{let t=f().filter(e=>!e.disabled),n=t.find(e=>e.value===d.value),r=ev(t,e,n);void 0!==r&&d.onValueChange(r.value)}),y=()=>{s||(d.onOpenChange(!0),g())};return(0,l.createElement)(h.ee,(0,r.Z)({asChild:!0},u),(0,l.createElement)(w.WV.button,(0,r.Z)({type:"button",role:"combobox","aria-controls":d.contentId,"aria-expanded":d.open,"aria-required":d.required,"aria-autocomplete":"none",dir:d.dir,"data-state":d.open?"open":"closed",disabled:s,"data-disabled":s?"":void 0,"data-placeholder":void 0===d.value?"":void 0},a,{ref:p,onClick:(0,i.M)(a.onClick,e=>{e.currentTarget.focus()}),onPointerDown:(0,i.M)(a.onPointerDown,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),0===e.button&&!1===e.ctrlKey&&(y(),d.triggerPointerDownPosRef.current={x:Math.round(e.pageX),y:Math.round(e.pageY)},e.preventDefault())}),onKeyDown:(0,i.M)(a.onKeyDown,e=>{let t=""!==v.current,n=e.ctrlKey||e.altKey||e.metaKey;n||1!==e.key.length||m(e.key),(!t||" "!==e.key)&&M.includes(e.key)&&(y(),e.preventDefault())})})))}),B=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,className:o,style:a,children:i,placeholder:u,...d}=e,s=L("SelectValue",n),{onValueNodeHasChildrenChange:p}=s,f=void 0!==i,v=(0,c.e)(t,s.onValueNodeChange);return(0,x.b)(()=>{p(f)},[p,f]),(0,l.createElement)(w.WV.span,(0,r.Z)({},d,{ref:v,style:{pointerEvents:"none"}}),void 0===s.value&&void 0!==u?u:i)}),K=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,children:o,...a}=e;return(0,l.createElement)(w.WV.span,(0,r.Z)({"aria-hidden":!0},a,{ref:t}),o||"▼")}),F="SelectContent",U=(0,l.forwardRef)((e,t)=>{let n=L(F,e.__scopeSelect),[a,i]=(0,l.useState)();return((0,x.b)(()=>{i(new DocumentFragment)},[]),n.open)?(0,l.createElement)(Y,(0,r.Z)({},e,{ref:t})):a?(0,o.createPortal)((0,l.createElement)(z,{scope:e.__scopeSelect},(0,l.createElement)(P.Slot,{scope:e.__scopeSelect},(0,l.createElement)("div",null,e.children))),a):null}),[z,q]=V(F),Y=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,position:o="item-aligned",onCloseAutoFocus:a,onEscapeKeyDown:u,onPointerDownOutside:d,side:s,sideOffset:m,align:h,alignOffset:g,arrowPadding:w,collisionBoundary:b,collisionPadding:E,sticky:x,hideWhenDetached:C,avoidCollisions:S,...M}=e,R=L(F,n),[D,P]=(0,l.useState)(null),[T,V]=(0,l.useState)(null),W=(0,c.e)(t,e=>P(e)),[O,Z]=(0,l.useState)(null),[N,H]=(0,l.useState)(null),A=I(n),[B,K]=(0,l.useState)(!1),U=(0,l.useRef)(!1);(0,l.useEffect)(()=>{if(D)return(0,k.Ry)(D)},[D]),(0,f.EW)();let q=(0,l.useCallback)(e=>{let[t,...n]=A().map(e=>e.ref.current),[r]=n.slice(-1),l=document.activeElement;for(let n of e)if(n===l||(null==n||n.scrollIntoView({block:"nearest"}),n===t&&T&&(T.scrollTop=0),n===r&&T&&(T.scrollTop=T.scrollHeight),null==n||n.focus(),document.activeElement!==l))return},[A,T]),Y=(0,l.useCallback)(()=>q([O,D]),[q,O,D]);(0,l.useEffect)(()=>{B&&Y()},[B,Y]);let{onOpenChange:G,triggerPointerDownPosRef:J}=R;(0,l.useEffect)(()=>{if(D){let e={x:0,y:0},t=t=>{var n,r,l,o;e={x:Math.abs(Math.round(t.pageX)-(null!==(n=null===(r=J.current)||void 0===r?void 0:r.x)&&void 0!==n?n:0)),y:Math.abs(Math.round(t.pageY)-(null!==(l=null===(o=J.current)||void 0===o?void 0:o.y)&&void 0!==l?l:0))}},n=n=>{e.x<=10&&e.y<=10?n.preventDefault():D.contains(n.target)||G(!1),document.removeEventListener("pointermove",t),J.current=null};return null!==J.current&&(document.addEventListener("pointermove",t),document.addEventListener("pointerup",n,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",t),document.removeEventListener("pointerup",n,{capture:!0})}}},[D,G,J]),(0,l.useEffect)(()=>{let e=()=>G(!1);return window.addEventListener("blur",e),window.addEventListener("resize",e),()=>{window.removeEventListener("blur",e),window.removeEventListener("resize",e)}},[G]);let[Q,$]=ef(e=>{let t=A().filter(e=>!e.disabled),n=t.find(e=>e.ref.current===document.activeElement),r=ev(t,e,n);r&&setTimeout(()=>r.ref.current.focus())}),ee=(0,l.useCallback)((e,t,n)=>{let r=!U.current&&!n,l=void 0!==R.value&&R.value===t;(l||r)&&(Z(e),r&&(U.current=!0))},[R.value]),et=(0,l.useCallback)(()=>null==D?void 0:D.focus(),[D]),en=(0,l.useCallback)((e,t,n)=>{let r=!U.current&&!n,l=void 0!==R.value&&R.value===t;(l||r)&&H(e)},[R.value]),er="popper"===o?X:j,el=er===X?{side:s,sideOffset:m,align:h,alignOffset:g,arrowPadding:w,collisionBoundary:b,collisionPadding:E,sticky:x,hideWhenDetached:C,avoidCollisions:S}:{};return(0,l.createElement)(z,{scope:n,content:D,viewport:T,onViewportChange:V,itemRefCallback:ee,selectedItem:O,onItemLeave:et,itemTextRefCallback:en,focusSelectedItem:Y,selectedItemText:N,position:o,isPositioned:B,searchRef:Q},(0,l.createElement)(_.Z,{as:y.g7,allowPinchZoom:!0},(0,l.createElement)(v.M,{asChild:!0,trapped:R.open,onMountAutoFocus:e=>{e.preventDefault()},onUnmountAutoFocus:(0,i.M)(a,e=>{var t;null===(t=R.trigger)||void 0===t||t.focus({preventScroll:!0}),e.preventDefault()})},(0,l.createElement)(p.XB,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:u,onPointerDownOutside:d,onFocusOutside:e=>e.preventDefault(),onDismiss:()=>R.onOpenChange(!1)},(0,l.createElement)(er,(0,r.Z)({role:"listbox",id:R.contentId,"data-state":R.open?"open":"closed",dir:R.dir,onContextMenu:e=>e.preventDefault()},M,el,{onPlaced:()=>K(!0),ref:W,style:{display:"flex",flexDirection:"column",outline:"none",...M.style},onKeyDown:(0,i.M)(M.onKeyDown,e=>{let t=e.ctrlKey||e.altKey||e.metaKey;if("Tab"===e.key&&e.preventDefault(),t||1!==e.key.length||$(e.key),["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=A().filter(e=>!e.disabled),n=t.map(e=>e.ref.current);if(["ArrowUp","End"].includes(e.key)&&(n=n.slice().reverse()),["ArrowUp","ArrowDown"].includes(e.key)){let t=e.target,r=n.indexOf(t);n=n.slice(r+1)}setTimeout(()=>q(n)),e.preventDefault()}})}))))))}),j=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,onPlaced:o,...i}=e,u=L(F,n),d=q(F,n),[s,p]=(0,l.useState)(null),[f,v]=(0,l.useState)(null),m=(0,c.e)(t,e=>v(e)),h=I(n),g=(0,l.useRef)(!1),y=(0,l.useRef)(!0),{viewport:b,selectedItem:E,selectedItemText:C,focusSelectedItem:S}=d,k=(0,l.useCallback)(()=>{if(u.trigger&&u.valueNode&&s&&f&&b&&E&&C){let e=u.trigger.getBoundingClientRect(),t=f.getBoundingClientRect(),n=u.valueNode.getBoundingClientRect(),r=C.getBoundingClientRect();if("rtl"!==u.dir){let l=r.left-t.left,o=n.left-l,i=e.left-o,u=e.width+i,c=Math.max(u,t.width),d=window.innerWidth-10,p=a(o,[10,d-c]);s.style.minWidth=u+"px",s.style.left=p+"px"}else{let l=t.right-r.right,o=window.innerWidth-n.right-l,i=window.innerWidth-e.right-o,u=e.width+i,c=Math.max(u,t.width),d=window.innerWidth-10,p=a(o,[10,d-c]);s.style.minWidth=u+"px",s.style.right=p+"px"}let l=h(),i=window.innerHeight-20,c=b.scrollHeight,d=window.getComputedStyle(f),p=parseInt(d.borderTopWidth,10),v=parseInt(d.paddingTop,10),m=parseInt(d.borderBottomWidth,10),w=parseInt(d.paddingBottom,10),y=p+v+c+w+m,x=Math.min(5*E.offsetHeight,y),S=window.getComputedStyle(b),k=parseInt(S.paddingTop,10),_=parseInt(S.paddingBottom,10),M=e.top+e.height/2-10,R=E.offsetHeight/2,D=E.offsetTop+R,P=p+v+D;if(P<=M){let e=E===l[l.length-1].ref.current;s.style.bottom="0px";let t=f.clientHeight-b.offsetTop-b.offsetHeight;s.style.height=P+Math.max(i-M,R+(e?_:0)+t+m)+"px"}else{let e=E===l[0].ref.current;s.style.top="0px";let t=Math.max(M,p+b.offsetTop+(e?k:0)+R);s.style.height=t+(y-P)+"px",b.scrollTop=P-M+b.offsetTop}s.style.margin="10px 0",s.style.minHeight=x+"px",s.style.maxHeight=i+"px",null==o||o(),requestAnimationFrame(()=>g.current=!0)}},[h,u.trigger,u.valueNode,s,f,b,E,C,u.dir,o]);(0,x.b)(()=>k(),[k]);let[_,M]=(0,l.useState)();(0,x.b)(()=>{f&&M(window.getComputedStyle(f).zIndex)},[f]);let R=(0,l.useCallback)(e=>{e&&!0===y.current&&(k(),null==S||S(),y.current=!1)},[k,S]);return(0,l.createElement)(G,{scope:n,contentWrapper:s,shouldExpandOnScrollRef:g,onScrollButtonChange:R},(0,l.createElement)("div",{ref:p,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:_}},(0,l.createElement)(w.WV.div,(0,r.Z)({},i,{ref:m,style:{boxSizing:"border-box",maxHeight:"100%",...i.style}}))))}),X=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,align:o="start",collisionPadding:a=10,...i}=e,u=O(n);return(0,l.createElement)(h.VY,(0,r.Z)({},u,i,{ref:t,align:o,collisionPadding:a,style:{boxSizing:"border-box",...i.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}}))}),[G,J]=V(F,{}),Q="SelectViewport",$=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,...o}=e,a=q(Q,n),u=J(Q,n),d=(0,c.e)(t,a.onViewportChange),s=(0,l.useRef)(0);return(0,l.createElement)(l.Fragment,null,(0,l.createElement)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),(0,l.createElement)(P.Slot,{scope:n},(0,l.createElement)(w.WV.div,(0,r.Z)({"data-radix-select-viewport":"",role:"presentation"},o,{ref:d,style:{position:"relative",flex:1,overflow:"auto",...o.style},onScroll:(0,i.M)(o.onScroll,e=>{let t=e.currentTarget,{contentWrapper:n,shouldExpandOnScrollRef:r}=u;if(null!=r&&r.current&&n){let e=Math.abs(s.current-t.scrollTop);if(e>0){let r=window.innerHeight-20,l=parseFloat(n.style.minHeight),o=parseFloat(n.style.height),a=Math.max(l,o);if(a<r){let l=a+e,o=Math.min(r,l),i=l-o;n.style.height=o+"px","0px"===n.style.bottom&&(t.scrollTop=i>0?i:0,n.style.justifyContent="flex-end")}}}s.current=t.scrollTop})}))))}),[ee,et]=V("SelectGroup"),en=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,...o}=e,a=(0,m.M)();return(0,l.createElement)(ee,{scope:n,id:a},(0,l.createElement)(w.WV.div,(0,r.Z)({role:"group","aria-labelledby":a},o,{ref:t})))}),er=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,...o}=e,a=et("SelectLabel",n);return(0,l.createElement)(w.WV.div,(0,r.Z)({id:a.id},o,{ref:t}))}),el="SelectItem",[eo,ea]=V(el),ei=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,value:o,disabled:a=!1,textValue:u,...d}=e,s=L(el,n),p=q(el,n),f=s.value===o,[v,h]=(0,l.useState)(null!=u?u:""),[g,y]=(0,l.useState)(!1),b=(0,c.e)(t,e=>{var t;return null===(t=p.itemRefCallback)||void 0===t?void 0:t.call(p,e,o,a)}),E=(0,m.M)(),x=()=>{a||(s.onValueChange(o),s.onOpenChange(!1))};return(0,l.createElement)(eo,{scope:n,value:o,disabled:a,textId:E,isSelected:f,onItemTextChange:(0,l.useCallback)(e=>{h(t=>{var n;return t||(null!==(n=null==e?void 0:e.textContent)&&void 0!==n?n:"").trim()})},[])},(0,l.createElement)(P.ItemSlot,{scope:n,value:o,disabled:a,textValue:v},(0,l.createElement)(w.WV.div,(0,r.Z)({role:"option","aria-labelledby":E,"data-highlighted":g?"":void 0,"aria-selected":f&&g,"data-state":f?"checked":"unchecked","aria-disabled":a||void 0,"data-disabled":a?"":void 0,tabIndex:a?void 0:-1},d,{ref:b,onFocus:(0,i.M)(d.onFocus,()=>y(!0)),onBlur:(0,i.M)(d.onBlur,()=>y(!1)),onPointerUp:(0,i.M)(d.onPointerUp,x),onPointerMove:(0,i.M)(d.onPointerMove,e=>{if(a){var t;null===(t=p.onItemLeave)||void 0===t||t.call(p)}else e.currentTarget.focus({preventScroll:!0})}),onPointerLeave:(0,i.M)(d.onPointerLeave,e=>{if(e.currentTarget===document.activeElement){var t;null===(t=p.onItemLeave)||void 0===t||t.call(p)}}),onKeyDown:(0,i.M)(d.onKeyDown,e=>{var t;let n=(null===(t=p.searchRef)||void 0===t?void 0:t.current)!=="";n&&" "===e.key||(R.includes(e.key)&&x()," "===e.key&&e.preventDefault())})}))))}),eu="SelectItemText",ec=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,className:a,style:i,...u}=e,d=L(eu,n),s=q(eu,n),p=ea(eu,n),f=H(eu,n),[v,m]=(0,l.useState)(null),h=(0,c.e)(t,e=>m(e),p.onItemTextChange,e=>{var t;return null===(t=s.itemTextRefCallback)||void 0===t?void 0:t.call(s,e,p.value,p.disabled)}),g=null==v?void 0:v.textContent,y=(0,l.useMemo)(()=>(0,l.createElement)("option",{key:p.value,value:p.value,disabled:p.disabled},g),[p.disabled,p.value,g]),{onNativeOptionAdd:b,onNativeOptionRemove:E}=f;return(0,x.b)(()=>(b(y),()=>E(y)),[b,E,y]),(0,l.createElement)(l.Fragment,null,(0,l.createElement)(w.WV.span,(0,r.Z)({id:p.textId},u,{ref:h})),p.isSelected&&d.valueNode&&!d.valueNodeHasChildren?(0,o.createPortal)(u.children,d.valueNode):null)}),ed=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,...o}=e,a=ea("SelectItemIndicator",n);return a.isSelected?(0,l.createElement)(w.WV.span,(0,r.Z)({"aria-hidden":!0},o,{ref:t})):null}),es=((e,t)=>{let{__scopeSelect:n,onAutoScroll:o,...a}=e,u=q("SelectScrollButton",n),c=(0,l.useRef)(null),d=I(n),s=(0,l.useCallback)(()=>{null!==c.current&&(window.clearInterval(c.current),c.current=null)},[]);return(0,l.useEffect)(()=>()=>s(),[s]),(0,x.b)(()=>{var e;let t=d().find(e=>e.ref.current===document.activeElement);null==t||null===(e=t.ref.current)||void 0===e||e.scrollIntoView({block:"nearest"})},[d]),(0,l.createElement)(w.WV.div,(0,r.Z)({"aria-hidden":!0},a,{ref:t,style:{flexShrink:0,...a.style},onPointerDown:(0,i.M)(a.onPointerDown,()=>{null===c.current&&(c.current=window.setInterval(o,50))}),onPointerMove:(0,i.M)(a.onPointerMove,()=>{var e;null===(e=u.onItemLeave)||void 0===e||e.call(u),null===c.current&&(c.current=window.setInterval(o,50))}),onPointerLeave:(0,i.M)(a.onPointerLeave,()=>{s()})}))},(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,...o}=e;return(0,l.createElement)(w.WV.div,(0,r.Z)({"aria-hidden":!0},o,{ref:t}))})),ep=(0,l.forwardRef)((e,t)=>{let{value:n,...o}=e,a=(0,l.useRef)(null),i=(0,c.e)(t,a),u=(0,C.D)(n);return(0,l.useEffect)(()=>{let e=a.current,t=window.HTMLSelectElement.prototype,r=Object.getOwnPropertyDescriptor(t,"value"),l=r.set;if(u!==n&&l){let t=new Event("change",{bubbles:!0});l.call(e,n),e.dispatchEvent(t)}},[u,n]),(0,l.createElement)(S,{asChild:!0},(0,l.createElement)("select",(0,r.Z)({},o,{ref:i,defaultValue:n})))});function ef(e){let t=(0,b.W)(e),n=(0,l.useRef)(""),r=(0,l.useRef)(0),o=(0,l.useCallback)(e=>{let l=n.current+e;t(l),function e(t){n.current=t,window.clearTimeout(r.current),""!==t&&(r.current=window.setTimeout(()=>e(""),1e3))}(l)},[t]),a=(0,l.useCallback)(()=>{n.current="",window.clearTimeout(r.current)},[]);return(0,l.useEffect)(()=>()=>window.clearTimeout(r.current),[]),[n,o,a]}function ev(e,t,n){var r;let l=t.length>1&&Array.from(t).every(e=>e===t[0]),o=l?t[0]:t,a=n?e.indexOf(n):-1,i=(r=Math.max(a,0),e.map((t,n)=>e[(r+n)%e.length])),u=1===o.length;u&&(i=i.filter(e=>e!==n));let c=i.find(e=>e.textValue.toLowerCase().startsWith(o.toLowerCase()));return c!==n?c:void 0}ep.displayName="BubbleSelect";let em=e=>{let{__scopeSelect:t,children:n,open:r,defaultOpen:o,onOpenChange:a,value:i,defaultValue:u,onValueChange:c,dir:d,name:p,autoComplete:f,disabled:v,required:g}=e,w=O(t),[y,b]=(0,l.useState)(null),[x,C]=(0,l.useState)(null),[S,k]=(0,l.useState)(!1),_=(0,s.gm)(d),[M=!1,R]=(0,E.T)({prop:r,defaultProp:o,onChange:a}),[D,I]=(0,E.T)({prop:i,defaultProp:u,onChange:c}),T=(0,l.useRef)(null),V=!y||!!y.closest("form"),[W,L]=(0,l.useState)(new Set),H=Array.from(W).map(e=>e.props.value).join(";");return(0,l.createElement)(h.fC,w,(0,l.createElement)(Z,{required:g,scope:t,trigger:y,onTriggerChange:b,valueNode:x,onValueNodeChange:C,valueNodeHasChildren:S,onValueNodeHasChildrenChange:k,contentId:(0,m.M)(),value:D,onValueChange:I,open:M,onOpenChange:R,dir:_,triggerPointerDownPosRef:T,disabled:v},(0,l.createElement)(P.Provider,{scope:t},(0,l.createElement)(N,{scope:e.__scopeSelect,onNativeOptionAdd:(0,l.useCallback)(e=>{L(t=>new Set(t).add(e))},[]),onNativeOptionRemove:(0,l.useCallback)(e=>{L(t=>{let n=new Set(t);return n.delete(e),n})},[])},n)),V?(0,l.createElement)(ep,{key:H,"aria-hidden":!0,required:g,tabIndex:-1,name:p,autoComplete:f,value:D,onChange:e=>I(e.target.value),disabled:v},void 0===D?(0,l.createElement)("option",{value:""}):null,Array.from(W)):null))},eh=A,eg=B,ew=K,ey=e=>(0,l.createElement)(g.h,(0,r.Z)({asChild:!0},e)),eb=U,eE=$,ex=en,eC=er,eS=ei,ek=ec,e_=ed,eM=es},93414:function(e,t,n){n.d(t,{D:function(){return l}});var r=n(86006);function l(e){let t=(0,r.useRef)({value:e,previous:e});return(0,r.useMemo)(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}}}]);