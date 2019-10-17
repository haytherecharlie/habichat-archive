import React from 'react'
import types from 'prop-types'
import { Button } from 'react-native'
import PageWrapper from 'src/components/universal/PageWrapper'

const ProfileScreen = ({ navigation }) => {
  return (
    <PageWrapper>
      <Button title="Back To Community" onPress={() => navigation.navigate('CommunityScreen')} />
    </PageWrapper>
  )
}

ProfileScreen.propTypes = {
  navigation: types.object.isRequired
}

export default ProfileScreen
