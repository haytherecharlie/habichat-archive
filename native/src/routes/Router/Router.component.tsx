import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import SignIn from 'src/pages/SignIn'

const unauthenticatedStack = createStackNavigator(
  { SignIn },
  { initialRouteName: 'SignIn', defaultNavigationOptions: { header: null } }
)

export default createAppContainer(unauthenticatedStack)
