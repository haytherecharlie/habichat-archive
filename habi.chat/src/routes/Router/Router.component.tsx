import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import GlobalStyle from 'assets/styles/global.style'
import Home from 'pages/Home'

const HomePage = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Route path="/" component={Home} />
    </BrowserRouter>
  )
}

export default HomePage
