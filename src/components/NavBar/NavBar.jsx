import React from 'react';
import { nanoid } from 'nanoid';

import { useSelector } from 'react-redux';
import AuthNavMenu from './AuthNavMenu';
import UserNavMenu from './UserNavMenu';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { ListNavBar, NavBarLink } from './StyledNavBar';

export default function NavBar() {
    const isLogginUser = useSelector(getIsLoggedIn);
    const homeId = nanoid();
  return (
    <nav>
        <ListNavBar>
        <li key={homeId}>
            <NavBarLink to="/">HOME</NavBarLink>
        </li>
            {isLogginUser ? <UserNavMenu /> : <AuthNavMenu />}
            
        </ListNavBar>
    </nav>
  )
}
