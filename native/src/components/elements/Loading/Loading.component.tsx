import React from 'react'
import loading from 'src/assets/images/loading.gif'
import * as S from './Loading.style'

const Loading = () => {
  return (
    <S.Wrapper>
      <S.Spinner source={loading} />
    </S.Wrapper>
  )
}

export default Loading
