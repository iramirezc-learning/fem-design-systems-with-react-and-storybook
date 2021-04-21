import React from 'react'
import styled from 'styled-components'

const CloseIconSVG = styled.svg`
  width: 100%;
  height: 100%;
`

export const CloseIcon = () => (
  // TODO: How to change the width and height?
  <CloseIconSVG aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M27.3 2.1L25.9 0.699997L14 12.6L2.10001 0.699997L0.700012 2.1L12.6 14L0.700012 25.9L2.10001 27.3L14 15.4L25.9 27.3L27.3 25.9L15.4 14L27.3 2.1Z"
      fill="black"
    />
  </CloseIconSVG>
)

export default CloseIcon
