import { useSelector } from "react-redux"

import styled from "styled-components"

import Box from "@/components/ui/Box"
import Flex from "@/components/ui/Flex"
import Stack from "@/components/ui/Stack"
import Text from "@/components/ui/Text"

import { useGetAdvertsQuery } from "@/utils/redux/slices/wbApi"
import { AppState } from "@/utils/redux/store"

const Subjects = () => {
  const search = useSelector<AppState, string>((state) => state.advertPage.search)
  const { data, isLoading } = useGetAdvertsQuery({ search })
  const subjects = data && data.subject_priorities

  return (
    !isLoading &&
    search &&
    subjects?.length && (
      <Stack padding="20" gap="20" borderRadius="10" backgroundColor="white">
        <Text size="large" weight="bold">
          Приоритет категорий
        </Text>
        <Box>
          {subjects
            .toSorted((a, b) => a.position - b.position)
            .map(({ id, name, position }) => (
              <Subject name={name} position={position} key={id} />
            ))}
        </Box>
      </Stack>
    )
  )
}

const Subject = ({ name, position }: { name: string; position: number }) => {
  return (
    <Flex
      height="80"
      gap="20"
      paddingY="10"
      borderRadius="10"
      alignItems="center"
      borderColor={position % 2 === 0 ? "box.selectedBorder" : undefined}
    >
      <StyledPositionText>{position}</StyledPositionText>
      <StyledSubjectText>{name}</StyledSubjectText>
    </Flex>
  )
}

const StyledPositionText = styled(Text)`
  width: 50px;
  text-align: center;
`

const StyledSubjectText = styled(Text)`
  flex: 1;
`

export default Subjects
