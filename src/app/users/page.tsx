"use client"

import * as React from "react"
import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, ChevronLeft, ChevronRight } from "lucide-react"
import { Pagination, PaginationContent, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"

type User = {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  country: string
}

const data: User[] = [
  {
    id: 1,
    username: "heo_haskell",
    email: "heo@haskell.org",
    firstName: "Heo",
    lastName: "Haskell",
    country: "United States",
  },
  {
    id: 2,
    username: "neon_serverless",
    email: "neon@serverless.org",
    firstName: "Neon",
    lastName: "Serverless",
    country: "United States",
  },
  {
    id: 3,
    username: "angular_framework",
    email: "angular@framework.com",
    firstName: "Angular",
    lastName: "Framework",
    country: "United States",
  },
  {
    id: 4,
    username: "refine_react",
    email: "refine@react.dev",
    firstName: "Refine",
    lastName: "React",
    country: "United States",
  },
  {
    id: 5,
    username: "headless_ui",
    email: "headless@ui.org",
    firstName: "Headless",
    lastName: "Ui",
    country: "United States",
  },
  {
    id: 6,
    username: "post_gres",
    email: "heo@haskell.org",
    firstName: "Post",
    lastName: "Gres",
    country: "United States",
  },
  {
    id: 7,
    username: "node_mongo",
    email: "node@mongodb.org",
    firstName: "Node",
    lastName: "Mongo",
    country: "United States",
  },
  {
    id: 8,
    username: "react_ecosystem",
    email: "react@devs.org",
    firstName: "React",
    lastName: "Devs",
    country: "United States",
  },
  {
    id: 9,
    username: "type_script",
    email: "type@script.dev",
    firstName: "Type",
    lastName: "Script",
    country: "United States",
  },
  {
    id: 10,
    username: "ruby_rails",
    email: "ruby@rails.org",
    firstName: "Ruby",
    lastName: "Rails",
    country: "United States",
  },
  {
    id: 11,
    username: "python_ai",
    email: "python@ai.dev",
    firstName: "Python",
    lastName: "Ai",
    country: "United States",
  },
  {
    id: 12,
    username: "java_script",
    email: "java@script.dev",
    firstName: "Java",
    lastName: "Script",
    country: "United States",
  },
  {
    id: 13,
    username: "svelte_framework",
    email: "svelte@framework.org",
    firstName: "Svelte",
    lastName: "Framework",
    country: "United States",
  },
  {
    id: 14,
    username: "java_spring",
    email: "java@spring.com",
    firstName: "Java",
    lastName: "Spring",
    country: "United States",
  },
  {
    id: 15,
    username: "shadcn_ui",
    email: "shadcn@ui.org",
    firstName: "Shadcn",
    lastName: "Ui",
    country: "United States",
  },
  {
    id: 16,
    username: "django_api",
    email: "django@api.org",
    firstName: "Django",
    lastName: "Api",
    country: "United States",
  },
  {
    id: 17,
    username: "bingo_ui",
    email: "bingo@ui.dev",
    firstName: "Bingo",
    lastName: "Ui",
    country: "United States",
  },
  {
    id: 18,
    username: "nest_js",
    email: "nest@js.org",
    firstName: "Nest",
    lastName: "Js",
    country: "United States",
  },
  {
    id: 19,
    username: "fast_api",
    email: "fast@api.dev",
    firstName: "Fast",
    lastName: "Api",
    country: "United States",
  },
  {
    id: 20,
    username: "ruby_sinatra",
    email: "ruby@sinatra.org",
    firstName: "Ruby",
    lastName: "Sinatra",
    country: "United States",
  },
  {
    id: 21,
    username: "roda_rails",
    email: "roda@rails.org",
    firstName: "Roda",
    lastName: "Rails",
    country: "United States",
  },
  {
    id: 22,
    username: "next_js",
    email: "next@js.org",
    firstName: "Next",
    lastName: "Js",
    country: "United States",
  },
  {
    id: 23,
    username: "next_ui",
    email: "next@ui.org",
    firstName: "Next",
    lastName: "Ui",
    country: "United States",
  },
]

export default function UsersListPage() {
  const [sorting, setSorting] = React.useState<SortingState>([])

  const columns: ColumnDef<User>[] = [
    {
      accessorKey: "id",
      header: "ID"
    },
    {
      accessorKey: "username",
      header: "Username"
    },
    {
      accessorKey: "firstName",
      header: ({ column }) => {
        return (
          <div className="flex items-center justify-between">
            First Name
            <Button
              className="p-0"
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              <ArrowUpDown />
            </Button>
          </div>
        )
      },
    },
    {
      accessorKey: "lastName",
      header: ({ column }) => {
        return (
          <div className="flex items-center justify-between">
            Last Name
            <Button
              className="p-0"
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              <ArrowUpDown />
            </Button>
          </div>
        )
      },
    },
    {
      accessorKey: "email",
      header: ({ column }) => {
        return (
          <div className="flex items-center justify-between">
            Email
            <Button
              className="p-0"
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              <ArrowUpDown />
            </Button>
          </div>
        )
      },
      cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
    },
    {
      accessorKey: "country",
      header: "Country",
    },
  ]

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  })

  return (
    <div className="w-full p-2">
      <div className="py-2 text-2xl font-bold">Users List</div>
      <div className="flex items-center justify-between space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          Page {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getPageCount()}
        </div>
        <div className="space-x-2">
          <Pagination>
            <PaginationContent>
              <PaginationPrevious>
                <Button variant="outline"
                  size="sm"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>
              </PaginationPrevious>
              <PaginationNext>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </PaginationNext>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
      <Table>
        <TableHeader className="bg-gray-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="h-24 text-center"
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
