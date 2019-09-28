import React, { Fragment } from 'react'
import types from 'prop-types'
// import * as S from './LoadingWrapper.style'

const LoadingWrapper = ({ loading, children }) => {
  return loading ? <div>loading...</div> : <Fragment>{children}</Fragment>
}

LoadingWrapper.propTypes = {
  loading: types.bool.isRequired,
  children: types.node.isRequired
}

export default LoadingWrapper
