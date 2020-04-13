import React from 'react'
import { useSelector } from 'react-redux'
import Header from 'components/Header/Header'
import Neighbors from 'components/Neighbors/Neighbors'
import Feed from 'components/Feed/Feed'
import Plus from 'components/Plus/Plus'
import * as S from './styles/community.style'

const Community = ({ navigation }) => {
  const { posts, neighbors } = useSelector(s => s.content)
  const profile = useSelector(s => s.profile)
  return (
    <S.Community>
      <Header profile={profile} navigation={navigation} />
      <Neighbors neighbors={neighbors} navigation={navigation} />
      <Feed posts={posts} neighbors={neighbors} navigation={navigation} />
      <Plus />
    </S.Community>
  )
}

export default Community
