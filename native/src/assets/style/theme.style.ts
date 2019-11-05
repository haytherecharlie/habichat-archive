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
    onboardingImageDiameter: '300px',
    fontSize: {
      h1: '34px',
      h2: '23px',
      h3: '18px',
      h4: '15px',
      h5: '12px'
    },
    veritcalSpacing: '10px',
    radius: '25px'
  },
  medium: {
    onboardingImageDiameter: '275px',
    fontSize: {
      h1: '28px',
      h2: '23px',
      h3: '18px',
      h4: '15px',
      h5: '12px'
    },
    veritcalSpacing: '10px',
    radius: '25px'
  },
  small: {
    onboardingImageDiameter: '250px',
    fontSize: {
      h1: '28px',
      h2: '23px',
      h3: '18px',
      h4: '15px',
      h5: '12px'
    },
    veritcalSpacing: '10px',
    radius: '25px'
  }
}
