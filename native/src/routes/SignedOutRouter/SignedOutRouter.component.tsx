import React from 'react'
import types from 'prop-types'

const SignedOutRouter = ({ Stack }) => {
  return <Stack />
}

SignedOutRouter.defaultProps = {}
SignedOutRouter.propTypes = {
  Stack: types.func.isRequired
}

export default SignedOutRouter
