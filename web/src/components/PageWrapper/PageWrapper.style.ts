import styled from 'styled-components'

export const PageWrapper = styled('div')({
  width: '100vw',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'flex-start',
  background: '#FFF',
  color: '#222'
})

export const PageContent = styled('div')({
  flex: 1,
  maxWidth: '1000px',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
})

export const Title = styled('span')({
  fontSize: 20
})
