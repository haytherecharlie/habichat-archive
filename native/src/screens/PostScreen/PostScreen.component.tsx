import React, { useEffect } from 'react'
import types from 'prop-types'
import PillButton from 'src/components/PillButton'
import MessageList from 'src/components/MessageList'
import ComposeMessage from 'src/components/ComposeMessage'
import PageWrapper from 'src/components/PageWrapper'
import Header from 'src/components/Header'
import TopNav from 'src/components/TopNav'
import ResidentList from 'src/components/ResidentList'
import * as S from './PostScreen.style'

const PostScreen = () => {
  useEffect(() => {}, [])
  return (
    <PageWrapper>
      <Header />
      <TopNav />
      <ResidentList />
      <MessageList />
      <ComposeMessage />
    </PageWrapper>
  )
}

export default PostScreen
