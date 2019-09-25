import styled from 'styled-components'
import { BLUE, HEADLINE } from 'src/constants'
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
  alignItems: (p) => p.float,
  justifyContent: 'center'
})

export const Button = styled(TouchableOpacity)({})

export const Chevron = styled(Text)({
  fontSize: 40,
  lineHeight: 40,
  color: BLUE,
  fontWeight: 400
})

export const Title = styled(Text)({
  fontSize: HEADLINE,
  lineHeight: HEADLINE,
  color: BLUE,
  fontWeight: (p) => p.weight
})
