import React, { useState } from 'react'
import types from 'prop-types'
import { callEmailFunction } from 'src/services/firebase'
import { validateEmail } from 'src/utils/validate'
import * as S from './EmailInput.style'

const EmailInput = ({
  navigation,
  primaryColor,
  secondaryColor,
  preserveEmail,
  startLoading,
  stopLoading
}) => {
  const [email, onChange] = useState('')
  const [error, toggleError] = useState(false)

  const submitEmail = async () => {
    try {
      startLoading('emailScreen')
      await callEmailFunction(email)
      preserveEmail(email)
      navigation.navigate('VerifyScreen')
      return setTimeout(() => stopLoading('emailScreen'), 1000)
    } catch (err) {
      stopLoading('emailScreen')
      return toggleError('Error connecting to API.')
    }
  }

  const checkEmail = () => {
    return validateEmail(email) ? submitEmail() : toggleError('Please enter a valid email address.')
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
        placeholderTextColor="#CCCCCC"
        onChangeText={onChange}
        value={email}
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
      {error && <S.ErrorMsg>{error}</S.ErrorMsg>}
    </S.Wrapper>
  )
}

EmailInput.propTypes = {
  primaryColor: types.string.isRequired,
  secondaryColor: types.string.isRequired,
  navigation: types.object.isRequired,
  preserveEmail: types.func.isRequired,
  startLoading: types.func.isRequired,
  stopLoading: types.func.isRequired
}

export default EmailInput
