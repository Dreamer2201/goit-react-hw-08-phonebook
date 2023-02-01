import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { fetchLogin } from 'redux/api/authAPI';
import { ConteinerLoginPage, LoginFormStyled, TitleLogPage, ButtonStyled } from './StyledLoginForm';
import { InputStyled, ContainerForm, TitleFormPage, FormStyled} from './StyledRegistrationForm';

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
    <ContainerForm>
    <TitleFormPage>Enter your email and password, please.</TitleFormPage>
    <FormStyled onSubmit={handlesSubmit}>
          <label htmlFor={emailUserId} />
          <InputStyled
                type="text"
                name="email"
                value={email}
                id={emailUserId}
                placeholder='Your email ...@gmail.com'
                required
                onChange={handleChangeInput}
          />
          <label htmlFor={passwordId} />
          <InputStyled
                type="text"
                name="password"
                value={password}
                id={passwordId}
                placeholder='Password'
                required
                onChange={handleChangeInput}
          />
          <ButtonStyled  type='submit'>Log in</ButtonStyled>
    </FormStyled>
    </ContainerForm>
  )
}
