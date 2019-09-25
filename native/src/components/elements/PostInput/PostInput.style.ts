import styled from 'styled-components'
import { BLUE, HEADLINE, RADIUS } from 'src/constants'
import { TextInput, View } from 'react-native'

export const PostInput = styled(View)({
  flex: `0 0 400px`,
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'flex-start',
  padding: `20px 5px`
})

export const Input = styled(TextInput)({
  flex: 1,
  color: BLUE,
  fontSize: HEADLINE
})
