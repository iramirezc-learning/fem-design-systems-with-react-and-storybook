import styled from 'styled-components'

const textInvertedColor = '#ffffff'
const primary300 = '#6BDE23'

const Button = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 5px;
  min-width: 100px;
  cursor: pointer;
  font-family: 'Noto Sans', monospace;
`

const PrimaryButton = styled(Button)`
  background-color: ${primary300};
  border: none;
  color: ${textInvertedColor};
`

export default PrimaryButton
