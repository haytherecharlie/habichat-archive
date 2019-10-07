import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { path } from 'ramda'
import SignInScreen from './SignInScreen.component'

export const state = (state) => {
  return {}
}

export const dispatch = {}

export default connect(
  state,
  dispatch
)(withNavigation(SignInScreen))
