import styled from 'styled-components'

export const Row = styled('div')({
  border: `1px solid #000`,
  flex: 1,
  width: '100vw',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  justifyContent: 'stretch'
})

export const Col = styled('div')({
  border: `1px solid #000`,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'stretch'
})
