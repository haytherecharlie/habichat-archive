import React from 'react'
import useDimension from 'utils/useDimension'
import useAnimation from 'utils/useAnimation'
import * as S from './Template.style'

const Template = () => {
  const size = useDimension()
  const animation = useAnimation('elastic', 600, 0)

  return (
    <S.AppWrapper>
      {/* <S.SideBar/> */}
      <button onClick={() => console.log(animation * 200 - 100)}></button>
      <S.LeftPane>{size.width}px</S.LeftPane>
      <S.RightPane open={true} />
    </S.AppWrapper>
  )
}

export default Template
