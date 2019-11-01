import { useEffect } from 'react'
import { authListener } from 'src/services/firebase'
import habichatFont from 'src/assets/fonts/habichat.otf'
import configureTheme from 'src/utils/configureTheme'
import { loadAsync } from 'expo-font'

const useInitUniversalApp = ({ setInitialized, setDarkMode, setScreenSize, subAccount, unsubAccount }) => {
  useEffect(() => {
    runInitialization()
    authListener('account', subAccount)
    return () => Promise.all([unsubAccount()])
  }, [subAccount, unsubAccount])

  const runInitialization = async () => {
    await Promise.all(configureTheme(setDarkMode, setScreenSize), loadAsync({ habichat: habichatFont }))
    return setInitialized(true)
  }
}

export default useInitUniversalApp
