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
  tvProgramData,
  weatherData,
  etherData
} from './components/data'
import Content from './components/Content'
import ContentItem from './components/ContentItem'
import Weather from './components/Weather'
import Map from './components/Map'
import VisitedList from './components/VisitedList'
import TVProgramList from './components/TVProgramList'
import EtherList from './components/EtherList'



function App() {

  return (
    <>
      <Header date="31 июля, среда" time="02:32" rubrics={rubricsData}></Header>
      <NewsList news={newsData}></NewsList>
      <ExchangeRates items={exchangeData}></ExchangeRates>
      <Navigation items={navItems}></Navigation>
      <SearchBar></SearchBar>
      <Content>
        <ContentItem title='Погода' link='#'>
          <Weather {...weatherData}></Weather>
        </ContentItem>
        <ContentItem title='Карта Германии' link='#'>
          <Map text='Расписание' link='#'></Map>
        </ContentItem>
        <ContentItem title='Эфир' link='#'>
          <EtherList programs={etherData}></EtherList>
        </ContentItem>
        <ContentItem title='Посещиемое' link='#'>
          <VisitedList items={visitedData}></VisitedList>
        </ContentItem>
        <ContentItem title='Телепрограмма' link='#'>
          <TVProgramList items={tvProgramData}></TVProgramList>
        </ContentItem>
      </Content>
    </>
  )
}

export default App
