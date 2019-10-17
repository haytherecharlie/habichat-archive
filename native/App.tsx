import React from 'react'
import { Provider } from 'react-redux'
import { KeyboardAvoidingView } from 'react-native'
import { AppearanceProvider } from 'react-native-appearance'
import store from 'src/services/redux'
import Router from 'src/routes/Router'
import EmailInput from 'src/components/unauthenticated/EmailScreen/EmailInput'

const App = () => {
  return (
    <AppearanceProvider>
      <Provider store={store}>
        <Router />
      </Provider>
    </AppearanceProvider>
  )
}

export default App
