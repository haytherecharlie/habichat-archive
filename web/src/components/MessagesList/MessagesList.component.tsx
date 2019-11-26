import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getOptions } from 'src/utils/options'
import * as S from './MessagesList.style'

const MessagesList = () => {
  const { community } = useSelector((state) => state)
  const [prevCommunity, setPrevCommunity] = useState(null)
  const [messages, setMessages] = useState([])
  const fetchMessages = async () => {
    try {
      const req = await fetch(`http://localhost:4000/messages/fetch/${community}/20`, getOptions())
      const { data } = await req.json()
      setMessages(data || [])
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchMessages()
    const logData = (e) => setMessages((prev) => [...prev, JSON.parse(e.data)])
    const listener = new EventSource(`http://localhost:4000/messages/stream/${community}`)
    listener.addEventListener('event', logData, false)
    return () => listener.removeEventListener('event', logData, false)
  }, [community])

  return (
    <S.MessagesList>
      <ul>
        {messages.map(({ _id, author, message, community, timestamp }) => (
          <div key={_id} style={{ display: 'flex', flexDirection: 'column' }}>
            <div>{`id: ${_id}`}</div>
            <div>{`author: ${author}`}</div>
            <div>{`message: ${message}`}</div>
          </div>
        ))}
      </ul>
    </S.MessagesList>
  )
}

export default MessagesList
