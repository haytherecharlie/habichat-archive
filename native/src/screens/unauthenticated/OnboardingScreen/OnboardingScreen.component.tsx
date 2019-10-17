import React from 'react'
import types from 'prop-types'
import PillButton from 'src/components/universal/PillButton'
import PageWrapper from 'src/components/universal/PageWrapper'
import * as S from './OnboardingScreen.style'

const OnboardingScreen = () => {
  return (
    <PageWrapper>
      <S.Title>OnboardingScreen</S.Title>
      <PillButton title="Go Back" href="LandingScreen" />
    </PageWrapper>
  )
}

export default OnboardingScreen
