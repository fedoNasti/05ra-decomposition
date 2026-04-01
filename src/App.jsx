import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import NewsList from './components/NewsList'
import Navigation from './components/Navigation'
import ExchangeRates from './components/ExchangeRates'
import SearchBar from './components/SeachBar'

import {
  rubricsData,
  newsData,
  exchangeData,
  navItems,
  visitedData,
  tvProgramData
} from './components/data'



function App() {

  return (
    <>
      <Header date="31 июля, среда" time="02:32" rubrics={rubricsData}></Header>
      <NewsList news={newsData}></NewsList>
      <ExchangeRates items={exchangeData}></ExchangeRates>
      <Navigation items={navItems}></Navigation>
      <SearchBar></SearchBar>
    </>
  )
}

export default App
