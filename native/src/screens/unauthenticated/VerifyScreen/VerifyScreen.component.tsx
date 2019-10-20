import React from 'react'
import types from 'prop-types'
import PinCodeInput from 'src/components/unauthenticated/VerifyScreen/PinCodeInput'
import PageWrapper from 'src/components/universal/PageWrapper'

const VerifyScreen = ({ loading }) => {
  return (
    <PageWrapper loading={loading} text="Verifying pin code...">
      <PinCodeInput />
    </PageWrapper>
  )
}

VerifyScreen.propTypes = {
  loading: types.bool.isRequired
}

export default VerifyScreen
