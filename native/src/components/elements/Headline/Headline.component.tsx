import React from 'react'
import * as S from './Headline.style'

const Headline = ({ children }) => {
  return (
    <S.Headline>
      <S.Title>{children}</S.Title>
    </S.Headline>
  )
}

export default Headline
