import { path } from 'ramda'
import { connect } from 'react-redux'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { subCommunity, unsubCommunity } from 'src/services/redux'
import CommunityScreen from 'src/screens/authenticated/CommunityScreen'
import PostScreen from 'src/screens/authenticated/PostScreen'
import ProfileScreen from 'src/screens/authenticated/ProfileScreen'
import AuthenticatedRouter from './AuthenticatedRouter.component'

export const Stack = createAppContainer(
  createStackNavigator(
    { CommunityScreen, PostScreen, ProfileScreen },
    {
      initialRouteName: 'PostScreen',
      defaultNavigationOptions: {
        // header: null
      }
    }
  )
)

export const state = (state) => {
  return {
    Stack
  }
}

export const dispatch = {
  subCommunity,
  unsubCommunity
}

export default connect(
  state,
  dispatch
)(AuthenticatedRouter)
