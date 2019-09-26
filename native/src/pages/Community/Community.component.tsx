import React, { Fragment } from 'react'
import * as S from './Community.style'

const Community = ({ posts }) => {
  return (
    <S.Community>
      <S.TitleBar>
        <S.TitleBarLeft>
          <S.HabichatLogo />
          <S.CommunityName>HarbourView Estates, Toronto</S.CommunityName>
        </S.TitleBarLeft>
        <S.TitleBarRight>
          <S.ProfileCircle />
        </S.TitleBarRight>
      </S.TitleBar>

      <S.YourCommunity>
        <S.YourCommunityTitle>Your Community</S.YourCommunityTitle>
        <S.CommunitySlider horizontal={true}>
          <S.CommunityMember />
          <S.CommunityMember />
          <S.CommunityMember />
          <S.CommunityMember />
          <S.CommunityMember />
        </S.CommunitySlider>
      </S.YourCommunity>
      <S.CommunityPosts />
      {/* {posts.map((post) => (
        <Fragment key={post.author.timestamp}>
          <S.Title>{post.author.name}</S.Title>
          <S.Title>{post.author.timestamp}</S.Title>
          <S.Title>{post.text}</S.Title>
        </Fragment>
      ))} */}
    </S.Community>
  )
}

export default Community
