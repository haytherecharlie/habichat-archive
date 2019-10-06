import React from 'react'
import EmailInput from 'src/components/SignIn/EmailInput'
import * as S from './SignInScreen.style'

const SignInScreen = () => {
  return (
    <S.Wrapper>
      <EmailInput />
    </S.Wrapper>
  )
}

SignInScreen.defaultProps = {}
SignInScreen.propTypes = {}

export default SignInScreen
