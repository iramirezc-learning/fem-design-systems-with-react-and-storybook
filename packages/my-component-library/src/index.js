import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyle } from './common'
import ButtonsExamples from './examples/Buttons'

const App = () => (
  <>
    <GlobalStyle />
    <ButtonsExamples />
  </>
)

ReactDOM.render(<App />, document.getElementById('root'))
