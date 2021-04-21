import React from 'react'
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from '../components/Buttons'

const styles = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  marginBottom: '20px',
}

const Buttons = () => {
  return (
    <React.Fragment>
      <h1>My Buttons</h1>
      <div style={styles}>
        <h4>&nbsp;</h4>
        <h4>Default</h4>
        <h4>Disabled</h4>
      </div>
      <div style={styles}>
        <h4>Primary</h4>
        <PrimaryButton>Primary Button</PrimaryButton>
        <PrimaryButton disabled>Primary Button</PrimaryButton>
      </div>
      <div style={styles}>
        <h4>Secondary</h4>
        <SecondaryButton>Secondary Button</SecondaryButton>
        <SecondaryButton disabled>Secondary Button</SecondaryButton>
      </div>
      <div style={styles}>
        <h4>Tertiary</h4>
        <TertiaryButton>Tertiary Button</TertiaryButton>
        <TertiaryButton disabled>Tertiary Button</TertiaryButton>
      </div>
    </React.Fragment>
  )
}

export default Buttons
