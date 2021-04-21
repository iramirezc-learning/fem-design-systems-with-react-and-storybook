import React from 'react'

const style = {
  height: '50px',
  backgroundColor: 'lightgray',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '12px 32px',
}

const NavBar = ({ onToggle }) => (
  <nav style={style}>
    <input type="checkbox" onChange={onToggle} />
    &nbsp;Dark Theme
  </nav>
)

export default NavBar
