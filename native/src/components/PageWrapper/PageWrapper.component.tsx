import React from 'react'
import types from 'prop-types'
import fadeDark from 'src/assets/images/fadeDark.jpg'
import fadeLight from 'src/assets/images/fadeLight.jpg'
import Loading from 'src/components/Loading'
import * as S from './PageWrapper.style'

const PageWrapper = ({ darkMode, children, primaryColor, loading, text, background }) => {
  return (
    <S.PageWrapper backgroundColor={primaryColor} behavior="padding" enabled>
      <S.Padding>{loading ? <Loading text={text} /> : children}</S.Padding>
    </S.PageWrapper>
  )
}

PageWrapper.defaultProps = {
  loading: false,
  text: '',
  background: 'blank'
}

PageWrapper.propTypes = {
  children: types.node.isRequired,
  darkMode: types.bool.isRequired,
  primaryColor: types.string.isRequired,
  loading: types.bool.isRequired,
  text: types.string,
  background: types.oneOf(['blank', 'fade', 'animated'])
}

export default PageWrapper
