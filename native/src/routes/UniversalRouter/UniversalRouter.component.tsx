import React, { useState } from 'react'
import types from 'prop-types'
import useInitUniversalApp from 'src/utils/useInitUniversalApp'
import Loading from 'src/components/Loading'
import AuthenticatedRouter from 'src/routes/AuthenticatedRouter'
import UnauthenticatedRouter from 'src/routes/UnauthenticatedRouter'

const UniversalRouter = ({ authenticated, setDarkMode, setScreenSize }) => {
  const [initialized, setInitialized] = useState(false)
  useInitUniversalApp({ setInitialized, setDarkMode, setScreenSize })

  switch (`${initialized} | ${authenticated}`) {
    // case `true | true`:
    // return <AuthenticatedRouter />
    // case `true | true`:
    // return <UnauthenticatedRouter />
    case `true | pending`:
      return <AuthenticatedRouter />
    default:
      return <Loading />
  }
}

UniversalRouter.propTypes = {
  authenticated: types.oneOfType([types.bool, types.string]).isRequired,
  setDarkMode: types.func.isRequired,
  setScreenSize: types.func.isRequired
}

export default UniversalRouter
