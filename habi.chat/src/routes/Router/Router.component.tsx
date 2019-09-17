import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import GlobalStyle from 'assets/styles/global.style'
import Home from 'pages/Home'
import TermsOfService from 'pages/TermsOfService'
import PrivacyPolicy from 'pages/PrivacyPolicy'

const HomePage = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/terms" component={TermsOfService} />
        <Route exact path="/privacy" component={PrivacyPolicy} />
        <Route path="/**" render={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  )
}

export default HomePage
