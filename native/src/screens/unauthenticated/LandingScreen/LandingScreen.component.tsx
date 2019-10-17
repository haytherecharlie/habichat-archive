import React from 'react'
import PageWrapper from 'src/components/universal/PageWrapper'
import PillButton from 'src/components/universal/PillButton'

const LandingScreen = () => {
  return (
    <PageWrapper>
      <PillButton title="Sign In / Register" variant="default" onPress={() => console.log('hello')} />
      <PillButton title="Learn More" variant="inverted" onPress={() => console.log('goodbye')} />
    </PageWrapper>
  )
}

export default LandingScreen
