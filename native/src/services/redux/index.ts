import { createStore, combineReducers } from 'redux'
import devToolsEnhancer from 'remote-redux-devtools'
import { subAccount, unsubAccount, reduceAccount } from './account'
import { subCommunity, unsubCommunity, reduceCommunity } from './community'
import { subMembers, unsubMembers, reduceMembers } from './members'
import { subPosts, unsubPosts, reducePosts } from './posts'
import { setDarkMode, setScreenSize, reduceTheme } from './theme'

const rootReducer = combineReducers({
  account: reduceAccount,
  community: reduceCommunity,
  members: reduceMembers,
  posts: reducePosts,
  theme: reduceTheme
})

export {
  subAccount,
  unsubAccount,
  subCommunity,
  unsubCommunity,
  subMembers,
  unsubMembers,
  subPosts,
  unsubPosts,
  setDarkMode,
  setScreenSize
}

export default __DEV__ ? createStore(rootReducer, devToolsEnhancer()) : createStore(rootReducer)
