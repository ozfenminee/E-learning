import { useState } from 'react'
import { Navbar } from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import  Numbercounter from './components/Numbercounter/Numbercounter'
import { WhyChooseUs } from './components/WhyChooseUs/WhyChooseUs'
import { Banner } from './components/Banner/Banner'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='overflow-x-hidden'> 
    <Navbar/>
    <Hero/>
    <Numbercounter/>
    <WhyChooseUs/>
    <Banner/>
    <Footer/>
   </div>
  )
}

export default App
