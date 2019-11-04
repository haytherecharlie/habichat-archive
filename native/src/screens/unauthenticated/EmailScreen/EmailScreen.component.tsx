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
    <PageWrapper loading={loading} text="Fetching user information..." >
      <TitleText size="h1">Enter Your Email</TitleText>
      <EmailInput />
    </PageWrapper>
  )
}

EmailScreen.propTypes = {
  loading: types.bool.isRequired,
  stopLoading: types.func.isRequired
}

export default EmailScreen
