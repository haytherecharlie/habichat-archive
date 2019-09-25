import styled from 'styled-components'
import { BLUE, HEADLINE } from 'src/constants'
export { default as Headline } from 'src/components/elements/Headline'
export { default as Chevron } from 'src/components/elements/Chevron'
import { View, Text, TouchableOpacity } from 'react-native'

export const Header = styled(View)({
  flex: `0 0 50px`,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  justifyContent: 'center'
})

export const Col = styled(View)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: (p) => p.float || 'center',
  justifyContent: 'center'
})

export const Button = styled(TouchableOpacity)({})

export const Chevron = styled(Text)({
  fontSize: 40,
  lineHeight: 40,
  color: BLUE,
  fontWeight: 400
})

