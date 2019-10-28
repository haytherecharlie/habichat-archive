import { path } from 'ramda'
import { connect } from 'react-redux'
import StatusBar from './StatusBar.component'

export const state = (state) => {
  return {
    darkMode: path(['theme', 'darkMode'])(state)
  }
}

export const dispatch = {}

export default connect(
  state,
  dispatch
)(StatusBar)
