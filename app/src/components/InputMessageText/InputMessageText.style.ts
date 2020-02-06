import styled from 'styled-components'
import { View, TextInput } from 'react-native'

export const Wrapper = styled(View)({
  flex: 1,
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'center'
})

export const Input = styled(TextInput)({
  maxHeight: 60,
  fontSize: 14,
  padding: `0px 10px`
})
