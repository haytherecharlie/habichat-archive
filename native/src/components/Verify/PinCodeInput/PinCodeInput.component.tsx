import React, { useState } from 'react'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import * as S from './PinCodeInput.style'

const PinCodeInput = () => {
  const [digits, setDigits] = useState('')

  const onFulFill = (code) => {
    console.log(code)
  }

  return (
    <S.PinCodeInput>
      <SmoothPinCodeInput
        autoFocus={true}
        cellStyle={{ borderBottomWidth: 2, borderColor: 'gray' }}
        cellStyleFocused={{ borderColor: 'black' }}
        value={digits}
        onTextChange={(digits) => setDigits(digits)}
        onFulfill={onFulFill}
        keyboardType="number-pad"
        placeholder=""
      />
    </S.PinCodeInput>
  )
}

export default PinCodeInput
