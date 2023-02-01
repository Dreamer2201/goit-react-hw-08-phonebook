import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { fetchRegister } from 'redux/api/authAPI';
import { ContainerForm, FormStyled, TitleFormPage, InputStyled } from './StyledRegistrationForm';
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
    <ContainerForm>
    <TitleFormPage>Type registration form, please.</TitleFormPage>
    <FormStyled onSubmit={handlesSubmit}>
          <label htmlFor={nameUser} />
          <InputStyled
                type="text"
                name="name"
                value={name}
                id={nameUser}
                placeholder='Your name'
                required
                onChange={handleChangeInput}
          />
          <label htmlFor={emailUser} />
          <InputStyled
                type="text"
                name="email"
                value={email}
                id={emailUser}
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
                placeholder='Create your unik password'
                required
                onChange={handleChangeInput}
          />
          <ButtonStyled  type='submit'>Sign up</ButtonStyled >
    </FormStyled>
    </ContainerForm>
  )
}
