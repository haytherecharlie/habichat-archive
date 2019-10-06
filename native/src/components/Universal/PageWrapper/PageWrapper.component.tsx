import React from 'react'
import types from 'prop-types'
import Loading from 'src/components/Universal/Loading'
import * as S from './PageWrapper.style'

const PageWrapper = ({ children, backgroundColor }) => {
  return (
    <S.PageWrapper backgroundColor={backgroundColor}>
      <Loading />
      {/* {children} */}
    </S.PageWrapper>
  )
}

PageWrapper.propTypes = {
  children: types.node.isRequired,
  backgroundColor: types.string.isRequired
}

export default PageWrapper
