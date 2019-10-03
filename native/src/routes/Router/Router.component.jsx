import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Community from 'src/screens/Community'
// import types from 'prop-types'
import * as S from './Router.style'

const Stack = createAppContainer(
  createStackNavigator(
    {
      Community
    },
    {
      initialRouteName: 'Community'
    }
  )
)

const Router = () => {
  return <Stack />
}

Router.defaultProps = {}
Router.propTypes = {}

export default Router
