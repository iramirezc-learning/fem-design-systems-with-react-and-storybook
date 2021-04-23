import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './common'
import { defaultTheme, darkTheme } from './utils/themes'
import { NavBar, SignUpModal } from './components'
import { Buttons } from './examples'

const App = () => {
  const [theme, setTheme] = useState(defaultTheme)
  const [showSignUpModal, setShowSignUpModal] = useState(false)

  const handleToggle = () => {
    setTheme(theme === defaultTheme ? darkTheme : defaultTheme)
  }

  const handleClick = () => {
    setShowSignUpModal((currentState) => !currentState)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar onToggle={handleToggle} onClick={handleClick} />
      <Buttons />
      {/* <FadeIn /> */}
      {/* <EmojiCarousel /> */}
      {showSignUpModal ? <SignUpModal closeModal={handleClick} /> : null}
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
