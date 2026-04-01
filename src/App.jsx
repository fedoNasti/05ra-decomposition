import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'


function App() {
  const rubricsData = [
    {
      text: "Сейчас в СМИ",
      link: "#"
    },
    {
      text: "В Германии",
      link: "#"
    },
    {
      text: "Рекомендуем",
      link: "#"
    }
  ]
  return (
    <>
      <Header date="31 июля, среда" time="02:32" rubrics={rubricsData}></Header>


    </>
  )
}

export default App
