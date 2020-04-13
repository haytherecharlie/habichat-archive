import React from 'react'
import Swiper from 'react-native-swiper'
import cityImage from 'assets/images/cityscape.jpg'
import cityscape from 'assets/videos/cityscape.mp4'
import * as S from './styles/onboarding.style'

const Onboarding = () => {
  return (
    <S.OnboardingContainer>
      <S.CityScape
        source={cityscape}
        rate={1.0}
        isMuted={true}
        resizeMode="cover"
        shouldPlay
        isLooping
        usePoster
        posterSource={cityImage}
      />
      <Swiper>
        {/* Slide One */}
        <S.SlideContainer>
          <S.SlideTitle>Welcome To Habichat</S.SlideTitle>
          <S.SlideText>Slide to start &rsaquo;</S.SlideText>
        </S.SlideContainer>

        {/* Slide Two */}
        <S.SlideContainer>
          <S.SlideText>With Habichat you can:</S.SlideText>
          <S.SlideText>- Meet your Neighbors</S.SlideText>
          <S.SlideText>- Communicate with each other in private small group network</S.SlideText>
          <S.SlideText>- Create and schedule events with your neighbors</S.SlideText>
          <S.SlideText>- Get updates about Superclub schedule</S.SlideText>
          <S.SlideText>- Finding Dog Walkers</S.SlideText>
        </S.SlideContainer>
      </Swiper>
    </S.OnboardingContainer>
  )
}

export default Onboarding
