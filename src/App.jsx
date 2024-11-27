import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MainPage } from './sections/MainPage'
import { About } from './sections/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MainPage />
    <div className='-z-10'>
    <About />
    </div>
    </>
  )
}

export default App
