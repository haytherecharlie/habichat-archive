import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

export const SET_COMMUNITY = 'SET_COMMUNITY'

const defaultState = {
  user: {
    name: 'Charlie Hay',
    id: 1234
  },
  community: '5dd0ce8d65b721b23455e24a'
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_COMMUNITY:
      return { ...state, community: action.value }
    default:
      return state
  }
}

export default (preloadedState) => createStore(reducer, composeWithDevTools())
