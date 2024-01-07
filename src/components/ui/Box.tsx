import { Property } from "csstype"
import styled, { css } from "styled-components"

import getNestedString from "@/utils/getNestedString"

import { Color, Spacing } from "@/types/theme"

const Box = styled.div<{
  height?: Spacing | Property.Height
  width?: Spacing | Property.Width
  padding?: Spacing
  paddingX?: Spacing
  paddingY?: Spacing
  paddingTop?: Spacing
  paddingBottom?: Spacing
  paddingLeft?: Spacing
  paddingRight?: Spacing
  borderRadius?: Spacing
  backgroundColor?: Color
  borderColor?: Color
}>`
  ${({ theme, height }) =>
    height &&
    css`
      height: ${height in theme.spacing ? theme.spacing[height as Spacing] : height};
    `}

  ${({ theme, width }) =>
    width &&
    css`
      width: ${width in theme.spacing ? theme.spacing[width as Spacing] : width};
    `}

  ${({ theme, padding }) =>
    padding &&
    css`
      padding: ${theme.spacing[padding]};
    `}

  ${({ theme, paddingLeft, paddingX }) =>
    (paddingLeft || paddingX) &&
    css`
      padding-left: ${paddingLeft ? theme.spacing[paddingLeft] : theme.spacing[paddingX!]};
    `}

  ${({ theme, paddingRight, paddingX }) =>
    (paddingRight || paddingX) &&
    css`
      padding-right: ${paddingRight ? theme.spacing[paddingRight] : theme.spacing[paddingX!]};
    `}

  ${({ theme, paddingTop, paddingY }) =>
    (paddingTop || paddingY) &&
    css`
      padding-top: ${paddingTop ? theme.spacing[paddingTop] : theme.spacing[paddingY!]};
    `}

  ${({ theme, paddingBottom, paddingY }) =>
    (paddingBottom || paddingY) &&
    css`
      padding-bottom: ${paddingBottom ? theme.spacing[paddingBottom] : theme.spacing[paddingY!]};
    `}

  ${({ theme, borderRadius }) =>
    borderRadius &&
    css`
      border-radius: ${theme.spacing[borderRadius]};
    `}

  ${({ theme, backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${getNestedString(theme.colors, backgroundColor)};
    `}

  ${({ theme, borderColor }) =>
    borderColor &&
    css`
      border-width: 1px;
      border-style: solid;
      border-color: ${getNestedString(theme.colors, borderColor)};
    `}
`

export default Box
