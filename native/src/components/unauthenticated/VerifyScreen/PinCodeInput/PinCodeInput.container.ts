import { path } from 'ramda'
import { connect } from 'react-redux'
import PinCodeInput from './PinCodeInput.component'

export const state = (state) => {
  return {
    email: path(['account', 'email'])(state)
  }
}

export const dispatch = {}

export default connect(
  state,
  dispatch
)(PinCodeInput)
