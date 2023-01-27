import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { fetchLogin } from 'redux/api/authAPI';
import { LoginFormStyled, ButtonStyled } from './StyledLoginForm';


export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleChangeInput = (e) => {
        const { name, value } = e.target;

        switch (name) {
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
        dispatch(fetchLogin({ email, password }));
        setEmail('');
        setPassword('');
    }

    const emailUserId = nanoid();
    const passwordId = nanoid();
  return (
    <>
    <p>Enter your email and password, please.</p>
    <LoginFormStyled onSubmit={handlesSubmit}>
          <label htmlFor={emailUserId} />
          <input
                type="text"
                name="email"
                value={email}
                id={emailUserId}
                required
                onChange={handleChangeInput}
          />
          <label htmlFor={passwordId} />
          <input
                type="text"
                name="password"
                value={password}
                id={passwordId}
                required
                onChange={handleChangeInput}
          />
          <ButtonStyled  type='submit'>Log in</ButtonStyled>
    </LoginFormStyled>
    </>
  )
}
