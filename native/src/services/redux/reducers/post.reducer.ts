import { TYPE_NEW_POST, SAVE_NEW_POST } from 'src/services/redux/actions/post.action'
import { Action } from 'interfaces'

const defaultState = {
  posts: [],
  text: ''
}

const newPostReducer = (state = defaultState, action: Action) => {
  switch (action.type) {
    case SAVE_NEW_POST:
      return { ...state, posts: [...state.posts, action.value] }
    case TYPE_NEW_POST:
      return { ...state, text: action.value }
    default:
      return state
  }
}

export default newPostReducer
