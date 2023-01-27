import React from 'react';
import { nanoid } from 'nanoid';
import { NavBarLink } from './StyledNavBar';

export default function AuthNavMenu() {
    const registerId = nanoid();
    const loginId = nanoid();

    return (
        <>
        <li key={registerId}>
            <NavBarLink  to="/register">Register</NavBarLink >
        </li>
        <li key={loginId}>
            <NavBarLink  to="/login">Log in</NavBarLink >
        </li>
        </>
    )
}
