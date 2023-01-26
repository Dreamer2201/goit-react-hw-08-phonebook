import React from 'react';
import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { getNameUser } from 'redux/auth/auth-selectors';
import { fetchLogout } from 'redux/api/authAPI';

export default function UserNavMenu() {
    const contactsId = nanoid();
    const nameUser = useSelector(getNameUser);
    const dispatch = useDispatch();
    return (
        <>
        <li key={contactsId}>
            <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <p>Wellcome, {nameUser}</p>
        <button type='button' onClick={() => dispatch(fetchLogout())}>Log out</button>
        </>
    )
}
