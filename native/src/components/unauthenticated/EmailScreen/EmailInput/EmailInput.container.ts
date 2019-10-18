import { path } from 'ramda'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { preserveEmail, startLoading, stopLoading } from 'src/services/redux'
import EmailInput from './EmailInput.component'

export const state = (state) => {
  return {
    primaryColor: path(['theme', 'primaryColor'])(state),
    secondaryColor: path(['theme', 'secondaryColor'])(state)
  }
}

export const dispatch = {
  preserveEmail,
  startLoading,
  stopLoading
}

export default connect(
  state,
  dispatch
)(withNavigation(EmailInput))
