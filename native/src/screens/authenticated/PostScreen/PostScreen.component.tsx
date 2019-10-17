import React, { useEffect } from 'react'
import types from 'prop-types'
import { Button } from 'react-native'
import PageWrapper from 'src/components/universal/PageWrapper'
import * as S from './PostScreen.style'

const PostScreen = ({ navigation }) => {
  useEffect(() => {}, [])
  return (
    <PageWrapper loading={false}>
      <Button title="Back To Community" onPress={() => navigation.navigate('CommunityScreen')} />
    </PageWrapper>
  )
}

PostScreen.propTypes = {
  navigation: types.object.isRequired
}

export default PostScreen
