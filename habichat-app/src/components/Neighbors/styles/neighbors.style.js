import styled from 'styled-components'
import scale from 'lib/scale'

export const NeighborsContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
`

export const NeighborsTitleContainer = styled.View`
  padding: 0 20px;
`

export const NeighborsTitle = styled.Text`
  font-family: habichat;
  font-size: 16px;
`

export const NeighborsScrollList = styled.ScrollView`
  padding-left: 13px;
  padding-right: 20px;
  display: flex;
  flex-direction: row;
`

export const NeighborsButtonPadding = styled.View`
  width: ${scale(20)};
`

export const NeighborsBox = styled.TouchableOpacity`
  padding: 15px 7px 4px 7px;
  display: flex;
  align-items: center;
`

export const NeighborsImage = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`

export const NeighborsName = styled.Text``
