import React from 'react'
import { Provider } from 'react-redux'
import store from 'src/services/redux'
import Router from 'src/routes/Router'

const Habichat = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default Habichat
