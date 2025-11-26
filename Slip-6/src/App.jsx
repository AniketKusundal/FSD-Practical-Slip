import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import ProtectedRoute from './ProtectedRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
          <Routes>
            <Route path='/' element = {<Home/>} />
            <Route path='/login' element = { <Login/> } />
            <Route path='/dashboard' element = {<ProtectedRoute> <Dashboard/> </ProtectedRoute>}   />
 
            <Route path='*' element={<h2>404 Error ,  Page Is Not Found </h2>}/>

          </Routes> 
        </div>
    </>
  )
}

export default App
