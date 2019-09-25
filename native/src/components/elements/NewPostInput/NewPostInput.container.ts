import NewPost from './NewPostInput.component'
import { typeNewPost } from 'src/services/redux/actions'
import { connect } from 'react-redux'

const state = (state) => {
  const value = state.post.text
  return {
    value
  }
}

const dispatch = {
  typeNewPost
}

export default connect(
  state,
  dispatch
)(NewPost)
