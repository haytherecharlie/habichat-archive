import React, { useState } from 'react'
import DisplayUser from 'src/components/testing/DisplayUser'
import AddCommunity from 'src/components/testing/AddCommunity'
import PageWrapper from 'src/components/universal/PageWrapper'
import AddMessage from 'src/components/testing/AddMessage'
import MessagesList from 'src/components/testing/MessagesList'
import CommunitiesList from 'src/components/testing/CommunitiesList'
import styled from 'styled-components'

export const Row = styled('div')({
  border: `1px solid #000`,
  flex: 1,
  width: '100vw',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  justifyContent: 'stretch'
})

export const Col = styled('div')({
  border: `1px solid #000`,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'stretch'
})

const IndexPage = () => {
  return (
    <PageWrapper>
      <Row>
        <Col>
          <DisplayUser />
          <AddCommunity />
        </Col>
        <Col>
          <CommunitiesList />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddMessage />
        </Col>
        <Col>
          <MessagesList />
        </Col>
      </Row>
    </PageWrapper>
  )
}

export default IndexPage
