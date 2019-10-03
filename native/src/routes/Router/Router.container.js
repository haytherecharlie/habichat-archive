import { path } from 'ramda'
import { connect } from 'react-redux'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { subAccount, unsubAccount, subCommunity, unsubCommunity } from 'src/services/redux'
import Community from 'src/screens/Community'
import Router from './Router.component'

export const Stack = createAppContainer(
  createStackNavigator({ Community }, { initialRouteName: 'Community' })
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
