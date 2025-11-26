import { useState } from 'react'
import Calculator from '../src/components/Calculator.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Calculator</h1>
      <Calculator/>
    </>
  )
}

export default App
