const START_LOADING = 'START_LOADING'
const STOP_LOADING = 'STOP_LOADING'

export const startLoading = (screen) => ({ type: START_LOADING, screen })
export const stopLoading = (screen) => ({ type: STOP_LOADING, screen })

const defaultState = {
  emailScreen: {
    loading: false
  },
  landingScreen: {
    loading: false
  },
  onboardingScreen: {
    loading: false
  },
  verifyScreen: {
    loading: false
  },
  communityScreen: {
    loading: false
  },
  postScreen: {
    loading: false
  },
  profileScreen: {
    loading: false
  }
}

export const reduceScreens = (state = defaultState, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, [action.screen]: { ...state[action.screen], loading: true } }
    case STOP_LOADING:
      return { ...state, [action.screen]: { ...state[action.screen], loading: false } }
    default:
      return state
  }
}
