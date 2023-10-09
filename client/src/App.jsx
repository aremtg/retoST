import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './componentes/nav/nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
        <Nav/>
    </div>
  )
}

export default App
