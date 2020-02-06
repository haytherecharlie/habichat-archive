import React from 'react'
import { Provider } from 'react-redux'
import { KeyboardAvoidingView } from 'react-native'
import { AppearanceProvider } from 'react-native-appearance'
import useBrowserStyle from './src/utils/hooks/useBrowserStyle'
import store from './src/services/redux'
import Router from './src/routes/Router'

const App = () => {
  useBrowserStyle()
  return (
    <AppearanceProvider>
      <Provider store={store}>
        <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
          <Router />
        </KeyboardAvoidingView>
      </Provider>
    </AppearanceProvider>
  )
}

export default App
