import { TYPE_NEW_POST } from 'src/services/redux/actions/newPost.action'
import { Action } from 'interfaces'

const defaultState = {
  text: ''
}

const newPostReducer = (state = defaultState, action: Action) => {
  switch (action.type) {
    case TYPE_NEW_POST:
      return { ...state, text: action.value }
    default:
      return state
  }
}

export default newPostReducer
