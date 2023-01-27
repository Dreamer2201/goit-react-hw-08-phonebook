import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

export default function PublicRout() {
    const logUserIn = useSelector(getIsLoggedIn);
    console.log(logUserIn);
    if (logUserIn) {
      return  <Navigate to='/contacts' />
    }
    return <Outlet />
}
