import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import config from 'config'
import logoTextBlack from 'assets/images/logo-text-black.png'
import HomePage from 'views/HomePage/HomePage'
import TermsOfService from 'views/TermsOfService/TermsOfService'
import PrivacyPolicy from 'views/PrivacyPolicy/PrivacyPolicy'
import * as S from './styles/unauthenticatedRouter.style'

const UnauthenticatedRouter = () => {
  const { routes } = config
  return (
    <BrowserRouter basename={routes.unauthBasename}>
      <S.Header>
        <Link to="/">
          <S.HeaderLogoText src={logoTextBlack} />
        </Link>
      </S.Header>
      <S.Body>
        <S.RouteContainer>
          <Switch>
            <Route exact path={routes.homePage} component={HomePage} />
            <Route path={routes.termsOfService} component={TermsOfService} />
            <Route path={routes.privacyPolicy} component={PrivacyPolicy} />
          </Switch>
        </S.RouteContainer>
      </S.Body>
      <S.Footer>hello</S.Footer>
    </BrowserRouter>
  )
}

export default UnauthenticatedRouter
