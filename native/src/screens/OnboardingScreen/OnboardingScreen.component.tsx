import React, { useRef } from 'react'
import types from 'prop-types'
import Swiper from 'react-native-swiper'
import onboardingImg1 from 'src/assets/images/onboarding-1.png'
import onboardingImg2 from 'src/assets/images/onboarding-2.png'
import onboardingImg3 from 'src/assets/images/onboarding-3.png'
import PageWrapper from 'src/components/PageWrapper'
import TitleText from 'src/components/TitleText'
import BodyText from 'src/components/BodyText'
import OnboardingImage from 'src/components/OnboardingImage'
import PillButton from 'src/components/PillButton'
import * as S from './OnboardingScreen.style'

const OnboardingScreen = ({ navigation }) => {
  const swiper = useRef(null)
  return (
    <Swiper ref={swiper}>
      {/* Page One */}
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
      {/* Page Two */}
      <PageWrapper>
        <S.First />
        <S.Second>
          <OnboardingImage source={onboardingImg2} alt="neighbors" />
        </S.Second>
        <S.Third>
          <TitleText align="center" size="h1">
            Neighbors Make Life Better!
          </TitleText>
        </S.Third>
        <S.Fourth>
          <BodyText align="center" size="h3">
            Find dog walkers, babysitters, build a sports team, sell your stuff.
          </BodyText>
          <BodyText align="center" size="h3">
            There’s so much more going on in your building than you realize.
          </BodyText>
        </S.Fourth>
        <S.Fifth>
          <PillButton onPress={() => swiper.current.scrollBy(1)} title="Next" />
        </S.Fifth>
      </PageWrapper>
      {/* Page Three */}
      <PageWrapper>
        <S.First />
        <S.Second>
          <OnboardingImage source={onboardingImg3} alt="privacy" />
        </S.Second>
        <S.Third>
          <TitleText align="center" size="h1">
            No Akward Encounters.
          </TitleText>
        </S.Third>
        <S.Fourth>
          <BodyText align="center" size="h3">
            No one likes an akward elevator ride, so share as much or as little about yourself as you’d like. We care about your privacy.
          </BodyText>
        </S.Fourth>
        <S.Fifth>
          <PillButton onPress={() => navigation.navigate('EmailScreen')} title="Sign In / Register" />
        </S.Fifth>
      </PageWrapper>
    </Swiper>
  )
}

export default OnboardingScreen
