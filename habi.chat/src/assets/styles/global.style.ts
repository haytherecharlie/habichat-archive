import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle({
  '@font-face': {
    fontFamily: 'habichat',
    src: `url(${require('../fonts/habichat.otf')})`
  },
  '*, *::before, *::after': {
    boxSizing: 'border-box'
  },
  html: {
    fontFamily: 'sans-serif',
    color: '#ffffff',
    lineHeight: 1.5,
    fontSize: 20,
    '-webkit-text-size-adjust': '100%',
    '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)'
  },
  body: {
    margin: 0,
    background: '#191D38'
  }
})
