import React from 'react'
import * as S from './styles/profile.style'

const Profile = ({ navigation }) => {
  return (
    <S.Profile onPress={() => navigation.navigate('Community')}>
      <S.ProfileText>Profile</S.ProfileText>
    </S.Profile>
  )
}

export default Profile
