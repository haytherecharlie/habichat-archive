import React from 'react'
import * as S from './styles/neighbors.style'

const Neighbors = ({ neighbors, navigation }) => {
  const renderNeighbor = ({ _id, picture, firstname }, i) => (
    <S.NeighborsBox key={`${_id}`} onPress={() => navigation.navigate('Profile')}>
      <S.NeighborsImage source={{ uri: picture }} />
      <S.NeighborsName>{firstname}</S.NeighborsName>
    </S.NeighborsBox>
  )

  return (
    <S.NeighborsContainer>
      <S.NeighborsTitleContainer>
        <S.NeighborsTitle>Your Neighbors</S.NeighborsTitle>
      </S.NeighborsTitleContainer>
      <S.NeighborsScrollList showsHorizontalScrollIndicator={false} horizontal={true}>
        {neighbors.map((n, i) => renderNeighbor(n, i))}
        <S.NeighborsButtonPadding />
      </S.NeighborsScrollList>
    </S.NeighborsContainer>
  )
}

export default Neighbors
