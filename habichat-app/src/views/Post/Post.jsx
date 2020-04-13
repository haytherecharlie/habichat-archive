import React from 'react'
import * as S from './styles/post.style'

const Post = ({ navigation }) => {
  return (
    <S.Post onPress={() => navigation.navigate('Community')}>
      <S.PostText>[Post] Go Back</S.PostText>
    </S.Post>
  )
}

export default Post
