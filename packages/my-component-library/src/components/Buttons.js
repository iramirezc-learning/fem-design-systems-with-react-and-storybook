import styled from 'styled-components'
import { defaultTheme, typeScale } from '../utils'

const Button = styled.button`
  min-width: 100px;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  background: none;
  font-size: ${typeScale.paragraph};
  font-family: ${defaultTheme.primaryFont};
  color: ${defaultTheme.textColor};
  cursor: pointer;
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${defaultTheme.primaryColorOnHover};
    color: ${defaultTheme.textColorInverted};
  }

  &:focus {
    background-color: ${defaultTheme.primaryColorOnFocus};
    color: ${defaultTheme.textColorInverted};
    outline: 3px solid ${defaultTheme.primaryColorOnFocus};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${defaultTheme.primaryColorOnActive};
    color: ${defaultTheme.textColorInverted};
  }

  &:disabled {
    cursor: not-allowed;
  }
`

export const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  color: ${defaultTheme.textColorOnPrimary};

  &:hover,
  &:focus,
  &:active {
    color: ${defaultTheme.textColor};
  }

  &:disabled {
    background-color: ${defaultTheme.primaryColorOnDisable};
    color: ${defaultTheme.textColorOnDisabled};
  }
`

export const SecondaryButton = styled(Button)`
  border-width: 3px;
  border-color: ${defaultTheme.secondaryColor};
  border-style: solid;

  &:disabled {
    background: none;
    border-color: ${defaultTheme.primaryColorOnDisable};
    color: ${defaultTheme.textColorOnDisabled};
  }
`

export const TertiaryButton = styled(Button)`
  box-shadow: ${defaultTheme.shadow};

  &:disabled {
    background: none;
    color: ${defaultTheme.textColorOnDisabled};
  }
`

export default PrimaryButton
