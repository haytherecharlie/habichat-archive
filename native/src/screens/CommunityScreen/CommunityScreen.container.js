import { connect } from 'react-redux'
import { pathOr } from 'ramda'
import { withNavigation } from 'react-navigation'
import { subMembers, subPosts, unsubMembers, unsubPosts } from 'src/services/redux'
import CommunityScreen from './CommunityScreen.component'

export const state = (state) => {
  const membersConnected = pathOr(false, ['members', 'connected'])(state)
  const postsConnected = pathOr(false, ['posts', 'connected'])(state)
  return {
    loading: !membersConnected || !postsConnected,
    members: pathOr([], ['members', 'data'])(state),
    posts: pathOr([], ['posts', 'data'])(state),
    account: pathOr({}, ['account', 'data'])(state)
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
)(withNavigation(CommunityScreen))
