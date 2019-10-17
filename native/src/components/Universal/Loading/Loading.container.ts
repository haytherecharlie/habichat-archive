import {path} from 'ramda'
import { connect } from 'react-redux'
import Loading from './Loading.component'

export const state = (state) => {
  return {
    primaryColor: path(['theme', 'primaryColor'])(state),
    spinnerColor: path(['theme', 'primaryColor'])(state)
  }
}

export const dispatch = {}

export default connect(state, dispatch)(Loading)
