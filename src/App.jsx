import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'

const App = () => {
  return (
    <div><Navbar/>
    <Hero/>
    <Title subTitle='Our Program' title='what we offer'/>
    <Programs/>
    <About/>
    <Title subTitle={GALLERY} title='Campus Photos'/></div>
  )
}

export default App