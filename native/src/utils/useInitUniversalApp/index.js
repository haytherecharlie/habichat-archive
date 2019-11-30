import { useEffect } from 'react'
import habichatFont from 'src/assets/fonts/habichat.otf'
import configureTheme from 'src/utils/configureTheme'
import { loadAsync } from 'expo-font'

const useInitUniversalApp = ({ setInitialized, setDarkMode, setScreenSize }) => {
  useEffect(() => {
    runInitialization()
  }, [])

  const runInitialization = async () => {
    await Promise.all(await configureTheme(setDarkMode, setScreenSize), await loadAsync({ habichat: habichatFont }))
    return setInitialized(true)
  }
}

export default useInitUniversalApp
