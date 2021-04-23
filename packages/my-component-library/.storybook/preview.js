import { addParameters, addDecorator } from '@storybook/react'
import { withContexts } from '@storybook/addon-contexts/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'
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
  a11y: {
    element: '#root',
    config: {},
    options: {},
    manual: true,
  },
})

addDecorator(withKnobs)
addDecorator(withContexts(contexts))
