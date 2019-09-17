import styled from 'styled-components'
import { IoIosArrowDown } from 'react-icons/io'

export const ScrollDown = styled('div')({
  position: 'absolute',
  bottom: 30,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ArrowDown = styled(IoIosArrowDown)({
  color: '#FFFFFF',
  fontSize: 40,
})

export const Label = styled('div')({
  fontWeight: 500,
  fontSize: 15
})
