import React from 'react'
import types from 'prop-types'
import PillButton from 'src/components/universal/PillButton'
import { Button } from 'react-native'
import { signOut } from 'src/services/firebase'
import PageWrapper from 'src/components/universal/PageWrapper'

const ProfileScreen = () => {
  return (
    <PageWrapper>
      <PillButton title="Back To Community" href="CommunityScreen" />
      <Button onPress={() => signOut()} title="Sign Out" />
    </PageWrapper>
  )
}

export default ProfileScreen
