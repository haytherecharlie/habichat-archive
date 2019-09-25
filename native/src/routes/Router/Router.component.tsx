import React, { useEffect, useState } from 'react'
import { loadAsync } from 'expo-font'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Community from 'src/pages/Community'
import NewPost from 'src/pages/NewPost'
import Profile from 'src/pages/Profile'
import Loading from 'src/components/elements/Loading'

const Stack = createAppContainer(
  createStackNavigator(
    { Community, NewPost, Profile },
    { initialRouteName: 'NewPost', defaultNavigationOptions: { header: null } }
  )
)

const Router = () => {
  return <Stack />
}

export default Router
