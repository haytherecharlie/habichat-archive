import React, { useState, useRef } from 'react'
import { db } from 'services/firebase'
import * as S from './Subscribe.style'

const Subscribe = () => {
  const [inputText, setInputText] = useState('Enter your email address')
  const emailRef = useRef(null)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const saveEmailToFirebase = () => {
    const email = emailRef.current.value
    if(emailRegex.test(email)) {
      emailRef.current.value = ''
      setInputText(`You're Subscribed`)
      return db.collection('emails').doc(email).set({
        email,
        timestamp: new Date().getTime()
      })
    }
  }

  return (
    <S.Subscribe>
      <S.Title>Be the first to get access to Habichat</S.Title>
      <S.SubTitle>Subscribe to receive updates and join our beta list.</S.SubTitle>
      <S.InputContainer>
        <S.Input ref={emailRef} type="email" placeholder={inputText} required />
        <S.Button onClick={saveEmailToFirebase}>Subscribe</S.Button>
      </S.InputContainer>
    </S.Subscribe>
  )
}

export default Subscribe
