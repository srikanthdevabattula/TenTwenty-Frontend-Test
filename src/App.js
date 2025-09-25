import React from 'react'
import "./index.css"
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Cards from './components/Cards/Cards'
const App = () => {
  return (
    <div>
      <Navbar />
      
        <Hero />
      
      <Cards />
    </div>
  )
}

export default App