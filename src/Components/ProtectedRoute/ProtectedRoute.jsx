import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

// Custom hook for role-based route protection
const ProtectedRoute = ({ allowedRoles }) => {
  const { userInfo, loading } = useSelector((state) => state.user); // Assuming user data is in Redux store
  if (loading) return;
  if (!userInfo) {
    // If no user is logged in, redirect to login
    return <Navigate to="/login" />;
  }

  // Check if the user has the required role
  if (!allowedRoles.includes(userInfo.role)) {
    // If the user does not have the correct role, redirect them to unauthorized page
    return <Navigate to="/" />;
  }

  // If the user is authenticated and has the right role, render the component (or nested routes)
  return <Outlet />;
};

export default ProtectedRoute;
