import styled from 'styled-components'
import { View, TouchableOpacity, Text } from 'react-native'

export const Wrapper = styled(View)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `10px`
})

export const Button = styled(TouchableOpacity)({
  width: 24,
  height: 24,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#000',
  borderRadius: 12
})
