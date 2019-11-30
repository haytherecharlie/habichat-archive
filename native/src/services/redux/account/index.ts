const PRESERVE_EMAIL = 'PRESERVE_EMAIL'
const SUBSCRIBE_ACCOUNT = 'SUBSCRIBE_ACCOUNT'
const UNSUBSCRIBE_ACCOUNT = 'UNSUBSCRIBE_ACCOUNT'

export const preserveEmail = (email) => ({ type: PRESERVE_EMAIL, email })
export const subAccount = (account) => ({ type: SUBSCRIBE_ACCOUNT, account })
export const unsubAccount = () => ({ type: UNSUBSCRIBE_ACCOUNT })

export const reduceAccount = (state = {}, action) => {
  switch (action.type) {
    case PRESERVE_EMAIL:
      return { ...state, email: action.email }
    case SUBSCRIBE_ACCOUNT:
      return action.account
        ? { ...state, connected: true, authenticated: true, data: action.account }
        : { ...state, connected: true, authenticated: false, data: {} }
    case UNSUBSCRIBE_ACCOUNT:
      unsubscribe[action.type.split('_')[1].toLowerCase()]()
      return { ...state, connected: false, authenticated: false }
    default:
      return state
  }
}
