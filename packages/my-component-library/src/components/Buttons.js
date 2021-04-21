import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'

const BUTTON_MODIFIERS = {
  small: ({ theme }) => `
    font-size: ${theme.typeScale.helperText};
    padding: 8px;
  `,
  large: ({ theme }) => `
    font-size: ${theme.typeScale.H5};
    padding: 16px 24px;
  `,
  success: ({ theme }) => `
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
  warning: ({ theme }) => `
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
  error: ({ theme }) => `
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
  font-size: ${({ theme }) => theme.typeScale.paragraph};
  font-family: ${({ theme }) => theme.primaryFont};
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${({ theme }) => theme.primary.onHover};
    color: ${({ theme }) => theme.textColorInverted};
  }

  &:focus {
    background-color: ${({ theme }) => theme.primary.onFocus};
    color: ${({ theme }) => theme.textColorInverted};
    outline: 3px solid ${({ theme }) => theme.primary.onFocus};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${({ theme }) => theme.primary.onActive};
    color: ${({ theme }) => theme.textColorInverted};
  }

  &:disabled {
    background: none;
    cursor: not-allowed;
  }
`

export const PrimaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.primary.color};
  color: ${({ theme }) => theme.primary.textColor};

  &:hover,
  &:focus,
  &:active {
    color: ${({ theme }) => theme.primary.textColorInverted};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.disabled.color};
    color: ${({ theme }) => theme.disabled.textColor};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

export const SecondaryButton = styled(Button)`
  border-width: 3px;
  border-color: ${({ theme }) => theme.secondary.color};
  border-style: solid;

  &:disabled {
    border-color: ${({ theme }) => theme.disabled.color};
    color: ${({ theme }) => theme.disabled.textColor};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

export const TertiaryButton = styled(Button)`
  box-shadow: ${({ theme }) => theme.shadow};

  &:disabled {
    color: ${({ theme }) => theme.disabled.textColor};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

export default PrimaryButton
