import React from 'react'
import { Provider } from 'react-redux'
import { View } from 'react-native'
import { AppearanceProvider } from 'react-native-appearance'
import store from 'src/services/redux'
import StatusBar from 'src/components/StatusBar'
import UniversalRouter from 'src/routes/UniversalRouter'

const App = () => {
  return (
    <AppearanceProvider>
      <Provider store={store}>
        <StatusBar />
        <UniversalRouter />
      </Provider>
    </AppearanceProvider>
  )
}

export default App
