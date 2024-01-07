import styled, { css } from "styled-components"

import Icon, { IconType } from "@/components/ui/Icon"
import Stack from "@/components/ui/Stack"
import Text from "@/components/ui/Text"

const Input = ({
  name,
  value,
  onChange,
  icon,
  label,
  placeholder,
}: {
  name: string
  value: string
  onChange: (v: string) => void
  icon?: IconType
  label?: string
  placeholder?: string
}) => {
  return (
    <StyledStack gap="10" as="label" htmlFor={name}>
      {label && <Text size="small">{label}</Text>}
      <StyledInput
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || label || name}
      />
      {icon && <StyledIcon type={icon} />}
    </StyledStack>
  )
}

const StyledInput = styled.input`
  width: 100%;
  border: 0;
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.large};
    line-height: ${theme.spacing["40"]};
    padding: ${theme.spacing["8"]} ${theme.spacing["10"]};
    border-bottom: 1px solid ${theme.colors.box.unselectedBorder};
    &::placeholder {
      color: ${theme.colors.placeholder};
      font-size: ${theme.fontSizes.large};
    }
  `}
`

const StyledIcon = styled(Icon)`
  position: absolute;
  transform: translateY(-50%);
  bottom: 0;
  right: ${({ theme }) => theme.spacing["10"]};
`

const StyledStack = styled(Stack)`
  flex: 1;
  position: relative;
`

export default Input
