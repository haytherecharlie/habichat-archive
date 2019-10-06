import styled from 'styled-components'
import { TextInput, View, Text } from 'react-native'

export const Wrapper = styled(View)({})
export const ErrorMsg = styled(Text)({
  color: 'red'
})

export const EmailInput = styled(TextInput)({
  color: (p) => p.primaryColor
})
