import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle({
  '@font-face': {
    fontFamily: 'habichat',
    src: `url(${require('../fonts/habichat.otf')})`
  },
  '*, *::before, *::after': {
    boxSizing: 'border-box',
    '-webkit-overflow-scrolling': 'touch'
  },
  a: {
    '&:hover, &:visited, &:active': {
      color: 'orange'
    }
  },
  html: {},
  body: {
    margin: 0,
    color: '#191D38',
    fontFamily: 'sans-serif',
    lineHeight: 1.5,
    fontSize: 20,
    '-webkit-text-size-adjust': '100%',
    '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
    background: '#191D38'
  },
  '#root': {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'stretch'
  }
})
