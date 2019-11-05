import styled from 'styled-components'
import { View, Text } from 'react-native'

export const BodyText = styled(View)({
  width: '100%',
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'center'
})

export const Title = styled(Text)({
  fontSize: (p) => p.fontSize,
  color: (p) => p.color,
  textAlign: (p) => p.align
})
