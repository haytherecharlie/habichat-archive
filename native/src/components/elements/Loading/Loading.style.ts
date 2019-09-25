import styled from 'styled-components'
import { BACKGROUND } from 'src/constants'
import { View, Image } from 'react-native'

export const Loading = styled(View)({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const Spinner = styled(Image)({
  height: 60,
  width: 60
})
