import { Property } from "csstype"
import styled, { css } from "styled-components"

import Box from "@/components/ui/Box"

import { Spacing } from "@/types/theme"

const Grid = styled(Box)<{
  gap?: Spacing
  templateColumns?: Property.GridTemplateColumns
  templateRows?: Property.GridTemplateRows
}>`
  display: grid;

  ${({ theme, gap }) =>
    gap &&
    css`
      gap: ${theme.spacing[gap]};
    `}

  ${({ templateColumns }) =>
    templateColumns &&
    css`
      grid-template-columns: ${templateColumns};
    `}

  ${({ templateRows }) =>
    templateRows &&
    css`
      grid-template-rows: ${templateRows};
    `}
`

export default Grid
