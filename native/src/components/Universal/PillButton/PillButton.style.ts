import styled from 'styled-components'
import { TouchableOpacity, Text } from 'react-native'

export const PillButton = styled(TouchableOpacity)({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: (p) => p.backgroundColor,
  border: (p) => `2px solid ${p.border}`,
  borderRadius: p => p.borderRadius
})

export const Title = styled(Text)({
  color: (p) => p.color,
  fontSize: p => p.fontSize,
  padding: p => p.padding,
  fontWeight: 500
})
