import styled from 'styled-components'
import { colors } from 'assets/styles'

export const Footer = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  color: colors.white,
  backgroundColor: colors.blue
})

export const Title = styled('span')({
  fontSize: 15,
  margin: '1rem 0'
})

export const Copyright = styled('span')({
  fontSize: 13,
  marginBottom: '1rem'
})
