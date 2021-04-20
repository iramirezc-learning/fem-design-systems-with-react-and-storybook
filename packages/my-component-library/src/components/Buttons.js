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
`

export const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  color: ${defaultTheme.textColorInverted};
`

export const SecondaryButton = styled(Button)`
  border-width: 3px;
  border-color: ${defaultTheme.primaryColor};
  border-style: solid;
`

export const TertiaryButton = styled(Button)`
  box-shadow: ${defaultTheme.shadow};
`

export default PrimaryButton
