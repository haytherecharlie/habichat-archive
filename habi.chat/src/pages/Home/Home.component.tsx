import React from 'react'
import { home } from 'config/analytics.json'
import logoOutline from 'assets/images/habichat-icon-outline.png'
// import { recordPageView } from 'utils/analytics'
import Helmet from 'components/Helmet'
import * as S from './Home.style'

const HomePage = () => {
  // recordPageView('HomePage')
  return (
    <S.Home>
      <Helmet seo={home} />
      <S.Splash>
        <S.ImageLogo src={logoOutline} />
        <S.ArrowDown />
      </S.Splash>
    </S.Home>
  )
}

export default HomePage
