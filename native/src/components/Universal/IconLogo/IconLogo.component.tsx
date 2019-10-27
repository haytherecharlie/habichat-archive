import React from 'react'
import iconLogoDefault from 'src/assets/images/icon-logo-default.png'
import iconLogoInverted from 'src/assets/images/icon-logo-inverted.png'
import types from 'prop-types'
import * as S from './IconLogo.style'

const IconLogo = ({ variant, darkMode }) => {
  const invertedLogo = darkMode ? iconLogoDefault : iconLogoInverted
  const defaultLogo = darkMode ? iconLogoInverted : iconLogoDefault

  switch (variant) {
    case 'inverted':
      return (
        <S.IconLogo>
          <S.IconImage source={invertedLogo} alt="habichat icon logo" />
        </S.IconLogo>
      )
    default:
      return (
        <S.IconLogo>
          <S.IconImage source={defaultLogo} alt="habichat icon logo" />
        </S.IconLogo>
      )
  }
}

IconLogo.propTypes = {
  darkMode: types.bool.isRequired
}

export default IconLogo
