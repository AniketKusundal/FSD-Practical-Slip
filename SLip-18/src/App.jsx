import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>
        Create a React application that displays your name, a short bio, and an image and description 
        of your profile.
      </p>


      <div className='card' style={{height:"800px" , width:"800px" , backgroundColor:"lightblue" , color:"black" }}>
        <h1>Aniket Kusundal</h1>
        <p>o write a short bio, include your name, current role, and a brief summary of your professional expertise or accomplishments. You can also add personal details, like your hometown or hobbies, to make it more relatable. Finish with your professional goals or a call to action, such as your contact information or a portfolio link, depending on the purpose. </p>

      <div className='image-and-description'>
        <img src='https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4=' alt='image' style={{height:"200px", width:"200px"}}/>

        <p className='description'>r name, current role, and a brief summary of your professional expertise or accomplishments. You can also add personal details, like your hometown or hobbies, to make it more relatable. Finish with your professional goals or a call to action, such as your contact information or a portfolio link, depending on the purpose.</p>
      </div>
      </div>





    </>
  )
}

export default App
