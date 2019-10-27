import React from 'react'
import types from 'prop-types'
import PageWrapper from 'src/components/universal/PageWrapper'
import IconLogo from 'src/components/universal/IconLogo'
import PillButton from 'src/components/universal/PillButton'
import * as S from './LandingScreen.style'

const LandingScreen = () => {
  return (
    <PageWrapper>
      <S.First></S.First>
      <S.Second>
        <IconLogo variant="default" />
      </S.Second>
      <S.Third>
        <PillButton title="Sign In / Register" variant="default" href="EmailScreen" />
        <PillButton title="Learn More" variant="inverted" href="OnboardingScreen" />
      </S.Third>
      <S.Fourth />
    </PageWrapper>
  )
}

export default LandingScreen
