import React, { useEffect } from 'react'
import types from 'prop-types'
import { authListener } from 'src/services/firebase'
import SignedInRouter from 'src/routes/SignedInRouter'
import SignedOutRouter from 'src/routes/SignedOutRouter'

const Router = ({ authenticated, subAccount, unsubAccount }) => {
  useEffect(() => {
    authListener('account', subAccount)
    return () => Promise.all([unsubAccount()])
  }, [subAccount, unsubAccount])

  switch (authenticated) {
    case true:
      return <SignedInRouter />
    default:
      return <SignedOutRouter />
  }
}

Router.defaultProps = {}

Router.propTypes = {
  authenticated: types.bool.isRequired,
  subAccount: types.func.isRequired,
  unsubAccount: types.func.isRequired
}

export default Router
