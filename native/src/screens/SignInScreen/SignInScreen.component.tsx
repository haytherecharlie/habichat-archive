import React, { useState } from 'react'
import { callEmailAuthFunction } from 'src/services/firebase'
import PageWrapper from 'src/components/Universal/PageWrapper'
import EmailInput from 'src/components/SignIn/EmailInput'
import * as S from './SignInScreen.style'

const SignInScreen = () => {
  const [email, changeEmail] = useState('')

  const onSubmit = () => {
    callEmailAuthFunction(email)
  }

  return (
    <PageWrapper loading={false}>
      <EmailInput onChange={changeEmail} value={email} onSubmit={onSubmit} />
    </PageWrapper>
  )
}

SignInScreen.defaultProps = {}
SignInScreen.propTypes = {}

export default SignInScreen
