import React from 'react'
import types from 'prop-types'
import * as S from './StatusBar.style'

const StatusBar = ({ darkMode }) => {
  const barStyle = darkMode ? 'light-content' : 'dark-content'
  return <S.StatusBar barStyle={barStyle} />
}

StatusBar.propTypes = {
  darkMode: types.bool.isRequired
}

export default StatusBar
