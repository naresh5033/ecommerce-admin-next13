exports.id = 9295;
exports.ids = [9295];
exports.modules = {

/***/ 65158:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 90125, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 86249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 97844, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 61522, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 13100, 23))

/***/ }),

/***/ 28549:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3280, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 69274, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3349, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 90701, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 22769));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 25950));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 92557));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 95525));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 82558));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 26856));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6241))

/***/ }),

/***/ 26856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainNav: () => (/* binding */ MainNav)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27448);
/* __next_internal_client_entry_do_not_use__ MainNav auto */ 



function MainNav({ className , ...props }) {
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();
    const routes = [
        {
            href: `/${params.storeId}`,
            label: "Overview",
            active: pathname === `/${params.storeId}`
        },
        {
            href: `/${params.storeId}/billboards`,
            label: "Billboards",
            active: pathname === `/${params.storeId}/billboards`
        },
        {
            href: `/${params.storeId}/categories`,
            label: "Categories",
            active: pathname === `/${params.storeId}/categories`
        },
        {
            href: `/${params.storeId}/sizes`,
            label: "Sizes",
            active: pathname === `/${params.storeId}/sizes`
        },
        {
            href: `/${params.storeId}/colors`,
            label: "Colors",
            active: pathname === `/${params.storeId}/colors`
        },
        {
            href: `/${params.storeId}/products`,
            label: "Products",
            active: pathname === `/${params.storeId}/products`
        },
        {
            href: `/${params.storeId}/orders`,
            label: "Orders",
            active: pathname === `/${params.storeId}/orders`
        },
        {
            href: `/${params.storeId}/settings`,
            label: "Settings",
            active: pathname === `/${params.storeId}/settings`
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex items-center space-x-4 lg:space-x-6", className),
        ...props,
        children: routes.map((route)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: route.href,
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("text-sm font-medium transition-colors hover:text-primary", route.active ? "text-black dark:text-white" : "text-muted-foreground"),
                children: route.label
            }, route.href))
    });
}


/***/ }),

/***/ 82558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ StoreSwitcher)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/cjs/lucide-react.js
var lucide_react = __webpack_require__(64660);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(27448);
// EXTERNAL MODULE: ./components/ui/button.tsx
var ui_button = __webpack_require__(38546);
// EXTERNAL MODULE: ./node_modules/cmdk/dist/index.js
var dist = __webpack_require__(71867);
// EXTERNAL MODULE: ./components/ui/dialog.tsx
var dialog = __webpack_require__(19302);
;// CONCATENATED MODULE: ./components/ui/command.tsx
/* __next_internal_client_entry_do_not_use__ Command,CommandDialog,CommandInput,CommandList,CommandEmpty,CommandGroup,CommandItem,CommandShortcut,CommandSeparator auto */ 





const Command = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist.Command, {
        ref: ref,
        className: (0,utils.cn)("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", className),
        ...props
    }));
Command.displayName = dist.Command.displayName;
const CommandDialog = ({ children , ...props })=>{
    return /*#__PURE__*/ _jsx(Dialog, {
        ...props,
        children: /*#__PURE__*/ _jsx(DialogContent, {
            className: "overflow-hidden p-0 shadow-2xl",
            children: /*#__PURE__*/ _jsx(Command, {
                className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
                children: children
            })
        })
    });
};
const CommandInput = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center border-b px-3",
        "cmdk-input-wrapper": "",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* Search */.olm, {
                className: "mr-2 h-4 w-4 shrink-0 opacity-50"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(dist.Command.Input, {
                ref: ref,
                className: (0,utils.cn)("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className),
                ...props
            })
        ]
    }));
CommandInput.displayName = dist.Command.Input.displayName;
const CommandList = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist.Command.List, {
        ref: ref,
        className: (0,utils.cn)("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
        ...props
    }));
CommandList.displayName = dist.Command.List.displayName;
const CommandEmpty = /*#__PURE__*/ react_.forwardRef((props, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist.Command.Empty, {
        ref: ref,
        className: "py-6 text-center text-sm",
        ...props
    }));
CommandEmpty.displayName = dist.Command.Empty.displayName;
const CommandGroup = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist.Command.Group, {
        ref: ref,
        className: (0,utils.cn)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", className),
        ...props
    }));
CommandGroup.displayName = dist.Command.Group.displayName;
const CommandSeparator = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist.Command.Separator, {
        ref: ref,
        className: (0,utils.cn)("-mx-1 h-px bg-border", className),
        ...props
    }));
CommandSeparator.displayName = dist.Command.Separator.displayName;
const CommandItem = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist.Command.Item, {
        ref: ref,
        className: (0,utils.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props
    }));
CommandItem.displayName = dist.Command.Item.displayName;
const CommandShortcut = ({ className , ...props })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: (0,utils.cn)("ml-auto text-xs tracking-widest text-muted-foreground", className),
        ...props
    });
};
CommandShortcut.displayName = "CommandShortcut";


// EXTERNAL MODULE: ./node_modules/@radix-ui/react-popover/dist/index.mjs
var react_popover_dist = __webpack_require__(4535);
;// CONCATENATED MODULE: ./components/ui/popover.tsx
/* __next_internal_client_entry_do_not_use__ Popover,PopoverTrigger,PopoverContent auto */ 



const Popover = react_popover_dist/* Root */.fC;
const PopoverTrigger = react_popover_dist/* Trigger */.xz;
const PopoverContent = /*#__PURE__*/ react_.forwardRef(({ className , align ="center" , sideOffset =4 , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(react_popover_dist/* Portal */.h_, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_popover_dist/* Content */.VY, {
            ref: ref,
            align: align,
            sideOffset: sideOffset,
            className: (0,utils.cn)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
            ...props
        })
    }));
PopoverContent.displayName = react_popover_dist/* Content */.VY.displayName;


// EXTERNAL MODULE: ./hooks/use-store-modal.tsx
var use_store_modal = __webpack_require__(63588);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
;// CONCATENATED MODULE: ./components/store-switcher.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 








function StoreSwitcher({ className , items =[]  }) {
    const storeModal = (0,use_store_modal/* useStoreModal */.N)();
    const params = (0,navigation.useParams)();
    const router = (0,navigation.useRouter)();
    const formattedItems = items.map((item)=>({
            label: item.name,
            value: item.id
        }));
    const currentStore = formattedItems.find((item)=>item.value === params.storeId); //this way we will know whichever item in the url is the cureently selected one
    const [open, setOpen] = react_.useState(false);
    const onStoreSelect = (store)=>{
        setOpen(false);
        router.push(`/${store.value}`); //once we select the new store close the store switches and nav to the new store
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Popover, {
        open: open,
        onOpenChange: setOpen,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(PopoverTrigger, {
                asChild: true,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_button/* Button */.z, {
                    variant: "outline",
                    size: "sm",
                    role: "combobox",
                    "aria-expanded": open,
                    "aria-label": "Select a store",
                    className: (0,utils.cn)("w-[200px] justify-between", className),
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* Store */.yh4, {
                            className: "mr-2 h-4 w-4"
                        }),
                        currentStore?.label,
                        /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* ChevronsUpDown */.Dcq, {
                            className: "ml-auto h-4 w-4 shrink-0 opacity-50"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(PopoverContent, {
                className: "w-[200px] p-0",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Command, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CommandList, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(CommandInput, {
                                    placeholder: "Search store..."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(CommandEmpty, {
                                    children: "No store found."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(CommandGroup, {
                                    heading: "Stores",
                                    children: formattedItems.map((store)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(CommandItem, {
                                            onSelect: ()=>onStoreSelect(store),
                                            className: "text-sm",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* Store */.yh4, {
                                                    className: "mr-2 h-4 w-4"
                                                }),
                                                store.label,
                                                /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* Check */.JrY, {
                                                    className: (0,utils.cn)("ml-auto h-4 w-4", currentStore?.value === store.value ? "opacity-100" : "opacity-0")
                                                })
                                            ]
                                        }, store.value))
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(CommandSeparator, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(CommandList, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(CommandGroup, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CommandItem, {
                                    onSelect: ()=>{
                                        setOpen(false);
                                        storeModal.onOpen();
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* PlusCircle */.FUf, {
                                            className: "mr-2 h-5 w-5"
                                        }),
                                        "Create Store"
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 6241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeToggle: () => (/* binding */ ThemeToggle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64660);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95176);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38546);
/* harmony import */ var _components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41772);
/* __next_internal_client_entry_do_not_use__ ThemeToggle auto */ 





function ThemeToggle() {
    const { setTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__/* .useTheme */ .F)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__/* .DropdownMenu */ .h_, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__/* .DropdownMenuTrigger */ .$F, {
                asChild: true,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .z, {
                    variant: "outline",
                    size: "icon",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__/* .Sun */ .kOA, {
                            className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__/* .Moon */ .JFe, {
                            className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "sr-only",
                            children: "Toggle theme"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__/* .DropdownMenuContent */ .AW, {
                align: "end",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__/* .DropdownMenuItem */ .Xi, {
                        onClick: ()=>setTheme("light"),
                        children: "Light"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__/* .DropdownMenuItem */ .Xi, {
                        onClick: ()=>setTheme("dark"),
                        children: "Dark"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__/* .DropdownMenuItem */ .Xi, {
                        onClick: ()=>setTheme("system"),
                        children: "System"
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 41772:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $F: () => (/* binding */ DropdownMenuTrigger),
/* harmony export */   AW: () => (/* binding */ DropdownMenuContent),
/* harmony export */   Ju: () => (/* binding */ DropdownMenuLabel),
/* harmony export */   Xi: () => (/* binding */ DropdownMenuItem),
/* harmony export */   h_: () => (/* binding */ DropdownMenu)
/* harmony export */ });
/* unused harmony exports DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuGroup, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuRadioGroup */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86820);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64660);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27448);
/* __next_internal_client_entry_do_not_use__ DropdownMenu,DropdownMenuTrigger,DropdownMenuContent,DropdownMenuItem,DropdownMenuCheckboxItem,DropdownMenuRadioItem,DropdownMenuLabel,DropdownMenuSeparator,DropdownMenuShortcut,DropdownMenuGroup,DropdownMenuPortal,DropdownMenuSub,DropdownMenuSubContent,DropdownMenuSubTrigger,DropdownMenuRadioGroup auto */ 




const DropdownMenu = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .Root */ .fC;
const DropdownMenuTrigger = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .Trigger */ .xz;
const DropdownMenuGroup = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .Group */ .ZA;
const DropdownMenuPortal = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .Portal */ .Uv;
const DropdownMenuSub = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .Sub */ .Tr;
const DropdownMenuRadioGroup = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .RadioGroup */ .Ee;
const DropdownMenuSubTrigger = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className , inset , children , ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .SubTrigger */ .fF, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent", inset && "pl-8", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_4__/* .ChevronRight */ ._Qn, {
                className: "ml-auto h-4 w-4"
            })
        ]
    }));
DropdownMenuSubTrigger.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .SubTrigger */ .fF.displayName;
const DropdownMenuSubContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .SubContent */ .tu, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1", className),
        ...props
    }));
DropdownMenuSubContent.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .SubContent */ .tu.displayName;
const DropdownMenuContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className , sideOffset =4 , ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .Portal */ .Uv, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .Content */ .VY, {
            ref: ref,
            sideOffset: sideOffset,
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
            ...props
        })
    }));
DropdownMenuContent.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .Content */ .VY.displayName;
const DropdownMenuItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className , inset , ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .Item */ .ck, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", inset && "pl-8", className),
        ...props
    }));
DropdownMenuItem.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .Item */ .ck.displayName;
const DropdownMenuCheckboxItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className , children , checked , ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .CheckboxItem */ .oC, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .ItemIndicator */ .wU, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_4__/* .Check */ .JrY, {
                        className: "h-4 w-4"
                    })
                })
            }),
            children
        ]
    }));
DropdownMenuCheckboxItem.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .CheckboxItem */ .oC.displayName;
const DropdownMenuRadioItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className , children , ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .RadioItem */ .Rk, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .ItemIndicator */ .wU, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_4__/* .Circle */ .Cdc, {
                        className: "h-2 w-2 fill-current"
                    })
                })
            }),
            children
        ]
    }));
DropdownMenuRadioItem.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .RadioItem */ .Rk.displayName;
const DropdownMenuLabel = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className , inset , ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .Label */ .__, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
        ...props
    }));
DropdownMenuLabel.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .Label */ .__.displayName;
const DropdownMenuSeparator = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .Separator */ .Z0, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }));
DropdownMenuSeparator.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__/* .Separator */ .Z0.displayName;
const DropdownMenuShortcut = ({ className , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("ml-auto text-xs tracking-widest opacity-60", className),
        ...props
    });
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";



/***/ }),

/***/ 98061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Separator: () => (/* binding */ Separator)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48483);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27448);
/* __next_internal_client_entry_do_not_use__ Separator auto */ 



const Separator = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className , orientation ="horizontal" , decorative =true , ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_3__/* .Root */ .f, {
        ref: ref,
        decorative: decorative,
        orientation: orientation,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
        ...props
    }));
Separator.displayName = _radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_3__/* .Root */ .f.displayName;



/***/ }),

/***/ 83951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DashboardLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(78875);
// EXTERNAL MODULE: ./node_modules/@clerk/nextjs/dist/esm/index.js + 21 modules
var esm = __webpack_require__(7036);
// EXTERNAL MODULE: ./node_modules/@clerk/nextjs/dist/esm/client-boundary/uiComponents.js
var uiComponents = __webpack_require__(86190);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(21313);
;// CONCATENATED MODULE: ./components/store-switcher.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/nareshxo/Desktop/Macbook pro/Workplace/Next/Admin-Store/ecommerce-admin/components/store-switcher.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const store_switcher = (__default__);
;// CONCATENATED MODULE: ./components/main-nav.tsx

const main_nav_proxy = (0,module_proxy.createProxy)(String.raw`/Users/nareshxo/Desktop/Macbook pro/Workplace/Next/Admin-Store/ecommerce-admin/components/main-nav.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: main_nav_esModule, $$typeof: main_nav_$$typeof } = main_nav_proxy;
const main_nav_default_ = main_nav_proxy.default;

const e0 = main_nav_proxy["MainNav"];

;// CONCATENATED MODULE: ./components/theme-toggle.tsx

const theme_toggle_proxy = (0,module_proxy.createProxy)(String.raw`/Users/nareshxo/Desktop/Macbook pro/Workplace/Next/Admin-Store/ecommerce-admin/components/theme-toggle.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: theme_toggle_esModule, $$typeof: theme_toggle_$$typeof } = theme_toggle_proxy;
const theme_toggle_default_ = theme_toggle_proxy.default;

const theme_toggle_e0 = theme_toggle_proxy["ThemeToggle"];

// EXTERNAL MODULE: ./lib/prismadb.ts
var prismadb = __webpack_require__(18263);
;// CONCATENATED MODULE: ./components/navbar.tsx







const Navbar = async ()=>{
    const { userId  } = (0,esm/* auth */.I8)();
    if (!userId) {
        (0,navigation.redirect)("/sign-in");
    }
    // get all the stores that owned by this user
    const stores = await prismadb/* default */.Z.store.findMany({
        where: {
            userId
        }
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "border-b",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex h-16 items-center px-4",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(store_switcher, {
                    items: stores
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(e0, {
                    className: "mx-6"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "ml-auto flex items-center space-x-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(theme_toggle_e0, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(uiComponents/* UserButton */.l8, {
                            afterSignOutUrl: "/"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const navbar = (Navbar);

;// CONCATENATED MODULE: ./app/(dashboard)/[storeId]/layout.tsx





async function DashboardLayout({ children , params  }) {
    const { userId  } = (0,esm/* auth */.I8)();
    if (!userId) {
        (0,navigation.redirect)("/sign-in");
    }
    // if we have the user id means the dashboard layout/ url is gon to v the [storeId] and we can fetch the store
    const store = await prismadb/* default */.Z.store.findFirst({
        where: {
            id: params.storeId,
            userId
        }
    });
    if (!store) {
        (0,navigation.redirect)("/");
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(navbar, {}),
            children
        ]
    });
}


/***/ }),

/***/ 18263:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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