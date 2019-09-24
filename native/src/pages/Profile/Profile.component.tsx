import React from 'react'
import * as S from './Profile.style'

interface Props {
  nickName: String
  icon: String
}

const Profile = ({ nickName, icon }: Props) => {
  return (
    <S.Profile>
      <S.NickName>{nickName}</S.NickName>
      <S.Icon>{icon}</S.Icon>
    </S.Profile>
  )
}

export default Profile
