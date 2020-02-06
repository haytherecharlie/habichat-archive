import React from 'react'
import habichatLogoBlack from 'assets/images/logo-habichat-black.png'
import * as S from './LogoHabichat.style'

const LogoHabichat = () => {
  return (
    <S.LogoHabichat>
      <S.Logo source={habichatLogoBlack} alt="habichat logo" />
      <S.Title>habichat</S.Title>
    </S.LogoHabichat>
  )
}

export default LogoHabichat
