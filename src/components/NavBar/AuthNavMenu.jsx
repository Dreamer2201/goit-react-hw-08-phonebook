import React from 'react';
import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid'

export default function AuthNavMenu() {
    const registerId = nanoid();
    const loginId = nanoid();

    return (
        <>
        <li key={registerId}>
            <NavLink to="/register">Register</NavLink>
        </li>
        <li key={loginId}>
            <NavLink to="/login">Log in</NavLink>
        </li>
        </>
    )
}
