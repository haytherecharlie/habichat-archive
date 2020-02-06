import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NEW_MESSAGE_TEXT } from 'services/redux'
import { db, timestamp } from 'services/firebase'
import * as S from './ButtonSendMessage.style'

const ButtonSendMessage = () => {
  const dispatch = useDispatch()
  const { community, id } = useSelector((s) => s.user)
  const { image, text } = useSelector((s) => s.message)

  const sendMessage = () => {
    if (text !== '' || image !== null) {
      const time = timestamp()
      const messageObject = { text, image, created: time, updated: time, author: id }
      dispatch({ type: NEW_MESSAGE_TEXT, value: '' })
      db.collection(`communities/${community}/messages`).add(messageObject)
    }
  }

  return (
    <S.Wrapper>
      <S.Button onPress={sendMessage}>
        <S.Icon name="md-send" color="#FFF" size={18} />
      </S.Button>
    </S.Wrapper>
  )
}

export default ButtonSendMessage
