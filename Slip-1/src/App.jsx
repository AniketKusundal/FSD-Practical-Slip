import { useState } from 'react'
import './App.css'


function App() {
  const [user , setUser] = useState({
    username:"",
    password:""
  });


  const HandelChange = (e) => {
    const {name , value} = e.target
    setUser({...user , [name]: value});
    console.log("onChange" , name , value);
    
  }

  const HandelInput = (e) => {
    console.log("Input" , e.target.name , e.target.value);
    
  }

  const HandelSubmit = (e) => {
      e.preventDefault();
      console.log("Form Submitted");
      console.log("Your Username " , user.username);
      console.log(" Password " , user.password); 
  }


  return (
    <>
    <h1>Login Form</h1>
    <form  onSubmit={HandelSubmit}>
      <input type='text' placeholder='Enter The Username' required onChange={HandelChange} onInput={HandelInput} /><br/>
      <input type='password' placeholder='Enter The Password' required onChange={HandelChange} onInput={HandelInput} /><br/><br/>
      <button type='submit'>Submit</button>

    </form>
    </>
  )
}

export default App
