import { connect } from 'react-redux'
import Community from './Community.component'

export const state = (state) => {
  const posts = state.post.posts
  return {
    posts
  }
}

export const dispatch = {}

export default connect(
  state,
  dispatch
)(Community)
