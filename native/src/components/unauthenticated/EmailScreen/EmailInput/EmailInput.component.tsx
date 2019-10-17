import React, { useState } from 'react'
import types from 'prop-types'
import { validateEmail } from 'src/utils/validate'
import * as S from './EmailInput.style'

const EmailInput = ({ primaryColor, secondaryColor, value, onChange, onSubmit }) => {
  const [error, toggleError] = useState(false)

  const checkEmail = () => {
    if (validateEmail(value)) return onSubmit()
    return toggleError(true)
  }

  const reselectInput = () => {
    if (error) {
      toggleError(false)
      onChange('')
    }
  }

  return (
    <S.Wrapper>
      <S.EmailInput
        primaryColor={primaryColor}
        placeholder="Please enter your email address"
        placeholderTextColor={secondaryColor}
        onChangeText={onChange}
        value={value}
        autoCapitalize="none"
        autoCompleteType="email"
        autoCorrect={false}
        autoFocus={true}
        blurOnSubmit={true}
        onFocus={reselectInput}
        enablesReturnKeyAutomatically={true}
        keyboardType="email-address"
        onSubmitEditing={checkEmail}
      />
      {error && <S.ErrorMsg>There was an error</S.ErrorMsg>}
    </S.Wrapper>
  )
}

EmailInput.propTypes = {
  primaryColor: types.string.isRequired,
  secondaryColor: types.string.isRequired,
  value: types.string.isRequired,
  onChange: types.func.isRequired,
  onSubmit: types.func.isRequired
}

export default EmailInput
