import { green, neutral } from './colors'
import { primaryFont } from './typography'

export const defaultTheme = {
  primaryColor: green[400],
  primaryColorOnHover: green[200],
  primaryColorOnFocus: green[200],
  primaryColorOnActive: green[100],
  primaryColorOnDisable: neutral[300],
  secondaryColor: green[200],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  textColorOnPrimary: neutral[100],
  textColorOnDisabled: neutral[400],
  primaryFont,
  shadow: '1px 2px 5px -2px rgba(0, 0, 0, 0.5)',
}
