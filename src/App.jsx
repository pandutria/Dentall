import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='flex flex-col overflow-hidden'>
      <Navbar/>
      <LandingPage/>
      <Footer/>
    </div>
  )
}

export default App

