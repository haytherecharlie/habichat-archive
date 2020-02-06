import styled from 'styled-components'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { View, Text } from 'react-native'

const calculateHeight = () => {
  const sHeight = getStatusBarHeight()
  return sHeight === 'X' || sHeight === 0 ? 20 : sHeight
}

export const StatusBar = styled(View)({
  flex: `0 0 ${calculateHeight()}px`,
  background: `#000`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})
