"use client"

import { ColumnDef } from "@tanstack/react-table"

import { CellAction } from "./cell-action"

// the billboard column table(dataa table), and we can use this in our billboards page
export type BillboardColumn = {
  id: string
  label: string;
  createdAt: string;
}

export const columns: ColumnDef<BillboardColumn>[] = [
  {
    accessorKey: "label",
    header: "Label",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />// this is how we access the original obj(billboard) that this cell is working with
  },
];
