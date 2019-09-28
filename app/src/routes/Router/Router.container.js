import { connect } from 'react-redux'
import { subAccount, unsubAccount, subCommunity, unsubCommunity } from 'services/redux'
import Router from './Router.component'

export const state = (state) => {
  return {}
}

export const dispatch = {
  subAccount,
  unsubAccount,
  subCommunity,
  unsubCommunity
}

export default connect(
  state,
  dispatch
)(Router)
