import { path } from 'ramda'
import { connect } from 'react-redux'
import ComposeMessage from './ComposeMessage.component'

export const state = (state) => {
  return {
    primaryColor: path(['theme', 'primaryColor'])(state),
    secondaryColor: path(['theme', 'secondaryColor'])(state),
    h3: path(['theme', 'fontSize', 'h3'])(state),
  }
}

export const dispatch = {}

export default connect(state, dispatch)(ComposeMessage)
