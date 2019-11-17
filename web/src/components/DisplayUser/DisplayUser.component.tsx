import React from 'react'
import * as S from './DisplayUser.style'

const DisplayUser = ({ user }) => {
  const { id, name } = user
  return (
    <S.DisplayUser>
      <S.Title>{id}</S.Title>
      <S.Title>{name}</S.Title>
    </S.DisplayUser>
  )
}

export default DisplayUser
