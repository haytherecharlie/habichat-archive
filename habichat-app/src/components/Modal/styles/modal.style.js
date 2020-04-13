import styled from 'styled-components'
import scale from 'lib/scale'

export const Modal = styled.Modal``

export const ModalContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  background: #fff;
`

export const HeaderContainer = styled.View`
  flex: 0 0 100px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 20px;
`

export const BodyContainer = styled.View`
  flex: 0 0 100px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 20px;
`

export const CloseButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #191d38
  border-radius: ${scale(15)};
`

export const CloseText = styled.Text`
  color: #fff;
  font-weight: 300;
  font-size: ${scale(20)};
  line-height: ${scale(20)};
  padding: ${scale(5)} ${scale(9)};
  text-align: center;
`
export const ModalTitleContainer = styled.View`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
`
export const ModalTitle = styled.Text`
  color: #fff;
  font-family: habichat;
  font-size: ${scale(30)};
`

export const ModalInputContainer = styled.View`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  background: orange;
`
