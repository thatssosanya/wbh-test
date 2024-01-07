import React, { useState } from "react"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import styled, { css } from "styled-components"

import Box from "@/components/ui/Box"
import Flex from "@/components/ui/Flex"
import Text from "@/components/ui/Text"

const StyledTable = styled.table`
  border-spacing: 0;
  ${({ theme }) => css`
    th:not(:first-child),
    td:not(:first-child) {
      border-left: ${theme.spacing["20"]} solid transparent;
    }
    th:first-child,
    td:first-child {
      border-left: ${theme.spacing["10"]} solid transparent;
      border-top-left-radius: ${theme.spacing["10"]};
      border-bottom-left-radius: ${theme.spacing["10"]};
    }
    th:last-child,
    td:last-child {
      border-right: ${theme.spacing["10"]} solid transparent;
      border-top-right-radius: ${theme.spacing["10"]};
      border-bottom-right-radius: ${theme.spacing["10"]};
    }
  `}
`

const Table = <T extends object>({
  columns,
  data,
  pageSize = 5,
}: {
  columns: ColumnDef<T>[]
  data: T[]
  pageSize?: number
}) => {
  const [pageIndex, setPageIndex] = useState(0)
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      pagination: {
        pageIndex,
        pageSize,
      },
    },
  })

  return (
    <>
      <StyledTable>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Box as="tr" backgroundColor="white" key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <StyledCell as="th" paddingY="10" colSpan={header.colSpan} key={header.id}>
                  <Text size="small" weight="normal">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </Text>
                </StyledCell>
              ))}
            </Box>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, i) => (
            <Box as="tr" height="80" backgroundColor={i % 2 === 1 ? "white" : undefined} key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <StyledCell as="td" paddingY="10" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </StyledCell>
              ))}
            </Box>
          ))}
        </tbody>
      </StyledTable>
      <Flex gap="20" justifyContent="center" alignItems="center">
        {Array(Math.ceil(data.length / pageSize))
          .fill(0)
          .map((_, i) => {
            const isSelected = pageIndex === i

            return (
              <StyledPageIndex
                onClick={() => setPageIndex(i)}
                justifyContent="center"
                alignItems="center"
                width="56"
                height="56"
                borderRadius="10"
                backgroundColor={isSelected ? "white" : undefined}
                borderColor={isSelected ? "box.selectedBorder" : "placeholder"}
                key={i}
              >
                <Text color={!isSelected ? "placeholder" : undefined}>{i + 1}</Text>
              </StyledPageIndex>
            )
          })}
      </Flex>
    </>
  )
}

const StyledCell = styled(Box)`
  text-align: center;
`

const StyledPageIndex = styled(Flex)`
  cursor: pointer;
`

export default Table
