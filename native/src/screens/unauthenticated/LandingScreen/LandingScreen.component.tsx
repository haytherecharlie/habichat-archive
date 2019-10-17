import React from 'react'
import types from 'prop-types'
import PageWrapper from 'src/components/universal/PageWrapper'
import PillButton from 'src/components/universal/PillButton'

const LandingScreen = () => {
  return (
    <PageWrapper>
      <PillButton title="Sign In / Register" variant="default" href="EmailScreen" />
      <PillButton title="Learn More" variant="inverted" href="OnboardingScreen" />
    </PageWrapper>
  )
}

export default LandingScreen
