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
    <main>
      <h1>My Buttons</h1>
      <div style={styles}>
        <h4>&nbsp;</h4>
        <h4>Default</h4>
        <h4>Small</h4>
        <h4>Large</h4>
        <h4>Disabled</h4>
      </div>
      <div style={styles}>
        <h4>Primary</h4>
        <PrimaryButton>Submit</PrimaryButton>
        <PrimaryButton modifiers="small">Submit</PrimaryButton>
        <PrimaryButton modifiers="large">Submit</PrimaryButton>
        <PrimaryButton disabled>Submit</PrimaryButton>
      </div>
      <div style={styles}>
        <h4>Secondary</h4>
        <SecondaryButton>Submit</SecondaryButton>
        <SecondaryButton modifiers="small">Submit</SecondaryButton>
        <SecondaryButton modifiers="large">Submit</SecondaryButton>
        <SecondaryButton disabled>Submit</SecondaryButton>
      </div>
      <div style={styles}>
        <h4>Tertiary</h4>
        <TertiaryButton>Submit</TertiaryButton>
        <TertiaryButton modifiers="small">Submit</TertiaryButton>
        <TertiaryButton modifiers="large">Submit</TertiaryButton>
        <TertiaryButton disabled>Submit</TertiaryButton>
      </div>
      <div style={styles}>
        <h4>Success</h4>
        <TertiaryButton modifiers="success">Submit</TertiaryButton>
        <TertiaryButton modifiers={['small', 'success']}>Submit</TertiaryButton>
        <TertiaryButton modifiers={['large', 'success']}>Submit</TertiaryButton>
        <TertiaryButton modifiers="success" disabled>
          Submit
        </TertiaryButton>
      </div>
      <div style={styles}>
        <h4>Warning</h4>
        <TertiaryButton modifiers="warning">Submit</TertiaryButton>
        <TertiaryButton modifiers={['small', 'warning']}>Submit</TertiaryButton>
        <TertiaryButton modifiers={['large', 'warning']}>Submit</TertiaryButton>
        <TertiaryButton modifiers="warning" disabled>
          Submit
        </TertiaryButton>
      </div>
      <div style={styles}>
        <h4>Error</h4>
        <TertiaryButton modifiers="error">Submit</TertiaryButton>
        <TertiaryButton modifiers={['small', 'error']}>Submit</TertiaryButton>
        <TertiaryButton modifiers={['large', 'error']}>Submit</TertiaryButton>
        <TertiaryButton modifiers="error" disabled>
          Submit
        </TertiaryButton>
      </div>
    </main>
  )
}

export default Buttons
