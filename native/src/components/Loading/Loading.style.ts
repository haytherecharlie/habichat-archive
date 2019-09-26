import styled from 'styled-components'
import { BACKGROUND } from 'src/constants'
import { View, Image } from 'react-native'

export const Wrapper = styled(View)({
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  zIndex: 300,
  background: '#FFFFFF'
})

export const Spinner = styled(Image)({
  height: 60,
  width: 60
})
