import { Appearance } from 'react-native-appearance'
import { Dimensions } from 'react-native'
const { width } = Dimensions.get('window')
const guidelineWidth = 350
const darkMode = Appearance.getColorScheme() === 'dark'
const scale = (size) => `${(width / guidelineWidth) * size}px`

const ASH = '#333333'
const BLACK = `#111111`
const CHARCOAL = '#222222'
const FOG = '#F8F8F8'
const GRAY = `#CCCCCC`
const HABICHAT = '#191D38'
const WHITE = '#FFFFFF'

export default {
  ACCENT_COLOR: HABICHAT,
  BACKGROUND_COLOR: darkMode ? CHARCOAL : FOG,
  FOREGROUND_COLOR: darkMode ? ASH : WHITE,
  SHADOW_COLOR: darkMode ? BLACK : GRAY,
  PRIMARY_COLOR: darkMode ? WHITE : CHARCOAL,
  SECONDARY_COLOR: darkMode ? HABICHAT : `rgba(0, 0, 0, 1)`,
  SPINNER_RADIUS: 40,
  FONT_SIZE_SMALL: scale(12),
  FONT_SIZE_MEDIUM: scale(14),
  FONT_SIZE_LARGE: scale(16),
  FONT_WEIGHT_LIGHT: 200,
  FONT_WEIGHT_MEDIUM: 600,
  FONT_WEIGHT_HEAVY: 800,
  MEDIA_QUERY_MOBILE: `@media only screen and (max-width: 750px)`,
  MEDIA_QUERY_TABLET: `@media only screen and (min-width: 751px)`,
  MEDIA_QUERY_DESKTOP: `@media only screen and (min-width: 1242px)`,
  HABICHAT_FONT: {
    fontFamily: `habichat`,
    textTransform: `uppercase`,
    letterSpacing: -1
  }
}
