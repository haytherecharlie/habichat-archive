import styled from 'styled-components'

export const BlogTitle = styled('h1')({
  fontFamily: `'Bebas Neue', sans-serif`,
  fontWeight: 400,
  fontSize: `60px`,
  lineHeight: '60px'
})

export const BlogDate = styled('h2')({
  fontFamily: `'Bebas Neue', sans-serif`,
  fontWeight: 400,
  fontSize: `20px`,
  lineHeight: '20px',
  marginBottom: '20px'
})

export const Content = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'flex-start',
  pre: {
    flex: 1,
    background: `#111`
  }
})
