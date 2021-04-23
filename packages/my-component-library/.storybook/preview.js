import { addParameters, addDecorator } from '@storybook/react'
import { withContexts } from '@storybook/addon-contexts/react'
import { withKnobs } from '@storybook/addon-knobs'
import { contexts } from './contexts'

// TODO: for some reason the story is not changing the background
addParameters({
  backgrounds: {
    default: 'white',
    values: [
      { name: 'white', value: '#ffffff' },
      { name: 'black', value: '#050449' },
    ],
  },
})

addDecorator(withKnobs)
addDecorator(withContexts(contexts))
