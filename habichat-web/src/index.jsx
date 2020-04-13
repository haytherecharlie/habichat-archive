import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from 'redux/store'
import Router from 'routes/Router/Router'
import GlobalStyle from 'assets/styles/global.style'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyle />
      <Router />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
