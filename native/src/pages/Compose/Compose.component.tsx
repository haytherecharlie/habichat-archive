import React, { Fragment } from 'react'
import Header from 'src/components/Header'
import PostInput from 'src/components/PostInput'
import * as S from './Compose.style'

const Compose = () => {
  return (
    <Fragment>
      <Header />
      <PostInput />
      <S.Footer />
    </Fragment>
  )
}

export default Compose
