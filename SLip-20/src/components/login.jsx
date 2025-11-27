import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (userId.trim() === "") {
      alert("Please enter User ID");
      return;
    }

    navigate(`/user/${userId}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button style={{ marginLeft: "10px" }} type="submit">Login</button>
      </form>
    </div>
  );
}
