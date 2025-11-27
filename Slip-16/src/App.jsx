import { useState } from "react";

function App() {

  // React Virtual DOM Counter
  const [reactCount, setReactCount] = useState(0);

  // Traditional DOM Counter
  let normalCount = 0;

  const handleTraditional = () => {
    normalCount++;
    document.getElementById("normalCounter").innerText =
      "Traditional DOM Count: " + normalCount;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Virtual DOM vs Traditional DOM</h1>

      {/* Traditional DOM Example */}
      <h2 id="normalCounter">Traditional DOM Count: 0</h2>
      <button onClick={handleTraditional}>Traditional Increment</button>

      <hr />

      {/* React Virtual DOM Example */}
      <h2>React Virtual DOM Count: {reactCount}</h2>
      <button onClick={() => setReactCount(reactCount + 1)}>
        React Increment
      </button>

      <p style={{ marginTop: "20px", color: "blue" }}>
        Observe how React updates only the necessary part (Virtual DOM),
        while Traditional DOM replaces the whole text.
      </p>
    </div>
  );
}

export default App;
