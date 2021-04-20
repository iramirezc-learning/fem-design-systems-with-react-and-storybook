import React from 'react'
import ReactDOM from 'react-dom'
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from './components/Buttons'

const App = () => (
  <>
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
