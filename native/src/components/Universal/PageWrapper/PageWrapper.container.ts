import { path } from 'ramda'
import { connect } from 'react-redux'
import PageWrapper from './PageWrapper.component'

export const state = (state) => {
  return {
    primaryColor: path(['theme', 'primaryColor'])(state)
  }
}

export const dispatch = {}

export default connect(
  state,
  dispatch
)(PageWrapper)
