import React from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { NavBarLink } from './StyledNavBar';
import { getNameUser } from 'redux/auth/auth-selectors';
import { fetchLogout } from 'redux/api/authAPI';

export default function UserNavMenu() {
    const contactsId = nanoid();
    const nameUser = useSelector(getNameUser);
    const dispatch = useDispatch();
    return (
        <>
        <li key={contactsId}>
            <NavBarLink  to="/contacts">Contacts</NavBarLink >
            <NavBarLink to='/family'>Family</NavBarLink>
        </li>
        <p>Wellcome, {nameUser}</p>
        <button type='button' onClick={() => dispatch(fetchLogout())}>Log out</button>
        </>
    )
}
