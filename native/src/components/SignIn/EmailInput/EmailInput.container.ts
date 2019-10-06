import { path } from 'ramda'
import { connect } from 'react-redux'
import EmailInput from './EmailInput.component'

export const state = (state) => {
  return {
    primaryColor: path(['theme', 'primaryColor'])(state),
    secondaryColor: path(['theme', 'secondaryColor'])(state)
  }
}

export const dispatch = {}

export default connect(
  state,
  dispatch
)(EmailInput)
