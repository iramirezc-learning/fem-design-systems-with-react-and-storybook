import React from 'react'

const style = {
  height: '50px',
  backgroundColor: 'lightgray',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '12px 32px',
}

export const NavBar = ({ onToggle, onClick }) => (
  <nav style={style}>
    <input type="checkbox" onChange={onToggle} />
    &nbsp;Dark Theme
    <button style={{ marginLeft: '20px' }} onClick={onClick}>
      Sign Up
    </button>
  </nav>
)

export default NavBar
