import React, { useState } from 'react'
import DisplayUser from 'src/components/DisplayUser'
import AddCommunity from 'src/components/AddCommunity'
import PageWrapper from 'src/components/PageWrapper'
import AddMessage from 'src/components/AddMessage'
import MessagesList from 'src/components/MessagesList'
import CommunitiesList from 'src/components/CommunitiesList'
import * as S from './Home.style'

const IndexPage = () => {
  const [user, setUser] = useState({ name: 'Charlie', id: 1234 })
  const [activeCommunity, setActiveCommunity] = useState('5dd0ce8d65b721b23455e24a')
  return (
    <PageWrapper>
      <S.Row>
        <S.Col>
          <DisplayUser user={user} />
          <AddCommunity user={user} />
        </S.Col>
        <S.Col>
          <CommunitiesList activeCommunity={activeCommunity} setActiveCommunity={setActiveCommunity} />
        </S.Col>
      </S.Row>
      <S.Row>
        <S.Col>
          <AddMessage community={activeCommunity} user={user} />
        </S.Col>
        <S.Col>
          <MessagesList community={activeCommunity} />
        </S.Col>
      </S.Row>
    </PageWrapper>
  )
}

export default IndexPage
