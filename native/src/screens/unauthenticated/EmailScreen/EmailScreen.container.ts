import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { path } from 'ramda'
import EmailScreen from './EmailScreen.component'

export const state = (state) => {
  return {}
}

export const dispatch = {
}

export default connect(
  state,
  dispatch
)(EmailScreen)
