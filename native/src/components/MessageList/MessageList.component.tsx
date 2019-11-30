import React, { useState, useEffect, useRef } from 'react'
import { Keyboard } from 'react-native'
import EmitEvent from 'react-native-event-source'
import { MESSAGE_READ_STREAM_URL, MESSAGE_READ_MULTIPLE_URL } from 'src/constants'
import { getOptions } from 'src/utils/options'
import * as S from './MessageList.style'

const MessageList = () => {
  const scrollView = useRef(null)
  const [messages, setMessages] = useState([])

  const fetchMessages = async () => {
    try {
      const req = await fetch(MESSAGE_READ_MULTIPLE_URL, getOptions())
      const { data } = await req.json()
      console.log(data)
      setMessages(data || [])
    } catch (err) {
      console.log(err)
    }
  }

  const scrollToBottom = () => {
    scrollView.current.scrollToEnd({ animated: true })
  }

  useEffect(() => {
    fetchMessages()
    const messageListener = new EmitEvent(MESSAGE_READ_STREAM_URL)
    const keyboardListener = Keyboard.addListener('keyboardWillShow', scrollToBottom)
    const logData = (e) => {
      setMessages((prev) => [...prev, JSON.parse(e.data)])
    }
    messageListener.addEventListener('event', logData, false)
    return () => {
      messageListener.removeAllListeners()
      messageListener.close()
    }
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <S.MessageListContainer ref={scrollView}>
      <S.MessageList>
        {messages.map(({ _id, message, author, timestamp }) => (
          <S.PostContainer key={_id}>
            <S.PostTitleContainer>
              <S.PostTitleAuthorWrapper>
                <S.PostTitleAuthorText>{author}</S.PostTitleAuthorText>
              </S.PostTitleAuthorWrapper>
              <S.PostTitleTimeWrapper>
                <S.PostTitleTimeText>{timestamp}</S.PostTitleTimeText>
              </S.PostTitleTimeWrapper>
            </S.PostTitleContainer>
            <S.PostBodyContainer>
              <S.PostBodyText>{message}</S.PostBodyText>
            </S.PostBodyContainer>
          </S.PostContainer>
        ))}
      </S.MessageList>
    </S.MessageListContainer>
  )
}

export default MessageList
