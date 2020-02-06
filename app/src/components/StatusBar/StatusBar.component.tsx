import React from 'react'
import { StatusBar as Bar } from 'react-native'
import * as S from './StatusBar.style'

const StatusBar = () => {
  return (
    <S.StatusBar>
      <Bar barStyle="light-content" />
    </S.StatusBar>
  )
}

export default StatusBar
