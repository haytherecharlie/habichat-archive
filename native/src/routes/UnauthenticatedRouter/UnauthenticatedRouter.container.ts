import { path } from 'ramda'
import { connect } from 'react-redux'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import LandingScreen from 'src/screens/unauthenticated/LandingScreen'
import EmailScreen from 'src/screens/unauthenticated/EmailScreen'
import VerifyScreen from 'src/screens/unauthenticated/VerifyScreen'
import UnauthenticatedRouter from './UnauthenticatedRouter.component'

export const Stack = createAppContainer(
  createStackNavigator(
    { LandingScreen, EmailScreen, VerifyScreen },
    {
      initialRouteName: 'LandingScreen',
      defaultNavigationOptions: {
        header: null
      }
    }
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
