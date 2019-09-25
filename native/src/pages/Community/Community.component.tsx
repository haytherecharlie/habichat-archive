import React, { Fragment } from 'react'
import * as S from './Community.style'

const Community = ({ posts }) => {
  return (
    <S.Community>
      <S.Title>Community Posts</S.Title>
      {posts.map((post) => (
        <Fragment key={post.author.timestamp}>
          <S.Title>{post.author.name}</S.Title>
          <S.Title>{post.author.timestamp}</S.Title>
          <S.Title>{post.text}</S.Title>
        </Fragment>
      ))}
    </S.Community>
  )
}

export default Community
