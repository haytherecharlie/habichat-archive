import React, { useEffect } from 'react'
import types from 'prop-types'
import { documentListener } from 'src/services/firebase'

const Router = ({ Stack, subAccount, unsubAccount, subCommunity, unsubCommunity }) => {
  useEffect(() => {
    documentListener('account', subAccount)
    documentListener('community', subCommunity)
    return () => Promise.all([unsubAccount(), unsubCommunity()])
  }, [subAccount, unsubAccount, subCommunity, unsubCommunity])

  return <Stack />
}

Router.defaultProps = {}

Router.propTypes = {
  Stack: types.func.isRequired,
  subAccount: types.func.isRequired,
  unsubAccount: types.func.isRequired,
  subCommunity: types.func.isRequired,
  unsubCommunity: types.func.isRequired
}

export default Router
