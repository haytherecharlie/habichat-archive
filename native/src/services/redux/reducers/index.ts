import newPost from './newPost.reducer'
import user from './user.reducer'
import { combineReducers } from 'redux'

export default combineReducers({
  newPost,
  user
})
