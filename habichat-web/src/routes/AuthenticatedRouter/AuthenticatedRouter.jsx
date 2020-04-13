import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import config from 'config'

const AuthenticatedRouter = () => {
  const { signedIn } = useSelector(s => s.auth)
  const { routes } = config

  const renderAuthenticatedRoutes = () => (
    <BrowserRouter basename={routes.AuthBasename}>
      <Switch>{/* <Route path={routes.ErrorPage} component={ErrorPage} /> */}</Switch>
    </BrowserRouter>
  )

  return signedIn ? renderAuthenticatedRoutes() : <Redirect to={routes.SignInPage} />
}

export default AuthenticatedRouter
