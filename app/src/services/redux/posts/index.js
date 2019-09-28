import { unsubscribe } from 'services/firebase'

const SUBSCRIBE_POSTS = 'SUBSCRIBE_POSTS'
const UNSUBSCRIBE_POSTS = 'UNSUBSCRIBE_POSTS'

export const subPosts = (posts) => ({ type: SUBSCRIBE_POSTS, posts })
export const unsubPosts = () => ({ type: UNSUBSCRIBE_POSTS })

export const reducePosts = (state = {}, action) => {
  switch (action.type) {
    case SUBSCRIBE_POSTS:
      return { connected: true, data: action.posts }
    case UNSUBSCRIBE_POSTS:
      unsubscribe[action.type.split('_')[1].toLowerCase()]()
      return { ...state, connected: false }
    default:
      return state
  }
}
