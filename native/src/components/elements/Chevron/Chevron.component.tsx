import React from 'react'
import * as S from './Chevron.style'

const Chevron = ({ direction }) => {
  const align = direction === 'right' ? 'flex-end' : 'flex-start'
  const arrow = direction === 'right' ? <S.Title>&rsaquo;</S.Title> : <S.Title>&lsaquo;</S.Title>
  return <S.Chevron align={align}>{arrow}</S.Chevron>
}

export default Chevron
