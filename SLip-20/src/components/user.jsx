import { useParams } from "react-router-dom";

export default function User() {
  const { id } = useParams();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>User Details Page</h2>
      <h3>Welcome User ID: {id}</h3>
    </div>
  );
}
