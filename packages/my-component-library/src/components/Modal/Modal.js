import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { ModalWrapper } from './styles'

export const Modal = ({ children, onBackdropClick = () => {} }) => {
  const elRef = useRef(null)

  if (!elRef.current) {
    elRef.current = document.createElement('div')
  }

  const handleBackdropClick = (e) => {
    if (elRef.current && elRef.current.firstChild === e.target) {
      onBackdropClick()
    }
  }

  useEffect(() => {
    const rootModal = document.getElementById('modal')

    rootModal.appendChild(elRef.current)

    return () => rootModal.removeChild(elRef.current)
  }, [])

  return createPortal(
    <ModalWrapper onClick={handleBackdropClick}>{children}</ModalWrapper>,
    elRef.current,
  )
}

export default Modal
