import React from 'react'
import { withNavigation } from 'react-navigation'
import { Keyboard } from 'react-native'
import * as S from './PostButton.style'

const PostButton = ({ navigation, postText, saveNewPost, typeNewPost }) => {
  const sendPost = () => {
    if (postText.text !== '') {
      saveNewPost(postText)
      typeNewPost('')
      Keyboard.dismiss()
      return navigation.navigate('Community')
    }
  }

  return (
    <S.PostButton onPress={sendPost}>
      <S.Title>Post</S.Title>
    </S.PostButton>
  )
}

export default withNavigation(PostButton)
