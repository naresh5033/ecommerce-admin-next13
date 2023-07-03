(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[673],{68094:function(e,s,r){Promise.resolve().then(r.bind(r,26030))},26030:function(e,s,r){"use strict";r.r(s),r.d(s,{ProductsClient:function(){return C}});var c=r(9268),a=r(833),t=r(56008),o=r(62339),n=r(5943),i=r(21230),d=r(62317),l=r(12519),u=r(24214),h=r(26694),m=r(77228),x=r(85235),j=r(9280),p=r(86006),y=r(68919),g=r(59644),w=r(60993);let N=e=>{let{data:s}=e,[r,a]=(0,p.useState)(!1),[n,i]=(0,p.useState)(!1),d=(0,t.useRouter)(),l=(0,t.useParams)(),N=async()=>{try{a(!0),await u.Z.delete("/api/".concat(l.storeId,"/products/").concat(s.id)),y.Am.success("Product deleted."),d.refresh()}catch(e){y.Am.error("Something went wrong")}finally{a(!1),i(!1)}},f=e=>{navigator.clipboard.writeText(e),y.Am.success("Product ID copied to clipboard.")};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(g.V,{isOpen:n,onClose:()=>i(!1),onConfirm:N,loading:r}),(0,c.jsxs)(w.h_,{children:[(0,c.jsx)(w.$F,{asChild:!0,children:(0,c.jsxs)(o.z,{variant:"ghost",className:"h-8 w-8 p-0",children:[(0,c.jsx)("span",{className:"sr-only",children:"Open menu"}),(0,c.jsx)(h.Z,{className:"h-4 w-4"})]})}),(0,c.jsxs)(w.AW,{align:"end",children:[(0,c.jsx)(w.Ju,{children:"Actions"}),(0,c.jsxs)(w.Xi,{onClick:()=>f(s.id),children:[(0,c.jsx)(m.Z,{className:"mr-2 h-4 w-4"})," Copy Id"]}),(0,c.jsxs)(w.Xi,{onClick:()=>d.push("/".concat(l.storeId,"/products/").concat(s.id)),children:[(0,c.jsx)(x.Z,{className:"mr-2 h-4 w-4"})," Update"]}),(0,c.jsxs)(w.Xi,{onClick:()=>i(!0),children:[(0,c.jsx)(j.Z,{className:"mr-2 h-4 w-4"})," Delete"]})]})]})]})},f=[{accessorKey:"name",header:"Name"},{accessorKey:"isArchived",header:"Archived"},{accessorKey:"isFeatured",header:"Featured"},{accessorKey:"price",header:"Price"},{accessorKey:"category",header:"Category"},{accessorKey:"size",header:"Size"},{accessorKey:"color",header:"Color",cell:e=>{let{row:s}=e;return(0,c.jsxs)("div",{className:"flex items-center gap-x-2",children:[s.original.color,(0,c.jsx)("div",{className:"h-6 w-6 rounded-full border",style:{backgroundColor:s.original.color}})]})}},{accessorKey:"createdAt",header:"Date"},{id:"actions",cell:e=>{let{row:s}=e;return(0,c.jsx)(N,{data:s.original})}}],C=e=>{let{data:s}=e,r=(0,t.useParams)(),u=(0,t.useRouter)();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"flex items-center justify-between",children:[(0,c.jsx)(i.X,{title:"Products (".concat(s.length,")"),description:"Manage products for your store"}),(0,c.jsxs)(o.z,{onClick:()=>u.push("/".concat(r.storeId,"/products/new")),children:[(0,c.jsx)(a.Z,{className:"mr-2 h-4 w-4"})," Add New"]})]}),(0,c.jsx)(d.Separator,{}),(0,c.jsx)(n.w,{searchKey:"name",columns:f,data:s}),(0,c.jsx)(i.X,{title:"API",description:"API Calls for Products"}),(0,c.jsx)(d.Separator,{}),(0,c.jsx)(l.L,{entityName:"products",entityIdName:"productId"})]})}}},function(e){e.O(0,[524,959,791,258,83,649,619,253,488,744],function(){return e(e.s=68094)}),_N_E=e.O()}]);