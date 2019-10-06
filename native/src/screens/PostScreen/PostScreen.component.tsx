import React, { useEffect } from 'react'
import types from 'prop-types'
import { Button } from 'react-native'
import PageWrapper from 'src/components/Universal/PageWrapper'
import * as S from './PostScreen.style'

const PostScreen = ({ navigation }) => {
  useEffect(() => {
    return () => console.log('unmounted')
  }, [])
  return (
    <PageWrapper>
      <Button
        onPress={() => navigation.navigate('CommunityScreen')}
        title="Go To Community Screen"
      />
    </PageWrapper>
  )
}

PostScreen.defaultProps = {}
PostScreen.propTypes = {
  navigation: types.object.isRequired
}

export default PostScreen
