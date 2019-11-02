import React from 'react'
import types from 'prop-types'
import * as S from './TitleText.style'

const TitleText = ({ children, variant, primaryColor, secondaryColor, largeText }) => {
  switch (variant) {
    case 'inverted':
      return (
        <S.TitleText>
          <S.Title fontSize={largeText} color={primaryColor}>
            {children}
          </S.Title>
        </S.TitleText>
      )
    default:
      return (
        <S.TitleText>
          <S.Title fontSize={largeText} color={secondaryColor}>
            {children}
          </S.Title>
        </S.TitleText>
      )
  }
}

TitleText.defaultProps = {
  variant: 'default'
}

TitleText.propTypes = {
  children: types.string.isRequired,
  variant: types.oneOf(['default', 'inverted']),
  primaryColor: types.string.isRequired,
  secondaryColor: types.string.isRequired,
  largeText: types.string.isRequired
}

export default TitleText
