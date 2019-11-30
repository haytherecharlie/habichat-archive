import styled from 'styled-components'
import { View, Text } from 'react-native'

export const TitleText = styled(View)({
  width: '100%',
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'center'
})

export const Title = styled(Text)({
  fontSize: (p) => p.fontSize,
  fontFamily: 'habichat',
  color: (p) => p.color,
  textAlign: (p) => p.align
})
