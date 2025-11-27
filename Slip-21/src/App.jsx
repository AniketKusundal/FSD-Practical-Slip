import { useState } from 'react'
import './App.css'

function App() {
  const [numberInput, setNumberInput] = useState("")
  const [stringInput, setStringInput] = useState("")
  const [numberResult, setNumberResult] = useState("")
  const [stringResult, setStringResult] = useState("")






  const CheckNumber = () => {
    if(numberInput === "")
    {
      setNumberResult("Please Enter a Number")
    }
    else if(parseInt(numberInput) % 2 === 0)
    {
      setNumberResult("The Number Is Even")
    }
    else
    {
      setNumberResult("The Number Is Odd")
    }
  }


  const CheckString = () => {
    if(stringInput === "")
    {
      setStringInput("Plese Enter A String")
      return
    }
    
    
    const reversed = stringInput.split("").reverse().join("")


    if(stringInput === reversed)
    {
      setStringResult("The String IS Palindrome")
    }
    else
    {
      setStringResult("The String IS NOt A Plaindrome")
    }
  }

  return (
    <>
      <p>Create React Application to take input from the user (number, string). Check whether 
        the number is even or odd and also check whether the string is palindrome or not. 
        Display appropriate messages to the user.
      </p>



      <div>
        <h2>Check Number Is Even Or Odd</h2>

        <input type='number'  value={numberInput}  onChange={(e) => setNumberInput(e.target.value)} placeholder='Enter A Number'/><br />
        <button onClick={CheckNumber} style={{marginLeft:"10px"}}>Check</button>

        <h3>{numberResult}</h3>


        <hr />

        <h2>Check The String Is palindrome</h2>
        <input type='text'  placeholder='Enter The String ' value={stringInput} onChange={(e) => setStringInput(e.target.value)}/>

        <button onClick={CheckString} style={{marginLeft:"10px"}}>Check</button>


        <h3>{stringResult}</h3>

      </div>



    </>
  )
}

export default App
