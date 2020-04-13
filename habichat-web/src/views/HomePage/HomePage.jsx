import React from 'react'
import config from 'config'
import Helmet from 'components/Helmet/Helmet'
import logoSplash from 'assets/images/logo-splash.jpg'
import { recordPageView } from 'utils/datalayer'
import * as S from './styles/homePage.style'

const HomePage = () => {
  recordPageView('HomePage')
  return (
    <S.HomePage>
      <Helmet seo={config.seo.homePage} />
      <S.ImageLogo src={logoSplash} />
    </S.HomePage>
  )
}

export default HomePage
