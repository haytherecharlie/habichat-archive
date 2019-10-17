import React from 'react'
import types from 'prop-types'

const UnauthenticatedRouter = ({ Stack }) => <Stack />

UnauthenticatedRouter.propTypes = {
  Stack: types.func.isRequired
}

export default UnauthenticatedRouter
