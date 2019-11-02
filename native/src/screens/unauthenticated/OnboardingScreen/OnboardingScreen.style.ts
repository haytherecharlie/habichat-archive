import styled from 'styled-components'
import { View, Text, Image } from 'react-native'

export const Page = styled(View)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
})

export const Img = styled(Image)({
  height: 300,
  width: 300
})
