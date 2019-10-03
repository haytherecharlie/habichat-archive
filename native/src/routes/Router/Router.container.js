import { path } from 'ramda'
import { connect } from 'react-redux'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { subAccount, unsubAccount, subCommunity, unsubCommunity } from 'src/services/redux'
import CommunityScreen from 'src/screens/CommunityScreen'
import PostScreen from 'src/screens/PostScreen'
import Router from './Router.component'

export const Stack = createAppContainer(
  createStackNavigator({ CommunityScreen, PostScreen }, { initialRouteName: 'CommunityScreen' })
)

export const state = (state) => {
  return {
    Stack
  }
}

export const dispatch = {
  subAccount,
  unsubAccount,
  subCommunity,
  unsubCommunity
}

export default connect(
  state,
  dispatch
)(Router)