import React from 'react'
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

export const SignUpModal = ({ closeModal }) => {
  return (
    <Modal onBackdropClick={closeModal}>
      <Wrapper>
        <CloseButton onClick={closeModal} aria-label="Close Modal">
          <CloseIcon />
        </CloseButton>
        <SignUpLogo />
        <Title>Sign Up!</Title>
        <Body>Sign Up today to get access to cool stuff!</Body>
        <PrimaryButton>Submit</PrimaryButton>
      </Wrapper>
    </Modal>
  )
}

export default SignUpModal
