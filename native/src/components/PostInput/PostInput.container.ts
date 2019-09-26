import PostInput from './PostInput.component'
import { typeNewPost } from 'src/services/redux/actions'
import { connect } from 'react-redux'

const state = (state) => {
  return {
    value: state.post.text
  }
}

const dispatch = {
  typeNewPost
}

export default connect(
  state,
  dispatch
)(PostInput)
