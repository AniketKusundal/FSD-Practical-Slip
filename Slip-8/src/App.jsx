import { useState } from 'react'
import './App.css'

function App() {
  const [isOn, setIsOn] = useState(false)

  const ToggelButton = () => {
    setIsOn(!isOn)
  }

  return (
    <>
      <div style={{backgroundColor:"greenyellow", height:"500px", width:"500px" , justifyContent:"center" , borderRadius:"10px"}}>
        <button onClick={ToggelButton} 
        style={{
            marginTop:"100px" , 
            alignItems:"center" , 
            justifyContent:"center", 
            width:"100px", 
            backgroundColor: isOn ? "green" : "red",
          }}
          >
            {isOn ? "ON" : "OFF"}
          </button>
      </div>
      
    </>
  )
}

export default App
