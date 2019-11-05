import React, { useState, useEffect } from 'react'
import types from 'prop-types'
import TitleText from 'src/components/universal/TitleText'
import PageWrapper from 'src/components/universal/PageWrapper'
import EmailInput from 'src/components/unauthenticated/EmailScreen/EmailInput'

const EmailScreen = ({ loading, stopLoading }) => {
  useEffect(() => {
    stopLoading()
  }, [])

  return (
    <PageWrapper loading={loading} background="fade" text="Fetching user information..." >
      <TitleText size="h1">What's Your Email Address?</TitleText>
      <EmailInput />
    </PageWrapper>
  )
}

EmailScreen.propTypes = {
  loading: types.bool.isRequired,
  stopLoading: types.func.isRequired
}

export default EmailScreen
