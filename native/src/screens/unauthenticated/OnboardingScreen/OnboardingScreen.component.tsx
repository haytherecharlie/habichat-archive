import React, { useRef } from 'react'
import types from 'prop-types'
import Swiper from 'react-native-swiper'
import PageWrapper from 'src/components/universal/PageWrapper'
import TitleText from 'src/components/universal/TitleText'
import BodyText from 'src/components/universal/BodyText'
import onboardingImg1 from 'src/assets/images/onboarding-1.png'
import OnboardingImage from 'src/components/unauthenticated/OnboardingScreen/OnboardingImage'
import PillButton from 'src/components/universal/PillButton'
import * as S from './OnboardingScreen.style'

const OnboardingScreen = () => {
  const swiper = useRef(null)
  return (
    <Swiper ref={swiper}>
      <PageWrapper>
        <S.First />
        <S.Second>
          <OnboardingImage source={onboardingImg1} alt="cityscape" />
        </S.Second>
        <S.Third>
          <TitleText align="center" size="h1">
            Welcome to the Neighborhood!
          </TitleText>
        </S.Third>
        <S.Fourth>
          <BodyText align="center" size="h3">
            Habichat is a private online message board for your condo.
          </BodyText>
          <BodyText align="center" size="h3">
            No private messages, everyone’s included.
          </BodyText>
        </S.Fourth>
        <S.Fifth>
          <PillButton onPress={() => swiper.current.scrollBy(1)} title="Next" />
        </S.Fifth>
      </PageWrapper>
      {/* <PageWrapper>
        <PillButton onPress={() => swiper.current.scrollBy(1)} title="Page 2" />
      </PageWrapper> */}
    </Swiper>
  )
}

export default OnboardingScreen
