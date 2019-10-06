const BLACK = '#000000'
const WHITE = '#FFFFFF'
const GRAY = '#F8F8F8'
const BLUE = '#191D38'
const OCEAN = '#676E93'

export const colorTheme = {
  dark: {
    darkMode: true,
    backgroundColor: BLUE,
    primaryColor: WHITE,
    secondaryColor: OCEAN
  },
  light: {
    darkMode: false,
    backgroundColor: WHITE,
    primaryColor: BLUE,
    secondaryColor: OCEAN
  }
}

export const sizeTheme = {
  large: {
    fontSize: 18
  },
  medium: {
    fontSize: 15
  },
  small: {
    fontSize: 12
  }
}

export const lightTheme = {
  darkMode: false,
  backgroundColor: WHITE,
  primaryColor: BLUE
}

export const darkTheme = {
  darkMode: true,
  backgroundColor: BLUE,
  primaryColor: WHITE
}
