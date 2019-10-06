import { pathOr } from 'ramda'
import { connect } from 'react-redux'
import { subAccount, unsubAccount, setDarkMode } from 'src/services/redux'
import Router from './Router.component'

export const state = (state) => {
  const authenticated = pathOr(false, ['account', 'authenticated'])(state)
  return {
    authenticated
  }
}

export const dispatch = {
  subAccount,
  unsubAccount,
  setDarkMode
}

export default connect(
  state,
  dispatch
)(Router)
