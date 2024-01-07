import styled, { css } from "styled-components"

const Button = styled.button`
  cursor: pointer;
  ${({ theme }) => css`
    border: 0;
    height: ${theme.spacing["56"]};
    padding: 0 ${theme.spacing["10"]};
    background-color: ${theme.colors.accent};
    border-radius: ${theme.spacing["4"]};
    font-size: ${theme.fontSizes.large};
  `}
`

export default Button
