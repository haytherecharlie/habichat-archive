import React, { useState } from 'react'
import types from 'prop-types'
import { callEmailFunction } from 'src/services/firebase'
import PageWrapper from 'src/components/universal/PageWrapper'
import EmailInput from 'src/components/unauthenticated/EmailScreen/EmailInput'
import { Text } from 'react-native'

const EmailScreen = ({ navigation, preserveEmail }) => {
  const [email, changeEmail] = useState('')
  const [error, setError] = useState('')

  const onSubmit = async () => {
    try {
      await callEmailFunction(email)
      preserveEmail(email)
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

EmailScreen.propTypes = {
  navigation: types.object.isRequired,
  preserveEmail: types.func.isRequired
}

export default EmailScreen
