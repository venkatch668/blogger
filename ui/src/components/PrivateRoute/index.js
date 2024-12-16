import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getToken } from "../../util/rest"
// Simulated authentication check
const isAuthenticated = () => {
    console.log(getToken());
  return !!getToken()
};

const PrivateRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/not-found" />;
};

export default PrivateRoute;
