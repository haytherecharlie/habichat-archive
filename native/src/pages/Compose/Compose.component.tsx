import React, { Fragment } from 'react'
import Header from 'src/components/modules/Header'
import PostInput from 'src/components/elements/PostInput'
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
