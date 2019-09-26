import styled from 'styled-components'
import { BLUE, LARGE, LIGHTBLUE, BACKGROUND } from 'src/constants'
import { View, Text, TouchableOpacity } from 'react-native'

export const Wrapper = styled(View)({
  flex: `0 0 50px`,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  justifyContent: 'center',
  backgroundColor: BACKGROUND
})

export const Col = styled(View)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'center'
})

export const BackButton = styled(TouchableOpacity)({
  flex: 1,
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'center'
})

export const BackButtonText = styled(Text)({
  color: BLUE,
  fontSize: 30
})

export const HeaderTitle = styled(Text)({
  color: BLUE,
  fontSize: 20,
  fontWeight: 700,
  textAlign: 'center'
})

export const PostButton = styled(TouchableOpacity)({
  flex: 1,
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'center'
})

export const PostButtonTitle = styled(Text)({
  color: LIGHTBLUE,
  fontSize: 20,
  fontWeight: 400,
  textAlign: 'right'
})
