import React from 'react'
import Sentry from 'sentry-expo';
import { Provider } from 'react-redux'
import config from 'config'
import Router from 'routes/Router/Router'

const { redux } = config
const App = () => (redux.persistStore ? persistedApp() : sessionApp())
Sentry.config('https://c8531cac531744ee97672b268c42f65e@sentry.io/1519128').install();

const persistedApp = () => {
  const { store, persistor } = require('lib/redux')
  const { PersistGate } = require('redux-persist/integration/react')
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  )
}

const sessionApp = () => {
  const { store } = require('lib/redux')
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App
