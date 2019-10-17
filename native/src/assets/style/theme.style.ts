const BLACK = '#000000'
const WHITE = '#FFFFFF'
const GRAY = '#F8F8F8'
const BLUE = '#191D38'
const OCEAN = '#676E93'

export const colorTheme = {
  dark: {
    darkMode: true,
    primaryColor: BLUE,
    secondaryColor: WHITE,
    accentColor: OCEAN
  },
  light: {
    darkMode: false,
    primaryColor: WHITE,
    secondaryColor: BLUE,
    accentColor: OCEAN
  }
}

export const sizeTheme = {
  large: {
    largeText: '20px',
    mediumText: '18px',
    smallText: '16px',
    veritcalSpacing: '10px',
    radius: '25px'
  },
  medium: {
    largeText: '18px',
    mediumText: '16px',
    smallText: '14px',
    veritcalSpacing: '10px',
    radius: '25px'
  },
  small: {
    largeText: '16px',
    mediumText: '14px',
    smallText: '12px',
    veritcalSpacing: '10px',
    radius: '25px'
  }
}
