import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import types from 'prop-types'
import { collectionListener } from 'services/firebase'
import LoadingWrapper from 'components/LoadingWrapper'
// import * as S from './Community.style'

const Community = ({ subMembers, subPosts, unsubMembers, unsubPosts, loading, members, posts }) => {
  useEffect(() => {
    collectionListener('members', subMembers)
    collectionListener('posts', subPosts)
    return () => Promise.all([(unsubMembers(), unsubPosts())])
  }, [subMembers, subPosts, unsubMembers, unsubPosts])

  return (
    <LoadingWrapper loading={loading}>
      <Link to="/profile">Go To Profile</Link>
    </LoadingWrapper>
  )
}

Community.defaultProps = {}
Community.propTypes = {
  subMembers: types.func.isRequired,
  subPosts: types.func.isRequired,
  unsubMembers: types.func.isRequired,
  unsubPosts: types.func.isRequired,
  loading: types.bool.isRequired,
  members: types.array.isRequired,
  posts: types.array.isRequired
}

export default Community
