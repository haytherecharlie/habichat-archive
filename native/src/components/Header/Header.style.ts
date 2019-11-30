import styled from 'styled-components'
import { View, Text } from 'react-native'

export const Header = styled(View)({
  flex: `0 0 40px`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const Title = styled(Text)({
  fontSize: 20
})
