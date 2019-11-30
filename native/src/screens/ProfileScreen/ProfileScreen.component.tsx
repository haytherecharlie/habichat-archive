import React from 'react'
import types from 'prop-types'
import { Button } from 'react-native'
import PillButton from 'src/components/PillButton'
import PageWrapper from 'src/components/PageWrapper'

const ProfileScreen = () => {
  return (
    <PageWrapper>
      <PillButton title="Back To Community" href="CommunityScreen" />
      <Button onPress={() => signOut()} title="Sign Out" />
    </PageWrapper>
  )
}

export default ProfileScreen
