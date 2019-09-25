import styled from 'styled-components'
import { BLUE, HEADLINE, RADIUS } from 'src/constants'
import { TextInput, View } from 'react-native'

export const Border = styled(View)({
  width: `100%`,
  padding: `20px 5px`,
  overflow: 'scroll'
})

export const Input = styled(TextInput)({
  color: BLUE,
  fontSize: HEADLINE
})
