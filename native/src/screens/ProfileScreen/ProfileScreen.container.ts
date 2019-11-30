import { connect } from 'react-redux'
import { path } from 'ramda'
import { withNavigation } from 'react-navigation'
import ProfileScreen from './ProfileScreen.component'

export const state = (state) => {
  return {}
}

export const dispatch = {}

export default connect(
  state,
  dispatch
)(withNavigation(ProfileScreen))
