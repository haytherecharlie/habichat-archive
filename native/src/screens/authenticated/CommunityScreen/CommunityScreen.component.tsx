import React, { useEffect } from 'react'
import types from 'prop-types'
import { Button } from 'react-native'
import { collectionListener } from 'src/services/firebase'
import PageWrapper from 'src/components/universal/PageWrapper'
import * as S from './CommunityScreen.style'

const CommunityScreen = ({
  navigation,
  subMembers,
  subPosts,
  unsubMembers,
  unsubPosts,
  loading,
  members,
  posts,
  account
}) => {
  useEffect(() => {
    collectionListener('members', subMembers)
    collectionListener('posts', subPosts)
    return () => Promise.all([(unsubMembers(), unsubPosts())])
  }, [subMembers, subPosts, unsubMembers, unsubPosts])

  return (
    <PageWrapper loading={false}>
      <Button onPress={() => navigation.navigate('ProfileScreen')} title="Go To Profile Screen" />
      <Button onPress={() => navigation.navigate('PostScreen')} title="Go To Post Screen" />
    </PageWrapper>
  )
}

CommunityScreen.defaultProps = {}
CommunityScreen.propTypes = {
  navigation: types.object.isRequired,
  subMembers: types.func.isRequired,
  subPosts: types.func.isRequired,
  unsubMembers: types.func.isRequired,
  unsubPosts: types.func.isRequired,
  loading: types.bool.isRequired,
  members: types.array.isRequired,
  posts: types.array.isRequired,
  account: types.object.isRequired
}

export default CommunityScreen
