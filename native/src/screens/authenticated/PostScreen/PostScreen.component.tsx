import React, { useEffect } from 'react'
import types from 'prop-types'
import PillButton from 'src/components/universal/PillButton'
import MessageList from 'src/components/authenticated/PostScreen/MessageList'
import PageWrapper from 'src/components/universal/PageWrapper'
import * as S from './PostScreen.style'

const PostScreen = () => {
  useEffect(() => {}, [])
  return (
    <PageWrapper>
      <PillButton title="Back To Community" href="CommunityScreen" />
      <MessageList />
    </PageWrapper>
  )
}

export default PostScreen
