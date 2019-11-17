import React, { Fragment } from 'react'
import types from 'prop-types'
import GlobalStyle from 'src/assets/styles/GlobalStyle'
import * as S from './PageWrapper.style'

const PageWrapper = ({ children }) => {
  return (
    <Fragment>
      <GlobalStyle />
      <S.PageWrapper>
        <S.PageContent>{children}</S.PageContent>
      </S.PageWrapper>
    </Fragment>
  )
}

PageWrapper.propTypes = {
  children: types.node.isRequired
}

export default PageWrapper
