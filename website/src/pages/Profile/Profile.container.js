import * as R from 'ramda'
import { connect } from 'react-redux'
import Profile from './Profile.component'

export const state = (state) => {
  return {
    loading: !R.propOr([true, 'state', 'community', 'account', 'connected'])
  }
}

export const dispatch = {}

export default connect(
  state,
  dispatch
)(Profile)
