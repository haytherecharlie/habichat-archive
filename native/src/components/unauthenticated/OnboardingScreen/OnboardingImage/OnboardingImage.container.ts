import { path } from 'ramda'
import { connect } from 'react-redux'
import OnboardingImage from './OnboardingImage.component'

export const state = (state) => {
  return {
    onboardingImageDiameter: path(['theme', 'onboardingImageDiameter'])(state)
  }
}

export const dispatch = {}

export default connect(
  state,
  dispatch
)(OnboardingImage)
