"use strict";
exports.id = 7018;
exports.ids = [7018];
exports.modules = {

/***/ 97018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ ApiList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_api_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58199);
/* harmony import */ var _hooks_use_origin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92198);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ ApiList auto */ 



const ApiList = ({ entityName , entityIdName  })=>{
    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useParams)();
    const origin = (0,_hooks_use_origin__WEBPACK_IMPORTED_MODULE_2__/* .useOrigin */ .N)(); //our coustom origin hook
    const baseUrl = `${origin}/api/${params.storeId}`;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_api_alert__WEBPACK_IMPORTED_MODULE_1__/* .ApiAlert */ .$, {
                title: "GET",
                variant: "public",
                description: `${baseUrl}/${entityName}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_api_alert__WEBPACK_IMPORTED_MODULE_1__/* .ApiAlert */ .$, {
                title: "GET",
                variant: "public",
                description: `${baseUrl}/${entityName}/{${entityIdName}}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_api_alert__WEBPACK_IMPORTED_MODULE_1__/* .ApiAlert */ .$, {
                title: "POST",
                variant: "admin",
                description: `${baseUrl}/${entityName}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_api_alert__WEBPACK_IMPORTED_MODULE_1__/* .ApiAlert */ .$, {
                title: "PATCH",
                variant: "admin",
                description: `${baseUrl}/${entityName}/{${entityIdName}}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_api_alert__WEBPACK_IMPORTED_MODULE_1__/* .ApiAlert */ .$, {
                title: "DELETE",
                variant: "admin",
                description: `${baseUrl}/${entityName}/{${entityIdName}}`
            })
        ]
    });
};


/***/ })

};
;