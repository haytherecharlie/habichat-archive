import styled from 'styled-components'
import { View } from 'react-native'

export const First = styled(View)({
  flex: 1,
  display: 'flex'
  // border: `1px solid yellow`
})

export const Second = styled(View)({
  flex: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
  // border: `1px solid orange`
})

export const Third = styled(View)({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
  // border: `1px solid green`
})

export const Fourth = styled(View)({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  maxWidth: '300px',
  margin: 'auto'
  // border: `1px solid blue`
})

export const Fifth = styled(View)({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingTop: 30
  // border: `1px solid purple`
})
