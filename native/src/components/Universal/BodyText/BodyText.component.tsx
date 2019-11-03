import React from 'react'
import types from 'prop-types'
import * as S from './BodyText.style'

const BodyText = ({ children, variant, size, align, primaryColor, secondaryColor, fontSize }) => {
  switch (variant) {
    case 'inverted':
      return (
        <S.BodyText>
          <S.Title align={align} fontSize={fontSize[size]} color={primaryColor}>
            {children}
          </S.Title>
        </S.BodyText>
      )
    default:
      return (
        <S.BodyText>
          <S.Title align={align} fontSize={fontSize[size]} color={secondaryColor}>
            {children}
          </S.Title>
        </S.BodyText>
      )
  }
}

BodyText.defaultProps = {
  variant: 'default',
  size: 'h2',
  align: 'left'
}

BodyText.propTypes = {
  align: types.string,
  size: types.string,
  children: types.string.isRequired,
  variant: types.oneOf(['default', 'inverted']),
  primaryColor: types.string.isRequired,
  secondaryColor: types.string.isRequired,
  fontSize: types.object.isRequired
}

export default BodyText
