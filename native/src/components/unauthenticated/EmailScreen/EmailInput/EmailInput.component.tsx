import React, { useState } from 'react'
import types from 'prop-types'
import { callEmailFunction } from 'src/services/firebase'
import { validateEmail } from 'src/utils/validate'
import * as S from './EmailInput.style'

const EmailInput = ({ navigation, primaryColor, secondaryColor, preserveEmail, startLoading, stopLoading, fontSize }) => {
  const [email, setEmail] = useState('')
  const [error, toggleError] = useState(false)

  const submitEmail = async () => {
    try {
      startLoading('emailScreen')
      await callEmailFunction(email)
      preserveEmail(email)
      navigation.navigate('VerifyScreen')
      return setTimeout(() => stopLoading('emailScreen'), 3000)
    } catch (err) {
      stopLoading('emailScreen')
      return toggleError('Error connecting to API.')
    }
  }

  const checkEmail = () => {
    if (validateEmail(email)) {
      submitEmail()
    } else {
      setEmail('')
      toggleError('Please enter a valid email address.')
    }
  }

  const handleChangeText = (text) => {
    if (error) {
      toggleError(false)
      setEmail('')
    } else {
      setEmail(text)
    }
  }

  return (
    <S.Wrapper borderColor={secondaryColor}>
      <S.EmailInput
        primaryColor={secondaryColor}
        placeholder="Please enter your email address"
        placeholderTextColor="#888"
        fontSize={fontSize}
        onChangeText={handleChangeText}
        value={email}
        autoCapitalize="none"
        autoCompleteType="email"
        autoCorrect={false}
        autoFocus={true}
        blurOnSubmit={true}
        enablesReturnKeyAutomatically={true}
        keyboardType="email-address"
        blurOnSubmit={false}
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
  stopLoading: types.func.isRequired,
  fontSize: types.string.isRequired
}

export default EmailInput
