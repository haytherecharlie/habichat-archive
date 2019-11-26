import { createGlobalStyle } from 'styled-components'
import olympic from 'src/assets/fonts/olympic-branding.ttf'

const GlobalStyle = createGlobalStyle({
  [`@font-face`]: {
    fontFamily: `olympic`,
    src: `url(${olympic}) url(${olympic}) format('ttf')`
  },
  [`div`]: {
    display: `flex`
  },
  [`html, body`]: {
    margin: 0,
    minHeight: `100vh`,
    width: `100vw`,
    color: `#222`,
    fontFamily: `Helvetica Neue,Helvetica,Arial,sans-serif`
  },
  [`#___gatsby, #gatsby-focus-wrapper`]: {
    minHeight: `100vh`,
    display: `flex`,
    flexDirection: `column`,
    alignItems: `stretch`,
    justifyContent: `stretch`
  }
})

export default GlobalStyle
