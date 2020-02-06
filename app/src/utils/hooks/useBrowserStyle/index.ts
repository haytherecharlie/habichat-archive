import { useEffect } from 'react'
import theme from 'assets/styles/theme.style'
import browser from 'utils/helpers/browser'

const useBrowserStyle = () => {
  const bodyStyle = `
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: stretch;
    border-top: 5px solid ${theme.ACCENT_COLOR};
    background-color: ${theme.BACKGROUND_COLOR};
  `

  const rootStyle = `
    flex: 1;
    min-width: 300px;
    width: 100%;
    max-width: 750px;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;
    background-color: ${theme.BACKGROUND_COLOR};
  `

  useEffect(() => {
    if (browser) {
      document.body.setAttribute(`style`, bodyStyle)
      document.querySelector('#root').setAttribute(`style`, rootStyle)
      document.title = 'Habichat | Your Personal Community'
    }
  }, [])
}

export default useBrowserStyle
