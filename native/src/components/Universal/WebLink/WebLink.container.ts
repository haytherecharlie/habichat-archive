import { path } from 'ramda'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import WebLink from './WebLink.component'

export const state = (state) => {
  return {
    darkMode: path(['theme', 'darkMode'])(state),
    smallText: path(['theme', 'smallText'])(state),
    secondaryColor: path(['theme', 'secondaryColor'])(state)
  }
}

export const dispatch = {}

export default connect(
  state,
  dispatch
)(withNavigation(WebLink))
