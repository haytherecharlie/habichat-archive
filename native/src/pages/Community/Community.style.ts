import styled from 'styled-components'
import { BACKGROUND } from 'src/constants'
import { View, Text, ScrollView } from 'react-native'

// Community Page
export const Community = styled(View)({
  flex: 1,
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'flex-start',
  background: BACKGROUND,
  padding: 10
})

// Title Bar
export const TitleBar = styled(View)({
  flex: `0 0 100px`,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  justifyContent: 'center'
})

export const TitleBarLeft = styled(View)({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  background: 'yellow'
})

export const HabichatLogo = styled(View)({
  height: 36,
  width: 175,
  background: 'purple'
})
export const CommunityName = styled(Text)({
  fontSize: 12,
  fontWeight: 700
})

export const TitleBarRight = styled(View)({
  flex: `0 0 100px`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'pink'
})

export const ProfileCircle = styled(View)({
  background: '#000',
  height: 52,
  width: 52,
  borderRadius: 26
})

// Your Community
export const YourCommunity = styled(View)({
  background: 'red'
})

export const YourCommunityTitle = styled(Text)({
  fontSize: 18,
  fontWeight: 600
})

export const CommunitySlider = styled(ScrollView)({
  background: 'blue',
  display: 'flex'
})

export const CommunityMember = styled(View)({
  width: 100,
  height: 100,
  marginRight: 10,
  background: 'gray'
})

// Community Posts
export const CommunityPosts = styled(View)({
  flex: 1,
  background: 'green'
})
