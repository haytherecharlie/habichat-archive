import React from 'react'
import { useSelector } from 'react-redux'
import SectionTitle from 'components/SectionTitle'
import useDatabaseListener from 'utils/hooks/useDatabaseListener'
import * as S from './MembersList.style'

const MembersList = () => {
  useDatabaseListener('members')
  const { keyboardUp } = useSelector((s) => s.application)
  const members = useSelector((s) => s.members)

  const renderMember = (item, index) => {
    return (
      <S.MemberWrapper first={index === 0} key={item.id}>
        <S.ImagePlaceholder source={item.photoUrl ? { uri: item.photoUrl || '' } : {}} />
        <S.Title>{item.firstName}</S.Title>
      </S.MemberWrapper>
    )
  }

  return (
    <S.Wrapper hide={keyboardUp}>
      <SectionTitle>Your Neighbours</SectionTitle>
      <S.ScrollList horizontal={true} showsHorizontalScrollIndicator={false}>
        {members.map((member, index) => renderMember(member, index))}
      </S.ScrollList>
    </S.Wrapper>
  )
}

export default MembersList
