import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [isOn, setisOn] = useState(false)


  const ToggelButton = () => {
    setisOn(!isOn)
      
  }

  return (
    <>
      <h2>TOGGLE BUTTON</h2>
      <button onClick={ToggelButton}>{isOn ? "ON" : "OFF"}</button>
    </>
  )
}

export default App
