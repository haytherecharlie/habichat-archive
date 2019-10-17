import React, { useEffect } from 'react'
import types from 'prop-types'
import { authListener } from 'src/services/firebase'
import configureTheme from 'src/utils/configureTheme'
import Loading from 'src/components/Universal/Loading'
import AuthenticatedRouter from 'src/routes/AuthenticatedRouter'
import UnauthenticatedRouter from 'src/routes/UnauthenticatedRouter'

const Router = ({ authenticated, subAccount, unsubAccount, setDarkMode, setScreenSize }) => {
  useEffect(() => {
    configureTheme(setDarkMode, setScreenSize)
    authListener('account', subAccount)
    return () => Promise.all([unsubAccount()])
  }, [subAccount, unsubAccount])

  switch (authenticated) {
    case 'pending':
      return <Loading />
    case true:
      return <AuthenticatedRouter />
    default:
      return <UnauthenticatedRouter />
  }
}

Router.propTypes = {
  authenticated: types.oneOfType([types.bool, types.string]).isRequired,
  subAccount: types.func.isRequired,
  unsubAccount: types.func.isRequired,
  setDarkMode: types.func.isRequired,
  setScreenSize: types.func.isRequired
}

export default Router
