import styled from 'styled-components'
import { TextInput, View, Text } from 'react-native'

export const Wrapper = styled(View)({
  marginTop: '10px',
  border: `1px solid #fff`,
  padding: '10px 20px',
  borderRadius: '25px'
})
export const ErrorMsg = styled(Text)({
  color: 'red'
})

export const EmailInput = styled(TextInput)({
  color: (p) => p.primaryColor
})
