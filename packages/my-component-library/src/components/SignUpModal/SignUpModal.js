import React from 'react'
import { animated, useTransition, config } from 'react-spring'
import { Modal } from '../Modal'
import { PrimaryButton } from '../Buttons'
import { Illustrations, Icons } from '../../assets'
import { Wrapper, CloseButton, SignUpImg, Title, Body } from './styles'

const { CloseIcon } = Icons

const SignUpLogo = () => (
  <SignUpImg
    src={Illustrations.SignUp}
    alt="Sign Up image"
    aria-hidden="true"
  />
)

export const SignUpModal = ({ show, closeModal }) => {
  const transition = useTransition(show, {
    from: {
      opacity: 0,
      transform: 'translateY(-200%)',
    },
    enter: {
      opacity: 1,
      transform: 'translateY(0)',
    },
    leave: {
      opacity: 0,
    },
    config: config.gentle,
  })

  return transition((animation, show) => {
    return (
      show && (
        <Modal onBackdropClick={closeModal}>
          <animated.div style={animation}>
            <Wrapper>
              <CloseButton onClick={closeModal} aria-label="Close Modal">
                <CloseIcon />
              </CloseButton>
              <SignUpLogo />
              <Title>Sign Up!</Title>
              <Body>Sign Up today to get access to cool stuff!</Body>
              <PrimaryButton>Submit</PrimaryButton>
            </Wrapper>
          </animated.div>
        </Modal>
      )
    )
  })
}

export default SignUpModal
