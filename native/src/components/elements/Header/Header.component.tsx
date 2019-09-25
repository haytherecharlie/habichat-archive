import React from 'react'
import { withNavigation } from 'react-navigation'
import { BLUE } from 'src/constants'
import Icon from 'react-native-ionicons'
import * as S from './Header.style'

const Header = ({ navigation }) => {
  return (
    <S.Header>
      <S.Col float="flex-start">
        <S.Button onPress={() => navigation.navigate('Profile')}>
          <S.Chevron>&lsaquo;</S.Chevron>
        </S.Button>
      </S.Col>
      <S.Col float="center">
        <S.Title weight={700}>New Post</S.Title>
      </S.Col>
      <S.Col float="flex-end">
        <S.Button onPress={() => console.log('send')}>
          <S.Title weight={500}>Post</S.Title>
        </S.Button>
      </S.Col>
    </S.Header>
  )
}

export default withNavigation(Header)
