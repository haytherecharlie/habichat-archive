import { Dimensions } from 'react-native'
const { width } = Dimensions.get('window')
const guidelineWidth = 350

export default function scale(size) {
  return `${(width / guidelineWidth) * size}px`
}
