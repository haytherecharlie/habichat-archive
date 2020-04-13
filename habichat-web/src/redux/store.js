import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import devToolsEnhancer from 'remote-redux-devtools'
import storage from 'redux-persist/lib/storage'
import { connect } from 'react-redux'

export const signIn = () => ({
  type: 'SIGN_IN'
})

export const signOut = () => ({
  type: 'SIGN_OUT'
})

export const saveContent = content => ({
  type: 'SAVE_CONTENT',
  content
})

export const clearContent = () => ({
  type: 'CLEAR_CONTENT'
})

export const noInternet = () => ({
  type: 'NO_INTERNET'
})

const initialAppState = { noInternet: false }
const initialAuthState = { signedIn: false }
const initialContentState = {}
const rootReducer = combineReducers({
  app: (state = initialAppState, action) => {
    switch (action.type) {
      case 'NO_INTERNET':
        return {
          ...state,
          noInternet: true
        }
      default:
        return state
    }
  },
  auth: (state = initialAuthState, action) => {
    switch (action.type) {
      case 'SIGN_IN':
        return {
          ...state,
          signedIn: true
        }
      case 'SIGN_OUT':
        return {
          ...state,
          signedIn: false
        }
      default:
        return state
    }
  },
  content: (state = initialContentState, action) => {
    switch (action.type) {
      case 'SAVE_CONTENT':
        return {
          ...state,
          ...action.content
        }
      case 'CLEAR_CONTENT':
        return state
      default:
        return state
    }
  }
})

const store = createStore(persistReducer({ key: 'app', storage }, rootReducer), devToolsEnhancer())
const persistor = persistStore(store)

export { store, persistor, connect }
