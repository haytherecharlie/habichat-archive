import styled from 'styled-components'
import { KeyboardAvoidingView } from 'react-native'

export const PageWrapper = styled(KeyboardAvoidingView)({
  flex: 1,
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'center',
  backgroundColor: (p) => p.backgroundColor,
  padding: `0px 10px`
})
