import styled from 'styled-components'
import { BLUE, PADDING, RADIUS } from 'src/constants'
import { TextInput, View } from 'react-native'

export const Border = styled(View)({
  border: `1px solid ${BLUE}`,
  borderRadius: RADIUS,
  width: `100%`,
  padding: PADDING,
  maxHeight: 150
})

export const Input = styled(TextInput)({
  color: BLUE
})
