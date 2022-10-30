import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import React from "react";
export default function RequireAuth({ children }) {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  return isLoggedIn.isAuth ? (
    children
  ) : (
    <Navigate to="/signup" state={{ from: location }} replace />
  );
}
