import styled from 'styled-components'
import { Video } from 'expo-av'
import scale from 'lib/scale'

export const ButtonStyle = `
  width: 80%;
  border-radius: ${scale(30)};
  display: flex;
  align-items: center;
  margin: 10px;
`

export const TextStyle = `
  font-size: ${scale(16)};
  font-weight: 500;
`

export const SignIn = styled.KeyboardAvoidingView`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`

export const VideoBackground = styled(Video)`
  height: 100%;
  width: 100%;
  position: absolute;
`

export const ImageBackground = styled.ImageBackground`
  height: 100%;
  width: 100%;
  position: absolute;
`


export const LogoContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ImageLogo = styled.Image`
  width: ${scale(110)};
  height: ${scale(110)};
  margin-top: ${scale(100)};
`

export const ButtonsContainer = styled.View`
  flex: 0 0 ${scale(150)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LinksContainer = styled.View`
  flex: 0 0 ${scale(75)};
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  margin: auto;
`

export const ButtonSignIn = styled.TouchableOpacity`
  ${ButtonStyle}
  padding: ${scale(12)};
  background: #191d38;
  border: 1px solid #fff;
`

export const ButtonRegister = styled.TouchableOpacity`
  ${ButtonStyle}
  padding: ${scale(10)};
  background: #fff;
  border: 2px solid #191d38;
`

export const TextBlack = styled.Text`
  ${TextStyle};
  color: #191d38;
`

export const TextWhite = styled.Text`
  ${TextStyle};
  color: #fff;
`

export const TextLink = styled.Text`
  font-size: ${scale(12)};
  color: #fff;
  font-weight: 500;
`
