import styled from 'styled-components'
import { View, Text } from 'react-native'

export const TitleText = styled(View)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const Title = styled(Text)({
  fontSize: 20,
  fontFamily: 'habichat',
  color: (p) => p.color
})
