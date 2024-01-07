import { useState } from "react"
import { useDispatch } from "react-redux"

import styled, { css } from "styled-components"

import TypeSelector from "@/components/AdvertPage/SearchBar/TypeSelector"
import Button from "@/components/ui/Button"
import Flex from "@/components/ui/Flex"
import Input from "@/components/ui/Input"
import Stack from "@/components/ui/Stack"
import Text from "@/components/ui/Text"

import { setSearch } from "@/utils/redux/slices/advertPage"
import { AppDispatch } from "@/utils/redux/store"

const SearchBar = () => {
  const [value, setValue] = useState("")
  const dispatch = useDispatch<AppDispatch>()
  const storeValue = () => dispatch(setSearch(value))

  return (
    <Stack backgroundColor="white" borderRadius="20" padding="20" gap="10" width="100%">
      <Text size="header" weight="bold">
        Актуальные ставки
      </Text>
      <Flex height="56" gap="20">
        <StyledTypeSelector />
        <Input
          name="search"
          value={value}
          onChange={setValue}
          icon="search"
          placeholder="Поиск по названию или артикулу"
        />
        <StyledButton onClick={storeValue}>Найти</StyledButton>
      </Flex>
    </Stack>
  )
}

const StyledTypeSelector = styled(TypeSelector)`
  flex: 1;
  ${({ theme }) => css`
    max-width: ${theme.spacing["224"]};
  `}
`

const StyledButton = styled(Button)`
  flex: 1;
  ${({ theme }) => css`
    max-width: ${theme.spacing["224"]};
  `}
`

export default SearchBar
