"use strict";
(() => {
var exports = {};
exports.id = 232;
exports.ids = [232];
exports.modules = {

/***/ 53524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 97783:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 28530:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@opentelemetry/api");

/***/ }),

/***/ 54426:
/***/ ((module) => {

module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 40252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 72254:
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),

/***/ 6005:
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ 87561:
/***/ ((module) => {

module.exports = require("node:fs");

/***/ }),

/***/ 88849:
/***/ ((module) => {

module.exports = require("node:http");

/***/ }),

/***/ 22286:
/***/ ((module) => {

module.exports = require("node:https");

/***/ }),

/***/ 87503:
/***/ ((module) => {

module.exports = require("node:net");

/***/ }),

/***/ 49411:
/***/ ((module) => {

module.exports = require("node:path");

/***/ }),

/***/ 97742:
/***/ ((module) => {

module.exports = require("node:process");

/***/ }),

/***/ 84492:
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ 72477:
/***/ ((module) => {

module.exports = require("node:stream/web");

/***/ }),

/***/ 41041:
/***/ ((module) => {

module.exports = require("node:url");

/***/ }),

/***/ 47261:
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ 65628:
/***/ ((module) => {

module.exports = require("node:zlib");

/***/ }),

/***/ 77282:
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ 71267:
/***/ ((module) => {

module.exports = require("worker_threads");

/***/ }),

/***/ 43752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/[storeId]/sizes/[sizeId]/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  DELETE: () => (DELETE),
  GET: () => (GET),
  PATCH: () => (PATCH)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(35387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(29267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(32413);
// EXTERNAL MODULE: ./lib/prismadb.ts
var prismadb = __webpack_require__(18263);
// EXTERNAL MODULE: ./node_modules/@clerk/nextjs/dist/esm/index.js + 21 modules
var esm = __webpack_require__(7036);
;// CONCATENATED MODULE: ./app/api/[storeId]/sizes/[sizeId]/route.ts



async function GET(req, { params  }) {
    try {
        if (!params.sizeId) {
            return new next_response/* default */.Z("Size id is required", {
                status: 400
            });
        }
        const size = await prismadb/* default */.Z.size.findUnique({
            where: {
                id: params.sizeId
            }
        });
        return next_response/* default */.Z.json(size);
    } catch (error) {
        console.log("[SIZE_GET]", error);
        return new next_response/* default */.Z("Internal error", {
            status: 500
        });
    }
}
async function DELETE(req, { params  }) {
    try {
        const { userId  } = (0,esm/* auth */.I8)();
        if (!userId) {
            return new next_response/* default */.Z("Unauthenticated", {
                status: 403
            });
        }
        if (!params.sizeId) {
            return new next_response/* default */.Z("Size id is required", {
                status: 400
            });
        }
        const storeByUserId = await prismadb/* default */.Z.store.findFirst({
            where: {
                id: params.storeId,
                userId
            }
        });
        if (!storeByUserId) {
            return new next_response/* default */.Z("Unauthorized", {
                status: 405
            });
        }
        const size = await prismadb/* default */.Z.size.delete({
            where: {
                id: params.sizeId
            }
        });
        return next_response/* default */.Z.json(size);
    } catch (error) {
        console.log("[SIZE_DELETE]", error);
        return new next_response/* default */.Z("Internal error", {
            status: 500
        });
    }
}
async function PATCH(req, { params  }) {
    try {
        const { userId  } = (0,esm/* auth */.I8)();
        const body = await req.json();
        const { name , value  } = body;
        if (!userId) {
            return new next_response/* default */.Z("Unauthenticated", {
                status: 403
            });
        }
        if (!name) {
            return new next_response/* default */.Z("Name is required", {
                status: 400
            });
        }
        if (!value) {
            return new next_response/* default */.Z("Value is required", {
                status: 400
            });
        }
        if (!params.sizeId) {
            return new next_response/* default */.Z("Size id is required", {
                status: 400
            });
        }
        const storeByUserId = await prismadb/* default */.Z.store.findFirst({
            where: {
                id: params.storeId,
                userId
            }
        });
        if (!storeByUserId) {
            return new next_response/* default */.Z("Unauthorized", {
                status: 405
            });
        }
        const size = await prismadb/* default */.Z.size.update({
            where: {
                id: params.sizeId
            },
            data: {
                name,
                value
            }
        });
        return next_response/* default */.Z.json(size);
    } catch (error) {
        console.log("[SIZE_PATCH]", error);
        return new next_response/* default */.Z("Internal error", {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2F%5BstoreId%5D%2Fsizes%2F%5BsizeId%5D%2Froute&name=app%2Fapi%2F%5BstoreId%5D%2Fsizes%2F%5BsizeId%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2F%5BstoreId%5D%2Fsizes%2F%5BsizeId%5D%2Froute.ts&appDir=%2FUsers%2Fnareshxo%2FDesktop%2FMacbook%20pro%2FWorkplace%2FNext%2FAdmin-Store%2Fecommerce-admin%2Fapp&appPaths=%2Fapi%2F%5BstoreId%5D%2Fsizes%2F%5BsizeId%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/[storeId]/sizes/[sizeId]/route","pathname":"/api/[storeId]/sizes/[sizeId]","filename":"route","bundlePath":"app/api/[storeId]/sizes/[sizeId]/route"},"resolvedPagePath":"/Users/nareshxo/Desktop/Macbook pro/Workplace/Next/Admin-Store/ecommerce-admin/app/api/[storeId]/sizes/[sizeId]/route.ts","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/[storeId]/sizes/[sizeId]/route"

    

/***/ }),

/***/ 18263:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const prismadb = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient() // otherwise next will initiate bunch of instance with the hot reloading and causing warnings and degradation of performance
;
if (false) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prismadb);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4359,6569,188,7036,5981], () => (__webpack_exec__(43752)));
module.exports = __webpack_exports__;

})();