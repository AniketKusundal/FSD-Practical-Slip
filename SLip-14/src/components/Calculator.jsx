import React, { useState } from "react";

/*
  Simple calculator logic:
   - display: string shown to user
   - handleDigit adds digits or decimal to display
   - handleOperator handles + - * /
   - handleEqual evaluates expression safely (using Function)
   - handleClear resets display
*/

export default function Calculator() {
  const [display, setDisplay] = useState("0"); // what user sees
  const [lastWasOperator, setLastWasOperator] = useState(false); // avoid duplicate operators

  const isOperator = (ch) => ["+", "-", "*", "/"].includes(ch);

  const handleDigit = (digit) => {
    // When display is "0" replace it, otherwise append
    if (display === "0" && digit !== ".") {
      setDisplay(digit);
    } else if (digit === "." && display.slice(-1) === ".") {
      // Avoid two dots in a row
      return;
    } else {
      setDisplay((d) => d + digit);
    }
    setLastWasOperator(false);
  };

  const handleOperator = (op) => {
    // prevent operator as first character (except minus to allow negative)
    if (display === "0" && op !== "-") return;

    // if last char is operator, replace it (avoid ++ or +*)
    const lastChar = display.slice(-1);
    if (isOperator(lastChar)) {
      setDisplay((d) => d.slice(0, -1) + op);
    } else {
      setDisplay((d) => d + op);
    }
    setLastWasOperator(true);
  };

  const handleClear = () => {
    setDisplay("0");
    setLastWasOperator(false);
  };

  const handleEqual = () => {
    try {
      // sanitize: replace any accidental unicode operators; here we assume only 0-9 . + - * /
      // Evaluate expression safely using Function constructor (simple approach for exam).
      // Trim trailing operator
      let expr = display;
      const lastChar = expr.slice(-1);
      if (isOperator(lastChar)) expr = expr.slice(0, -1);

      // Use Function to evaluate expression (note: acceptable for simple exam demos)
      // We avoid eval() for clarity; Function works similarly here.
      // eslint-disable-next-line no-new-func
      const result = Function(`"use strict"; return (${expr})`)();

      // format result: avoid long decimals
      const formatted = Number.isFinite(result)
        ? Number.isInteger(result)
          ? String(result)
          : String(parseFloat(result.toFixed(10)).toString())
        : "Error";

      setDisplay(formatted);
    } catch (err) {
      setDisplay("Error");
    }
    setLastWasOperator(false);
  };

  // render button helper
  const Button = ({ children, onClick, className = "" }) => (
    <button className={`btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );

  return (
    <div className="calculator">
      <div className="display" data-testid="display">{display}</div>

      <div className="keypad">
        <Button onClick={() => handleClear()} className="span-2">C</Button>
        <Button onClick={() => handleOperator("/")}>÷</Button>

        <Button onClick={() => handleDigit("7")}>7</Button>
        <Button onClick={() => handleDigit("8")}>8</Button>
        <Button onClick={() => handleDigit("9")}>9</Button>
        <Button onClick={() => handleOperator("*")}>×</Button>

        <Button onClick={() => handleDigit("4")}>4</Button>
        <Button onClick={() => handleDigit("5")}>5</Button>
        <Button onClick={() => handleDigit("6")}>6</Button>
        <Button onClick={() => handleOperator("-")}>−</Button>

        <Button onClick={() => handleDigit("1")}>1</Button>
        <Button onClick={() => handleDigit("2")}>2</Button>
        <Button onClick={() => handleDigit("3")}>3</Button>
        <Button onClick={() => handleOperator("+")}>+</Button>

        <Button onClick={() => handleDigit("0")} className="span-2">0</Button>
        <Button onClick={() => handleDigit(".")}>.</Button>
        <Button onClick={handleEqual} className="equals">=</Button>
      </div>
    </div>
  );
}
