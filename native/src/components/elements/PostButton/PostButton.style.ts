import styled from 'styled-components'
import { TouchableOpacity, Text } from 'react-native'

export const PostButton = styled(TouchableOpacity)({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const Title = styled(Text)({
  fontSize: 20
})
