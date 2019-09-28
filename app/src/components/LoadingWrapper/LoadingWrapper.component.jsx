import React from 'react'
import types from 'prop-types'
import habichatIcon from 'assets/images/habichat-icon.png'
import 'animate.css'
import * as S from './LoadingWrapper.style'

const LoadingWrapper = ({ loading, children }) => {
  switch (loading) {
    case false:
      return children
    default:
      return (
        <S.Wrapper>
          <S.Icon className={`animated infinite pulse`} src={habichatIcon} alt="habichat icon" />
        </S.Wrapper>
      )
  }
}

LoadingWrapper.propTypes = {
  loading: types.bool.isRequired,
  children: types.node.isRequired
}

export default LoadingWrapper
