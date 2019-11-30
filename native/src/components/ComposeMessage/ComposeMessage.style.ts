import styled from 'styled-components'
import { BLUE } from 'src/assets/style/theme.style'
import { View, TouchableOpacity, TextInput } from 'react-native'

export const ComposeMessage = styled(View)({
  flex: `0 0 90px`,
  display: 'flex',
  flexDirection: `row`,
  alignItems: 'center',
  justifyContent: 'center',
  padding: `20px 20px 30px 20px`,
  borderTopWidth: `1px`,
  borderTopColor: `#CCC`
})

export const InputContainer = styled(View)({
  border: (p) => `1px solid ${p.borderColor}`,
  borderRadius: 60,
  height: 40,
  flex: 1,
  display: `flex`,
  flexDirection: `row`,
  alignItems: `stretch`,
  justifyContent: `center`,
})

export const InputWrapper = styled(View)({
  flex: `1`,
  padding: `0 15px`
})

export const Input = styled(TextInput)({
  flex: 1,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
  paddingLeft: 5
})

export const SendButtonWrapper = styled(View)({
  flex: `0 0 38px`,
  padding: `1px`
})

export const SendButton = styled(TouchableOpacity)({
  background: (p) => p.background,
  flex: 1,
  borderRadius: `50px`,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
  paddingLeft: 5
})
