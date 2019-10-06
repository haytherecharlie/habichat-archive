import styled from 'styled-components'
import { View, Text } from 'react-native'

export const Loading = styled(View)({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: p => p.backgroundColor
})