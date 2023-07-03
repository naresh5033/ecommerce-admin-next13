"use strict";
exports.id = 822;
exports.ids = [822];
exports.modules = {

/***/ 822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_cloudinary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7642);
/* harmony import */ var next_cloudinary__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_cloudinary__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38546);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48421);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64660);
/* __next_internal_client_entry_do_not_use__ default auto */ 





const ImageUpload = ({ disabled , onChange , onRemove , value  })=>{
    const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setIsMounted(true);
    }, []);
    const onUpload = (result)=>{
        onChange(result.info.secure_url); // if we console log the result (once we upload our img to the cloudinary we will get this result.info.secure_url)
    };
    if (!isMounted) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mb-4 flex items-center gap-4",
                children: value.map((url //img upload box/fidel, and iterates thru the images
                )=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative w-[200px] h-[200px] rounded-md overflow-hidden",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "z-10 absolute top-2 right-2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .z, {
                                    type: "button",
                                    onClick: ()=>onRemove(url),
                                    variant: "destructive",
                                    size: "sm",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__/* .Trash */ .rFk, {
                                        className: "h-4 w-4"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                fill: true,
                                className: "object-cover",
                                alt: "Image",
                                src: url
                            })
                        ]
                    }, url))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_cloudinary__WEBPACK_IMPORTED_MODULE_1__.CldUploadWidget, {
                onUpload: onUpload,
                uploadPreset: "x8rvbzrb",
                children: ({ open  })=>{
                    const onClick = ()=>{
                        open();
                    };
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .z, {
                        type: "button",
                        disabled: disabled,
                        variant: "secondary",
                        onClick: onClick,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__/* .ImagePlus */ .c3R, {
                                className: "h-4 w-4 mr-2"
                            }),
                            "Upload an Image"
                        ]
                    });
                }
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageUpload);


/***/ })

};
;