import styled from 'styled-components'
import { KeyboardAvoidingView, ImageBackground, View } from 'react-native'

export const PageWrapper = styled(KeyboardAvoidingView)({
  flex: 1,
  backgroundColor: (p) => p.backgroundColor
})

export const Backdrop = styled(ImageBackground)({
  height: '105%',
  width: '100%'
})

export const Padding = styled(View)({
  flex: 1,
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'center',
  padding: '20px'
})
