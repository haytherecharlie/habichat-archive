import React, { useEffect, useRef } from 'react'
import { formatDistance } from 'date-fns'
import SectionTitle from 'components/SectionTitle'
import useDatabaseListener from 'utils/hooks/useDatabaseListener'
import { useSelector } from 'react-redux'
import * as S from './MessagesList.style'

const MessagesList = () => {
  useDatabaseListener('messages')
  const listRef = useRef(null)
  const { keyboardUp } = useSelector((s) => s.application)
  const messages = useSelector((s) => s.messages)
  const members = useSelector((s) => s.members)

  useEffect(() => {
    listRef.current.scrollToEnd({ animated: true })
  }, [keyboardUp])

  const renderMessage = (item) => {
    listRef.current.scrollToEnd({ animated: true })
    const foundIndex = members.findIndex((x) => x.id === item.author)
    const member = members[foundIndex]
    return (
      <S.MessageWrapper key={item.id}>
        <S.WhiteBox>
          <S.AuthorCircle source={{ uri: member.photoUrl }} alt="profile photo" />
          <S.Header>
            <S.Name>{member.firstName}</S.Name>
            <S.Time>{`${formatDistance(member.updated.toDate(), new Date().getTime(), { addSuffix: true })}`}</S.Time>
          </S.Header>
          <S.Body>
            <S.Title>{item.text}</S.Title>
            {item.image && <S.ImageBody source={item.image} alt="image" />}
          </S.Body>
        </S.WhiteBox>
      </S.MessageWrapper>
    )
  }

  return (
    <S.Wrapper>
      {!keyboardUp && <SectionTitle>Community Posts</SectionTitle>}
      <S.ScrollList ref={listRef} bounces={true} alwaysBounces={true} snapToEnd={true} showsVerticalScrollIndicator={false}>
        {messages.map((message) => renderMessage(message))}
      </S.ScrollList>
    </S.Wrapper>
  )
}

export default MessagesList
