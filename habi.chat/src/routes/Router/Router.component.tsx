import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { GlobalStyle } from 'assets/styles'
import Home from 'pages/Home'
import TermsOfService from 'pages/TermsOfService'
import PrivacyPolicy from 'pages/PrivacyPolicy'
import Community from 'pages/Community'
import Template from 'pages/Template'

const HomePage = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/terms" component={TermsOfService} />
      <Route exact path="/privacy" component={PrivacyPolicy} />
      <Route exact path="/community" component={Community} />
      <Route exact path="/template" component={Template} />
      <Route path="/**" render={() => <Redirect to="/" />} />
    </Switch>
  </BrowserRouter>
)

export default HomePage
