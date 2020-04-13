import { createStore, combineReducers } from 'redux'
import { connect } from 'react-redux'
import devToolsEnhancer from 'remote-redux-devtools'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import mockContent from './mocks/community.json'
import mockProfile from './mocks/profile.json'
import config from 'config'

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

export const toggleModal = () => ({
  type: 'TOGGLE_MODAL'
})

const initialAppState = { noInternet: false, showModal: false }
const initialAuthState = { signedIn: false }
const initialContentState = mockContent
const initialProfileState = mockProfile
const rootReducer = combineReducers({
  app: (state = initialAppState, action) => {
    switch (action.type) {
      case 'NO_INTERNET':
        return {
          ...state,
          noInternet: true
        }
      case 'TOGGLE_MODAL':
        return {
          ...state,
          showModal: !state.showModal
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
  },
  profile: (state = initialProfileState, action) => {
    switch (action.type) {
      case 'SAVE_PROFILE':
        return {
          ...state,
          ...action.profile
        }
      case 'CLEAR_PROFILE':
        return state
      default:
        return state
    }
  }
})

const { redux } = config
const store = redux.persistStore
  ? createStore(persistReducer({ key: 'content', storage }, rootReducer), devToolsEnhancer())
  : createStore(rootReducer, devToolsEnhancer())
const persistor = persistStore(store)

export { store, persistor, connect }
