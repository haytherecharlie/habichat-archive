import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NEW_MESSAGE_TEXT } from 'services/redux'
import * as S from './InputMessageText.style'

const InputMessageText = () => {
  const dispatch = useDispatch()
  const value = useSelector((s) => s.message.text)
  const inputRef = useRef(null)
  const [height, setHeight] = useState(1)

  const changeText = (value) => {
    dispatch({ type: NEW_MESSAGE_TEXT, value })
  }

  return (
    <S.Wrapper>
      <S.Input ref={inputRef} multiline={true} numberOfLines={1} value={value || ''} onChangeText={changeText} placeholder="Say something..." />
    </S.Wrapper>
  )
}

export default InputMessageText
