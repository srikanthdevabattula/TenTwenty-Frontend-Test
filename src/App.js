import React from 'react'
import "./index.css"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cards from './components/Cards'
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