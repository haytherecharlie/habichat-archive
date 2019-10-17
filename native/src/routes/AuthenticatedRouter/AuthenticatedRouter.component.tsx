import React, { useEffect } from 'react'
import types from 'prop-types'
import { documentListener } from 'src/services/firebase'

const AuthenticatedRouter = ({ Stack, subCommunity, unsubCommunity }) => {
  useEffect(() => {
    documentListener('community', subCommunity)
    return () => Promise.all([unsubCommunity()])
  }, [subCommunity, unsubCommunity])

  return <Stack />
}

AuthenticatedRouter.propTypes = {
  Stack: types.func.isRequired,
  subCommunity: types.func.isRequired,
  unsubCommunity: types.func.isRequired
}

export default AuthenticatedRouter
