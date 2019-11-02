import React, { useRef } from 'react'
import types from 'prop-types'
import Swiper from 'react-native-swiper'
import PageWrapper from 'src/components/universal/PageWrapper'
import TitleText from 'src/components/universal/TitleText'
import onboardingImg1 from 'src/assets/images/onboarding-1.png'
import OnboardingImage from 'src/components/unauthenticated/OnboardingScreen/OnboardingImage'
import PillButton from 'src/components/universal/PillButton'
import * as S from './OnboardingScreen.style'

const OnboardingScreen = () => {
  const swiper = useRef(null)
  return (
    <PageWrapper>
      <Swiper ref={swiper}>
        <S.Page>
          <OnboardingImage source={onboardingImg1} alt="cityscape" />
          <TitleText>Welcome to the Neighborhood!</TitleText>
          <PillButton onPress={() => swiper.current.scrollBy(1)} title="Next" />
        </S.Page>
        <S.Page>
          <PillButton onPress={() => swiper.current.scrollBy(1)} title="Page 2" />
        </S.Page>
      </Swiper>
    </PageWrapper>
  )
}

export default OnboardingScreen
