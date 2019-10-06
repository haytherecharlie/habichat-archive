import styled from 'styled-components'
import { KeyboardAvoidingView } from 'react-native'

export const PageWrapper = styled(KeyboardAvoidingView)({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: (p) => p.backgroundColor
})
