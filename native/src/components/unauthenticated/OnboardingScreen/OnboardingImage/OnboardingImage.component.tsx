import React from 'react'
import types from 'prop-types'
import * as S from './OnboardingImage.style'

const OnboardingImage = ({ source, alt, onboardingImageDiameter }) => {
  return (
    <S.OnboardingImage>
      <S.Img diameter={onboardingImageDiameter} source={source} alt={alt} />
    </S.OnboardingImage>
  )
}

OnboardingImage.propTypes = {
  source: types.node.isRequired,
  alt: types.string.isRequired,
  onboardingImageDiameter: types.string.isRequired
}

export default OnboardingImage
