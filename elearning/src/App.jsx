import { useState } from 'react'
import { Navbar } from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='overflow-x-hidden'> 
    <Navbar/>
    <Footer/>
   </div>
  )
}

export default App
