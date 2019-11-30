import React from 'react'
import types from 'prop-types'
import PageWrapper from 'src/components/PageWrapper'
import IconLogo from 'src/components/IconLogo'
import PillButton from 'src/components/PillButton'
import WebLink from 'src/components/WebLink'
import * as S from './LandingScreen.style'

const LandingScreen = () => {
  return (
    <PageWrapper>
      <S.First />
      <S.Second>
        <IconLogo variant="default" />
      </S.Second>
      <S.Third>
        <PillButton title="Sign In / Register" variant="default" href="EmailScreen" />
        <PillButton title="Learn More" variant="inverted" href="OnboardingScreen" />
      </S.Third>
      <S.Fourth>
        <WebLink href="https://habi.chat/privacy">Privacy Policy</WebLink>
        <WebLink href="https://habi.chat/terms">Terms of Service</WebLink>
      </S.Fourth>
    </PageWrapper>
  )
}

export default LandingScreen
