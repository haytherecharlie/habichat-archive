import React from 'react'
import types from 'prop-types'
import Loading from 'src/components/universal/Loading'
import * as S from './PageWrapper.style'

const PageWrapper = ({ children, primaryColor, loading, text }) => {
  return (
    <S.PageWrapper backgroundColor={primaryColor} behavior="padding" enabled>
      {loading ? <Loading text={text} /> : children}
    </S.PageWrapper>
  )
}

PageWrapper.defaultProps = {
  loading: false,
  text: ""
}

PageWrapper.propTypes = {
  children: types.node.isRequired,
  primaryColor: types.string.isRequired,
  loading: types.bool.isRequired,
  text: types.string
}

export default PageWrapper
