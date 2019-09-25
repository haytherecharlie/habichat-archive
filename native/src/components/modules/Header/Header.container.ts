import { connect } from 'react-redux'
import { saveNewPost, typeNewPost } from 'src/services/redux/actions'
import Header from './Header.component'

export const state = (state) => {
  const author = { name: state.user.nickName, timestamp: new Date().getTime() }
  const postText = { author, text: state.post.text }
  return {
    postText
  }
}

export const dispatch = {
  saveNewPost,
  typeNewPost
}

export default connect(
  state,
  dispatch
)(Header)
