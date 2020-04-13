import React from 'react'
import { useSelector } from 'react-redux'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Community from 'views/Community/Community'
import Post from 'views/Post/Post'
import Profile from 'views/Profile/Profile'
import Loading from 'components/Loading/Loading'

const AuthenticatedRouter = () => {
  const { address } = useSelector(s => s.content)
  const Navigation = createAppContainer(
    createStackNavigator(
      { Community, Profile, Post },
      {
        initialRouteName: 'Community',
        defaultNavigationOptions: { header: null }
      }
    )
  )

  return address ? <Navigation /> : <Loading />
}

export default AuthenticatedRouter
