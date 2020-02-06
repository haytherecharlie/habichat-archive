import styled from 'styled-components'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import theme from 'assets/styles/theme.style'

export const Wrapper = styled(View)({
  flex: 1,
  display: `flex`,
  flexDirection: `column`,
  alignItems: `stretch`,
  justifyContent: `stretch`
})

export const Banner = styled(Image)({
  position: `absolute`,
  top: 0,
  left: 0,
  width: `100%`,
  height: 250
})

export const Box = styled(View)({
  flex: 1,
  background: theme.FOREGROUND_COLOR,
  margin: `125px 20px 20px 20px`,
  borderRadius: `25px`,
  boxShadow: `0 2px 2px ${theme.SHADOW_COLOR}`,
  padding: `0 30px 20px 30px`,
  minHeight: 300
})

export const Picture = styled(Image)({
  height: 125,
  width: 125,
  borderRadius: 75,
  alignSelf: `center`,
  justifySelf: `center`,
  marginTop: -62.5
})

export const Name = styled(Text)({
  fontSize: 30,
  textAlign: `center`,
  color: theme.PRIMARY_COLOR,
  ...theme.HABICHAT_FONT
})

export const Title = styled(Text)({
  color: theme.PRIMARY_COLOR,
  fontWeight: `bold`,
  fontSize: 18,
  marginTop: 20
})

export const Date = styled(Text)({
  color: theme.PRIMARY_COLOR,
  fontSize: 15,
  marginTop: 10
})

export const Interests = styled(View)({
  display: `flex`,
  flexDirection: `row`,
  padding: `10px 0`
})

export const Interest = styled(Text)({
  border: `1px solid ${theme.PRIMARY_COLOR}`,
  color: theme.PRIMARY_COLOR,
  padding: `5px 10px`,
  borderRadius: 15,
  marginRight: 10
})

export const Button = styled(TouchableOpacity)({
  background: theme.PRIMARY_COLOR,
  padding: `12px`,
  width: `75%`,
  borderRadius: 25,
  margin: `50px auto 0 auto`,
  textAlign: 'center'
})

export const ButtonText = styled(Text)({
  color: theme.SECONDARY_COLOR,
  fontSize: 15,
  fontWeight: 500
})
