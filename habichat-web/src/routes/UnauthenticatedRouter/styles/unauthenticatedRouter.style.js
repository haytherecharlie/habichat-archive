import styled from 'styled-components'

export const UnauthenticatedRouter = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  flex: 0 0 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-bottom: 1px solid #000;
`

export const HeaderLogoText = styled.img`
  height: 30px;
  width: auto;
`

export const Body = styled.div`
  min-height: calc(100vh - 110px);
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const RouteContainer = styled.div`
  flex: 1;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Footer = styled.div`
  flex: 0 0 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-top: 1px solid #000;
`
