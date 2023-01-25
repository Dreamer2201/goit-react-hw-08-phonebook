import React from 'react';
import { NavLink } from "react-router-dom";
import itemsNavMenu from './itemsNavMenu';

export default function NavBar() {
    const elements = itemsNavMenu.map(({ text, id, to }) => {
        return (
            <li key={id}>
                <NavLink to={to}>{text}</NavLink>
            </li>
        )
    })
  return (
    <nav>
        <ul>
            {elements}
        </ul>
    </nav>
  )
}
