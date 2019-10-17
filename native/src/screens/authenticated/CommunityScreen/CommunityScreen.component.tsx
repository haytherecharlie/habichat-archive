import React, { useEffect } from 'react'
import types from 'prop-types'
import { collectionListener } from 'src/services/firebase'
import PillButton from 'src/components/universal/PillButton'
import PageWrapper from 'src/components/universal/PageWrapper'
import * as S from './CommunityScreen.style'

const CommunityScreen = ({
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
    <PageWrapper>
      <Button href="ProfileScreen" title="Go To Profile Screen" />
      <Button href="PostScreen" title="Go To Post Screen" />
    </PageWrapper>
  )
}

CommunityScreen.propTypes = {
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
