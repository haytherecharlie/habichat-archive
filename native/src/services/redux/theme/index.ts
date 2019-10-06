import { lightTheme, darkTheme } from 'src/assets/style/theme.style'

const SET_DARK_MODE = 'SET_DARK_MODE'

export const setDarkMode = (darkMode) => ({ type: SET_DARK_MODE, darkMode })

const defaultState = lightTheme

export const reduceTheme = (state = defaultState, action) => {
  switch (action.type) {
    case SET_DARK_MODE:
      return { ...state, ...action.darkMode ? darkTheme : lightTheme }
    default:
      return state
  }
}
