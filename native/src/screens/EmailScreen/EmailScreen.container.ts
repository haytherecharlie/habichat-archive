import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { path } from 'ramda'
import { stopLoading } from 'src/services/redux'
import EmailScreen from './EmailScreen.component'

export const state = (state) => {
  return {
    loading: path(['screens', 'emailScreen', 'loading'])(state)
  }
}

export const dispatch = {
  stopLoading
}

export default connect(
  state,
  dispatch
)(EmailScreen)
