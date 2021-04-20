import { green, neutral } from './colors'
import { primaryFont } from './typography'

export const defaultTheme = {
  primaryColor: green[300],
  primaryColorHover: green[200],
  primaryColorActive: green[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  primaryFont,
  shadow: '1px 2px 5px -2px rgba(0, 0, 0, 0.5)',
}
