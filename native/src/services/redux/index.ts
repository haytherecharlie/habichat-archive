import { createStore, combineReducers } from 'redux'
import devToolsEnhancer from 'remote-redux-devtools'
import { subAccount, unsubAccount, preserveEmail, reduceAccount } from './account'
import { subCommunity, unsubCommunity, reduceCommunity } from './community'
import { subMembers, unsubMembers, reduceMembers } from './members'
import { subPosts, unsubPosts, reducePosts } from './posts'
import { setDarkMode, setScreenSize, reduceTheme } from './theme'
import { startLoading, stopLoading, reduceScreens } from './screens/'

const rootReducer = combineReducers({
  account: reduceAccount,
  community: reduceCommunity,
  members: reduceMembers,
  posts: reducePosts,
  theme: reduceTheme,
  screens: reduceScreens
})

export {
  subAccount,
  unsubAccount,
  preserveEmail,
  subCommunity,
  unsubCommunity,
  subMembers,
  unsubMembers,
  subPosts,
  unsubPosts,
  setDarkMode,
  setScreenSize,
  startLoading,
  stopLoading
}

export default __DEV__ ? createStore(rootReducer, devToolsEnhancer()) : createStore(rootReducer)
