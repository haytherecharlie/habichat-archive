import styled from 'styled-components'
import { View, Text, ScrollView } from 'react-native'

export const MessageListContainer = styled(ScrollView)({
  flex: 1,
})
export const MessageList = styled(View)({
  flex: 1,
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'center',
  padding: `10px 5px`
})

export const PostContainer = styled(View)({
  flex: 1,
  padding: `10px`,
  margin: `0 0 15px 50px`,
  background: `#FFFFFF`,
  boxShadow: `0 0 2px rgba(0,0,0,0.3)`
})
export const PostTitleContainer = styled(View)({
  display: `flex`,
  flexDirection: `row`,
  alignItems: `center`,
  justifyContent: `space-between`
})
export const PostTitleAuthorWrapper = styled(View)({})
export const PostTitleAuthorText = styled(Text)({})
export const PostTitleTimeWrapper = styled(Text)({})
export const PostTitleTimeText = styled(Text)({})
export const PostBodyContainer = styled(View)({})
export const PostBodyText = styled(Text)({})

export const Title = styled(Text)({
  fontSize: 20
})
