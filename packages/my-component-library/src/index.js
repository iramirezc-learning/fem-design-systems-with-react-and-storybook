import React from 'react'
import ReactDOM from 'react-dom'
import PrimaryButton from './components/Buttons'

const App = () => (
  <>
    <h1>Hello World</h1>
    <PrimaryButton>Primary Button</PrimaryButton>
  </>
)

ReactDOM.render(<App />, document.getElementById('root'))
