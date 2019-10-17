import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { path } from 'ramda'
import { preserveEmail } from 'src/services/redux/account'
import EmailScreen from './EmailScreen.component'

export const state = (state) => {
  return {}
}

export const dispatch = {
  preserveEmail
}

export default connect(
  state,
  dispatch
)(withNavigation(EmailScreen))
