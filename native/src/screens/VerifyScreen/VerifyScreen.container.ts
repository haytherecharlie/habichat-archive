import { path } from 'ramda'
import { connect } from 'react-redux'
import VerifyScreen from './VerifyScreen.component'

export const state = (state) => {
  return {
    loading: path(['screens', 'verifyScreen', 'loading'])(state)
  }
}

export const dispatch = {}

export default connect(
  state,
  dispatch
)(VerifyScreen)
