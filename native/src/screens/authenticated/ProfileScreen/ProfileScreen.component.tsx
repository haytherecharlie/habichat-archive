import React from 'react'
import types from 'prop-types'
import { Button } from 'react-native'
import { signOut } from 'src/services/firebase'
import PageWrapper from 'src/components/universal/PageWrapper'

const ProfileScreen = ({ navigation }) => {
  return (
    <PageWrapper>
      <Button title="Back To Community" onPress={() => navigation.navigate('CommunityScreen')} />
      <Button onPress={() => signOut()} title="Sign Out" />
    </PageWrapper>
  )
}

ProfileScreen.propTypes = {
  navigation: types.object.isRequired
}

export default ProfileScreen
