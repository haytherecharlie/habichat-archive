import styled from 'styled-components'
import { View, Text, Image } from 'react-native'

export const LogoHabichat = styled(View)({
  display: 'flex',
  flexDirection: `row`,
  alignItems: 'center',
  justifyContent: 'center',
  paddingLeft: 20
})

export const Logo = styled(Image)({
  height: 30,
  width: 30,
  marginTop: -3
})

export const Title = styled(Text)({
  fontSize: 30,
  fontFamily: 'habichat',
  letterSpacing: `-1px`,
  marginLeft: 3
})
