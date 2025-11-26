import { useState } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState("");
  const [sum, setSum] = useState(null);
  const [message, setMessage] = useState("");

  const HandelCheck = (e) => {
    e.preventDefault();

    // Blank check
    if (number.trim() === "") {
      setMessage("Please Enter A Number");
      setSum(null);
      return;
    }

    // Number validity check
    if (isNaN(number)) {
      setMessage("Invalid Input! Please enter a valid number.");
      setSum(null);
      return;
    }

    // Sum of digits
    let total = number
      .split("")
      .filter((ch) => !isNaN(ch) && ch !== " ")
      .reduce((acc, digit) => acc + parseInt(digit), 0);

    setMessage("Valid Number");
    setSum(total);
  };

  return (
    <>
      <p style={{ textAlign: 'center' }}>
        Create a react application to check whether a number is valid or not and also calculate
        the sum of the digit of the number entered by the user. Display appropriate message on UI 
        if entered value is invalid or blank.
      </p>

      <form onSubmit={HandelCheck}>
        <input
          type="text"
          placeholder="Enter a number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button type="submit">Check Number</button>
      </form>

      <div style={{ marginTop: "20px" }}>
        <h3>{message}</h3>
        {sum !== null && <p>Sum of digits: {sum}</p>}
      </div>
    </>
  );
}

export default App;
