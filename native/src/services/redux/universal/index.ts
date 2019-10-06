import { Appearance } from 'react-native-appearance'

const defaultState = {
  colorTheme: Appearance.getColorScheme()
}

export const reduceUniversal = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
