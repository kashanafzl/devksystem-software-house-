import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Herosection/Hero'
import Services from './Services/Services'
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact/Contact'
import Footer from './footer/Footer'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Services/>
        <Portfolio/>
        <Contact/>
        <Footer/>
    </div>
  )
}
