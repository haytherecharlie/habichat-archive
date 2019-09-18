import styled from 'styled-components'
import cityscape from 'assets/images/cityscape.jpg'

export const Home = styled('div')({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
})

export const Splash = styled('div')({
  height: '90vh',
  width: '100%',
  background: `url(${cityscape}) no-repeat 50% 20%`,
  backgroundSize: 'cover',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
})

export const ImageLogo = styled('img')({
  width: '60%',
  maxWidth: 300,
  height: 'auto'
})

export const Content = styled('div')({
  width: '100%',
  background: `#FFFFFF`,
  color: '#191d38',
  backgroundSize: 'cover',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem'
})

export const Title = styled('p')({
  marginTop: '3rem',
  fontSize: 40,
  color: '#191d38',
  fontWeight: 500,
  textAlign: 'center',
  '@media only screen and (max-width: 600px)': {
    fontSize: 30,
    width: 250
  }
})

export const Paragraph = styled('p')({
  color: '#191d38',
  fontWeight: 400,
  textAlign: 'center',
  maxWidth: 500,
  marginBottom: '5rem',
  overflowWrap: 'normal',
  '@media only screen and (max-width: 600px)': {
    fontSize: 17,
    width: 250
  }
})

export const Strong = styled('strong')({
  fontWeight: 700
})

export const PromoImage = styled('img')({
  width: '80%',
  maxWidth: 500,
  marginBottom: '5rem'
})

export const List = styled('ul')({
  marginBottom: '5rem',
})

export const Item = styled('li')({
  fontWeight: 400,
  '@media only screen and (max-width: 600px)': {
    fontSize: 17,
    width: 250
  }
})
