import React from 'react'
import types from 'prop-types'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import * as S from './PinCodeInput.style'

const PinCodeInput = ({ value, onChange, onSubmit }) => {
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
  value: types.string.isRequired,
  onChange: types.func.isRequired,
  onSubmit: types.func.isRequired
}

export default PinCodeInput
