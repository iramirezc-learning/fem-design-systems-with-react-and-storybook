import React, { useState } from 'react'
import { animated, useTransition } from 'react-spring'
import styled from 'styled-components'

const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  span {
    font-size: 100px;
    margin: 0;
  }
`

const Button = styled.button`
  padding: 16px;
  font-size: 1em;
  border: none;
  background: deeppink;
  color: white;
  cursor: pointer;
  margin-bottom: 20px;
  position: relative;
  top: -100px;
`

export const EmojiCarousel = () => {
  const [isHappy, setIsHappy] = useState(false)
  const transitions = useTransition(isHappy, {
    from: {
      opacity: 0,
      position: 'absolute',
    },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const toggle = () => setIsHappy((currentState) => !currentState)

  return (
    <Container>
      <Button onClick={toggle}>Make {isHappy ? 'sad' : 'happy'}!</Button>
      {transitions((animation, isHappy) => {
        return isHappy ? (
          <animated.span role="img" aria-label="Happy" style={animation}>
            😄
          </animated.span>
        ) : (
          <animated.span role="img" aria-label="Sad" style={animation}>
            😔
          </animated.span>
        )
      })}
    </Container>
  )
}
