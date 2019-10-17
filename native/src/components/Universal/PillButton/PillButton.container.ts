import { path } from 'ramda'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import PillButton from './PillButton.component'

export const state = (state) => {
  return {
    primaryColor: path(['theme', 'primaryColor'])(state),
    secondaryColor: path(['theme', 'secondaryColor'])(state),
    mediumText: path(['theme', 'mediumText'])(state),
    veritcalSpacing: path(['theme', 'veritcalSpacing'])(state),
    radius: path(['theme', 'radius'])(state)
  }
}

export const dispatch = {}

export default connect(
  state,
  dispatch
)(withNavigation(PillButton))
