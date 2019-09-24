import styled from 'styled-components'
import { View, Text } from 'react-native'

export const Profile = styled(View)({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const NickName = styled(Text)({
  fontSize: 20
})

export const Icon = styled(Text)({
  fontSize: 50
})
