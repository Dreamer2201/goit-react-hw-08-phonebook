import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import { HeaderStyled, StyledMainContainer, StyledFooter } from './LayoutStyles';

export default function Layout() {
  return (
      <>
          <HeaderStyled>
              <NavBar />
          </HeaderStyled>
          <main>
            <StyledMainContainer>
            <Outlet />
            </StyledMainContainer>
          </main>
          <footer>
             <StyledFooter>
                    <div>Copyright &#169; by Oksana Poliakova</div>
             </StyledFooter>
          </footer>
    </>
  )
}
