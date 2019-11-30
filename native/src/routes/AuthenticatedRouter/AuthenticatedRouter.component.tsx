import React, { useEffect } from 'react'
import types from 'prop-types'

const AuthenticatedRouter = ({ Stack, }) => {
  useEffect(() => {
  }, [])

  return <Stack />
}

AuthenticatedRouter.propTypes = {
  Stack: types.func.isRequired,
}

export default AuthenticatedRouter
