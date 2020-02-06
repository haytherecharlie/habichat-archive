import { useEffect } from 'react'
import { Appearance } from 'react-native-appearance'
import { Platform, Keyboard } from 'react-native'
import * as Font from 'expo-font'
import habichat from 'assets/fonts/habichat.otf'
import { INITIALIZE_APP, INITIALIZE_COMMUNITY, KEYBOARD_UP, DARK_MODE } from 'services/redux'
import { db } from 'services/firebase'
import { useDispatch } from 'react-redux'

const useInitialization = (authenticated, community) => {
  const dispatch = useDispatch()

  const initializeApp = async () => {
    const darkMode = Appearance.getColorScheme() === 'dark'
    await Font.loadAsync({ habichat })
    dispatch({ type: INITIALIZE_APP, darkMode })
  }

  const intializeCommunity = async (types) => {
    const messagesRef = db.collection(`communities/${community}/messages`)
    const membersRef = db.collection(`communities/${community}/members`)

    const [messages, members] = await Promise.all([messagesRef.limit(50).get(), membersRef.limit(50).get()])
    const messagesData = []
    messages.forEach((doc) => messagesData.push({ id: doc.id, ...doc.data() }))

    const membersData = []
    members.forEach((doc) => membersData.push({ id: doc.id, ...doc.data() }))
    membersData.sort(() => 0.5 - Math.random())

    dispatch({ type: INITIALIZE_COMMUNITY, members: membersData, messages: messagesData })
  }

  useEffect(() => {
    initializeApp()
    const keyboardShown = Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow'
    const keyboardHidden = Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide'
    const keyboardDidShowListener = Keyboard.addListener(keyboardShown, () => dispatch({ type: KEYBOARD_UP, status: true }))
    const keyboardDidHideListener = Keyboard.addListener(keyboardHidden, () => dispatch({ type: KEYBOARD_UP, status: false }))
    const darkModeListener = Appearance.addChangeListener(({ colorScheme }) => dispatch({ type: DARK_MODE, status: colorScheme === 'dark' }))

    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
      darkModeListener.remove()
    }
  }, [])

  useEffect(() => {
    authenticated === true ? intializeCommunity(['messages']) : false
  }, [authenticated])
}

export default useInitialization
