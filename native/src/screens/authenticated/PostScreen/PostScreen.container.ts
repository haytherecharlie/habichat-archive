import { connect } from 'react-redux'
import { path } from 'ramda'
import PostScreen from './PostScreen.component'

export const state = (state) => {
  return {}
}

export const dispatch = {}

export default connect(
  state,
  dispatch
)(PostScreen)
