import { path } from 'ramda'
import { connect } from 'react-redux'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import EmailScreen from 'src/screens/unauthenticated/EmailScreen'
import LandingScreen from 'src/screens/unauthenticated/LandingScreen'
import OnboardingScreen from 'src/screens/unauthenticated/OnboardingScreen'
import VerifyScreen from 'src/screens/unauthenticated/VerifyScreen'
import UnauthenticatedRouter from './UnauthenticatedRouter.component'

export const Stack = createAppContainer(
  createSwitchNavigator(
    {
      EmailScreen,
      VerifyScreen,
      HomeScreen: createStackNavigator(
        { LandingScreen, OnboardingScreen },
        { initialRouteName: 'OnboardingScreen', defaultNavigationOptions: { header: null } }
      )
    },
    { initialRouteName: 'HomeScreen' }
  )
)

export const state = (state) => {
  return {
    Stack
  }
}

export const dispatch = {}

export default connect(
  state,
  dispatch
)(UnauthenticatedRouter)
