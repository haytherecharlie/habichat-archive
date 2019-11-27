import React from 'react'
import { useSelector } from 'react-redux'
import * as S from './DisplayUser.style'

const DisplayUser = () => {
  const { id, name } = useSelector((s) => s.user)
  return (
    <S.DisplayUser>
      <S.Title>{id}</S.Title>
      <S.Title>{name}</S.Title>
    </S.DisplayUser>
  )
}

export default DisplayUser
