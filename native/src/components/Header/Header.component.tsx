import React from 'react'
import { Keyboard } from 'react-native'
import { withNavigation } from 'react-navigation'
import * as S from './Header.style'

const Header = ({ navigation, postText, saveNewPost, typeNewPost }) => {
  const postMessage = () => {
    if (postText.text !== '') {
      saveNewPost(postText)
      typeNewPost('')
      Keyboard.dismiss()
      return navigation.navigate('Community')
    }
  }

  return (
    <S.Wrapper>
      <S.Col float="flex-start">
        <S.BackButton onPress={() => navigation.navigate('Profile')}>
          <S.BackButtonText>&lsaquo;</S.BackButtonText>
        </S.BackButton>
      </S.Col>
      <S.Col>
        <S.HeaderTitle>Compose</S.HeaderTitle>
      </S.Col>
      <S.Col>
        <S.PostButton onPress={postMessage}>
          <S.PostButtonTitle>Post</S.PostButtonTitle>
        </S.PostButton>
      </S.Col>
    </S.Wrapper>
  )
}

export default withNavigation(Header)
