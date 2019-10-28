import styled from 'styled-components'
import { View, Text } from 'react-native'

const baseStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
  // border: '1px solid #000'
}

export const First = styled(View)({
  ...baseStyle,
  flex: 2,
  justifyContent: 'center'
})

export const Second = styled(View)({
  ...baseStyle,
  flex: 4,
  justifyContent: 'center'
})

export const Third = styled(View)({
  ...baseStyle,
  flex: 1,
  justifyContent: 'space-around'
})

export const Fourth = styled(View)({
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-around',
  paddingTop: '20px'
})
