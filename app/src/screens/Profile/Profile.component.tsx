import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Loading from 'components/Loading'
import banner from 'assets/images/profile-banner.png'
import * as S from './Profile.style'

const Profile = () => {
  const [loading, setLoading] = useState(true)
  const [profileData, setProfileData] = useState(null)
  const { members, user } = useSelector((s) => s)

  useEffect(() => {
    if (members.length && Object.keys(user).length) {
      const profile = members.find((x) => x.id === user.id)
      console.log(profile)
      setProfileData(profile)
      setLoading(false)
    }
  }, [members, user])

  return loading ? (
    <Loading />
  ) : (
    <S.Wrapper>
      <S.Banner source={banner} />
      <S.Box>
        <S.Picture source={{ uri: profileData.photoUrl }} />
        <S.Name>{profileData.firstName}</S.Name>
        <S.Name>{profileData.lastName}</S.Name>
        <S.Title>Member Since:</S.Title>
        <S.Date>26/01/2020</S.Date>
        <S.Title>Interests</S.Title>
        <S.Interests>
          {[`Baseball`, `Kobe Bryant`].map((i) => (
            <S.Interest>{i}</S.Interest>
          ))}
        </S.Interests>
        <S.Interests>
          <S.Button>
            <S.ButtonText>Log out</S.ButtonText>
          </S.Button>
        </S.Interests>
      </S.Box>
    </S.Wrapper>
  )
}

export default Profile
