import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { MESSAGE_CREATE_NEW_URL } from 'src/constants'
import { postOptions } from 'src/utils/options'
import * as S from './ComposeMessage.style'

const ComposeMessage = ({ primaryColor, secondaryColor, h3 }) => {
  const [text, setText] = useState('')
  const handleOnSubmit = async () => {
    try {
      await fetch(MESSAGE_CREATE_NEW_URL, postOptions(JSON.stringify({ message: text, author: 'Charlie Hay' })))
      setText('')
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <S.ComposeMessage>
      <S.InputContainer borderColor={secondaryColor}>
        <S.InputWrapper>
          <S.Input
            value={text}
            onChangeText={setText}
            onSubmitEditing={handleOnSubmit}
            blurOnSubmit={true}
            placeholder="Say Something..."
            returnKeyType="send"
            maxLength={200}
          />
        </S.InputWrapper>
        {/* <S.SendButtonWrapper>
          <S.SendButton background={secondaryColor}>
            <Ionicons name="md-send" size={15} color={primaryColor} />
          </S.SendButton>
        </S.SendButtonWrapper> */}
      </S.InputContainer>
    </S.ComposeMessage>
  )
}

export default ComposeMessage
