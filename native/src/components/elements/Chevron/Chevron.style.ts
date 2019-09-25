import styled from 'styled-components'
import { CHEVRON, BLUE } from 'src/constants'
import { View, Text } from 'react-native'

export const Chevron = styled(View)({
  flex: 1,
  display: 'flex',
  alignItems: (p) => p.align || 'center',
  justifyContent: 'center'
})

export const Title = styled(Text)({
  fontSize: CHEVRON,
  fontWeight: 300,
  lineHeight: CHEVRON
})
