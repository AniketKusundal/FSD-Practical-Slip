import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import login from './components/login.jsx'
import user from './components/user.jsx'
import Login from './components/login.jsx'
import User from './components/user.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/user/:id' element= {<User/>} />

      </Routes>
    </>
  )
}

export default App
