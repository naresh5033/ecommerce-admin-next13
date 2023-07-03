"use strict";
exports.id = 4116;
exports.ids = [4116];
exports.modules = {

/***/ 58199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* binding */ ApiAlert)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/cjs/lucide-react.js
var lucide_react = __webpack_require__(64660);
// EXTERNAL MODULE: ./node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(33518);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/class-variance-authority/dist/index.mjs
var class_variance_authority_dist = __webpack_require__(17247);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(27448);
;// CONCATENATED MODULE: ./components/ui/alert.tsx




const alertVariants = (0,class_variance_authority_dist/* cva */.j)("relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:text-foreground [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11", {
    variants: {
        variant: {
            default: "bg-background text-foreground",
            destructive: "text-destructive border-destructive/50 dark:border-destructive [&>svg]:text-destructive text-destructive"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Alert = /*#__PURE__*/ react_.forwardRef(({ className , variant , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: ref,
        role: "alert",
        className: (0,utils.cn)(alertVariants({
            variant
        }), className),
        ...props
    }));
Alert.displayName = "Alert";
const AlertTitle = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("h5", {
        ref: ref,
        className: (0,utils.cn)("mb-1 font-medium leading-none tracking-tight", className),
        ...props
    }));
AlertTitle.displayName = "AlertTitle";
const AlertDescription = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: ref,
        className: (0,utils.cn)("text-sm [&_p]:leading-relaxed", className),
        ...props
    }));
AlertDescription.displayName = "AlertDescription";


;// CONCATENATED MODULE: ./components/ui/badge.tsx




const badgeVariants = (0,class_variance_authority_dist/* cva */.j)("inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "bg-primary hover:bg-primary/80 border-transparent text-primary-foreground",
            secondary: "bg-secondary hover:bg-secondary/80 border-transparent text-secondary-foreground",
            destructive: "bg-destructive hover:bg-destructive/80 border-transparent text-destructive-foreground",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className , variant , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (0,utils.cn)(badgeVariants({
            variant
        }), className),
        ...props
    });
}


// EXTERNAL MODULE: ./components/ui/button.tsx
var ui_button = __webpack_require__(38546);
;// CONCATENATED MODULE: ./components/ui/api-alert.tsx






const textMap = {
    public: "Public",
    admin: "Admin"
};
const variantMap = {
    public: "secondary",
    admin: "destructive"
};
const ApiAlert = ({ title , description , variant ="public"  })=>{
    // copy fn when we click the copy icon
    const onCopy = (description)=>{
        navigator.clipboard.writeText(description);
        dist/* toast */.Am.success("API Route copied to clipboard.");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Alert, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* Server */.xFH, {
                className: "h-4 w-4"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(AlertTitle, {
                className: "flex items-center gap-x-2",
                children: [
                    title,
                    /*#__PURE__*/ jsx_runtime_.jsx(Badge, {
                        variant: variantMap[variant],
                        children: textMap[variant]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(AlertDescription, {
                className: "mt-4 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("code", {
                        className: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
                        children: description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* Button */.z, {
                        variant: "outline",
                        size: "sm",
                        onClick: ()=>onCopy(description),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* Copy */.CKM, {
                            className: "h-4 w-4"
                        })
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 92198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ useOrigin)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// so we can safely render the window obj, its a bit tricky because lotta stuff in next js is ssr, and on the server the window obj doesn't exist. which is only available in the browser
const useOrigin = ()=>{
    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const origin =  false ? 0 : "";
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setMounted(true);
    }, []);
    if (!mounted) {
        return "";
    }
    return origin; //this hook we can use it in the settings form 
}; //this window location (url) will be is gon be in the env var in our form(setting)


/***/ })

};
;