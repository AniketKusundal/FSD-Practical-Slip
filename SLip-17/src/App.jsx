import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isSignIn, setSignIn] = useState(false)


  const HandelSignIn = () => {
    setSignIn(true)
  }

  const HandelSignOut = () => {
    setSignIn(false)
  }

  return (
    <>
      <p>
          Create React application for Sign-In and Sign-Out functionality using useState() hook. 
          When sign in Button clicked then display message is Hello, Welcome in Home Page 
          and sign out button is clicked then display message is “Please sign in first”. 
      </p>

      <div style={{textAlign:"center" , marginTop:"30px"}}>
          <h1>Sign In / Sign Out App</h1>

          <button onClick={HandelSignIn}>Sign In</button>
          <button onClick={HandelSignOut}>Sign Out</button>

          <h2>{isSignIn ? "Hello , Welcome To Home Page" : "Plese Sign In First"}</h2>
      </div>
    </>
  )
}

export default App
