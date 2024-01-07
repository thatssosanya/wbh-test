import styled from "styled-components"

import Stack from "@/components/ui/Stack"

const DefaultLayout = styled(Stack)`
  max-width: calc(1300px + 2 * ${({ theme }) => theme.spacing["40"]});
  padding: ${({ theme }) => theme.spacing["40"]};
  margin: 0 auto;
`

export default DefaultLayout
