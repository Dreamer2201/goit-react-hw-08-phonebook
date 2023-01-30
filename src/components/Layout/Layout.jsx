import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import { HeaderStyled } from './LayoutStyles';

export default function Layout() {
  return (
      <>
          <HeaderStyled>
              <NavBar />
          </HeaderStyled>
          <main>
              <Outlet />
          </main>
    </>
  )
}
