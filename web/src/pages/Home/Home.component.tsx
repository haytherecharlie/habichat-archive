import React, { useState } from 'react'
import DisplayUser from 'src/components/DisplayUser'
import AddCommunity from 'src/components/AddCommunity'
import PageWrapper from 'src/components/PageWrapper'
import CommunitiesList from 'src/components/CommunitiesList'
import * as S from './Home.style'

const IndexPage = () => {
  const [user, setUser] = useState({ name: 'Charlie', id: 1234 })
  const [activeCommunity, setActiveCommunity] = useState('Select A Community')
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
        <S.Col></S.Col>
        <S.Col></S.Col>
      </S.Row>
    </PageWrapper>
  )
}

export default IndexPage
