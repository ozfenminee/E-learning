import { useState } from 'react'
import { Navbar } from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import  Numbercounter from './components/Numbercounter/Numbercounter'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='overflow-x-hidden'> 
    <Navbar/>
    <Hero/>
    <Numbercounter/>
    <Footer/>
   </div>
  )
}

export default App
