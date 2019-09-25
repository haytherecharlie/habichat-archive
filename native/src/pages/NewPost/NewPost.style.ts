import styled from 'styled-components'
import { BLUE, BACKGROUND, PADDING } from 'src/constants'
import { KeyboardAvoidingView, TextInput } from 'react-native'

export const NewPost = styled(KeyboardAvoidingView)({
  flex: 1,
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'flex-start',
  backgroundColor: BACKGROUND,
  padding: PADDING
})

export const Title = styled(TextInput)({
  fontSize: 20,
  color: BLUE
})
