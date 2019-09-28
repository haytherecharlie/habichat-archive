import * as R from 'ramda'
import { connect } from 'react-redux'
import Profile from './Profile.component'

export const state = (state) => {
  return {
    loading: !R.pathOr(false, ['account', 'connected'])(state)
  }
}

export const dispatch = {}

export default connect(
  state,
  dispatch
)(Profile)
