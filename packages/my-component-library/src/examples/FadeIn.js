import React, { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'

const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`

const Button = styled.button`
  padding: 16px;
  font-size: 1em;
  border: none;
  background: deeppink;
  color: white;
  cursor: pointer;
  margin-bottom: 20px;
`

export const FadeIn = () => {
  const [isShowing, setIsShowing] = useState(true)
  const animation = useSpring({
    opacity: isShowing ? 1 : 0,
    transform: `translateY(${isShowing ? 0 : '-100%'})`,
  })

  const handleToggle = () => setIsShowing((currentState) => !currentState)

  return (
    <Container>
      <Button onClick={handleToggle}>Toggle animation</Button>
      <animated.p style={animation}>Animate me on click!</animated.p>
    </Container>
  )
}

export default FadeIn
