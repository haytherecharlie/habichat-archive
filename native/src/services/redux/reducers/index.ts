import post from './post.reducer'
import user from './user.reducer'
import { combineReducers } from 'redux'

export default combineReducers({
  post,
  user
})
