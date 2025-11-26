import { Navigate } from "react-router-dom";

// Mock authentication
const isAuthenticated = true; // Change to true to allow access

function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    alert("You must log in first!");
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default ProtectedRoute;
