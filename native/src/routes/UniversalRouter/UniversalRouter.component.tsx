import React, { useState } from 'react'
import types from 'prop-types'
import useInitUniversalApp from 'src/utils/useInitUniversalApp'
import Loading from 'src/components/universal/Loading'
import AuthenticatedRouter from 'src/routes/AuthenticatedRouter'
import UnauthenticatedRouter from 'src/routes/UnauthenticatedRouter'

const UniversalRouter = ({ authenticated, subAccount, unsubAccount, setDarkMode, setScreenSize }) => {
  const [initialized, setInitialized] = useState(false)
  useInitUniversalApp({ setInitialized, setDarkMode, setScreenSize, subAccount, unsubAccount })

  switch (`${initialized} | ${authenticated}`) {
    // case `true | true`:
      // return
    case `true | false`:
      return <AuthenticatedRouter />
    default:
      return <Loading />
  }
}

UniversalRouter.propTypes = {
  authenticated: types.oneOfType([types.bool, types.string]).isRequired,
  subAccount: types.func.isRequired,
  unsubAccount: types.func.isRequired,
  setDarkMode: types.func.isRequired,
  setScreenSize: types.func.isRequired
}

export default UniversalRouter
