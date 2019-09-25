import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import StatusBar from 'src/components/elements/StatusBar'
import Community from 'src/pages/Community'
import Compose from 'src/pages/Compose'
import Profile from 'src/pages/Profile'
import Loading from 'src/components/elements/Loading'
import * as S from './Router.style'

const Routes = createAppContainer(
  createStackNavigator(
    { Community, Compose, Profile },
    { initialRouteName: 'Compose', defaultNavigationOptions: { header: null } }
  )
)

const Router = () => {
  return (
    <S.KeyboardView behavior="padding" enabled>
      <StatusBar />
      <S.PageView>
        <Routes />
      </S.PageView>
    </S.KeyboardView>
  )
}

export default Router
