import { useDispatch, useSelector } from "react-redux"

import styled from "styled-components"

import Flex from "@/components/ui/Flex"
import Text from "@/components/ui/Text"

import { setRegionId } from "@/utils/redux/slices/advertPage"
import { useGetRegionsQuery } from "@/utils/redux/slices/wbApi"
import { AppState } from "@/utils/redux/store"

const RegionSelector = () => {
  const { data: regions, error, isLoading } = useGetRegionsQuery()
  const selectedId = useSelector<AppState, number>((state) => state.advertPage.regionId)
  const dispatch = useDispatch()
  const setSelectedId = (value: number) => dispatch(setRegionId(value))

  return (
    <Flex gap="10">
      {!isLoading && error ? (
        <Text color="error">{JSON.stringify((error as { data: unknown }).data)}</Text>
      ) : (
        regions?.length &&
        regions.map(({ name, id }) => {
          const isSelected = id === selectedId

          return (
            <StyledFlex
              height="36"
              paddingX="10"
              borderRadius="4"
              backgroundColor={isSelected ? "white" : undefined}
              borderColor={isSelected ? "box.selectedBorder" : "box.unselectedBorder"}
              onClick={() => setSelectedId(id)}
              key={id}
            >
              <Text size="large">{name}</Text>
            </StyledFlex>
          )
        })
      )}
    </Flex>
  )
}

const StyledFlex = styled(Flex)`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export default RegionSelector
