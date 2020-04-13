import React from 'react'
import logoTextBlack from 'assets/images/logo-text-black.png'
import { useDispatch } from 'react-redux'
import * as S from './styles/header.style'

const Header = ({ profile, navigation }) => {
  const dispatch = useDispatch()
  const {
    address: { number, street, city },
    picture
  } = profile
  return (
    <S.Header>
      <S.HeaderLeft>
        <S.HeaderLogoText source={logoTextBlack} />
        <S.HeaderSubtitle>{`${number} ${street}, ${city}`}</S.HeaderSubtitle>
      </S.HeaderLeft>
      <S.HeaderRight>
        <S.HeaderImageBtn onPress={() => dispatch({ type: 'SIGN_OUT' })}>
          <S.HeaderImage source={{ uri: picture }} />
        </S.HeaderImageBtn>
      </S.HeaderRight>
    </S.Header>
  )
}

export default Header
