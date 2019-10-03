import React from 'react'
import types from 'prop-types'
import { Button } from 'react-native'
import * as S from './CommunityScreen.style'

const CommunityScreen = ({ navigation }) => {
  return (
    <S.Wrapper>
      <Button onPress={() => navigation.navigate('PostScreen')} title="Go To Post Screen" />
    </S.Wrapper>
  )
}

CommunityScreen.defaultProps = {}
CommunityScreen.propTypes = {
  navigation: types.object.isRequired
}

export default CommunityScreen
