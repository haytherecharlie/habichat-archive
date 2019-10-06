import {path} from 'ramda'
import { connect } from 'react-redux'
import Loading from './Loading.component'

export const state = (state) => {
  return {
    backgroundColor: path(['theme', 'backgroundColor'])(state),
    spinnerColor: path(['theme', 'primaryColor'])(state)
  }
}

export const dispatch = {}

export default connect(state, dispatch)(Loading)
