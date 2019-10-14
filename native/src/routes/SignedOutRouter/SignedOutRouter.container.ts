import { path } from 'ramda'
import { connect } from 'react-redux'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SignInScreen from 'src/screens/SignInScreen'
import VerifyScreen from 'src/screens/VerifyScreen'
import SignedOutRouter from './SignedOutRouter.component'

export const Stack = createAppContainer(
  createStackNavigator(
    { SignInScreen, VerifyScreen },
    { initialRouteName: 'SignInScreen',
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
)(SignedOutRouter)
