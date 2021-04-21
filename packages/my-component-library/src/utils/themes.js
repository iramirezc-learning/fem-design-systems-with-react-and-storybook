import { green, neutral, success, warning, error } from './colors'
import { primaryFont, typeScale } from './typography'

export const defaultTheme = {
  primaryFont,
  textColor: neutral[600],
  textColorInverted: neutral[100],
  shadow: '1px 2px 5px -2px rgba(0, 0, 0, 0.5)',
  primary: {
    color: green[400],
    onHover: green[200],
    onFocus: green[200],
    onActive: green[100],
    textColor: neutral[100],
    textColorInverted: neutral[600],
  },
  secondary: {
    color: green[200],
  },
  disabled: {
    color: neutral[300],
    textColor: neutral[400],
  },
  success: {
    color: success[300],
    onHover: success[200],
    onFocus: success[200],
    onActive: success[100],
    textColor: neutral[100],
    textColorInverted: neutral[600],
  },
  warning: {
    color: warning[300],
    onHover: warning[200],
    onFocus: warning[200],
    onActive: warning[100],
    textColor: neutral[100],
    textColorInverted: neutral[600],
  },
  error: {
    color: error[300],
    onHover: error[200],
    onFocus: error[200],
    onActive: error[100],
    textColor: neutral[100],
    textColorInverted: neutral[600],
  },
  typeScale,
}
