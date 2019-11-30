import styled from 'styled-components'
import { View, Image } from 'react-native'

export const OnboardingImage = styled(View)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
})

export const Img = styled(Image)({
  height: (p) => p.diameter,
  width: (p) => p.diameter
})
