import styled from 'styled-components';
import { Link, NavLink } from "react-router-dom";

const NavBarStyled = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 30px;
`;

const ListNavBar = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;


`;
const NavBarLink = styled(NavLink)`
    font-family: 'Quattrocento Sans', sans-serif;
    font-size: 32px;
    text-decoration: none;
    color: #DAF7A6;

    &:hover,
    &:focus {
        cursor: pointer;
        transition: #FF5733 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    &.active {
        padding: 5px;
        color: #F28C28;
        background-color: rgba(72, 102, 157, .4);
        border-radius: 10px;
`;

const LogoLink = styled(Link)`
    font-size: 20px;
    text-decoration: none;
    
`;

const HomeNavLinkItem = styled.li`
        margin-left: 40px;
`;

const LogInLinkItem = styled.li`
        margin-right: 0;
`;

const ListItemsUserMenu = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 20px;
    align-items: baseline;
`;

const Wellcome = styled.p`
    font-size: 22px;
    text-decoration: none;
    text-shadow: #FFF 1px 0 4px;
    color: #DAF7A6 ;
`;

const BtnLogOut = styled.button`
        padding: 5px 5px;
        text-align: center;
        text-decoration: none;
        text-shadow: #FFF 1px 0 5px;
        font-size: 16px;
        cursor: pointer;
        border-radius: 10px;
        color: #DAF7A6 ;
        border: transparent;
        background-color: rgba(230, 230, 250, 0.2);

        &hover,
        &focus {
            background-color: rgba(72, 102, 157, .6);
            color: #2c5777;
}
`;

const WrapperUserNavMenu = styled.div`

@media (max-width: 767px) {
    display: none;
    }
@media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
    gap: 20px;
    }
    
    
    
`;

const BurgerMenu = styled.button`
    position: fixed;
    top: 10px;
    right: 10px;
    color: yellow;
    font-size: 20px;
    cursor: pointer;

    @media (min-width: 768px) {
        display: none;
    }
`;

const AuthNavLinkBlock = styled.div`
    margin-right: 10px;
`;


export {NavBarStyled, ListNavBar, NavBarLink, LogoLink, HomeNavLinkItem, ListItemsUserMenu, LogInLinkItem, AuthNavLinkBlock, BtnLogOut, Wellcome, WrapperUserNavMenu, BurgerMenu};