import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { unsubscribe } from 'services/firebase'

const SUBSCRIBE_MEMBERS = 'SUBSCRIBE_MEMBERS'
const UNSUBSCRIBE_MEMBERS = 'UNSUBSCRIBE_MEMBERS'
const SUBSCRIBE_POSTS = 'SUBSCRIBE_POSTS'
const UNSUBSCRIBE_POSTS = 'UNSUBSCRIBE_POSTS'
const SUBSCRIBE_ACCOUNT = 'SUBSCRIBE_ACCOUNT'
const UNSUBSCRIBE_ACCOUNT = 'UNSUBSCRIBE_ACCOUNT'

export const subMembers = (members) => ({ type: SUBSCRIBE_MEMBERS, members })
export const unsubMembers = () => ({ type: UNSUBSCRIBE_MEMBERS })
export const subPosts = (posts) => ({ type: SUBSCRIBE_POSTS, posts })
export const unsubPosts = () => ({ type: UNSUBSCRIBE_POSTS })
export const subAccount = (account) => ({ type: SUBSCRIBE_ACCOUNT, account })
export const unsubAccount = () => ({ type: UNSUBSCRIBE_ACCOUNT })

export const communityReducer = (state = {}, action) => {
  switch (action.type) {
    case SUBSCRIBE_MEMBERS:
      return { ...state, members: { connected: true, data: action.members } }
    case UNSUBSCRIBE_MEMBERS:
      unsubscribe[action.type.split('_')[1].toLowerCase()]()
      return { ...state, members: { ...state.members, connected: false } }
    case SUBSCRIBE_POSTS:
      return { ...state, posts: { connected: true, data: action.posts } }
    case UNSUBSCRIBE_POSTS:
      unsubscribe[action.type.split('_')[1].toLowerCase()]()
      return { ...state, posts: { ...state.posts, connected: false } }
    case SUBSCRIBE_ACCOUNT:
      return { ...state, account: { connected: true, data: action.account } }
    case UNSUBSCRIBE_ACCOUNT:
      unsubscribe[action.type.split('_')[1].toLowerCase()]()
      return { ...state, account: { ...state.account, connected: false } }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  community: communityReducer
})

export default process.env.NODE_ENV === 'production'
  ? createStore(rootReducer)
  : createStore(rootReducer, composeWithDevTools())
