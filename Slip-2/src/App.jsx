import { useState , useEffect } from 'react'
import './App.css'

function App() {
  const [user , setUser] = useState([])


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((Response)=> Response.json())
    .then((data)=>{
      setUser(data)
      console.log("Fetching Users : " , data);
    })
      .catch((Error)=> console.error("Error While Fetching API" , Error))
  }, []);
  return (
    <>
        <div>
        <h2>User List</h2>
        <ul style={{listStyleType:"none"}}>

        {user.map((user)=>{
          return(

          <li>
            <p>Name : {user.name}</p>
            <p>Id :  {user.id}</p>
            <p>Username :  {user.username}</p>
            <p>Email Id {user.email}</p>
          <hr/>
          </li>

          )})}
        </ul>

        </div>
    </>
  )
}

export default App
