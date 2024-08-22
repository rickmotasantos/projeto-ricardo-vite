import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import fotoRick from './img/rick.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Ricardo Mota </h1>
      <h2>Projeto com Vite <img src={viteLogo} alt="Logo do vite"/></h2>
    </>
  )
}

export default App
