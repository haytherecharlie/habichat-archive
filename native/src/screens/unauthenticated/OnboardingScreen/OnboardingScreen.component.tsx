import React, { useState } from 'react'
import types from 'prop-types'
import Swiper from 'react-native-swiper'
import PillButton from 'src/components/universal/PillButton'
import * as S from './OnboardingScreen.style'

const OnboardingScreen = () => {
  const [index, setIndex] = useState(0)
  return (
    <Swiper index={index}>
      <S.Page>
        <PillButton onPress={() => setIndex(index + 1)} title="Page 1" />
      </S.Page>
      <S.Page>
        <PillButton onPress={() => setIndex(index - 1)} title="Page 2" />
      </S.Page>
    </Swiper>
  )
}

export default OnboardingScreen
