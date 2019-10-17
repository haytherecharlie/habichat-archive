import React from 'react'
import types from 'prop-types'
import Loading from 'src/components/universal/Loading'
import * as S from './PageWrapper.style'

const PageWrapper = ({ children, primaryColor, loading }) => {
  return (
    <S.PageWrapper backgroundColor={primaryColor} behavior="padding" enabled>
      {loading ? <Loading /> : children}
    </S.PageWrapper>
  )
}

PageWrapper.defaultProps = {
  loading: false
}

PageWrapper.propTypes = {
  children: types.node.isRequired,
  primaryColor: types.string.isRequired,
  loading: types.bool.isRequired
}

export default PageWrapper
