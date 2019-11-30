import React from 'react'
import types from 'prop-types'
import * as S from './TitleText.style'

const TitleText = ({ children, variant, size, align, primaryColor, secondaryColor, fontSize }) => {
  switch (variant) {
    case 'inverted':
      return (
        <S.TitleText>
          <S.Title align={align} fontSize={fontSize[size]} color={primaryColor}>
            {children}
          </S.Title>
        </S.TitleText>
      )
    default:
      return (
        <S.TitleText>
          <S.Title align={align} fontSize={fontSize[size]} color={secondaryColor}>
            {children}
          </S.Title>
        </S.TitleText>
      )
  }
}

TitleText.defaultProps = {
  variant: 'default',
  size: 'h2',
  align: 'left'
}

TitleText.propTypes = {
  align: types.string,
  size: types.string,
  children: types.string.isRequired,
  variant: types.oneOf(['default', 'inverted']),
  primaryColor: types.string.isRequired,
  secondaryColor: types.string.isRequired,
  fontSize: types.object.isRequired
}

export default TitleText
