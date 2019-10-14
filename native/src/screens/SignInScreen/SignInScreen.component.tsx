import React, { useState } from 'react'
import types from 'prop-types'
import { callEmailFunction } from 'src/services/firebase'
import PageWrapper from 'src/components/Universal/PageWrapper'
import EmailInput from 'src/components/SignIn/EmailInput'
import { Text } from 'react-native'
import * as S from './SignInScreen.style'

const SignInScreen = ({ navigation }) => {
  const [email, changeEmail] = useState('')
  const [error, setError] = useState('')

  const onSubmit = async () => {
    try {
      await callEmailFunction(email)
      return navigation.navigate('VerifyScreen')
    } catch (err) {
      console.log(err)
      setError('Error connecting to api')
    }
  }

  return (
    <PageWrapper loading={false}>
      <EmailInput onChange={changeEmail} value={email} onSubmit={onSubmit} />
      <Text>{JSON.stringify(error)}</Text>
    </PageWrapper>
  )
}

SignInScreen.defaultProps = {}
SignInScreen.propTypes = {
  navigation: types.object.isRequired
}

export default SignInScreen
