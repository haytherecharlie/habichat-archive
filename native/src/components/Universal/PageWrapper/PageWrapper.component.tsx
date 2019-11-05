import React from 'react'
import types from 'prop-types'
import fadeDark from 'src/assets/images/fadeDark.jpg'
import fadeLight from 'src/assets/images/fadeLight.jpg'
import Loading from 'src/components/universal/Loading'
import * as S from './PageWrapper.style'

const PageWrapper = ({ darkMode, children, primaryColor, loading, text, background }) => {
  switch (background) {
    case 'fade':
      return darkMode ? (
        <S.PageWrapper backgroundColor={primaryColor} behavior="padding" enabled>
          <S.Backdrop resizeMode="cover" source={fadeDark}>
            {loading ? <Loading text={text} /> : <S.Padding>{children}</S.Padding>}
          </S.Backdrop>
        </S.PageWrapper>
      ) : (
        <S.PageWrapper backgroundColor={primaryColor} behavior="padding" enabled>
          <S.Backdrop resizeMode="cover" source={fadeLight}>
            {loading ? <Loading text={text} /> : <S.Padding>{children}</S.Padding>}
          </S.Backdrop>
        </S.PageWrapper>
      )
    default:
      return (
        <S.PageWrapper backgroundColor={primaryColor} behavior="padding" enabled>
          {loading ? <Loading text={text} /> : children}
        </S.PageWrapper>
      )
  }
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
