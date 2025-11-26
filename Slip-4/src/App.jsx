import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <div>
        <h1>Multipel Pages Re-Render</h1>
        <nav>
          <Link to="/">Home</Link> &nbsp;&nbsp;
          <Link to="/about">About</Link>&nbsp;&nbsp;
          <Link to="/contact">Contact</Link>
        </nav>

        <hr/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
