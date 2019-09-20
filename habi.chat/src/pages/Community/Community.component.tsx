import React from 'react'
import logoHeadline from 'assets/images/logo-headline.jpg'
import * as S from './Community.style'

const Community = () => {
  return (
    <S.Community>
      {/* Header */}
      <S.BoxRow>
        <S.BoxLeft>
          <S.Img src={logoHeadline} alt="habichat headline" />
          <S.CommunityName>{`Manchester United 🇬🇧`}</S.CommunityName>
        </S.BoxLeft>
        <S.BoxRight>
          <S.ProfileCircle />
        </S.BoxRight>
      </S.BoxRow>

      <S.Divider />
      {/* Your Community */}
      <S.BoxRow>
        <S.BoxLeft>
          <S.SectionTitle>{`Your Community`}</S.SectionTitle>
          <S.MemberList>
            <S.MemberCircle />
            <S.MemberCircle />
            <S.MemberCircle />
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
        </S.BoxLeft>
      </S.BoxRow>
    </S.Community>
  )
}

export default Community
