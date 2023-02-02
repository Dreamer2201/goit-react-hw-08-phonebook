import React from 'react';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import AuthNavMenu from './AuthNavMenu';
import UserNavMenu from './UserNavMenu';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { ListNavBar, NavBarLink, BurgerMenu, HomeNavLinkItem } from './StyledNavBar';
import { FcContacts } from "react-icons/fc";
import ModalMenu from 'components/ModalMenu/ModalMenu';
import { openModal } from 'redux/auth/auth-Slice';

export default function NavBar() {
    const isLogginUser = useSelector(getIsLoggedIn);
    const isModalOpen = useSelector(store => store.auth.isModalOpen);
    const homeId = nanoid();
    const dispatch = useDispatch();

    const openBurgerMenu = () => {
      dispatch(openModal());
    }

  return (
    <nav>
        <ListNavBar>
        <Link to="/contacts"><FcContacts color='#737373' size='40px'/></Link>
        <HomeNavLinkItem key={homeId}>
            <NavBarLink to="/">Home</NavBarLink>
        </HomeNavLinkItem>
            {isLogginUser ? <BurgerMenu onClick={openBurgerMenu}>=</BurgerMenu> : <></>}
            {isModalOpen ? <ModalMenu /> : <></>}
            {isLogginUser ? <UserNavMenu /> : <AuthNavMenu />}
            
        </ListNavBar>
    </nav>
  )
}
