import React from 'react'
import Swiper from 'react-native-swiper'
import { StatusBar, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import * as S from './styles/modal.style'

const Modal = () => {
  const { showModal } = useSelector(s => s.app)
  const dispatch = useDispatch()
  return (
    <S.Modal animationType="slide" transparent={false} visible={showModal}>
      <StatusBar barStyle="dark-content" />
      <S.ModalContainer>
        <S.HeaderContainer>
          <S.CloseButton onPress={() => dispatch({ type: 'TOGGLE_MODAL' })}>
            <S.CloseText>&times;</S.CloseText>
          </S.CloseButton>
        </S.HeaderContainer>
        <Swiper>
          <S.BodyContainer>
            <S.ModalTitleContainer>
              <S.ModalTitle>Enter Email</S.ModalTitle>
            </S.ModalTitleContainer>
            <S.ModalInputContainer />
          </S.BodyContainer>
        </Swiper>
      </S.ModalContainer>
    </S.Modal>
  )
}

export default Modal
