import React from 'react'
import types from 'prop-types'
import { Linking } from 'react-native'
import { openBrowserAsync } from 'expo-web-browser'
import * as S from './WebLink.style'

const WebLink = ({ secondaryColor, h4, children, href, darkMode }) => {
  const openBrowserLink = async () => await openBrowserAsync(`${href}?dm=${darkMode}`)

  return (
    <S.WebLink onPress={openBrowserLink}>
      <S.Title fontSize={h4} color={secondaryColor}>
        {children}
      </S.Title>
    </S.WebLink>
  )
}

WebLink.propTypes = {
  darkMode: types.bool.isRequired,
  secondaryColor: types.string.isRequired,
  children: types.node.isRequired,
  h4: types.string.isRequired,
  href: types.string.isRequired
}

export default WebLink
