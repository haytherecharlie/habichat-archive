import styled from 'styled-components'
import { Video } from 'expo-av'
import scale from 'lib/scale'

export const OnboardingContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const CityScape = styled(Video)`
  height: 100%;
  width: 100%;
`

export const SlideContainer = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SlideTitle = styled.Text`
  color: #000;
  font-family: habichat;
  font-size: ${scale(18)};
`

export const SlideImage = styled.Image`
  height: 400px;
  width: 500px;
`

export const SlideText = styled.Text`
  color: #000;
  font-weight: 700;
  font-size: ${scale(16)};
`
