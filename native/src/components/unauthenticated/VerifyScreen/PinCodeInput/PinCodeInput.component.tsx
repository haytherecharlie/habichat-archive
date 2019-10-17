import React, { useState } from 'react'
import types from 'prop-types'
import { callVerifyFunction, signInWithToken } from 'src/services/firebase'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import * as S from './PinCodeInput.style'

const PinCodeInput = ({ email }) => {
  const [value, onChange] = useState('')

  const onSubmit = async (code) => {
    try {
      const { token } = await callVerifyFunction(email, code)
      console.log('EMAIL', email)
      console.log('TOKEN', token)
      console.log('VALUE', code)
      await signInWithToken(token)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <S.PinCodeInput>
      <SmoothPinCodeInput
        autoFocus={true}
        cellStyle={{ borderBottomWidth: 2, borderColor: 'gray' }}
        cellStyleFocused={{ borderColor: 'black' }}
        value={value}
        onTextChange={onChange}
        onFulfill={onSubmit}
        keyboardType="number-pad"
        placeholder=""
      />
    </S.PinCodeInput>
  )
}

PinCodeInput.propTypes = {
  email: types.string.isRequired
}

export default PinCodeInput
