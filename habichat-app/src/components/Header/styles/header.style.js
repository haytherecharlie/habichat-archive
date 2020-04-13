import styled from 'styled-components'

export const Header = styled.View`
  flex: 0 1 100px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  padding: 0 20px;
`

export const HeaderLeft = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const HeaderRight = styled.View`
  flex: 0 1 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const HeaderLogoText = styled.Image`
  height: 40px;
  width: 185px;
`

export const HeaderSubtitle = styled.Text`
  font-size: 14;
  font-weight: 500;
`
export const HeaderImageBtn = styled.TouchableOpacity``

export const HeaderImage = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`
