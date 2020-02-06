import React from 'react'
import { useSelector } from 'react-redux'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import useInitialization from 'utils/hooks/useInitialization'
import Community from 'screens/Community'
import Profile from 'screens/Profile'

const Router = () => {
  const { initialized, darkMode } = useSelector(({ application }) => application)
  const { authenticated = false, community } = useSelector(({ user }) => user)
  useInitialization(authenticated, community)

  const Routes = createAppContainer(
    createSwitchNavigator(
      { Profile, Community },
      {
        initialRouteName: 'Profile'
      }
    )
  )

  return darkMode ? <Routes /> : <Routes />

  // switch (`${initialized} | ${authenticated}`)
}

export default Router
