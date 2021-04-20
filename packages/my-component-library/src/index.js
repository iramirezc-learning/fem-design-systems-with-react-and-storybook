import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyle } from './common'
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from './components/Buttons'

const App = () => (
  <>
    <GlobalStyle />
    <h1>Hello World</h1>
    <PrimaryButton>Primary Button</PrimaryButton>
    <br />
    <br />
    <SecondaryButton>Secondary Button</SecondaryButton>
    <br />
    <br />
    <TertiaryButton>Tertiary Button</TertiaryButton>
  </>
)

ReactDOM.render(<App />, document.getElementById('root'))
