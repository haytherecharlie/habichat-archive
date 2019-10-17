import React from 'react'
import { Provider } from 'react-redux'
import { KeyboardAvoidingView } from 'react-native'
import { AppearanceProvider } from 'react-native-appearance'
import store from 'src/services/redux'
import UniversalRouter from 'src/routes/UniversalRouter'
import EmailInput from 'src/components/unauthenticated/EmailScreen/EmailInput'

const App = () => {
  return (
    <AppearanceProvider>
      <Provider store={store}>
        <UniversalRouter />
      </Provider>
    </AppearanceProvider>
  )
}

export default App
