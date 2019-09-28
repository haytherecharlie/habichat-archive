import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Community from 'pages/Community'
import Profile from 'pages/Profile'
import { documentListener } from 'services/firebase'
import types from 'prop-types'

export const Router = ({ subAccount, unsubAccount }) => {
  useEffect(() => {
    documentListener('account', subAccount)
    return () => Promise.all([unsubAccount()])
  }, [subAccount, unsubAccount])

  return (
    <BrowserRouter basePath="/">
      <Switch>
        <Route exact path="/" component={Community} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  )
}

Router.propTypes = {
  subAccount: types.func.isRequired,
  unsubAccount: types.func.isRequired
}

export default Router
