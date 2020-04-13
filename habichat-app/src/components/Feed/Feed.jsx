import React from 'react'
import Ionicon from 'react-native-vector-icons/Ionicons'
import * as S from './styles/feed.style'

const Feed = ({ posts, neighbors, navigation }) => {
  const renderPost = ({ createdAt, content: { body }, comments, seenBy, author }, index) => {
    const { picture, firstname, lastname } = neighbors.find(n => n._id == author)
    return (
      <S.FeedPost key={index} onPress={() => navigation.navigate('Post')}>
        <S.PostImageContainer>
          <S.FeedPostImage source={{ uri: picture }} />
        </S.PostImageContainer>
        <S.FeedPostCard>
          <S.PostHeader>
            <S.PostName>{`${firstname} ${lastname}`}</S.PostName>
            <S.PostDate>{createdAt}</S.PostDate>
          </S.PostHeader>
          <S.PostBody>
            <S.PostBodyText>{body}</S.PostBodyText>
          </S.PostBody>
          <S.PostFooter>
            <S.FooterLeft>
              <Ionicon name="md-chatbubbles" color="#000" size={20} />
              <S.FooterText>{comments.length} comments</S.FooterText>
            </S.FooterLeft>
            <S.FooterRight>
              <Ionicon name="md-eye" color="#000" size={20} />
              <S.FooterText>seen by {seenBy.length} people</S.FooterText>
            </S.FooterRight>
          </S.PostFooter>
        </S.FeedPostCard>
      </S.FeedPost>
    )
  }

  return (
    <S.FeedContainer>
      <S.FeedTitleContainer>
        <S.FeedTitle>Community Posts</S.FeedTitle>
      </S.FeedTitleContainer>
      <S.FeedScrollList showsVerticalScrollIndicator={false}>
        {posts.map((p, i) => renderPost(p, i))}
        <S.FeedPostPadding />
      </S.FeedScrollList>
    </S.FeedContainer>
  )
}

export default Feed
