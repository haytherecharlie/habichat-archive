import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

export const INITIALIZE_APP = 'INITIALIZE_APP'
export const KEYBOARD_UP = 'KEYBOARD_UP'
export const DARK_MODE = 'DARK_MODE'

export const IMAGE_MESSAGE = 'IMAGE_MESSAGE'
export const NEW_MESSAGE_TEXT = 'NEW_MESSAGE_TEXT'

export const INITIALIZE_COMMUNITY = 'INITIALIZE_COMMUNITY'

export const ADD_MESSAGES = 'ADD_MESSAGES'
export const UPDATE_MESSAGES = 'UPDATE_MESSAGES'
export const DELETE_MESSAGES = 'DELETE_MESSAGES'

export const ADD_MEMBERS = 'ADD_MEMBERS'
export const UPDATE_MEMBERS = 'UPDATE_MEMBERS'
export const DELETE_MEMBERS = 'DELETE_MEMBERS'

const defaultState = {
  application: {
    initialized: false,
    keyboardUp: false,
    darkMode: false
  },
  members: [],
  message: {
    image: null,
    text: ''
  },
  messages: [],
  user: {
    authenticated: true,
    community: `OOIXUGXc828PGKWV6k8Q`,
    id: `SBcfp9wSqwp5gWn2Slzu`,
    email: 'charlie.hay@outlook.com',
    firstName: 'Charlie',
    lastName: 'hay',
    interests: [`Baseball`, `Kobe Bryant`]
  }
}

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case INITIALIZE_APP:
      return { ...state, application: { ...state.application, initialized: true, darkMode: action.darkMode } }
    case KEYBOARD_UP:
      return { ...state, application: { ...state.application, keyboardUp: action.status } }
    case DARK_MODE:
      return { ...state, application: { ...state.application, darkMode: action.status } }

    case INITIALIZE_COMMUNITY:
      return { ...state, members: action.members, messages: action.messages }
    case IMAGE_MESSAGE:
      return { ...state, message: { ...state.message, image: action.value } }
    case NEW_MESSAGE_TEXT:
      return { ...state, message: { ...state.message, text: action.value } }

    /**
     * Messages
     */
    case ADD_MESSAGES:
      let newMessage = state.messages.slice()
      newMessage.splice(newMessage.length, newMessage.length >= 50 ? 1 : 0, action.value)
      return { ...state, messages: newMessage }
    case UPDATE_MESSAGES:
      const updatedMessageIndex = state.messages.findIndex((x) => x.id === action.value.id)
      if (updatedMessageIndex !== -1) {
        let updatedMessage = state.messages.slice()
        updatedMessage.splice(updatedMessageIndex, 1, action.value)
        return { ...state, messages: updatedMessage }
      }
      return state
    case DELETE_MESSAGES:
      const deletedMessageIndex = state.messages.findIndex((x) => x.id === action.value.id)
      if (deletedMessageIndex !== -1) {
        let deletedMessage = state.messages.slice()
        deletedMessage.splice(deletedMessageIndex, 1)
        return { ...state, messages: deletedMessage }
      }
      return state

    /**
     * Members
     */
    case ADD_MEMBERS:
      let newMember = state.members.slice()
      newMember.splice(newMember.length, newMember.length >= 50 ? 1 : 0, action.value)
      return { ...state, members: newMember }
    case UPDATE_MEMBERS:
      const updatedMemberIndex = state.members.findIndex((x) => x.id === action.value.id)
      if (updatedMemberIndex !== -1) {
        let updatedMember = state.members.slice()
        updatedMember.splice(updatedMemberIndex, 1, action.value)
        return { ...state, members: updatedMember }
      }
      return state
    case DELETE_MEMBERS:
      const deletedMemberIndex = state.members.findIndex((x) => x.id === action.value.id)
      if (deletedMemberIndex !== -1) {
        let deletedMember = state.members.slice()
        deletedMember.splice(deletedMemberIndex, 1)
        return { ...state, members: deletedMember }
      }
      return state

    /**
     * Default
     */
    default:
      return state
  }
}

// export default __DEV__ ? createStore(reducer, composeWithDevTools()) : createStore(reducer)
export default createStore(reducer)
