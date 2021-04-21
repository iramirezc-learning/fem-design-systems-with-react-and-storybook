import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './common'
import { defaultTheme, darkTheme } from './utils/themes'
import NavBar from './components/NavBar'
import ButtonsExamples from './examples/Buttons'

const App = () => {
  const [theme, setTheme] = useState(defaultTheme)

  const handleToggle = () => {
    setTheme(theme === defaultTheme ? darkTheme : defaultTheme)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar onToggle={handleToggle} />
      <ButtonsExamples />
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
