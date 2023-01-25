import React from 'react'
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

export default function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
    }

    const nameUser = nanoid();
    const emailUser = nanoid();
    const passwordId = nanoid();
  return (
    <form>
          <label htmlFor={nameUser} />
          <input
                type="text"
                name="name"
                value={name}
                id={nameUser}
                required
                onChange={handleChangeInput}
          />
          <label htmlFor={emailUser} />
          <input
                type="text"
                name="email"
                value={email}
                id={emailUser}
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
          <button type='submit'>Submit registration</button>
    </form>
  )
}
