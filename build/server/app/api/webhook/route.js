"use strict";
(() => {
var exports = {};
exports.id = 7570;
exports.ids = [7570];
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

/***/ 32081:
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 70642:
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

// NAMESPACE OBJECT: ./app/api/webhook/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(35387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(29267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/headers.js
var headers = __webpack_require__(63919);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(32413);
// EXTERNAL MODULE: ./lib/stripe.ts
var stripe = __webpack_require__(14860);
// EXTERNAL MODULE: ./lib/prismadb.ts
var prismadb = __webpack_require__(18263);
;// CONCATENATED MODULE: ./app/api/webhook/route.ts




async function POST(req) {
    const body = await req.text();
    const signature = (0,headers.headers)().get("Stripe-Signature");
    let event;
    try {
        event = stripe/* stripe */.A.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (error) {
        return new next_response/* default */.Z(`Webhook Error: ${error.message}`, {
            status: 400
        });
    }
    const session = event.data.object;
    const address = session?.customer_details?.address;
    const addressComponents = [
        address?.line1,
        address?.line2,
        address?.city,
        address?.state,
        address?.postal_code,
        address?.country
    ];
    const addressString = addressComponents.filter((c)=>c !== null).join(", "); //take the indivudual comp and if its not null add the coma and space
    if (event.type === "checkout.session.completed") {
        const order = await prismadb/* default */.Z.order.update({
            where: {
                id: session?.metadata?.orderId
            },
            data: {
                isPaid: true,
                address: addressString,
                phone: session?.customer_details?.phone || ""
            },
            include: {
                orderItems: true
            }
        });
        // we ve to archive all the items we just bought
        const productIds = order.orderItems.map((orderItem)=>orderItem.productId);
        await prismadb/* default */.Z.product.updateMany({
            where: {
                id: {
                    in: [
                        ...productIds
                    ]
                }
            },
            data: {
                isArchived: true
            }
        });
    }
    return new next_response/* default */.Z(null, {
        status: 200
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fwebhook%2Froute&name=app%2Fapi%2Fwebhook%2Froute&pagePath=private-next-app-dir%2Fapi%2Fwebhook%2Froute.ts&appDir=%2FUsers%2Fnareshxo%2FDesktop%2FMacbook%20pro%2FWorkplace%2FNext%2FAdmin-Store%2Fecommerce-admin%2Fapp&appPaths=%2Fapi%2Fwebhook%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/webhook/route","pathname":"/api/webhook","filename":"route","bundlePath":"app/api/webhook/route"},"resolvedPagePath":"/Users/nareshxo/Desktop/Macbook pro/Workplace/Next/Admin-Store/ecommerce-admin/app/api/webhook/route.ts","nextConfigOutput":""}
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

    const originalPathname = "/api/webhook/route"

    

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


/***/ }),

/***/ 14860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ stripe)
/* harmony export */ });
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88128);

const stripe = new stripe__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(process.env.STRIPE_API_KEY, {
    apiVersion: "2022-11-15",
    typescript: true
});


/***/ }),

/***/ 63919:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


module.exports = __webpack_require__(83851);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4359,188,5981,2463], () => (__webpack_exec__(70642)));
module.exports = __webpack_exports__;

})();