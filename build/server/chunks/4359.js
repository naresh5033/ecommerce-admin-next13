"use strict";
exports.id = 4359;
exports.ids = [4359];
exports.modules = {

/***/ 11875:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "DraftMode", ({
    enumerable: true,
    get: function() {
        return DraftMode;
    }
}));
const _staticgenerationbailout = __webpack_require__(45486);
class DraftMode {
    get isEnabled() {
        return this._provider.isEnabled;
    }
    enable() {
        if ((0, _staticgenerationbailout.staticGenerationBailout)("draftMode().enable()")) {
            return;
        }
        return this._provider.enable();
    }
    disable() {
        if ((0, _staticgenerationbailout.staticGenerationBailout)("draftMode().disable()")) {
            return;
        }
        return this._provider.disable();
    }
    constructor(provider){
        this._provider = provider;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=draft-mode.js.map


/***/ }),

/***/ 83851:
/***/ ((module, exports, __webpack_require__) => {


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
    headers: function() {
        return headers;
    },
    cookies: function() {
        return cookies;
    },
    draftMode: function() {
        return draftMode;
    }
});
const _requestcookies = __webpack_require__(18661);
const _headers = __webpack_require__(57304);
const _cookies = __webpack_require__(4521);
const _requestasyncstorage = __webpack_require__(24437);
const _actionasyncstorage = __webpack_require__(46127);
const _staticgenerationbailout = __webpack_require__(45486);
const _draftmode = __webpack_require__(11875);
function headers() {
    if ((0, _staticgenerationbailout.staticGenerationBailout)("headers")) {
        return _headers.HeadersAdapter.seal(new Headers({}));
    }
    const requestStore = _requestasyncstorage.requestAsyncStorage.getStore();
    if (!requestStore) {
        throw new Error("Invariant: Method expects to have requestAsyncStorage, none available");
    }
    return requestStore.headers;
}
function cookies() {
    if ((0, _staticgenerationbailout.staticGenerationBailout)("cookies")) {
        return _requestcookies.RequestCookiesAdapter.seal(new _cookies.RequestCookies(new Headers({})));
    }
    const requestStore = _requestasyncstorage.requestAsyncStorage.getStore();
    if (!requestStore) {
        throw new Error("Invariant: Method expects to have requestAsyncStorage, none available");
    }
    const asyncActionStore = _actionasyncstorage.actionAsyncStorage.getStore();
    if (asyncActionStore && (asyncActionStore.isAction || asyncActionStore.isAppRoute)) {
        // We can't conditionally return different types here based on the context.
        // To avoid confusion, we always return the readonly type here.
        return requestStore.mutableCookies;
    }
    return requestStore.cookies;
}
function draftMode() {
    const requestStore = _requestasyncstorage.requestAsyncStorage.getStore();
    if (!requestStore) {
        throw new Error("Invariant: Method expects to have requestAsyncStorage, none available");
    }
    return new _draftmode.DraftMode(requestStore.draftMode);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=headers.js.map


/***/ }),

/***/ 63332:
/***/ ((module, exports) => {


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
    DYNAMIC_ERROR_CODE: function() {
        return DYNAMIC_ERROR_CODE;
    },
    DynamicServerError: function() {
        return DynamicServerError;
    }
});
const DYNAMIC_ERROR_CODE = "DYNAMIC_SERVER_USAGE";
class DynamicServerError extends Error {
    constructor(type){
        super("Dynamic server usage: " + type);
        this.digest = DYNAMIC_ERROR_CODE;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hooks-server-context.js.map


/***/ }),

/***/ 45486:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "staticGenerationBailout", ({
    enumerable: true,
    get: function() {
        return staticGenerationBailout;
    }
}));
const _hooksservercontext = __webpack_require__(63332);
const _staticgenerationasyncstorage = __webpack_require__(30094);
class StaticGenBailoutError extends Error {
    constructor(...args){
        super(...args);
        this.code = "NEXT_STATIC_GEN_BAILOUT";
    }
}
const staticGenerationBailout = (reason, opts)=>{
    const staticGenerationStore = _staticgenerationasyncstorage.staticGenerationAsyncStorage.getStore();
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.forceStatic) {
        return true;
    }
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.dynamicShouldError) {
        const { dynamic ="error" , link  } = opts || {};
        const suffix = link ? " See more info here: " + link : "";
        throw new StaticGenBailoutError('Page with `dynamic = "' + dynamic + "\"` couldn't be rendered statically because it used `" + reason + "`." + suffix);
    }
    if (staticGenerationStore) {
        staticGenerationStore.revalidate = 0;
    }
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.isStaticGeneration) {
        const err = new _hooksservercontext.DynamicServerError(reason);
        staticGenerationStore.dynamicUsageDescription = reason;
        staticGenerationStore.dynamicUsageStack = err.stack;
        throw err;
    }
    return false;
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-bailout.js.map


/***/ }),

/***/ 18537:
/***/ ((__unused_webpack_module, exports) => {


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
    NEXT_QUERY_PARAM_PREFIX: function() {
        return NEXT_QUERY_PARAM_PREFIX;
    },
    PRERENDER_REVALIDATE_HEADER: function() {
        return PRERENDER_REVALIDATE_HEADER;
    },
    PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: function() {
        return PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER;
    },
    CACHE_ONE_YEAR: function() {
        return CACHE_ONE_YEAR;
    },
    MIDDLEWARE_FILENAME: function() {
        return MIDDLEWARE_FILENAME;
    },
    MIDDLEWARE_LOCATION_REGEXP: function() {
        return MIDDLEWARE_LOCATION_REGEXP;
    },
    INSTRUMENTATION_HOOK_FILENAME: function() {
        return INSTRUMENTATION_HOOK_FILENAME;
    },
    INSTRUMENTATION_HOOKS_LOCATION_REGEXP: function() {
        return INSTRUMENTATION_HOOKS_LOCATION_REGEXP;
    },
    PAGES_DIR_ALIAS: function() {
        return PAGES_DIR_ALIAS;
    },
    DOT_NEXT_ALIAS: function() {
        return DOT_NEXT_ALIAS;
    },
    ROOT_DIR_ALIAS: function() {
        return ROOT_DIR_ALIAS;
    },
    APP_DIR_ALIAS: function() {
        return APP_DIR_ALIAS;
    },
    RSC_MOD_REF_PROXY_ALIAS: function() {
        return RSC_MOD_REF_PROXY_ALIAS;
    },
    RSC_ACTION_VALIDATE_ALIAS: function() {
        return RSC_ACTION_VALIDATE_ALIAS;
    },
    RSC_ACTION_PROXY_ALIAS: function() {
        return RSC_ACTION_PROXY_ALIAS;
    },
    RSC_ACTION_CLIENT_WRAPPER_ALIAS: function() {
        return RSC_ACTION_CLIENT_WRAPPER_ALIAS;
    },
    PUBLIC_DIR_MIDDLEWARE_CONFLICT: function() {
        return PUBLIC_DIR_MIDDLEWARE_CONFLICT;
    },
    SSG_GET_INITIAL_PROPS_CONFLICT: function() {
        return SSG_GET_INITIAL_PROPS_CONFLICT;
    },
    SERVER_PROPS_GET_INIT_PROPS_CONFLICT: function() {
        return SERVER_PROPS_GET_INIT_PROPS_CONFLICT;
    },
    SERVER_PROPS_SSG_CONFLICT: function() {
        return SERVER_PROPS_SSG_CONFLICT;
    },
    STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: function() {
        return STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR;
    },
    SERVER_PROPS_EXPORT_ERROR: function() {
        return SERVER_PROPS_EXPORT_ERROR;
    },
    GSP_NO_RETURNED_VALUE: function() {
        return GSP_NO_RETURNED_VALUE;
    },
    GSSP_NO_RETURNED_VALUE: function() {
        return GSSP_NO_RETURNED_VALUE;
    },
    UNSTABLE_REVALIDATE_RENAME_ERROR: function() {
        return UNSTABLE_REVALIDATE_RENAME_ERROR;
    },
    GSSP_COMPONENT_MEMBER_ERROR: function() {
        return GSSP_COMPONENT_MEMBER_ERROR;
    },
    NON_STANDARD_NODE_ENV: function() {
        return NON_STANDARD_NODE_ENV;
    },
    SSG_FALLBACK_EXPORT_ERROR: function() {
        return SSG_FALLBACK_EXPORT_ERROR;
    },
    ESLINT_DEFAULT_DIRS: function() {
        return ESLINT_DEFAULT_DIRS;
    },
    ESLINT_DEFAULT_DIRS_WITH_APP: function() {
        return ESLINT_DEFAULT_DIRS_WITH_APP;
    },
    ESLINT_PROMPT_VALUES: function() {
        return ESLINT_PROMPT_VALUES;
    },
    SERVER_RUNTIME: function() {
        return SERVER_RUNTIME;
    },
    WEBPACK_LAYERS: function() {
        return WEBPACK_LAYERS;
    },
    WEBPACK_RESOURCE_QUERIES: function() {
        return WEBPACK_RESOURCE_QUERIES;
    }
});
const NEXT_QUERY_PARAM_PREFIX = "nxtP";
const PRERENDER_REVALIDATE_HEADER = "x-prerender-revalidate";
const PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = "x-prerender-revalidate-if-generated";
const CACHE_ONE_YEAR = 31536000;
const MIDDLEWARE_FILENAME = "middleware";
const MIDDLEWARE_LOCATION_REGEXP = `(?:src/)?${MIDDLEWARE_FILENAME}`;
const INSTRUMENTATION_HOOK_FILENAME = "instrumentation";
const INSTRUMENTATION_HOOKS_LOCATION_REGEXP = `(?:src/)?${INSTRUMENTATION_HOOK_FILENAME}`;
const PAGES_DIR_ALIAS = "private-next-pages";
const DOT_NEXT_ALIAS = "private-dot-next";
const ROOT_DIR_ALIAS = "private-next-root-dir";
const APP_DIR_ALIAS = "private-next-app-dir";
const RSC_MOD_REF_PROXY_ALIAS = "next/dist/build/webpack/loaders/next-flight-loader/module-proxy";
const RSC_ACTION_VALIDATE_ALIAS = "private-next-rsc-action-validate";
const RSC_ACTION_PROXY_ALIAS = "private-next-rsc-action-proxy";
const RSC_ACTION_CLIENT_WRAPPER_ALIAS = "private-next-rsc-action-client-wrapper";
const PUBLIC_DIR_MIDDLEWARE_CONFLICT = `You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`;
const SSG_GET_INITIAL_PROPS_CONFLICT = `You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`;
const SERVER_PROPS_GET_INIT_PROPS_CONFLICT = `You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`;
const SERVER_PROPS_SSG_CONFLICT = `You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`;
const STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = `can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`;
const SERVER_PROPS_EXPORT_ERROR = `pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`;
const GSP_NO_RETURNED_VALUE = "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?";
const GSSP_NO_RETURNED_VALUE = "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?";
const UNSTABLE_REVALIDATE_RENAME_ERROR = "The `unstable_revalidate` property is available for general use.\n" + "Please use `revalidate` instead.";
const GSSP_COMPONENT_MEMBER_ERROR = `can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`;
const NON_STANDARD_NODE_ENV = `You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`;
const SSG_FALLBACK_EXPORT_ERROR = `Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`;
const ESLINT_DEFAULT_DIRS = [
    "pages",
    "components",
    "lib",
    "src"
];
const ESLINT_DEFAULT_DIRS_WITH_APP = [
    "app",
    ...ESLINT_DEFAULT_DIRS
];
const ESLINT_PROMPT_VALUES = [
    {
        title: "Strict",
        recommended: true,
        config: {
            extends: "next/core-web-vitals"
        }
    },
    {
        title: "Base",
        config: {
            extends: "next"
        }
    },
    {
        title: "Cancel",
        config: null
    }
];
const SERVER_RUNTIME = {
    edge: "edge",
    experimentalEdge: "experimental-edge",
    nodejs: "nodejs"
};
const WEBPACK_LAYERS = {
    shared: "sc_shared",
    server: "sc_server",
    client: "sc_client",
    action: "sc_action",
    api: "api",
    middleware: "middleware",
    edgeAsset: "edge-asset",
    appClient: "app-client"
};
const WEBPACK_RESOURCE_QUERIES = {
    edgeSSREntry: "__next_edge_ssr_entry__",
    metadata: "__next_metadata__"
}; //# sourceMappingURL=constants.js.map


/***/ }),

/***/ 43369:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "NextURL", ({
    enumerable: true,
    get: function() {
        return NextURL;
    }
}));
const _detectdomainlocale = __webpack_require__(12207);
const _formatnextpathnameinfo = __webpack_require__(67723);
const _gethostname = __webpack_require__(86056);
const _getnextpathnameinfo = __webpack_require__(59433);
const REGEX_LOCALHOST_HOSTNAME = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|::1|localhost)/;
function parseURL(url, base) {
    return new URL(String(url).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"), base && String(base).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"));
}
const Internal = Symbol("NextURLInternal");
class NextURL {
    constructor(input, baseOrOpts, opts){
        let base;
        let options;
        if (typeof baseOrOpts === "object" && "pathname" in baseOrOpts || typeof baseOrOpts === "string") {
            base = baseOrOpts;
            options = opts || {};
        } else {
            options = opts || baseOrOpts || {};
        }
        this[Internal] = {
            url: parseURL(input, base ?? options.base),
            options: options,
            basePath: ""
        };
        this.analyze();
    }
    analyze() {
        var _this_Internal_options_nextConfig, _this_Internal_options_nextConfig_i18n, _this_Internal_domainLocale, _this_Internal_options_nextConfig1, _this_Internal_options_nextConfig_i18n1;
        const info = (0, _getnextpathnameinfo.getNextPathnameInfo)(this[Internal].url.pathname, {
            nextConfig: this[Internal].options.nextConfig,
            parseData: !undefined,
            i18nProvider: this[Internal].options.i18nProvider
        });
        const hostname = (0, _gethostname.getHostname)(this[Internal].url, this[Internal].options.headers);
        this[Internal].domainLocale = this[Internal].options.i18nProvider ? this[Internal].options.i18nProvider.detectDomainLocale(hostname) : (0, _detectdomainlocale.detectDomainLocale)((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.domains, hostname);
        const defaultLocale = ((_this_Internal_domainLocale = this[Internal].domainLocale) == null ? void 0 : _this_Internal_domainLocale.defaultLocale) || ((_this_Internal_options_nextConfig1 = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n1 = _this_Internal_options_nextConfig1.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n1.defaultLocale);
        this[Internal].url.pathname = info.pathname;
        this[Internal].defaultLocale = defaultLocale;
        this[Internal].basePath = info.basePath ?? "";
        this[Internal].buildId = info.buildId;
        this[Internal].locale = info.locale ?? defaultLocale;
        this[Internal].trailingSlash = info.trailingSlash;
    }
    formatPathname() {
        return (0, _formatnextpathnameinfo.formatNextPathnameInfo)({
            basePath: this[Internal].basePath,
            buildId: this[Internal].buildId,
            defaultLocale: !this[Internal].options.forceLocale ? this[Internal].defaultLocale : undefined,
            locale: this[Internal].locale,
            pathname: this[Internal].url.pathname,
            trailingSlash: this[Internal].trailingSlash
        });
    }
    formatSearch() {
        return this[Internal].url.search;
    }
    get buildId() {
        return this[Internal].buildId;
    }
    set buildId(buildId) {
        this[Internal].buildId = buildId;
    }
    get locale() {
        return this[Internal].locale ?? "";
    }
    set locale(locale) {
        var _this_Internal_options_nextConfig, _this_Internal_options_nextConfig_i18n;
        if (!this[Internal].locale || !((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.locales.includes(locale))) {
            throw new TypeError(`The NextURL configuration includes no locale "${locale}"`);
        }
        this[Internal].locale = locale;
    }
    get defaultLocale() {
        return this[Internal].defaultLocale;
    }
    get domainLocale() {
        return this[Internal].domainLocale;
    }
    get searchParams() {
        return this[Internal].url.searchParams;
    }
    get host() {
        return this[Internal].url.host;
    }
    set host(value) {
        this[Internal].url.host = value;
    }
    get hostname() {
        return this[Internal].url.hostname;
    }
    set hostname(value) {
        this[Internal].url.hostname = value;
    }
    get port() {
        return this[Internal].url.port;
    }
    set port(value) {
        this[Internal].url.port = value;
    }
    get protocol() {
        return this[Internal].url.protocol;
    }
    set protocol(value) {
        this[Internal].url.protocol = value;
    }
    get href() {
        const pathname = this.formatPathname();
        const search = this.formatSearch();
        return `${this.protocol}//${this.host}${pathname}${search}${this.hash}`;
    }
    set href(url) {
        this[Internal].url = parseURL(url);
        this.analyze();
    }
    get origin() {
        return this[Internal].url.origin;
    }
    get pathname() {
        return this[Internal].url.pathname;
    }
    set pathname(value) {
        this[Internal].url.pathname = value;
    }
    get hash() {
        return this[Internal].url.hash;
    }
    set hash(value) {
        this[Internal].url.hash = value;
    }
    get search() {
        return this[Internal].url.search;
    }
    set search(value) {
        this[Internal].url.search = value;
    }
    get password() {
        return this[Internal].url.password;
    }
    set password(value) {
        this[Internal].url.password = value;
    }
    get username() {
        return this[Internal].url.username;
    }
    set username(value) {
        this[Internal].url.username = value;
    }
    get basePath() {
        return this[Internal].basePath;
    }
    set basePath(value) {
        this[Internal].basePath = value.startsWith("/") ? value : `/${value}`;
    }
    toString() {
        return this.href;
    }
    toJSON() {
        return this.href;
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            href: this.href,
            origin: this.origin,
            protocol: this.protocol,
            username: this.username,
            password: this.password,
            host: this.host,
            hostname: this.hostname,
            port: this.port,
            pathname: this.pathname,
            search: this.search,
            searchParams: this.searchParams,
            hash: this.hash
        };
    }
    clone() {
        return new NextURL(String(this), this[Internal].options);
    }
} //# sourceMappingURL=next-url.js.map


/***/ }),

/***/ 57304:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


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
    ReadonlyHeadersError: function() {
        return ReadonlyHeadersError;
    },
    HeadersAdapter: function() {
        return HeadersAdapter;
    }
});
const _reflect = __webpack_require__(79470);
class ReadonlyHeadersError extends Error {
    constructor(){
        super("Headers cannot be modified. Read more: https://nextjs.org/docs/api-reference/headers");
    }
    static callable() {
        throw new ReadonlyHeadersError();
    }
}
class HeadersAdapter extends Headers {
    constructor(headers){
        // We've already overridden the methods that would be called, so we're just
        // calling the super constructor to ensure that the instanceof check works.
        super();
        this.headers = new Proxy(headers, {
            get (target, prop, receiver) {
                // Because this is just an object, we expect that all "get" operations
                // are for properties. If it's a "get" for a symbol, we'll just return
                // the symbol.
                if (typeof prop === "symbol") {
                    return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return undefined.
                if (typeof original === "undefined") return;
                // If the original casing exists, return the value.
                return _reflect.ReflectAdapter.get(target, original, receiver);
            },
            set (target, prop, value, receiver) {
                if (typeof prop === "symbol") {
                    return _reflect.ReflectAdapter.set(target, prop, value, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, use the prop as the key.
                return _reflect.ReflectAdapter.set(target, original ?? prop, value, receiver);
            },
            has (target, prop) {
                if (typeof prop === "symbol") return _reflect.ReflectAdapter.has(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return false.
                if (typeof original === "undefined") return false;
                // If the original casing exists, return true.
                return _reflect.ReflectAdapter.has(target, original);
            },
            deleteProperty (target, prop) {
                if (typeof prop === "symbol") return _reflect.ReflectAdapter.deleteProperty(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return true.
                if (typeof original === "undefined") return true;
                // If the original casing exists, delete the property.
                return _reflect.ReflectAdapter.deleteProperty(target, original);
            }
        });
    }
    /**
   * Seals a Headers instance to prevent modification by throwing an error when
   * any mutating method is called.
   */ static seal(headers) {
        return new Proxy(headers, {
            get (target, prop, receiver) {
                switch(prop){
                    case "append":
                    case "delete":
                    case "set":
                        return ReadonlyHeadersError.callable;
                    default:
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
    }
    /**
   * Merges a header value into a string. This stores multiple values as an
   * array, so we need to merge them into a string.
   *
   * @param value a header value
   * @returns a merged header value (a string)
   */ merge(value) {
        if (Array.isArray(value)) return value.join(", ");
        return value;
    }
    /**
   * Creates a Headers instance from a plain object or a Headers instance.
   *
   * @param headers a plain object or a Headers instance
   * @returns a headers instance
   */ static from(headers) {
        if (headers instanceof Headers) return headers;
        return new HeadersAdapter(headers);
    }
    append(name, value) {
        const existing = this.headers[name];
        if (typeof existing === "string") {
            this.headers[name] = [
                existing,
                value
            ];
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            this.headers[name] = value;
        }
    }
    delete(name) {
        delete this.headers[name];
    }
    get(name) {
        const value = this.headers[name];
        if (typeof value !== "undefined") return this.merge(value);
        return null;
    }
    has(name) {
        return typeof this.headers[name] !== "undefined";
    }
    set(name, value) {
        this.headers[name] = value;
    }
    forEach(callbackfn, thisArg) {
        for (const [name, value] of this.entries()){
            callbackfn.call(thisArg, value, name, this);
        }
    }
    *entries() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(name);
            yield [
                name,
                value
            ];
        }
    }
    *keys() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            yield name;
        }
    }
    *values() {
        for (const key of Object.keys(this.headers)){
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(key);
            yield value;
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
} //# sourceMappingURL=headers.js.map


/***/ }),

/***/ 79470:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ReflectAdapter", ({
    enumerable: true,
    get: function() {
        return ReflectAdapter;
    }
}));
class ReflectAdapter {
    static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === "function") {
            return value.bind(target);
        }
        return value;
    }
    static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
    }
    static has(target, prop) {
        return Reflect.has(target, prop);
    }
    static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    }
} //# sourceMappingURL=reflect.js.map


/***/ }),

/***/ 18661:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


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
    ReadonlyRequestCookiesError: function() {
        return ReadonlyRequestCookiesError;
    },
    RequestCookiesAdapter: function() {
        return RequestCookiesAdapter;
    },
    appendMutableCookies: function() {
        return appendMutableCookies;
    },
    MutableRequestCookiesAdapter: function() {
        return MutableRequestCookiesAdapter;
    }
});
const _cookies = __webpack_require__(4521);
const _reflect = __webpack_require__(79470);
class ReadonlyRequestCookiesError extends Error {
    constructor(){
        super("Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#cookiessetname-value-options");
    }
    static callable() {
        throw new ReadonlyRequestCookiesError();
    }
}
class RequestCookiesAdapter {
    static seal(cookies) {
        return new Proxy(cookies, {
            get (target, prop, receiver) {
                switch(prop){
                    case "clear":
                    case "delete":
                    case "set":
                        return ReadonlyRequestCookiesError.callable;
                    default:
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
    }
}
const SYMBOL_MODIFY_COOKIE_VALUES = Symbol.for("next.mutated.cookies");
function getModifiedCookieValues(cookies) {
    const modified = cookies[SYMBOL_MODIFY_COOKIE_VALUES];
    if (!modified || !Array.isArray(modified) || modified.length === 0) {
        return [];
    }
    return modified;
}
function appendMutableCookies(headers, mutableCookies) {
    const modifiedCookieValues = getModifiedCookieValues(mutableCookies);
    if (modifiedCookieValues.length === 0) {
        return false;
    }
    // Return a new response that extends the response with
    // the modified cookies as fallbacks. `res`' cookies
    // will still take precedence.
    const resCookies = new _cookies.ResponseCookies(headers);
    const returnedCookies = resCookies.getAll();
    // Set the modified cookies as fallbacks.
    for (const cookie of modifiedCookieValues){
        resCookies.set(cookie);
    }
    // Set the original cookies as the final values.
    for (const cookie of returnedCookies){
        resCookies.set(cookie);
    }
    return true;
}
class MutableRequestCookiesAdapter {
    static wrap(cookies, res) {
        const responseCookes = new _cookies.ResponseCookies(new Headers());
        for (const cookie of cookies.getAll()){
            responseCookes.set(cookie);
        }
        let modifiedValues = [];
        const modifiedCookies = new Set();
        const updateResponseCookies = ()=>{
            var _fetch___nextGetStaticStore;
            // TODO-APP: change method of getting staticGenerationAsyncStore
            const staticGenerationAsyncStore = fetch.__nextGetStaticStore == null ? void 0 : (_fetch___nextGetStaticStore = fetch.__nextGetStaticStore()) == null ? void 0 : _fetch___nextGetStaticStore.getStore();
            if (staticGenerationAsyncStore) {
                staticGenerationAsyncStore.pathWasRevalidated = true;
            }
            const allCookies = responseCookes.getAll();
            modifiedValues = allCookies.filter((c)=>modifiedCookies.has(c.name));
            if (res) {
                const serializedCookies = [];
                for (const cookie of modifiedValues){
                    const tempCookies = new _cookies.ResponseCookies(new Headers());
                    tempCookies.set(cookie);
                    serializedCookies.push(tempCookies.toString());
                }
                res.setHeader("Set-Cookie", serializedCookies);
            }
        };
        return new Proxy(responseCookes, {
            get (target, prop, receiver) {
                switch(prop){
                    // A special symbol to get the modified cookie values
                    case SYMBOL_MODIFY_COOKIE_VALUES:
                        return modifiedValues;
                    // TODO: Throw error if trying to set a cookie after the response
                    // headers have been set.
                    case "delete":
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === "string" ? args[0] : args[0].name);
                            try {
                                target.delete(...args);
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    case "set":
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === "string" ? args[0] : args[0].name);
                            try {
                                return target.set(...args);
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    default:
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
    }
} //# sourceMappingURL=request-cookies.js.map


/***/ }),

/***/ 4521:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


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
    RequestCookies: function() {
        return _cookies.RequestCookies;
    },
    ResponseCookies: function() {
        return _cookies.ResponseCookies;
    }
});
const _cookies = __webpack_require__(97783); //# sourceMappingURL=cookies.js.map


/***/ }),

/***/ 72917:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "NextResponse", ({
    enumerable: true,
    get: function() {
        return NextResponse;
    }
}));
const _nexturl = __webpack_require__(43369);
const _utils = __webpack_require__(17252);
const _cookies = __webpack_require__(4521);
const INTERNALS = Symbol("internal response");
const REDIRECTS = new Set([
    301,
    302,
    303,
    307,
    308
]);
function handleMiddlewareField(init, headers) {
    var _init_request;
    if (init == null ? void 0 : (_init_request = init.request) == null ? void 0 : _init_request.headers) {
        if (!(init.request.headers instanceof Headers)) {
            throw new Error("request.headers must be an instance of Headers");
        }
        const keys = [];
        for (const [key, value] of init.request.headers){
            headers.set("x-middleware-request-" + key, value);
            keys.push(key);
        }
        headers.set("x-middleware-override-headers", keys.join(","));
    }
}
class NextResponse extends Response {
    constructor(body, init = {}){
        super(body, init);
        this[INTERNALS] = {
            cookies: new _cookies.ResponseCookies(this.headers),
            url: init.url ? new _nexturl.NextURL(init.url, {
                headers: (0, _utils.toNodeOutgoingHttpHeaders)(this.headers),
                nextConfig: init.nextConfig
            }) : undefined
        };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            cookies: this.cookies,
            url: this.url,
            // rest of props come from Response
            body: this.body,
            bodyUsed: this.bodyUsed,
            headers: Object.fromEntries(this.headers),
            ok: this.ok,
            redirected: this.redirected,
            status: this.status,
            statusText: this.statusText,
            type: this.type
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    static json(body, init) {
        // @ts-expect-error This is not in lib/dom right now, and we can't augment it.
        const response = Response.json(body, init);
        return new NextResponse(response.body, response);
    }
    static redirect(url, init) {
        const status = typeof init === "number" ? init : (init == null ? void 0 : init.status) ?? 307;
        if (!REDIRECTS.has(status)) {
            throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
        }
        const initObj = typeof init === "object" ? init : {};
        const headers = new Headers(initObj == null ? void 0 : initObj.headers);
        headers.set("Location", (0, _utils.validateURL)(url));
        return new NextResponse(null, {
            ...initObj,
            headers,
            status
        });
    }
    static rewrite(destination, init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-rewrite", (0, _utils.validateURL)(destination));
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
    static next(init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-next", "1");
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
} //# sourceMappingURL=response.js.map


/***/ }),

/***/ 17252:
/***/ ((__unused_webpack_module, exports) => {


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
    fromNodeOutgoingHttpHeaders: function() {
        return fromNodeOutgoingHttpHeaders;
    },
    splitCookiesString: function() {
        return splitCookiesString;
    },
    toNodeOutgoingHttpHeaders: function() {
        return toNodeOutgoingHttpHeaders;
    },
    validateURL: function() {
        return validateURL;
    }
});
function fromNodeOutgoingHttpHeaders(nodeHeaders) {
    const headers = new Headers();
    for (let [key, value] of Object.entries(nodeHeaders)){
        const values = Array.isArray(value) ? value : [
            value
        ];
        for (let v of values){
            if (typeof v === "undefined") continue;
            if (typeof v === "number") {
                v = v.toString();
            }
            headers.append(key, v);
        }
    }
    return headers;
}
function splitCookiesString(cookiesString) {
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                // ',' is a cookie separator if we have later first '=', not ';' or ','
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                // currently special character
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    // we found cookies separator
                    cookiesSeparatorFound = true;
                    // pos is inside the next cookie, so back up and return it.
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    // in param ',' or param separator ';',
                    // we continue from that comma
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
function toNodeOutgoingHttpHeaders(headers) {
    const nodeHeaders = {};
    const cookies = [];
    if (headers) {
        for (const [key, value] of headers.entries()){
            if (key.toLowerCase() === "set-cookie") {
                // We may have gotten a comma joined string of cookies, or multiple
                // set-cookie headers. We need to merge them into one header array
                // to represent all the cookies.
                cookies.push(...splitCookiesString(value));
                nodeHeaders[key] = cookies.length === 1 ? cookies[0] : cookies;
            } else {
                nodeHeaders[key] = value;
            }
        }
    }
    return nodeHeaders;
}
function validateURL(url) {
    try {
        return String(new URL(String(url)));
    } catch (error) {
        throw new Error(`URL is malformed "${String(url)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, {
            cause: error
        });
    }
} //# sourceMappingURL=utils.js.map


/***/ }),

/***/ 86056:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getHostname", ({
    enumerable: true,
    get: function() {
        return getHostname;
    }
}));
function getHostname(parsed, headers) {
    // Get the hostname from the headers if it exists, otherwise use the parsed
    // hostname.
    let hostname;
    if ((headers == null ? void 0 : headers.host) && !Array.isArray(headers.host)) {
        hostname = headers.host.toString().split(":")[0];
    } else if (parsed.hostname) {
        hostname = parsed.hostname;
    } else return;
    return hostname.toLowerCase();
} //# sourceMappingURL=get-hostname.js.map


/***/ }),

/***/ 12207:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "detectDomainLocale", ({
    enumerable: true,
    get: function() {
        return detectDomainLocale;
    }
}));
function detectDomainLocale(domainItems, hostname, detectedLocale) {
    if (!domainItems) return;
    if (detectedLocale) {
        detectedLocale = detectedLocale.toLowerCase();
    }
    for (const item of domainItems){
        var _item_domain, _item_locales;
        // remove port if present
        const domainHostname = (_item_domain = item.domain) == null ? void 0 : _item_domain.split(":")[0].toLowerCase();
        if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((_item_locales = item.locales) == null ? void 0 : _item_locales.some((locale)=>locale.toLowerCase() === detectedLocale))) {
            return item;
        }
    }
} //# sourceMappingURL=detect-domain-locale.js.map


/***/ }),

/***/ 99962:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "normalizeLocalePath", ({
    enumerable: true,
    get: function() {
        return normalizeLocalePath;
    }
}));
function normalizeLocalePath(pathname, locales) {
    let detectedLocale;
    // first item will be empty string from splitting at first char
    const pathnameParts = pathname.split("/");
    (locales || []).some((locale)=>{
        if (pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
            detectedLocale = locale;
            pathnameParts.splice(1, 1);
            pathname = pathnameParts.join("/") || "/";
            return true;
        }
        return false;
    });
    return {
        pathname,
        detectedLocale
    };
} //# sourceMappingURL=normalize-locale-path.js.map


/***/ }),

/***/ 35723:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addLocale", ({
    enumerable: true,
    get: function() {
        return addLocale;
    }
}));
const _addpathprefix = __webpack_require__(22610);
const _pathhasprefix = __webpack_require__(31342);
function addLocale(path, locale, defaultLocale, ignorePrefix) {
    // If no locale was given or the locale is the default locale, we don't need
    // to prefix the path.
    if (!locale || locale === defaultLocale) return path;
    const lower = path.toLowerCase();
    // If the path is an API path or the path already has the locale prefix, we
    // don't need to prefix the path.
    if (!ignorePrefix) {
        if ((0, _pathhasprefix.pathHasPrefix)(lower, "/api")) return path;
        if ((0, _pathhasprefix.pathHasPrefix)(lower, "/" + locale.toLowerCase())) return path;
    }
    // Add the locale prefix to the path.
    return (0, _addpathprefix.addPathPrefix)(path, "/" + locale);
} //# sourceMappingURL=add-locale.js.map


/***/ }),

/***/ 22610:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addPathPrefix", ({
    enumerable: true,
    get: function() {
        return addPathPrefix;
    }
}));
const _parsepath = __webpack_require__(25084);
function addPathPrefix(path, prefix) {
    if (!path.startsWith("/") || !prefix) {
        return path;
    }
    const { pathname , query , hash  } = (0, _parsepath.parsePath)(path);
    return "" + prefix + pathname + query + hash;
} //# sourceMappingURL=add-path-prefix.js.map


/***/ }),

/***/ 67928:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addPathSuffix", ({
    enumerable: true,
    get: function() {
        return addPathSuffix;
    }
}));
const _parsepath = __webpack_require__(25084);
function addPathSuffix(path, suffix) {
    if (!path.startsWith("/") || !suffix) {
        return path;
    }
    const { pathname , query , hash  } = (0, _parsepath.parsePath)(path);
    return "" + pathname + suffix + query + hash;
} //# sourceMappingURL=add-path-suffix.js.map


/***/ }),

/***/ 67723:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "formatNextPathnameInfo", ({
    enumerable: true,
    get: function() {
        return formatNextPathnameInfo;
    }
}));
const _removetrailingslash = __webpack_require__(30465);
const _addpathprefix = __webpack_require__(22610);
const _addpathsuffix = __webpack_require__(67928);
const _addlocale = __webpack_require__(35723);
function formatNextPathnameInfo(info) {
    let pathname = (0, _addlocale.addLocale)(info.pathname, info.locale, info.buildId ? undefined : info.defaultLocale, info.ignorePrefix);
    if (info.buildId || !info.trailingSlash) {
        pathname = (0, _removetrailingslash.removeTrailingSlash)(pathname);
    }
    if (info.buildId) {
        pathname = (0, _addpathsuffix.addPathSuffix)((0, _addpathprefix.addPathPrefix)(pathname, "/_next/data/" + info.buildId), info.pathname === "/" ? "index.json" : ".json");
    }
    pathname = (0, _addpathprefix.addPathPrefix)(pathname, info.basePath);
    return !info.buildId && info.trailingSlash ? !pathname.endsWith("/") ? (0, _addpathsuffix.addPathSuffix)(pathname, "/") : pathname : (0, _removetrailingslash.removeTrailingSlash)(pathname);
} //# sourceMappingURL=format-next-pathname-info.js.map


/***/ }),

/***/ 59433:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getNextPathnameInfo", ({
    enumerable: true,
    get: function() {
        return getNextPathnameInfo;
    }
}));
const _normalizelocalepath = __webpack_require__(99962);
const _removepathprefix = __webpack_require__(81507);
const _pathhasprefix = __webpack_require__(31342);
function getNextPathnameInfo(pathname, options) {
    var _options_nextConfig;
    const { basePath , i18n , trailingSlash  } = (_options_nextConfig = options.nextConfig) != null ? _options_nextConfig : {};
    const info = {
        pathname: pathname,
        trailingSlash: pathname !== "/" ? pathname.endsWith("/") : trailingSlash
    };
    if (basePath && (0, _pathhasprefix.pathHasPrefix)(info.pathname, basePath)) {
        info.pathname = (0, _removepathprefix.removePathPrefix)(info.pathname, basePath);
        info.basePath = basePath;
    }
    if (options.parseData === true && info.pathname.startsWith("/_next/data/") && info.pathname.endsWith(".json")) {
        const paths = info.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
        const buildId = paths[0];
        info.pathname = paths[1] !== "index" ? "/" + paths.slice(1).join("/") : "/";
        info.buildId = buildId;
    }
    // If provided, use the locale route normalizer to detect the locale instead
    // of the function below.
    if (options.i18nProvider) {
        const result = options.i18nProvider.analyze(info.pathname);
        info.locale = result.detectedLocale;
        var _result_pathname;
        info.pathname = (_result_pathname = result.pathname) != null ? _result_pathname : info.pathname;
    } else if (i18n) {
        const pathLocale = (0, _normalizelocalepath.normalizeLocalePath)(info.pathname, i18n.locales);
        info.locale = pathLocale.detectedLocale;
        var _pathLocale_pathname;
        info.pathname = (_pathLocale_pathname = pathLocale.pathname) != null ? _pathLocale_pathname : info.pathname;
    }
    return info;
} //# sourceMappingURL=get-next-pathname-info.js.map


/***/ }),

/***/ 25084:
/***/ ((__unused_webpack_module, exports) => {

/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "parsePath", ({
    enumerable: true,
    get: function() {
        return parsePath;
    }
}));
function parsePath(path) {
    const hashIndex = path.indexOf("#");
    const queryIndex = path.indexOf("?");
    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) {
        return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : "",
            hash: hashIndex > -1 ? path.slice(hashIndex) : ""
        };
    }
    return {
        pathname: path,
        query: "",
        hash: ""
    };
} //# sourceMappingURL=parse-path.js.map


/***/ }),

/***/ 31342:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "pathHasPrefix", ({
    enumerable: true,
    get: function() {
        return pathHasPrefix;
    }
}));
const _parsepath = __webpack_require__(25084);
function pathHasPrefix(path, prefix) {
    if (typeof path !== "string") {
        return false;
    }
    const { pathname  } = (0, _parsepath.parsePath)(path);
    return pathname === prefix || pathname.startsWith(prefix + "/");
} //# sourceMappingURL=path-has-prefix.js.map


/***/ }),

/***/ 81507:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "removePathPrefix", ({
    enumerable: true,
    get: function() {
        return removePathPrefix;
    }
}));
const _pathhasprefix = __webpack_require__(31342);
function removePathPrefix(path, prefix) {
    // If the path doesn't start with the prefix we can return it as is. This
    // protects us from situations where the prefix is a substring of the path
    // prefix such as:
    //
    // For prefix: /blog
    //
    //   /blog -> true
    //   /blog/ -> true
    //   /blog/1 -> true
    //   /blogging -> false
    //   /blogging/ -> false
    //   /blogging/1 -> false
    if (!(0, _pathhasprefix.pathHasPrefix)(path, prefix)) {
        return path;
    }
    // Remove the prefix from the path via slicing.
    const withoutPrefix = path.slice(prefix.length);
    // If the path without the prefix starts with a `/` we can return it as is.
    if (withoutPrefix.startsWith("/")) {
        return withoutPrefix;
    }
    // If the path without the prefix doesn't start with a `/` we need to add it
    // back to the path to make sure it's a valid path.
    return "/" + withoutPrefix;
} //# sourceMappingURL=remove-path-prefix.js.map


/***/ }),

/***/ 30465:
/***/ ((__unused_webpack_module, exports) => {

/**
 * Removes the trailing slash for a given route or page path. Preserves the
 * root page. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *   - `/` -> `/`
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "removeTrailingSlash", ({
    enumerable: true,
    get: function() {
        return removeTrailingSlash;
    }
}));
function removeTrailingSlash(route) {
    return route.replace(/\/$/, "") || "/";
} //# sourceMappingURL=remove-trailing-slash.js.map


/***/ }),

/***/ 46127:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "actionAsyncStorage", ({
    enumerable: true,
    get: function() {
        return actionAsyncStorage;
    }
}));
const _asynclocalstorage = __webpack_require__(75862);
const actionAsyncStorage = (0, _asynclocalstorage.createAsyncLocalStorage)();
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=action-async-storage.js.map


/***/ }),

/***/ 75862:
/***/ ((module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createAsyncLocalStorage", ({
    enumerable: true,
    get: function() {
        return createAsyncLocalStorage;
    }
}));
class FakeAsyncLocalStorage {
    disable() {
        throw new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
    }
    getStore() {
        // This fake implementation of AsyncLocalStorage always returns `undefined`.
        return undefined;
    }
    run() {
        throw new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
    }
    exit() {
        throw new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
    }
    enterWith() {
        throw new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
    }
}
function createAsyncLocalStorage() {
    if (globalThis.AsyncLocalStorage) {
        return new globalThis.AsyncLocalStorage();
    }
    return new FakeAsyncLocalStorage();
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=async-local-storage.js.map


/***/ }),

/***/ 24437:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "requestAsyncStorage", ({
    enumerable: true,
    get: function() {
        return requestAsyncStorage;
    }
}));
const _asynclocalstorage = __webpack_require__(75862);
const requestAsyncStorage = (0, _asynclocalstorage.createAsyncLocalStorage)();
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-async-storage.js.map


/***/ }),

/***/ 30094:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "staticGenerationAsyncStorage", ({
    enumerable: true,
    get: function() {
        return staticGenerationAsyncStorage;
    }
}));
const _asynclocalstorage = __webpack_require__(75862);
const staticGenerationAsyncStorage = (0, _asynclocalstorage.createAsyncLocalStorage)();
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-async-storage.js.map


/***/ })

};
;