import React, { useState } from 'react'
import types from 'prop-types'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import * as S from './PinCodeInput.style'

const PinCodeInput = ({ email, startLoading, stopLoading }) => {
  const [value, onChange] = useState('')

  const onSubmit = async (code) => {
    try {
      startLoading('verifyScreen')
      // const { message } = await callVerifyFunction(email, code)
      // await signInWithToken(message)
      return setTimeout(() => stopLoading('verifyScreen'), 1000)
    } catch (err) {
      stopLoading('verifyScreen')
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
  email: types.string.isRequired,
  startLoading: types.func.isRequired,
  stopLoading: types.func.isRequired
}

export default PinCodeInput
