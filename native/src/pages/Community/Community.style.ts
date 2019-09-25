import styled from 'styled-components'
import { BACKGROUND } from 'src/constants'
import { View, Text } from 'react-native'

export const Community = styled(View)({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: BACKGROUND
})

export const Title = styled(Text)({
  fontSize: 20
})
