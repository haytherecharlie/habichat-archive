import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import ButtonAddImage from 'components/ButtonAddImage'
import ButtonSendMessage from 'components/ButtonSendMessage'
import InputMessageText from 'components/InputMessageText'
import MembersList from 'components/MembersList'
import MessagesList from 'components/MessagesList'
import PreviewAddImage from 'components/PreviewAddImage'
import * as S from './Community.style'

const Community = () => {
  const { keyboardUp } = useSelector((s) => s.application)

  return (
    <Fragment>
      <S.Navigation>
        <MembersList />
      </S.Navigation>
      <S.Placeholder>
        <MessagesList />
      </S.Placeholder>
      <S.Footer keyboardUp={keyboardUp}>
        <ButtonAddImage />
        <S.InputWrapper>
          <PreviewAddImage />
          <InputMessageText />
        </S.InputWrapper>
        <ButtonSendMessage />
      </S.Footer>
    </Fragment>
  )
}

export default Community
