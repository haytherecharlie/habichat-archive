import { AsyncStorage } from 'react-native'

export const getAsyncStorage = async (key) => {
  try {
    return await AsyncStorage.getItem(key)
  } catch (err) {
    throw `useAsyncStorage: Get Item Error.`
  }
}

export const setAsyncStorage = async (key, value) => {
  try {
    return await AsyncStorage.setItem(key, value)
  } catch (err) {
    throw `useAsyncStorage: Set Item Error.`
  }
}
