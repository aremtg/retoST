import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './componentes/nav/nav'
import Caja from './componentes/caja/Caja'

function App() {
  return (
    <>
      <Nav/>
      <Caja>
        Buenas tardes
      </Caja>
    </>
    
  )
}

export default App
