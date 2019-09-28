import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { subAccount, unsubAccount, reduceAccount } from './account'
import { subCommunity, unsubCommunity, reduceCommunity } from './community'
import { subMembers, unsubMembers, reduceMembers } from './members'
import { subPosts, unsubPosts, reducePosts } from './posts'

const rootReducer = combineReducers({
  account: reduceAccount,
  community: reduceCommunity,
  members: reduceMembers,
  posts: reducePosts
})

export {
  subAccount,
  unsubAccount,
  subCommunity,
  unsubCommunity,
  subMembers,
  unsubMembers,
  subPosts,
  unsubPosts
}

export default process.env.NODE_ENV === 'production'
  ? createStore(rootReducer)
  : createStore(rootReducer, composeWithDevTools())
