import React, { useEffect } from 'react'
import types from 'prop-types'
import { documentListener } from 'src/services/firebase'

const SignedInRouter = ({ Stack, subCommunity, unsubCommunity }) => {
  useEffect(() => {
    documentListener('community', subCommunity)
    return () => Promise.all([unsubCommunity()])
  }, [subCommunity, unsubCommunity])

  return <Stack />
}

SignedInRouter.defaultProps = {}

SignedInRouter.propTypes = {
  Stack: types.func.isRequired,
  subCommunity: types.func.isRequired,
  unsubCommunity: types.func.isRequired
}

export default SignedInRouter
