import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Manager from './components/Manager.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
      <Navbar />
      <div className='h-[80vh]'>
        <Manager />
      </div>
      <Footer />
    </>
  )
}

export default App
