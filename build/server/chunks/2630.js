"use strict";
exports.id = 2630;
exports.ids = [2630];
exports.modules = {

/***/ 32630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  w: () => (/* binding */ DataTable)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-table/build/lib/index.mjs
var lib = __webpack_require__(54738);
// EXTERNAL MODULE: ./node_modules/@tanstack/table-core/build/lib/index.mjs
var build_lib = __webpack_require__(50157);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(27448);
;// CONCATENATED MODULE: ./components/ui/table.tsx



const Table = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full overflow-auto",
        children: /*#__PURE__*/ jsx_runtime_.jsx("table", {
            ref: ref,
            className: (0,utils.cn)("w-full caption-bottom text-sm", className),
            ...props
        })
    }));
Table.displayName = "Table";
const TableHeader = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("thead", {
        ref: ref,
        className: (0,utils.cn)("[&_tr]:border-b", className),
        ...props
    }));
TableHeader.displayName = "TableHeader";
const TableBody = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("tbody", {
        ref: ref,
        className: (0,utils.cn)("[&_tr:last-child]:border-0", className),
        ...props
    }));
TableBody.displayName = "TableBody";
const TableFooter = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("tfoot", {
        ref: ref,
        className: (0,utils.cn)("bg-primary font-medium text-primary-foreground", className),
        ...props
    }));
TableFooter.displayName = "TableFooter";
const TableRow = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("tr", {
        ref: ref,
        className: (0,utils.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
        ...props
    }));
TableRow.displayName = "TableRow";
const TableHead = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("th", {
        ref: ref,
        className: (0,utils.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", className),
        ...props
    }));
TableHead.displayName = "TableHead";
const TableCell = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("td", {
        ref: ref,
        className: (0,utils.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
        ...props
    }));
TableCell.displayName = "TableCell";
const TableCaption = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("caption", {
        ref: ref,
        className: (0,utils.cn)("mt-4 text-sm text-muted-foreground", className),
        ...props
    }));
TableCaption.displayName = "TableCaption";


// EXTERNAL MODULE: ./components/ui/button.tsx
var ui_button = __webpack_require__(38546);
// EXTERNAL MODULE: ./components/ui/input.tsx
var input = __webpack_require__(65876);
;// CONCATENATED MODULE: ./components/ui/data-table.tsx
/* __next_internal_client_entry_do_not_use__ DataTable auto */ 





function DataTable({ columns , data , searchKey  }) {
    const [columnFilters, setColumnFilters] = (0,react_.useState)([]);
    const table = (0,lib/* useReactTable */.b7)({
        data,
        columns,
        getCoreRowModel: (0,build_lib/* getCoreRowModel */.sC)(),
        getPaginationRowModel: (0,build_lib/* getPaginationRowModel */.G_)(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: (0,build_lib/* getFilteredRowModel */.vL)(),
        state: {
            columnFilters
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex items-center py-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx(input/* Input */.I, {
                    placeholder: "Search",
                    value: (table.getColumn(searchKey)?.getFilterValue()) ?? "",
                    onChange: (event)=>table.getColumn(searchKey)?.setFilterValue(event.target.value),
                    className: "max-w-sm"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "rounded-md border",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Table, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(TableHeader, {
                            children: table.getHeaderGroups().map((headerGroup)=>/*#__PURE__*/ jsx_runtime_.jsx(TableRow, {
                                    children: headerGroup.headers.map((header)=>{
                                        return /*#__PURE__*/ jsx_runtime_.jsx(TableHead, {
                                            children: header.isPlaceholder ? null : (0,lib/* flexRender */.ie)(header.column.columnDef.header, header.getContext())
                                        }, header.id);
                                    })
                                }, headerGroup.id))
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(TableBody, {
                            children: table.getRowModel().rows?.length ? table.getRowModel().rows.map((row)=>/*#__PURE__*/ jsx_runtime_.jsx(TableRow, {
                                    "data-state": row.getIsSelected() && "selected",
                                    children: row.getVisibleCells().map((cell)=>/*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                            children: (0,lib/* flexRender */.ie)(cell.column.columnDef.cell, cell.getContext())
                                        }, cell.id))
                                }, row.id)) : /*#__PURE__*/ jsx_runtime_.jsx(TableRow, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(TableCell, {
                                    colSpan: columns.length,
                                    className: "h-24 text-center",
                                    children: "No results."
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-end space-x-2 py-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* Button */.z, {
                        variant: "outline",
                        size: "sm",
                        onClick: ()=>table.previousPage(),
                        disabled: !table.getCanPreviousPage(),
                        children: "Previous"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* Button */.z, {
                        variant: "outline",
                        size: "sm",
                        onClick: ()=>table.nextPage(),
                        disabled: !table.getCanNextPage(),
                        children: "Next"
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;