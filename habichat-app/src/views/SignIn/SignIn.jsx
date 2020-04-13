import React from 'react'
import { StatusBar, Linking } from 'react-native'
import { useDispatch } from 'react-redux'
import Modal from 'components/Modal/Modal'
import outlineLogo from 'assets/images/outline-logo.png'
import hcCityWallpaper from 'assets/videos/stef-boc-animation.mp4'
import * as S from './styles/signIn.style'

const SignIn = () => {
  const dispatch = useDispatch()
  return (
    <S.SignIn behavior="padding" enabled>
      {/* Status Bar */}
      <StatusBar barStyle="light-content" />

      {/* Video Background */}
      <S.VideoBackground
        source={hcCityWallpaper}
        rate={1.0}
        isMuted={true}
        resizeMode="cover"
        shouldPlay
        isLooping
      />

      {/* Logo Container */}
      <S.LogoContainer>
        <S.ImageLogo source={outlineLogo} alt="white logo" />
      </S.LogoContainer>

      {/* Buttons Container */}
      <S.ButtonsContainer>
        <S.ButtonSignIn onPress={() => dispatch({ type: 'TOGGLE_MODAL' })}>
          <S.TextWhite>Sign In</S.TextWhite>
        </S.ButtonSignIn>
        <S.ButtonRegister onPress={() => dispatch({ type: 'TOGGLE_MODAL' })}>
          <S.TextBlack>Register</S.TextBlack>
        </S.ButtonRegister>
      </S.ButtonsContainer>

      {/* Links Container */}
      <S.LinksContainer>
        <S.TextLink onPress={() => Linking.openURL('https://habi.chat/privacy-policy')}>
          Privacy Policy
        </S.TextLink>
        <S.TextLink onPress={() => Linking.openURL('https://habi.chat/terms-of-service')}>
          Terms of Service
        </S.TextLink>
      </S.LinksContainer>

      {/* Modal */}
      <Modal />
    </S.SignIn>
  )
}

export default SignIn
