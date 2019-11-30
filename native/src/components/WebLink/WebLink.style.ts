import styled from 'styled-components'
import { TouchableOpacity, Text } from 'react-native'

export const WebLink = styled(TouchableOpacity)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const Title = styled(Text)({
  fontSize: (p) => p.fontSize,
  color: (p) => p.color
})
