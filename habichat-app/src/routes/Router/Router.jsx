import React, { useEffect, useState } from 'react'
import * as Font from 'expo-font'
import { useSelector } from 'react-redux'
import Loading from 'components/Loading/Loading'
import AuthenticatedRouter from 'routes/AuthenticatedRouter/AuthenticatedRouter'
import UnauthenticatedRouter from 'routes/UnauthenticatedRouter/UnauthenticatedRouter'

const Router = () => {
  const { signedIn } = useSelector(s => s.auth)
  const [staticAppContent, setStaticAppContent] = useState(false)

  useEffect(() => {
    loadStaticAppContent()
  }, [])

  const loadStaticAppContent = async () => {
    await Font.loadAsync({ habichat: require('assets/fonts/habichat.otf') })
    return setStaticAppContent(true)
  }

  return staticAppContent
    ? signedIn
      ? <AuthenticatedRouter/>
      : <UnauthenticatedRouter />
    : <Loading />
}

export default Router
