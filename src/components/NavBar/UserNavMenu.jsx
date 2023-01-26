import React from 'react';
import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { getNameUser } from 'redux/auth/auth-selectors';

export default function UserNavMenu() {
    const contactsId = nanoid();
    const nameUser = useSelector(getNameUser);
    return (
        <>
        <li key={contactsId}>
            <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <p>Wellcome, {nameUser}</p>
        </>
    )
}
