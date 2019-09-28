import * as R from 'ramda'
import { connect } from 'react-redux'
import { subMembers, subPosts, unsubMembers, unsubPosts } from 'services/redux'
import Community from './Community.component'

export const state = (state) => {
  const membersConnected = R.pathOr(false, ['members', 'connected'])(state)
  const postsConnected = R.pathOr(false, ['posts', 'connected'])(state)
  const members = R.pathOr([], ['members', 'data'])(state)
  const posts = R.pathOr([], ['posts', 'data'])(state)
  const account = R.pathOr({}, ['account', 'data'])(state)
  return {
    loading: !membersConnected || !postsConnected,
    members,
    posts,
    account
  }
}

export const dispatch = {
  subMembers,
  subPosts,
  unsubMembers,
  unsubPosts
}

export default connect(
  state,
  dispatch
)(Community)
