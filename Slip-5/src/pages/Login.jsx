import React, { useState } from 'react'

const Login = () => {

  const [username , setUsername] = useState("")
  const [password , setPassword] = useState("")
  const [message , setmessage] = useState("")



  const HandelSubmit = (e) => {
    e.preventDefault();

    if (username == "Admin" && password === "Pass123") {
      setmessage("Login Successful")
    }
    else{
      setmessage("Unauthorized Access")
    }
  }

  return (
    <div>
            <h1>Login Page</h1>
        <form onSubmit={HandelSubmit}>
              <input type='input' placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)}/> <br/><br/><br/>
              <input type='input' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} /> <br/><br/>
              <button type='submit'>Login</button>
        </form>

        <h3>{message}</h3>
    </div>
  )
}

export default Login
