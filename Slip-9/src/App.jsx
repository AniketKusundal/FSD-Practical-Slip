import { useState } from 'react' 
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div 
      style={{
       
        justifyContent:"center" , 
        backgroundColor:"gary",
         height:"300px" , 
         width:"300px", 
         borderRadius:"10px"
         }}>

          <h1>React Counter Application</h1>

          <h4>Counter Value {count}</h4>

          <button onClick={() => setCount(count + 1)}>Increment</button> &nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={() => setCount(count - 1)}>Decrement</button>
         </div>
    </>
  )
}

export default App
