import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { defaultTheme as theme } from '../utils'

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${theme.typeScale.helperText};
    padding: 8px;
  `,
  large: () => `
    font-size: ${theme.typeScale.H5};
    padding: 16px 24px;
  `,
  success: () => `
    background-color: ${theme.success.color};
    color: ${theme.success.textColor};

    &:hover {
      background-color: ${theme.success.onHover};
    }

    &:focus {
      background-color: ${theme.success.onFocus};
      outline: 3px solid ${theme.success.onFocus};
    }

    &:active {
      background-color: ${theme.success.onActive};
    }

    &:disabled {
      background-color: ${theme.disabled.color};
      color: ${theme.disabled.textColor};
    }
  `,
  warning: () => `
    background-color: ${theme.warning.color};
    color: ${theme.warning.textColor};

    &:hover {
      background-color: ${theme.warning.onHover};
    }

    &:focus {
      background-color: ${theme.warning.onFocus};
      outline: 3px solid ${theme.warning.onFocus};
    }

    &:active {
      background-color: ${theme.warning.onActive};
    }

    &:disabled {
      background-color: ${theme.disabled.color};
      color: ${theme.disabled.textColor};
    }
  `,
  error: () => `
    background-color: ${theme.error.color};
    color: ${theme.error.textColor};

    &:hover {
      background-color: ${theme.error.onHover};
    }

    &:focus {
      background-color: ${theme.error.onFocus};
      outline: 3px solid ${theme.error.onFocus};
    }

    &:active {
      background-color: ${theme.error.onActive};
    }

    &:disabled {
      background-color: ${theme.disabled.color};
      color: ${theme.disabled.textColor};
    }
  `,
}

const Button = styled.button`
  min-width: 100px;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  background: none;
  font-size: ${theme.typeScale.paragraph};
  font-family: ${theme.primaryFont};
  color: ${theme.textColor};
  cursor: pointer;
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${theme.primary.onHover};
    color: ${theme.textColorInverted};
  }

  &:focus {
    background-color: ${theme.primary.onFocus};
    color: ${theme.textColorInverted};
    outline: 3px solid ${theme.primary.onFocus};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${theme.primary.onActive};
    color: ${theme.textColorInverted};
  }

  &:disabled {
    background: none;
    cursor: not-allowed;
  }
`

export const PrimaryButton = styled(Button)`
  background-color: ${theme.primary.color};
  color: ${theme.primary.textColor};

  &:hover,
  &:focus,
  &:active {
    color: ${theme.primary.textColorInverted};
  }

  &:disabled {
    background-color: ${theme.disabled.color};
    color: ${theme.disabled.textColor};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

export const SecondaryButton = styled(Button)`
  border-width: 3px;
  border-color: ${theme.secondary.color};
  border-style: solid;

  &:disabled {
    border-color: ${theme.disabled.color};
    color: ${theme.disabled.textColor};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

export const TertiaryButton = styled(Button)`
  box-shadow: ${theme.shadow};

  &:disabled {
    color: ${theme.disabled.textColor};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

export default PrimaryButton
