import React from 'react'
import types from 'prop-types'
import { Linking } from 'react-native'
import { openBrowserAsync } from 'expo-web-browser'
import * as S from './WebLink.style'

const WebLink = ({ secondaryColor, smallText, children, href, darkMode }) => {
  const openBrowserLink = async () => await openBrowserAsync(`${href}?dm=${darkMode}`)

  return (
    <S.WebLink onPress={openBrowserLink}>
      <S.Title fontSize={smallText} color={secondaryColor}>
        {children}
      </S.Title>
    </S.WebLink>
  )
}

WebLink.propTypes = {
  darkMode: types.bool.isRequired,
  secondaryColor: types.string.isRequired,
  children: types.node.isRequired,
  smallText: types.string.isRequired,
  href: types.string.isRequired
}

export default WebLink
