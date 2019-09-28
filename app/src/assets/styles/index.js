import { createGlobalStyle } from 'styled-components'
import C from 'constants'

export const GlobalStyle = createGlobalStyle({
  '@font-face': {
    fontFamily: 'habichat',
    src: `url(${require('../fonts/habichat.otf')})`
  },
  '*, *::before, *::after': {
    boxSizing: 'border-box',
    '-webkit-overflow-scrolling': 'touch'
  },
  html: {},
  body: {
    minHeight: '100vh',
    width: `100vw`,
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    background: C.BACKGROUND,
    color: C.GRAY,
    lineHeight: 1.5,
    fontSize: 20,
    '-webkit-text-size-adjust': '100%',
    '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
    margin: 0,
    fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif`,
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale'
  },
  '#root': {
    flex: 1,
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'stretch'
  }
})
