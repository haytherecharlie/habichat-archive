import React from 'react'
import * as S from './SectionTitle.style'

const SectionTitle = ({ children }) => {
  return (
    <S.Wrapper>
      <S.Title>{children}</S.Title>
    </S.Wrapper>
  )
}

export default SectionTitle
