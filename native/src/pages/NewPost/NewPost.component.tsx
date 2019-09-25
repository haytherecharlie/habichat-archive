import React from 'react'
import Header from 'src/components/modules/Header'
import NewPostInput from 'src/components/elements/NewPostInput'
import * as S from './NewPost.style'

const NewPost = () => {
  return (
    <S.NewPost>
      <Header />
      <NewPostInput />
    </S.NewPost>
  )
}

export default NewPost
