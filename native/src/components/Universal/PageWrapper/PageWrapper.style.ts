import styled from 'styled-components'
import { View } from 'react-native'

export const PageWrapper = styled(View)({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: (p) => p.backgroundColor
})
