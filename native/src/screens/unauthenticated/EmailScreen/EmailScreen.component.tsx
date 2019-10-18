import React, { useState, useEffect } from 'react'
import types from 'prop-types'
import PageWrapper from 'src/components/universal/PageWrapper'
import EmailInput from 'src/components/unauthenticated/EmailScreen/EmailInput'

const EmailScreen = ({ loading, stopLoading }) => {
  useEffect(() => {
    return stopLoading
  }, [])

  return (
    <PageWrapper loading={loading}>
      <EmailInput />
    </PageWrapper>
  )
}

EmailScreen.propTypes = {
  loading: types.bool.isRequired,
  stopLoading: types.func.isRequired
}

export default EmailScreen
