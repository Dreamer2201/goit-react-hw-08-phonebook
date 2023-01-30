import React from 'react'
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { Navigate } from "react-router-dom";

export default function PrivateRoute({conponent: Component, redirect="/"}) {
    const logUserIn = useSelector(getIsLoggedIn);
 
    return logUserIn ? Component : <Navigate to={redirect} />
}

