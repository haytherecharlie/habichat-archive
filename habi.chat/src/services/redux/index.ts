import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Action } from 'interfaces'

const defaultState = {}

const reducer = (state = defaultState, action: Action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default createStore(reducer, composeWithDevTools())
