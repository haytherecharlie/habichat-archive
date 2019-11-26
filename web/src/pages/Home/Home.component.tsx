import React, { useState } from 'react'
import DisplayUser from 'src/components/DisplayUser'
import AddCommunity from 'src/components/AddCommunity'
import PageWrapper from 'src/components/PageWrapper'
import AddMessage from 'src/components/AddMessage'
import MessagesList from 'src/components/MessagesList'
import CommunitiesList from 'src/components/CommunitiesList'
import * as S from './Home.style'

const IndexPage = () => {
  return (
    <PageWrapper>
      <S.Row>
        <S.Col>
          <DisplayUser />
          <AddCommunity />
        </S.Col>
        <S.Col>
          <CommunitiesList />
        </S.Col>
      </S.Row>
      <S.Row>
        <S.Col>
          <AddMessage />
        </S.Col>
        <S.Col>
          <MessagesList />
        </S.Col>
      </S.Row>
    </PageWrapper>
  )
}

export default IndexPage
