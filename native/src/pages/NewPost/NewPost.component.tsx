import React from 'react'
import Header from 'src/components/modules/Header'
import PostInput from 'src/components/elements/PostInput'
import * as S from './NewPost.style'

const NewPost = () => {
  return (
    <S.NewPost>
      <Header />
      <PostInput />
    </S.NewPost>
  )
}

export default NewPost
