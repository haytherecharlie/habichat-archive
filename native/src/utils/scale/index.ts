import { Dimensions } from 'react-native'
const { width } = Dimensions.get('window')

const scale = (size) => {
  return (width / 350) * size
}

export default scale
