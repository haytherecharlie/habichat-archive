import React, { useState } from 'react'
import types from 'prop-types'
import PinCodeInput from 'src/components/Verify/PinCodeInput'
import { callVerifyFunction, signInWithToken } from 'src/services/firebase'
import * as S from './VerifyScreen.style'

const VerifyScreen = ({ email }) => {
  const [value, onChange] = useState('')

  const onSubmit = async (code) => {
    try {
      const { token } = await callVerifyFunction(email, code)
      await signInWithToken(token)
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

VerifyScreen.propTypes = {
  email: types.string.isRequired
}

export default VerifyScreen
