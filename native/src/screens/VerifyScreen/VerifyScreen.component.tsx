import React, { useState } from 'react'
import PinCodeInput from 'src/components/Verify/PinCodeInput'
import { callVerifyFunction } from 'src/services/firebase/fetches'
import * as S from './VerifyScreen.style'

const VerifyScreen = () => {
  const [value, onChange] = useState('')

  const onSubmit = async (code) => {
    try {
      await callVerifyFunction('charlie.hay@outlook.com', code)
      console.log('SUCCESS')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <S.VerifyScreen>
      <PinCodeInput value={value} onChange={onChange} onSubmit={onSubmit} />
    </S.VerifyScreen>
  )
}

export default VerifyScreen
