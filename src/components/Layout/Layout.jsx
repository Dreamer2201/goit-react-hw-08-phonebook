import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import { Container, HeaderStyled, StyledMainContainer, FooterContent, StyledFooter } from './LayoutStyles';

export default function Layout() {
  return (
      <>
          <HeaderStyled>
              <Container>
                  <NavBar />
              </Container>
          </HeaderStyled>
          <StyledMainContainer>
              <Container>
                  <Outlet />
              </Container>
          </StyledMainContainer>
          <StyledFooter>
              <Container>
                <FooterContent>Copyright &#169; by Oksana Poliakova</FooterContent>
              </Container>
          </StyledFooter>
    </>
  )
}
