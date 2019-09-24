import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import SignIn from 'src/pages/SignIn'
import NewPost from 'src/pages/NewPost'

const unauthenticatedStack = createStackNavigator(
  { SignIn, NewPost },
  { initialRouteName: 'NewPost', defaultNavigationOptions: { header: null } }
)

export default createAppContainer(unauthenticatedStack)
