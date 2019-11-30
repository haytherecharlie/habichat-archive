import React, { useEffect } from 'react'
import types from 'prop-types'
import PillButton from 'src/components/PillButton'
import PageWrapper from 'src/components/PageWrapper'
import * as S from './CommunityScreen.style'

const CommunityScreen = ({
  subMembers,
  subPosts,
  loading,
  members,
  posts,
  account
}) => {
  useEffect(() => {
  }, [])

  return (
    <PageWrapper>
      <PillButton href="ProfileScreen" title="Go To Profile Screen" />
      <PillButton href="PostScreen" title="Go To Post Screen" />
    </PageWrapper>
  )
}

CommunityScreen.propTypes = {
  subMembers: types.func.isRequired,
  subPosts: types.func.isRequired,
  loading: types.bool.isRequired,
  members: types.array.isRequired,
  posts: types.array.isRequired,
  account: types.object.isRequired
}

export default CommunityScreen
