import React, { useState } from 'react'
import types from 'prop-types'
import { callVerifyFunction, signInWithToken } from 'src/services/firebase'
import PinCodeInput from 'src/components/Verify/PinCodeInput'
import PageWrapper from 'src/components/Universal/PageWrapper'
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
    <PageWrapper>
      <PinCodeInput value={value} onChange={onChange} onSubmit={onSubmit} />
    </PageWrapper>
  )
}

VerifyScreen.propTypes = {
  email: types.string.isRequired
}

export default VerifyScreen
