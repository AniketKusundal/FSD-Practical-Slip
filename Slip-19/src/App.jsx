import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  const movies = 
  [
    "Inception",
    "Interstellar",
    "The Dark Knight",
    "Avengers: Endgame",
    "Titanic",
    "Joker",
    "Avatar",
    "KGF 2",
    "3 Idiots",
    "Bahubali"
  ]

  return (
    <>
        <div>
          <h1>Movie List</h1>
          <ul >
            {movies.map((movie , index)=> (             
              <li key={index} style={{listStyle:"none"}}>
                {index +1}. {movie}
              </li>
            ))}
          </ul>
        </div>
    </>
  )
}

export default App
