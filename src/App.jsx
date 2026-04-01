import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import HeaderItem from './components/HeaderItem'

function App() {
  return (
    <>
      <Header date="31 июля, среда" time="02:32">
        <HeaderItem text="Сейчас в СМИ" link="#" />
        <HeaderItem text="В Германии" link="#" />
        <HeaderItem text="Рекомендуем" link="#" />
      </Header>


    </>
  )
}

export default App
