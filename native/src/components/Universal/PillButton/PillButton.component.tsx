import React from 'react'
import types from 'prop-types'
import * as S from './PillButton.style'

const PillButton = ({
  href,
  variant,
  title,
  primaryColor,
  secondaryColor,
  mediumText,
  veritcalSpacing,
  radius,
  navigation
}) => {
  switch (variant) {
    case 'inverted':
      return (
        <S.PillButton
          onPress={() => navigation.navigate(href)}
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
          onPress={() => navigation.navigate(href)}
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

PillButton.defaultProps = {
  variant: 'default'
}

PillButton.propTypes = {
  href: types.string.isRequired,
  variant: types.oneOf(['inverted', 'default']).isRequired,
  title: types.string.isRequired,
  primaryColor: types.string.isRequired,
  secondaryColor: types.string.isRequired,
  mediumText: types.string.isRequired,
  veritcalSpacing: types.string.isRequired,
  radius: types.string.isRequired,
  navigation: types.object.isRequired
}

export default PillButton
