// ProtectedRoutes.jsx

import React from "react";
import { Navigate } from "react-router-dom";

export function ProtectedRoutes({ children }) {
  if (localStorage.getItem("currentUser")) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}
