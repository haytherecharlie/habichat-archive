import React, { useState, useEffect } from 'react'
import RNEventSource from 'react-native-event-source'
import { MESSAGE_READ_STREAM_URL } from 'src/constants'
import * as S from './MessageList.style'

const MessageList = () => {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    const listener = new RNEventSource(MESSAGE_READ_STREAM_URL)
    const logData = (e) => setMessages((prev) => [...prev, JSON.parse(e.data)])
    listener.addEventListener('event', logData, false)
    return () => {
      listener.removeAllListeners()
      listener.close()
    }
  }, [])

  return (
    <S.MessageList>
      {messages.map(({ message }) => (
        <S.Title key={message}>{message}</S.Title>
      ))}
    </S.MessageList>
  )
}

export default MessageList
