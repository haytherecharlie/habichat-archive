import React from 'react'
import types from 'prop-types'
import Loading from 'src/components/Universal/Loading'
import * as S from './PageWrapper.style'

const PageWrapper = ({ children, backgroundColor, loading }) => {
  return (
    <S.PageWrapper backgroundColor={backgroundColor} behavior="padding" enabled>
      {loading ? <Loading /> : children}
    </S.PageWrapper>
  )
}

PageWrapper.propTypes = {
  children: types.node.isRequired,
  backgroundColor: types.string.isRequired,
  loading: types.bool.isRequired
}

export default PageWrapper
