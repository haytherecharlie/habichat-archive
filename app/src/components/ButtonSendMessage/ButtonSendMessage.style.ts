import styled from 'styled-components'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { View, TouchableOpacity, Text } from 'react-native'

export const Wrapper = styled(View)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `7px`
})

export const Button = styled(TouchableOpacity)({
  background: `#000`,
  height: 30,
  width: 30,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 15
})

export const Icon = styled(Ionicon)({
  marginLeft: 2
})
