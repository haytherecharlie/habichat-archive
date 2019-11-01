import styled from 'styled-components'
import { View, Text, Image } from 'react-native'

export const Page = styled(View)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
})

export const Headline = styled(Text)({

})

export const Img = styled(Image)({
  height: 350,
  width: 350
})
