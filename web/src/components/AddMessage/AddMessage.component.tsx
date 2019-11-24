import React, { useState } from 'react'
import slug from 'slug'
import { postOptions } from 'src/utils/options'
import * as S from './AddMessage.style'

const AddMessage = ({ user, community }) => {
  const [message, setMessage] = useState('')

  const updateMessage = ({ target }) => {
    setMessage(target.value)
  }

  const createMessage = async () => {
    try {
      const body = JSON.stringify({ message, author: user.id, timestamp: new Date().getTime(), community })
      const req = await fetch('http://localhost:4000/message', postOptions(body))
      const res = req.json()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <S.AddMessage>
      <input onChange={updateMessage} />
      <button onClick={createMessage}>Submit</button>
    </S.AddMessage>
  )
}

export default AddMessage
