import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TableComponent from './components/TableComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='text-2xl'> 
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App
