import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute({ allowedRole }) {
  // MOCK AUTH STATE
  const isAuthenticated = true; 
  const userRole = 'admin'; // <-- Change this to 'user' to test the user dashboard!

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If roles don't match, send them to their correct home base!
  if (allowedRole && userRole !== allowedRole) {
    if (userRole === 'admin') {
      return <Navigate to="/admin/dashboard" replace />;
    } else {
      return <Navigate to="/dashboard" replace />;
    }
  }

  return <Outlet />;
}