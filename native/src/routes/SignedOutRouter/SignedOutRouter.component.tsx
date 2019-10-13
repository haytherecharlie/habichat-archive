import React from 'react'
import types from 'prop-types'

const SignedOutRouter = ({ Stack }) => <Stack />

SignedOutRouter.propTypes = {
  Stack: types.func.isRequired
}

export default SignedOutRouter
