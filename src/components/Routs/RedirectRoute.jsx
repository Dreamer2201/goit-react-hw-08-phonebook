import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

export default function RedirectRoute({component: Component, redirect}) {
    const isLog = useSelector(getIsLoggedIn);
  return (
   isLog ? <Navigate to={redirect} /> : <Component />
  )
}
