import React from 'react'
import types from 'prop-types'
import * as S from './PillButton.style'

const PillButton = ({
  onPress,
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
  const isDefault = variant === 'default'
  const handlePress = () => {
    return onPress ? onPress() : navigation.navigate(href)
  }

  return (
    <S.PillButton
      onPress={handlePress}
      backgroundColor={isDefault ? secondaryColor : primaryColor}
      border={isDefault ? primaryColor : secondaryColor}
      borderRadius={radius}>
      <S.Title
        color={isDefault ? primaryColor : secondaryColor}
        fontSize={mediumText}
        padding={veritcalSpacing}>
        {title}
      </S.Title>
    </S.PillButton>
  )
}

PillButton.defaultProps = {
  variant: 'default',
  href: undefined,
  onPress: undefined
}

PillButton.propTypes = {
  onPress: types.func,
  href: types.string,
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
