import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import SignIn from 'src/pages/SignIn'
import NewPost from 'src/pages/NewPost'
import Profile from 'src/pages/Profile'

const unauthenticatedStack = createStackNavigator(
  { SignIn, NewPost, Profile },
  { initialRouteName: 'Profile', defaultNavigationOptions: { header: null } }
)

export default createAppContainer(unauthenticatedStack)
