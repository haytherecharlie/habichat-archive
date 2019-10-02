import { unsubscribe } from 'src/services/firebase'

const SUBSCRIBE_COMMUNITY = 'SUBSCRIBE_COMMUNITY'
const UNSUBSCRIBE_COMMUNITY = 'UNSUBSCRIBE_COMMUNITY'

export const subCommunity = (community) => ({ type: SUBSCRIBE_COMMUNITY, community })
export const unsubCommunity = () => ({ type: UNSUBSCRIBE_COMMUNITY })

export const reduceCommunity = (state = {}, action) => {
  switch (action.type) {
    case SUBSCRIBE_COMMUNITY:
      return { connected: true, data: { ...action.community } }
    case UNSUBSCRIBE_COMMUNITY:
      unsubscribe[action.type.split('_')[1].toLowerCase()]()
      return { ...state, connected: false }
    default:
      return state
  }
}
