"use strict";
exports.id = 2239;
exports.ids = [2239];
exports.modules = {

/***/ 63274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ AlertModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45977);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38546);
/* __next_internal_client_entry_do_not_use__ AlertModal auto */ 



const AlertModal = ({ isOpen , onClose , onConfirm , loading  })=>{
    const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setIsMounted(true);
    }, []);
    if (!isMounted) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_modal__WEBPACK_IMPORTED_MODULE_2__/* .Modal */ .u, {
        title: "Are you sure?",
        description: "This action cannot be undone.",
        isOpen: isOpen,
        onClose: onClose,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "pt-6 space-x-2 flex items-center justify-end w-full",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .z, {
                    disabled: loading,
                    variant: "outline",
                    onClick: onClose,
                    children: "Cancel"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .z, {
                    disabled: loading,
                    variant: "destructive",
                    onClick: onConfirm,
                    children: "Continue"
                })
            ]
        })
    });
};


/***/ }),

/***/ 44849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ Heading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Heading = ({ title , description  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "text-3xl font-bold tracking-tight",
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-sm text-muted-foreground",
                children: description
            })
        ]
    });
};


/***/ })

};
;