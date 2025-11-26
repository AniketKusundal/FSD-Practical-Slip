import { useState } from 'react'
import './App.css'
import AddNote from './components/AddNote'
import NoteList from './components/NoteList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
           <div style={{maxWidth:"800" , margin: "40px auto" , padding:20 }}>
            <h1>Note App Using (Redux Toolkit)</h1>
            <addNote/>
            <hr/>
            <NoteList/>

            
            
           </div>
    </>
  )
}

export default App
