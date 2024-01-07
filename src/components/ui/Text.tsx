import { Property } from "csstype"
import styled, { css } from "styled-components"

import getNestedString from "@/utils/getNestedString"

import { Color, FontSize } from "@/types/theme"

const Text = styled.span<{ size?: FontSize; weight?: Property.FontWeight; color?: Color }>`
  ${({ theme, size }) =>
    size &&
    css`
      font-size: ${theme.fontSizes[size || "medium"]};
    `}

  ${({ weight }) =>
    weight &&
    css`
      font-weight: ${weight || "normal"};
    `}

  ${({ theme, color }) =>
    color &&
    css`
      color: ${getNestedString(theme.colors, color || "text")};
    `}
`

export default Text
