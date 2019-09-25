import React from 'react'
import { withNavigation } from 'react-navigation'
import PostButton from 'src/components/elements/PostButton'
import * as S from './Header.style'

const Header = ({ navigation }) => {
  return (
    <S.Header>
      <S.Col float="flex-start">
        <S.Button onPress={() => navigation.navigate('Profile')}>
          <S.Chevron>&lsaquo;</S.Chevron>
        </S.Button>
      </S.Col>
      <S.Col>
        <S.Title weight={700}>New Post</S.Title>
      </S.Col>
      <S.Col float="flex-end">
        <PostButton />
      </S.Col>
    </S.Header>
  )
}

export default withNavigation(Header)
