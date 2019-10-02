import React, { useEffect } from 'react'
import types from 'prop-types'
import habichatIcon from 'assets/images/habichat-icon.png'
import { collectionListener } from 'services/firebase'
import LoadingWrapper from 'components/LoadingWrapper'
import * as S from './Community.style'

const Community = ({
  subMembers,
  subPosts,
  unsubMembers,
  unsubPosts,
  loading,
  members,
  posts,
  account
}) => {
  useEffect(() => {
    collectionListener('members', subMembers)
    collectionListener('posts', subPosts)
    return () => Promise.all([(unsubMembers(), unsubPosts())])
  }, [subMembers, subPosts, unsubMembers, unsubPosts])

  return (
    <LoadingWrapper loading={loading}>
      <S.Community>
        {/* Header */}
        <S.BoxRow>
          <S.BoxLeft>
            <S.BoxRow>
              <S.Icon src={habichatIcon} alt="habichat icon" />
              <S.Habichat>habichat</S.Habichat>
            </S.BoxRow>
            <S.CommunityName>{`Manchester United 🇬🇧`}</S.CommunityName>
          </S.BoxLeft>
          <S.BoxRight>
            <S.ProfileCircle src={account.picture} />
          </S.BoxRight>
        </S.BoxRow>

        <S.Divider />

        {/* Community Members */}
        <S.BoxRow>
          <S.BoxLeft>
            <S.SectionTitle>{`Community Members`}</S.SectionTitle>
            <S.MemberList>
              <S.MemberCircle />
              <S.MemberCircle />
              <S.MemberCircle />
              <S.MemberCircle />
              <S.MemberCircle />
              <S.MemberCircle />
            </S.MemberList>
          </S.BoxLeft>
        </S.BoxRow>

        <S.Divider />
        {/* Community Posts */}
        <S.BoxRow>
          <S.BoxLeft>
            <S.SectionTitle>{`Community Posts`}</S.SectionTitle>
            {posts.map((post) => (
              <S.Card>
                <div>{post.body}</div>
              </S.Card>
            ))}
          </S.BoxLeft>
        </S.BoxRow>
      </S.Community>
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
  posts: types.array.isRequired,
  account: types.object.isRequired
}

export default Community
