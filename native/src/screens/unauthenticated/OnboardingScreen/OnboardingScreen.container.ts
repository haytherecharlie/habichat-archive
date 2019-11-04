import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import OnboardingScreen from './OnboardingScreen.component'

export const state = (state) => {
  return {}
}

export const dispatch = {}

export default connect(
  state,
  dispatch
)(withNavigation(OnboardingScreen))
