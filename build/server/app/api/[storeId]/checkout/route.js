"use strict";
(() => {
var exports = {};
exports.id = 6389;
exports.ids = [6389];
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

/***/ 11916:
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

// NAMESPACE OBJECT: ./app/api/[storeId]/checkout/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  OPTIONS: () => (OPTIONS),
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(35387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(29267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(32413);
// EXTERNAL MODULE: ./lib/stripe.ts
var stripe = __webpack_require__(14860);
// EXTERNAL MODULE: ./lib/prismadb.ts
var prismadb = __webpack_require__(18263);
;// CONCATENATED MODULE: ./app/api/[storeId]/checkout/route.ts



const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization"
};
async function OPTIONS() {
    return next_response/* default */.Z.json({}, {
        headers: corsHeaders
    });
}
async function POST(req, { params  }) {
    const { productIds  } = await req.json();
    if (!productIds || productIds.length === 0) {
        return new next_response/* default */.Z("Product ids are required", {
            status: 400
        });
    }
    const products = await prismadb/* default */.Z.product.findMany({
        where: {
            id: {
                in: productIds
            }
        }
    });
    const line_items = [];
    products.forEach((product)=>{
        line_items.push({
            quantity: 1,
            price_data: {
                currency: "USD",
                product_data: {
                    name: product.name
                },
                unit_amount: product.price.toNumber() * 100 //since the price is decimal
            }
        });
    });
    const order = await prismadb/* default */.Z.order.create({
        data: {
            storeId: params.storeId,
            isPaid: false,
            orderItems: {
                create: productIds.map((productId)=>({
                        product: {
                            connect: {
                                id: productId
                            }
                        }
                    }))
            }
        }
    });
    const session = await stripe/* stripe */.A.checkout.sessions.create({
        line_items,
        mode: "payment",
        billing_address_collection: "required",
        phone_number_collection: {
            enabled: true
        },
        success_url: `${process.env.FRONTEND_STORE_URL}/cart?success=1`,
        cancel_url: `${process.env.FRONTEND_STORE_URL}/cart?canceled=1`,
        metadata: {
            orderId: order.id
        }
    });
    return next_response/* default */.Z.json({
        url: session.url
    }, {
        headers: corsHeaders //the cors req is not gon work out in our frontend store, since its different origin(localhost 3000 and 3001)
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2F%5BstoreId%5D%2Fcheckout%2Froute&name=app%2Fapi%2F%5BstoreId%5D%2Fcheckout%2Froute&pagePath=private-next-app-dir%2Fapi%2F%5BstoreId%5D%2Fcheckout%2Froute.ts&appDir=%2FUsers%2Fnareshxo%2FDesktop%2FMacbook%20pro%2FWorkplace%2FNext%2FAdmin-Store%2Fecommerce-admin%2Fapp&appPaths=%2Fapi%2F%5BstoreId%5D%2Fcheckout%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/[storeId]/checkout/route","pathname":"/api/[storeId]/checkout","filename":"route","bundlePath":"app/api/[storeId]/checkout/route"},"resolvedPagePath":"/Users/nareshxo/Desktop/Macbook pro/Workplace/Next/Admin-Store/ecommerce-admin/app/api/[storeId]/checkout/route.ts","nextConfigOutput":""}
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

    const originalPathname = "/api/[storeId]/checkout/route"

    

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


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4359,188,5981,2463], () => (__webpack_exec__(11916)));
module.exports = __webpack_exports__;

})();