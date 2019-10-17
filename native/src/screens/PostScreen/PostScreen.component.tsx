import React, { useEffect } from 'react'
import types from 'prop-types'
import { Button } from 'react-native'
import PageWrapper from 'src/components/Universal/PageWrapper'
import { signOut } from 'src/services/firebase'
import * as S from './PostScreen.style'

const PostScreen = ({ navigation }) => {
  useEffect(() => {
    return () => console.log('unmounted')
  }, [])
  return (
    <PageWrapper loading={false}>
      <Button
        onPress={() => navigation.navigate('CommunityScreen')}
        title="Go To Community Screen"
      />
      <Button onPress={() => signOut()} title="Sign Out" />
    </PageWrapper>
  )
}

PostScreen.defaultProps = {}
PostScreen.propTypes = {
  navigation: types.object.isRequired
}

export default PostScreen
