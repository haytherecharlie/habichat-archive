import styled from 'styled-components'
import { BLUE, BACKGROUND } from 'src/constants'
import { TextInput, View } from 'react-native'

export const Input = styled(TextInput)({
  flex: 1,
  padding: 5,
  color: BLUE,
  fontSize: 20,
  backgroundColor: BACKGROUND
})
