import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Manager from './components/manager'
import Footer from './components/Footer'

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
