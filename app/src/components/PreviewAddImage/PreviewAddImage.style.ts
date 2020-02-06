import styled from 'styled-components'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { View, ImageBackground, TouchableOpacity, Text } from 'react-native'

export const Wrapper = styled(View)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: `space-between`,
  padding: (p) => `${p.padding}px`,
})

export const Preview = styled(ImageBackground)({
  height: 50,
  width: 50,
  resizeMode: 'cover'
})

export const Button = styled(TouchableOpacity)({
  position: 'absolute',
  top: 0,
  right: -5,
  height: 24,
  width: 24,
  background: `#000`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 12,
  zIndex: 10
})

export const Icon = styled(Ionicon)({
  zIndex: 11
})
