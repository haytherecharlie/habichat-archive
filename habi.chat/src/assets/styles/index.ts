import { createGlobalStyle } from 'styled-components'

export const colors = {
  blue: '#191D38',
  white: '#FFFFFF'
}

export const GlobalStyle = createGlobalStyle({
  '@font-face': {
    fontFamily: 'habichat',
    src: `url(${require('../fonts/habichat.otf')})`
  },
  '*, *::before, *::after': {
    boxSizing: 'border-box'
  },
  html: {},
  body: {
    margin: 0,
    color: colors.blue,
    fontFamily: 'sans-serif',
    lineHeight: 1.5,
    fontSize: 20,
    '-webkit-text-size-adjust': '100%',
    '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
    background: colors.blue
  },
  '#root': {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'stretch'
  }
})
