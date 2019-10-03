import React from 'react'
import types from 'prop-types'
import { Button } from 'react-native'
import * as S from './PostScreen.style'

const PostScreen = ({ navigation }) => {
  return (
    <S.Wrapper>
      <Button
        onPress={() => navigation.navigate('CommunityScreen')}
        title="Go To Community Screen"
      />
    </S.Wrapper>
  )
}

PostScreen.defaultProps = {}
PostScreen.propTypes = {
  navigation: types.object.isRequired
}

export default PostScreen
