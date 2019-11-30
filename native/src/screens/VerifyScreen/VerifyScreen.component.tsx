import React from 'react'
import types from 'prop-types'
import TitleText from 'src/components/TitleText'
import BodyText from 'src/components/BodyText'
import PinCodeInput from 'src/components/PinCodeInput'
import PageWrapper from 'src/components/PageWrapper'
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
