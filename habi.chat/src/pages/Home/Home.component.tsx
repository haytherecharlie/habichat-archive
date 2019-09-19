import React from 'react'
import { home } from 'config/analytics.json'
import logoOutline from 'assets/images/habichat-icon-outline.png'
import { recordPageView } from 'utils/analytics'
import Subscribe from 'components/Subscribe'
import Helmet from 'components/Helmet'
import ScrollDown from 'components/ScrollDown'
import Footer from 'components/Footer'
import promo from 'assets/images/promo.jpg'
import * as S from './Home.style'

const HomePage = () => {
  recordPageView('/')
  return (
    <S.Home>
      <Helmet seo={home} />
      <S.Splash>
        <S.ImageLogo src={logoOutline} />
        <ScrollDown />
      </S.Splash>
      <S.Content>
        <S.Title>Welcome to the Community</S.Title>
        <S.Paragraph>
          There is so much going on in our neighbourhood - <S.Strong>Habichat</S.Strong> makes it
          easy to connect, share and stay informed about everything happening at <S.Strong>Harbour View
          Estates.</S.Strong>
        </S.Paragraph>
        <S.PromoImage src={promo} />
        <S.List>
          <S.Item>Meet the neighbours.</S.Item>
          <S.Item>Find new friends.</S.Item>
          <S.Item>Find sports partners or create a sports team.</S.Item>
          <S.Item>Find service providers (dog walkers, babysitters, housekeepers.)</S.Item>
          <S.Item>Buy and sell goods.</S.Item>
          <S.Item>Ask for recommendations about places in the neighbourhood.</S.Item>
          <S.Item>Get updates about events around Harbour View Estates</S.Item>
        </S.List>
        <Subscribe />
        <Footer />
      </S.Content>
    </S.Home>
  )
}

export default HomePage
