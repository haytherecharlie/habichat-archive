import styled from 'styled-components'
import cityscape from 'assets/images/cityscape.jpg'
import { IoIosArrowDown } from 'react-icons/io'

export const Home = styled('div')({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
})

export const Splash = styled('div')({
  height: '100vh',
  width: '1200px',
  borderLeft: '2px solid #3f416b',
  borderRight: '2px solid #3f416b',
  background: `url(${cityscape}) no-repeat 50% 20%`,
  backgroundSize: 'cover',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
})

export const ImageLogo = styled('img')({
  width: '80%',
  maxWidth: 300,
  height: 'auto'
})

export const ArrowDown = styled(IoIosArrowDown)({
  color: '#FFFFFF',
  fontSize: 50,
  position: 'absolute',
  bottom: 30
})
