import styled from 'styled-components'
import { BLUE } from 'src/constants'
import { KeyboardAvoidingView, TextInput } from 'react-native'

export const NewPost = styled(KeyboardAvoidingView)({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#F8F8F8'
})

export const Title = styled(TextInput)({
  fontSize: 20,
  color: BLUE
})
