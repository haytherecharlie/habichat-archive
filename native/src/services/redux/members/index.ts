const SUBSCRIBE_MEMBERS = 'SUBSCRIBE_MEMBERS'
const UNSUBSCRIBE_MEMBERS = 'UNSUBSCRIBE_MEMBERS'

export const subMembers = (members) => ({ type: SUBSCRIBE_MEMBERS, members })
export const unsubMembers = () => ({ type: UNSUBSCRIBE_MEMBERS })

export const reduceMembers = (state = {}, action) => {
  switch (action.type) {
    case SUBSCRIBE_MEMBERS:
      return { connected: true, data: action.members }
    case UNSUBSCRIBE_MEMBERS:
      return { ...state, connected: false }
    default:
      return state
  }
}
