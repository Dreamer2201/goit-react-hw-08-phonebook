import React from 'react'
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute({children, ...routeProps}) {
    const logUserIn = useSelector(getIsLoggedIn);
 
    if (logUserIn) {
      return  <Outlet />
    } 
    return <Navigate to='/login' />
}
