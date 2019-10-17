import React from 'react'
import types from 'prop-types'
import * as S from './PillButton.style'

const PillButton = ({
  onPress,
  variant,
  title,
  primaryColor,
  secondaryColor,
  mediumText,
  veritcalSpacing,
  radius
}) => {
  switch (variant) {
    case 'inverted':
      return (
        <S.PillButton
          onPress={onPress}
          backgroundColor={primaryColor}
          border={secondaryColor}
          borderRadius={radius}>
          <S.Title color={secondaryColor} fontSize={mediumText} padding={veritcalSpacing}>
            {title}
          </S.Title>
        </S.PillButton>
      )
    default:
      return (
        <S.PillButton
          onPress={onPress}
          backgroundColor={secondaryColor}
          border={primaryColor}
          borderRadius={radius}>
          <S.Title color={primaryColor} fontSize={mediumText} padding={veritcalSpacing}>
            {title}
          </S.Title>
        </S.PillButton>
      )
  }
}

PillButton.propTypes = {
  onPress: types.func.isRequired,
  variant: types.oneOf(['inverted', 'default']).isRequired,
  title: types.string.isRequired,
  primaryColor: types.string.isRequired,
  secondaryColor: types.string.isRequired,
  mediumText: types.string.isRequired,
  veritcalSpacing: types.string.isRequired,
  radius: types.string.isRequired
}

export default PillButton
