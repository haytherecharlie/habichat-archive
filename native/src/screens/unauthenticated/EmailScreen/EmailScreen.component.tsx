import React, { useEffect } from 'react'
import types from 'prop-types'
import TitleText from 'src/components/universal/TitleText'
import PageWrapper from 'src/components/universal/PageWrapper'
import EmailInput from 'src/components/unauthenticated/EmailScreen/EmailInput'
import PillButton from 'src/components/universal/PillButton'
import * as S from './EmailScreen.style'

const EmailScreen = ({ loading, stopLoading }) => {
  useEffect(() => {
    stopLoading()
  }, [])

  return (
    <PageWrapper loading={loading} background="fade" text="Fetching user information...">
      <S.First />
      <S.Second>
        <TitleText size="h1">What's Your Email Address?</TitleText>
      </S.Second>
      <S.Third>
        <EmailInput />
      </S.Third>
      <S.Fourth />
    </PageWrapper>
  )
}

EmailScreen.propTypes = {
  loading: types.bool.isRequired,
  stopLoading: types.func.isRequired
}

export default EmailScreen
