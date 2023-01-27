import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { fetchRegister } from 'redux/api/authAPI';
import { RegFormStyled } from './StyledRegistrationForm';
import { ButtonStyled } from './StyledLoginForm';

export default function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleChangeInput = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case "name":
                setName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            default: return;
        }
    };

    const handlesSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchRegister({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    }

    const nameUser = nanoid();
    const emailUser = nanoid();
    const passwordId = nanoid();
  return (    
    <>
    <p>Typy registration form, please.</p>
    <RegFormStyled onSubmit={handlesSubmit}>
          <label htmlFor={nameUser} />
          <input
                type="text"
                name="name"
                value={name}
                id={nameUser}
                placeholder='Your name'
                required
                onChange={handleChangeInput}
          />
          <label htmlFor={emailUser} />
          <input
                type="text"
                name="email"
                value={email}
                id={emailUser}
                placeholder='Your email ...@gmail.com'
                required
                onChange={handleChangeInput}
          />
          <label htmlFor={passwordId} />
          <input
                type="text"
                name="password"
                value={password}
                id={passwordId}
                placeholder='Create your unik password'
                required
                onChange={handleChangeInput}
          />
          <ButtonStyled  type='submit'>Submit registration</ButtonStyled >
    </RegFormStyled>
    </>
  )
}
