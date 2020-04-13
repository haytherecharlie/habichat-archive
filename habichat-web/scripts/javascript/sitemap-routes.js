import React from 'react'
import { Switch, Route } from 'react-router'
import config from '../../src/config/app-services.global.json'

const { routes } = config
export default (
  <Switch>
    <Route path={routes.termsOfService} />
    <Route path={routes.privacyPolicy} />
  </Switch>
)
