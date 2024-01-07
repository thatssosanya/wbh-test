import { useSelector } from "react-redux"

import { ColumnDef } from "@tanstack/react-table"
import styled, { css } from "styled-components"

import Box from "@/components/ui/Box"
import Table from "@/components/ui/Table"
import Text from "@/components/ui/Text"

import { useGetAdvertsQuery } from "@/utils/redux/slices/wbApi"
import { AppState } from "@/utils/redux/store"

import { Advert } from "@/types/api"

const AdvertTable = () => {
  const search = useSelector<AppState, string>((state) => state.advertPage.search)
  const { data, error, isLoading } = useGetAdvertsQuery({ search })
  const adverts =
    data && data.bets.toSorted((a, b) => a.position - b.position).map((advert, i) => ({ ...advert, i: i + 1 }))

  return (
    search &&
    (!isLoading && error ? (
      <Text color="error">{JSON.stringify((error as { data: unknown }).data)}</Text>
    ) : (
      adverts && (
        <Table<Advert>
          data={adverts}
          columns={columns}
          pageSize={adverts.filter((advert) => advert.page === 1).length}
        />
      )
    ))
  )
}

const columns: ColumnDef<Advert>[] = [
  { accessorKey: "i", header: "Место" },
  {
    accessorKey: "image",
    header: "Фото",
    cell: (data) => <StyledImg src={data.getValue() as string} alt="Product" />,
  },
  {
    accessorKey: "article",
    header: "Артикул",
  },
  {
    accessorKey: "position",
    header: "Позиция",
  },
  {
    accessorKey: "cpm",
    header: "Ставка",
    cell: (data) => (
      <StyledBox padding="10" borderRadius="10" backgroundColor="accentPale">
        {data.getValue() as number} ₽
      </StyledBox>
    ),
  },
  {
    accessorKey: "subject.name",
    header: "Категория",
  },
  {
    accessorKey: "delivery_time",
    header: "Доставка",
    cell: (data) => `${data.getValue() as number} ч`,
  },
]

const StyledImg = styled.img`
  border-radius: 2px;
  ${({ theme }) => css`
    width: ${theme.spacing["48"]};
    height: ${theme.spacing["56"]};
    object-fit: cover;
  `}
`

const StyledBox = styled(Box)`
  flex: 1;
  min-width: ${({ theme }) => theme.spacing["192"]};
`

export default AdvertTable
