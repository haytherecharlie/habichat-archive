import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IMAGE_MESSAGE } from 'services/redux'
import * as S from './PreviewAddImage.style'

const PreviewAddImage = () => {
  const dispatch = useDispatch()
  const { image } = useSelector((s) => s.message)

  const renderImagePreview = () => (
    <Fragment>
      <S.Preview source={image} alt="Image preview" />
      <S.Button onPress={() => dispatch({ type: IMAGE_MESSAGE, value: null })}>
        <S.Icon name="ios-close" color="#FFF" size={25} />
      </S.Button>
    </Fragment>
  )

  return <S.Wrapper padding={image ? 10 : 0}>{image && renderImagePreview()}</S.Wrapper>
}

export default PreviewAddImage
