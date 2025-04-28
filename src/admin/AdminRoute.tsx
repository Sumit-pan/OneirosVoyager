import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute: React.FC = () => {
  // Check if user is authenticated as admin
  const isAuthenticated = localStorage.getItem('adminAuth') === 'true';
  
  // If not authenticated, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }
  
  // If authenticated, render the child routes
  return <Outlet />;
};

export default AdminRoute;