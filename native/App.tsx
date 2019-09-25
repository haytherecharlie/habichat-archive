import React from 'react'
import { Provider } from 'react-redux'
import store from 'src/services/redux'
import Router from 'src/routes/Router'
import StatusBar from 'src/components/elements/StatusBar'

const Habichat = () => {
  return (
    <Provider store={store}>
      <StatusBar />
      <Router />
    </Provider>
  )
}

export default Habichat
