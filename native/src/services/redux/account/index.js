import { unsubscribe } from 'services/firebase'

const SUBSCRIBE_ACCOUNT = 'SUBSCRIBE_ACCOUNT'
const UNSUBSCRIBE_ACCOUNT = 'UNSUBSCRIBE_ACCOUNT'

export const subAccount = (account) => ({ type: SUBSCRIBE_ACCOUNT, account })
export const unsubAccount = () => ({ type: UNSUBSCRIBE_ACCOUNT })

export const reduceAccount = (state = {}, action) => {
  switch (action.type) {
    case SUBSCRIBE_ACCOUNT:
      return { connected: true, data: action.account }
    case UNSUBSCRIBE_ACCOUNT:
      unsubscribe[action.type.split('_')[1].toLowerCase()]()
      return { ...state.account, connected: false }
    default:
      return state
  }
}
