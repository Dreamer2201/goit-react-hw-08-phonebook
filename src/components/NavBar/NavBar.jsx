import React from 'react';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import AuthNavMenu from './AuthNavMenu';
import UserNavMenu from './UserNavMenu';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { ListNavBar, NavBarLink } from './StyledNavBar';
import { FcContacts } from "react-icons/fc";


export default function NavBar() {
    const isLogginUser = useSelector(getIsLoggedIn);
    const homeId = nanoid();
  return (
    <nav>
        <ListNavBar>
        <Link to="/"><FcContacts color='#737373' size='40px'/></Link>
        <li key={homeId}>
            <NavBarLink to="/">Home</NavBarLink>
        </li>
            {isLogginUser ? <UserNavMenu /> : <AuthNavMenu />}
            
        </ListNavBar>
    </nav>
  )
}
