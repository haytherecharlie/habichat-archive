import styled from 'styled-components'
import scale from 'lib/scale'

export const FeedContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  padding: 20px 0 0 0;
`

export const FeedTitleContainer = styled.View`
  height: 30px;
  z-index: 1001;
`

export const FeedTitle = styled.Text`
  font-family: habichat;
  font-size: 16px;
  margin-left: 20px;
`

export const FeedScrollList = styled.ScrollView`
  flex: 1;
`
export const FeedPostPadding = styled.View`
  width: 100%;
  height: ${scale(100)};
`

export const FeedPost = styled.TouchableOpacity`
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
  padding: 0 20px;
`

export const FeedPostImage = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 20px;
`

export const PostImageContainer = styled.View`
  position: absolute;
  z-index: 300;
  top: 25%;
  left: 20px;
  height: 40px;
  width: 40px;
  elevation: 2;
`

export const FeedPostCard = styled.View`
  margin-left: 25px;
  margin-top: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  background: #fff;
  display: flex;
  align-items: stretch;
  padding: 10px;
  elevation: 1;
`

export const PostHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
`
export const PostName = styled.Text`
  font-family: habichat;
  font-size: 14px;
`

export const PostDate = styled.Text`
  font-size: 10;
  color: #666;
`

export const PostBody = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
`
export const PostBodyText = styled.Text`
  font-size: 12px;
  padding: 5px 0px 10px 10px;
`

export const PostFooter = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const FooterLeft = styled.View`
  flex: 1;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const FooterText = styled.Text`
  font-size: 10px;
  color: #000;
  padding-left: 5px;
`

export const FooterRight = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`
