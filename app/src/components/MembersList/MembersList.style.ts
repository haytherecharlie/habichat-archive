import styled from 'styled-components'
import { ScrollView, SafeAreaView, View, Text, Image } from 'react-native'

export const Wrapper = styled(SafeAreaView)({
  display: p => p.hide ? 'none' : 'flex',
  alignItems: 'flex-start'
})

export const ScrollList = styled(ScrollView)({
  padding: `10px 0`,
  width: `100%`
})

export const MemberWrapper = styled(View)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: `0 7px`,
  marginLeft: (p) => (p.first ? 20 : 7)
})

export const ImagePlaceholder = styled(Image)({
  height: 50,
  width: 50,
  borderRadius: 25,
  background: 'black'
})

export const Title = styled(Text)({
  color: `#000`,
  fontSize: 10
})
