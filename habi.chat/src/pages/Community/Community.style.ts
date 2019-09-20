import styled from 'styled-components'
import { colors } from 'assets/styles'

export const Community = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'stretch',
  backgroundColor: colors.white,
  padding: '2rem 1rem'
})

export const Divider = styled('div')({
  height: '1rem',
  width: '100%'
})

export const BoxRow = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start'
})

export const BoxLeft = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
})

export const BoxRight = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  justifyContent: 'center'
})

export const Img = styled('img')({ height: 40 })
export const CommunityName = styled('span')({
  color: colors.blue,
  fontSize: '.9rem',
  fontWeight: 500
})

export const ProfileCircle = styled('img')({
  height: 40,
  width: 40,
  borderRadius: '50%',
  backgroundColor: 'orange'
})

export const SectionTitle = styled('span')({
  fontFamily: 'habichat',
  color: colors.blue,
  fontSize: '1rem'
})

export const MemberList = styled('div')({
  height: 40,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  overflowX: 'scroll'
})

export const MemberCircle = styled('img')({
  height: 30,
  width: 30,
  borderRadius: '50%',
  backgroundColor: 'orange',
  marginLeft: '.5rem'
})
