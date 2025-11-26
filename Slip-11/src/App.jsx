import { useState } from 'react'
import './App.css'

function App() {

  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const HandelUpperCase = (e) => {
    e.preventDefault();
    setResult(text.toUpperCase());
  };

  const HandelLowerCase = (e) => {
    e.preventDefault();
    setResult(text.toLowerCase());
  };

  const HandelLengthOfString = (e) => {
    e.preventDefault();
    setResult(`Length: ${text.length}`);
  };

  const HandelReverse = (e) => {
    e.preventDefault();

    setResult(text.split("").reverse().join(""));
  };


  return (
    <>
      <form>
        <textarea cols={40}  rows={10}  placeholder="Enter Your Text" value={text} 
        onChange={(e) => setText(e.target.value)}>
        </textarea><br /><br />

        <button onClick={HandelUpperCase}>To Upper</button> &nbsp;&nbsp;
        <button onClick={HandelLowerCase}>To Lower</button>&nbsp;&nbsp;
        <button onClick={HandelLengthOfString}>Length Of String</button>&nbsp;&nbsp;
        <button onClick={HandelReverse}>String Reverse</button>&nbsp;&nbsp;
      </form>

      <h2>Result: {result}</h2>
    </>
  );
}

export default App;
