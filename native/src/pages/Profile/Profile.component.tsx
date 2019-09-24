import React from 'react'
import emojize from 'src/utils/emojize'
import * as S from './Profile.style'

interface Props {
  nickName: String
  icon: String
}

const Profile = ({ nickName, icon }: Props) => {
  return (
    <S.Profile>
      <S.NickName>{nickName}</S.NickName>
      <S.Icon source={{ uri: emojize(icon) }} />
    </S.Profile>
  )
}

export default Profile
