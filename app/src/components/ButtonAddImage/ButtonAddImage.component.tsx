import React, { useEffect, useState } from 'react'
import { Keyboard } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { IMAGE_MESSAGE } from 'services/redux'
import * as S from './ButtonAddImage.style'

const ButtonAddImage = () => {
  const dispatch = useDispatch()
  const { keyboardUp } = useSelector((s) => s.application)
  const [openPicker, setOpenPicker] = useState(false)
  const imageOptions = { allowsMultipleSelection: false, quality: 1, exif: true }

  const toggleCameraRoll = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if (status !== 'granted') return alert('Please allow Camera Roll Permissions. \n Go to Settings > Habichat > Photos > Read and Write')
    setOpenPicker(true)
  }

  const selectImage = async () => {
    const value = await ImagePicker.launchImageLibraryAsync(imageOptions)
    setOpenPicker(false)
    if (!value.cancelled) {
      dispatch({ type: IMAGE_MESSAGE, value })
    }
  }

  useEffect(() => {
    if (openPicker) keyboardUp ? Keyboard.dismiss() : selectImage()
  }, [openPicker, keyboardUp])

  return (
    <S.Wrapper>
      <S.Button onPress={toggleCameraRoll}>
        <Ionicon name="ios-add" color="#FFF" size={23} />
      </S.Button>
    </S.Wrapper>
  )
}

export default ButtonAddImage
