import styled from 'styled-components'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { View, Text, TouchableOpacity, Image } from 'react-native'

const calculateHeight = () => {
  const sHeight = getStatusBarHeight()
  return sHeight === 44 ? 30 : 10
}

export const Wrapper = styled(View)({
  maxWidth: `700px`,
})

export const Placeholder = styled(View)({
  flex: 1,
  background: '#f8f8f8'
})

export const Header = styled(View)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `20px`,
  background: '#f8f8f8'
})

export const Navigation = styled(View)({
  flexDirection: 'column',
  background: `#f8f8f8`,
  paddingTop: 10
})

export const CirclePlaceholder = styled(View)({
  height: 50,
  width: 50,
  borderRadius: 30,
  background: `#000`
})

export const Footer = styled(View)({
  background: `#f8f8f8`,
  borderTopWidth: 1,
  borderTopColor: `#cccccc`,
  padding: `10px`,
  display: 'flex',
  flexDirection: 'row',
  paddingBottom: (p) => (p.keyboardUp ? 10 : calculateHeight())
})

export const InputWrapper = styled(View)({
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
  border: `1px solid #000`,
  borderRadius: `20px`
})
