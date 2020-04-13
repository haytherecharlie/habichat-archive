import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { initDataLayer } from 'utils/datalayer'
// import AuthenticatedRouter from 'routes/AuthenticatedRouter/AuthenticatedRouter'
import UnauthenticatedRouter from 'routes/UnauthenticatedRouter/UnauthenticatedRouter'

const Router = () => {
  initDataLayer()
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/app" render={() => <AuthenticatedRouter />} /> */}
        <Route path="/" render={() => <UnauthenticatedRouter />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
