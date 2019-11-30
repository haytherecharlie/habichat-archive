import { path } from 'ramda'
import { connect } from 'react-redux'
import TitleText from './TitleText.component'

export const state = (state) => {
  return {
    primaryColor: path(['theme', 'primaryColor'])(state),
    secondaryColor: path(['theme', 'secondaryColor'])(state),
    fontSize: path(['theme', 'fontSize'])(state)
  }
}

export const dispatch = {}

export default connect(
  state,
  dispatch
)(TitleText)
