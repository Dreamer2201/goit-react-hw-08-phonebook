import React from 'react';
import { nanoid } from 'nanoid';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import AuthNavMenu from './AuthNavMenu';
import UserNavMenu from './UserNavMenu';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

export default function NavBar() {
    const isLogginUser = useSelector(getIsLoggedIn);
    const homeId = nanoid();
  return (
    <nav>
        <ul>
        <li key={homeId}>
            <NavLink to="/">HOME</NavLink>
        </li>
            {isLogginUser ? <UserNavMenu /> : <AuthNavMenu />}
            
        </ul>
    </nav>
  )
}
