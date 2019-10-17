import { path } from 'ramda'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { preserveEmail } from 'src/services/redux/account'
import EmailInput from './EmailInput.component'

export const state = (state) => {
  return {
    primaryColor: path(['theme', 'primaryColor'])(state),
    secondaryColor: path(['theme', 'secondaryColor'])(state)
  }
}

export const dispatch = {
  preserveEmail
}

export default connect(
  state,
  dispatch
)(withNavigation(EmailInput))
