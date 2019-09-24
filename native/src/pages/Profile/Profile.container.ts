import Profile from './Profile.component'
import { connect } from 'react-redux'

const state = (state) => {
  return {
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    nickName: state.user.nickName,
    icon: state.user.icon,
    email: state.user.email,
    joined: state.user.joined
  }
}

const dispatch = {}

export default connect(
  state,
  dispatch
)(Profile)
