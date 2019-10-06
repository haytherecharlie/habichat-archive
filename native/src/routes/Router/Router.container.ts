import { pathOr } from 'ramda'
import { connect } from 'react-redux'
import { subAccount, unsubAccount } from 'src/services/redux'
import Router from './Router.component'

export const state = (state) => {
  const authenticated = pathOr(false, ['account', 'authenticated'])(state)
  return {
    authenticated
  }
}

export const dispatch = {
  subAccount,
  unsubAccount
}

export default connect(
  state,
  dispatch
)(Router)
