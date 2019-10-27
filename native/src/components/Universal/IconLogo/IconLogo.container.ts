import { path } from 'ramda'
import { connect } from 'react-redux'
import IconLogo from './IconLogo.component'

export const state = (state) => {
  return {
    darkMode: path(['theme', 'darkMode'])(state)
  }
}

export const dispatch = {}

export default connect(
  state,
  dispatch
)(IconLogo)
