import * as R from 'ramda'
import { connect } from 'react-redux'
import { subMembers, subPosts, unsubMembers, unsubPosts } from 'services/redux'
import Community from './Community.component'

export const state = (state) => {
  const membersConnected = !R.propOr([false, 'state', 'community', 'members', 'connected'])
  const postsConnected = !R.propOr([false, 'state', 'community', 'posts', 'connected'])
  return {
    loading: membersConnected || postsConnected,
    members: R.propOr([[], 'state', 'community', 'members', 'data']),
    posts: R.propOr([[], 'state', 'community', 'posts', 'data'])
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
