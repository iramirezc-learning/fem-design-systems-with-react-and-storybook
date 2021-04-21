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
        <h4>Small</h4>
        <h4>Large</h4>
      </div>
      <div style={styles}>
        <h4>Primary</h4>
        <PrimaryButton>Submit</PrimaryButton>
        <PrimaryButton disabled>Submit</PrimaryButton>
        <PrimaryButton modifiers="small">Submit</PrimaryButton>
        <PrimaryButton modifiers={['large']}>Submit</PrimaryButton>
      </div>
      <div style={styles}>
        <h4>Secondary</h4>
        <SecondaryButton>Submit</SecondaryButton>
        <SecondaryButton disabled>Submit</SecondaryButton>
        <SecondaryButton modifiers="small">Submit</SecondaryButton>
        <SecondaryButton modifiers={['large']}>Submit</SecondaryButton>
      </div>
      <div style={styles}>
        <h4>Tertiary</h4>
        <TertiaryButton>Submit</TertiaryButton>
        <TertiaryButton disabled>Submit</TertiaryButton>
        <TertiaryButton modifiers="small">Submit</TertiaryButton>
        <TertiaryButton modifiers={['large']}>Submit</TertiaryButton>
      </div>
    </React.Fragment>
  )
}

export default Buttons
