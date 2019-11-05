import styled from 'styled-components'
import { TextInput, View, Text } from 'react-native'

export const Wrapper = styled(View)({
  marginTop: '10px',
  borderBottomWidth: `1px`,
  borderBottomColor: (p) => p.borderColor,
  padding: '10px 0px'
})
export const ErrorMsg = styled(Text)({
  color: 'red'
})

export const EmailInput = styled(TextInput)({
  color: (p) => p.primaryColor
})
