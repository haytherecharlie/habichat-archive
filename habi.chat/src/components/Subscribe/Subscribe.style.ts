import styled from 'styled-components'

export const Subscribe = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '5rem'
})

export const Title = styled('span')({
  fontSize: 30,
  fontFamily: 'habichat',
  fontWeight: 900,
  textAlign: 'center',
  '@media only screen and (max-width: 600px)': {
    fontSize: 20,
    width: 250
  }
})

export const SubTitle = styled('span')({
  textAlign: 'center',
  fontSize: 15,
  fontWeight: 800,
  '@media only screen and (max-width: 600px)': {
    fontSize: 13,
    width: 250
  }
})

export const InputContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '2rem',
  width: '100%',
  maxWidth: 600
})

export const Input = styled('input')({
  border: '1px solid #191d38',
  borderRadius: 5,
  height: 40,
  padding: 10,
  fontSize: 15,
  minWidth: 300,
  textAlign: 'center'
})

export const Button = styled('button')({
  height: 40,
  fontSize: 15,
  fontWeight: 600,
  borderRadius: 5,
  color: '#FFF',
  background: '#F16B6C',
  border: 'none',
  marginTop: '1rem'
})
