import React from 'react'
import PageWrapper from 'src/components/universal/PageWrapper'
import MessagesList from 'src/components/community/MessagesList'
import ComposeBox from 'src/components/community/ComposeBox'
import * as S from './Community.style'

const Community = () => {
  return (
    <PageWrapper>
      <MessagesList />
      <ComposeBox />
    </PageWrapper>
  )
}

export default Community
