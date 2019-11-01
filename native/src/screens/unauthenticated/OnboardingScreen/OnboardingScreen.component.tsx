import React, { useRef } from 'react'
import types from 'prop-types'
import Swiper from 'react-native-swiper'
import onboardingImg1 from 'src/assets/images/onboarding-1.png'
import PillButton from 'src/components/universal/PillButton'
import * as S from './OnboardingScreen.style'

const OnboardingScreen = () => {
  const swiper = useRef(null)
  return (
    <Swiper ref={swiper}>
      <S.Page>
        <S.Img source={onboardingImg1} alt="cityscape"/>
        <PillButton onPress={() => swiper.current.scrollBy(1)} title="Next" />
      </S.Page>
      <S.Page>
        <PillButton onPress={() => swiper.current.scrollBy(1)} title="Page 2" />
      </S.Page>
    </Swiper>
  )
}

export default OnboardingScreen
