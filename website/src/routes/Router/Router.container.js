import { connect } from 'react-redux'
import { subAccount, unsubAccount } from 'services/redux'
import Router from './Router.component'

export const state = (state) => {
  return {}
}

export const dispatch = {
  subAccount,
  unsubAccount
}

export default connect(
  state,
  dispatch
)(Router)
