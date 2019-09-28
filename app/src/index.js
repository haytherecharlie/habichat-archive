import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from 'services/redux'
import { GlobalStyle } from 'assets/styles'
import Router from 'routes/Router'

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router />
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
