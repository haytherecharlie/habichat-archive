import styled from 'styled-components'

export const AppWrapper = styled('div')({
  flex: 1,
  width: '100vw',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  justifyContent: 'stretch',
  background: '#fff'
})

export const LeftPane = styled('div')({
  flex: 1,
  background: 'blue'
})

export const RightPane = styled('div')({
  flex: `0 0 ${p => p.open ? 300 : 0}`,
  background: 'orange'
})
