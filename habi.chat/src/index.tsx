import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'routes/Router'
import { initDataLayer } from 'utils/analytics'
import { Provider } from 'react-redux'
import store from 'services/redux'
import * as workers from 'utils/workers'
initDataLayer()

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
)
workers.unregister()
