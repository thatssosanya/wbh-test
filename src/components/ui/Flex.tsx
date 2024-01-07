import { Property } from "csstype"
import styled, { css } from "styled-components"

import Box from "@/components/ui/Box"

import { Spacing } from "@/types/theme"

const Flex = styled(Box)<{
  gap?: Spacing
  justifyContent?: Property.JustifyContent
  alignItems?: Property.AlignItems
}>`
  display: flex;

  ${({ theme, gap }) =>
    gap &&
    css`
      gap: ${theme.spacing[gap]};
    `}

  ${({ justifyContent }) =>
    justifyContent &&
    css`
      justify-content: ${justifyContent};
    `}

  ${({ alignItems }) =>
    alignItems &&
    css`
      align-items: ${alignItems};
    `}
`

export default Flex
