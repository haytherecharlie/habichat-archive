import React from 'react'
import types from 'prop-types'
import * as S from './OnboardingImage.style'

const OnboardingImage = ({ source, alt }) => {
  return (
    <S.OnboardingImage>
      <S.Img source={source} alt={alt} />
    </S.OnboardingImage>
  )
}

OnboardingImage.propTypes = {
  source: types.node.isRequired,
  alt: types.string.isRequired
}

export default OnboardingImage
