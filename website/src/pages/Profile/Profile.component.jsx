import React from 'react'
import types from 'prop-types'
import { Link } from 'react-router-dom'
import LoadingWrapper from 'components/LoadingWrapper'
// import * as S from './Profile.style'

const Profile = ({ loading }) => {
  return (
    <LoadingWrapper loading={loading}>
      <Link to="/">Go To Community</Link>
    </LoadingWrapper>
  )
}

Profile.propTypes = {
  loading: types.bool.isRequired
}

export default Profile
