import React, { useState } from 'react'
import types from 'prop-types'
import { callEmailFunction } from 'src/services/firebase'
import { validateEmail } from 'src/utils/validate'
import * as S from './EmailInput.style'

const EmailInput = ({ navigation, primaryColor, secondaryColor, preserveEmail }) => {
  const [value, onChange] = useState('')
  const [error, toggleError] = useState(false)

  const submitEmail = async () => {
    try {
      await callEmailFunction(value)
      preserveEmail(value)
      return navigation.navigate('VerifyScreen')
    } catch (err) {
      console.log(err)
      return toggleError(true)
    }
  }

  const checkEmail = () => {
    if (validateEmail(value)) return submitEmail()
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
        primaryColor={secondaryColor}
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
  navigation: types.object.isRequired,
  preserveEmail: types.func.isRequired
}

export default EmailInput
