import styled from 'styled-components'

const textColor = '#181818'
const textInvertedColor = '#ffffff'
const neutral100 = '#ffffff'
const primary200 = '#8CDE59'
const primary300 = '#6BDE23'

const Button = styled.button`
  background-color: ${neutral100};
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 5px;
  min-width: 100px;
  cursor: pointer;
  font-family: 'Noto Sans', monospace;
`

export const PrimaryButton = styled(Button)`
  background-color: ${primary300};
  border: none;
  color: ${textInvertedColor};
`

export const SecondaryButton = styled(Button)`
  border-width: 3px;
  border-color: ${primary200};
  border-style: solid;
  color: ${textColor};
`

export const TertiaryButton = styled(Button)`
  border: none;
  color: ${textColor};
  box-shadow: 1px 2px 5px -2px rgba(0, 0, 0, 0.5);
`

export default PrimaryButton
