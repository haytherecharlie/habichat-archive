import { sizeTheme, colorTheme } from 'src/assets/style/theme.style'

const SET_DARK_MODE = 'SET_DARK_MODE'
const SET_SCREEN_SIZE = 'SET_SCREEN_SIZE'

export const setDarkMode = (variant) => ({ type: SET_DARK_MODE, variant })
export const setScreenSize = (variant) => ({ type: SET_SCREEN_SIZE, variant })

const defaultState = {
  ...colorTheme['light'],
  ...sizeTheme['medium']
}

export const reduceTheme = (state = defaultState, action) => {
  switch (action.type) {
    case SET_SCREEN_SIZE:
      return { ...state, ...sizeTheme[action.variant] }
    case SET_DARK_MODE:
      return { ...state, ...colorTheme[action.variant] }
    default:
      return state
  }
}
