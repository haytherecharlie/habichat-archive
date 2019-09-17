import React from 'react'
import * as S from './Subscribe.style'

const Subscribe = () => {
  return (
    <S.Subscribe>
      <S.Title>Be the first to get access to Habichat</S.Title>
      <S.SubTitle>Subscribe to receive updates and join our beta list.</S.SubTitle>
      <S.InputContainer>
        <S.Input placeholder="Enter your email address"></S.Input>
        <S.Button>Subscribe</S.Button>
      </S.InputContainer>
    </S.Subscribe>
  )
}

export default Subscribe
