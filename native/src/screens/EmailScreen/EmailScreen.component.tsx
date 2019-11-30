import React, { useEffect } from 'react'
import types from 'prop-types'
import TitleText from 'src/components/TitleText'
import PageWrapper from 'src/components/PageWrapper'
import EmailInput from 'src/components/EmailInput'
import PillButton from 'src/components/PillButton'
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
