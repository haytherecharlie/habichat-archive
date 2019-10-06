import React from 'react'
import PageWrapper from 'src/components/Universal/PageWrapper'
import EmailInput from 'src/components/SignIn/EmailInput'
import * as S from './SignInScreen.style'

const SignInScreen = () => {
  return (
    <PageWrapper>
      <EmailInput />
    </PageWrapper>
  )
}

SignInScreen.defaultProps = {}
SignInScreen.propTypes = {}

export default SignInScreen
