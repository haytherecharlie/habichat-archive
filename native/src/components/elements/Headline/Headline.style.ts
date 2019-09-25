import styled from 'styled-components'
import { HEADLINE, BLUE } from 'src/constants'
import { View, Text } from 'react-native'

export const Headline = styled(View)({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const Title = styled(Text)({
  fontSize: HEADLINE,
  color: BLUE,
  fontWeight: 600
})
