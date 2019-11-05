import React from 'react'
import types from 'prop-types'
import TitleText from 'src/components/universal/TitleText'
import BodyText from 'src/components/universal/BodyText'
import PinCodeInput from 'src/components/unauthenticated/VerifyScreen/PinCodeInput'
import PageWrapper from 'src/components/universal/PageWrapper'
import * as S from './VerifyScreen.style'

const VerifyScreen = ({ loading }) => {
  return (
    <PageWrapper background="fade" loading={loading} text="Verifying pin code...">
      <S.First />
      <S.Second>
        <TitleText align="left" size="h1">
          Confirmation
        </TitleText>
      </S.Second>
      <S.Third>
        <BodyText align="left" size="h4">
          Please type the verification code we sent to me@email.com
        </BodyText>
      </S.Third>
      <S.Fourth>
        <PinCodeInput />
      </S.Fourth>
      <S.Fifth />
    </PageWrapper>
  )
}

VerifyScreen.propTypes = {
  loading: types.bool.isRequired
}

export default VerifyScreen
