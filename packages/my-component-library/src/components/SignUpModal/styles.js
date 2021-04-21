import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.modal.color};
  box-shadow: ${({ theme }) => theme.shadow};
  width: 800px;
  height: 500px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 25px;
  right: 25px;
  cursor: pointer;
  width: 27px;
  height: 27px;
  padding: 0;
`

export const SignUpImg = styled.img`
  width: 390px;
  height: 300px;
  margin-bottom: 25px;
`

export const Title = styled.h3`
  color: ${({ theme }) => theme.modal.textColor};
  font-size: ${({ theme }) => theme.typeScale.H3};
  font-weight: normal;
  margin: 0;
`

export const Body = styled.p`
  color: ${({ theme }) => theme.modal.textColor};
  font-size: ${({ theme }) => theme.typeScale.paragraph};
  margin-bottom: 20px;
`
