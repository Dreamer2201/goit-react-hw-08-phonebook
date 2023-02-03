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
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 40px;

    @media (min-width: 768px) {
        gap: 70px;
    }
    


`;
const NavBarLink = styled(NavLink)`
    font-family: 'Quattrocento Sans', sans-serif;
    font-size: 22px;
    text-decoration: none;
    color: white;
    text-shadow: 1px 1px 1px black, 0 0 0.1em blue, 0 0 0.1em blue;

    @media (min-width: 767px) {
        font-size: 28px;
        }

    &:hover,
    &:focus {
        cursor: pointer;
        transition: #FF5733 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    &.active {
        padding: 5px;
        color: #DAF7A6;
        background-color: rgba(72, 102, 157, .4);
        border-radius: 10px;
        text-shadow: none;
`;

const LogoLink = styled(Link)`
    font-size: 20px;
    text-decoration: none;
    
`;

const HomeNavLinkItem = styled.li`
        margin: 0;
        padding: 0;
`;

const LogInLinkItem = styled.li`
        margin-right: 0;
`;


const WellcomeBlock = styled.div`
    position: absolute;
    bottom: 2px;
    right: 15px;
    display: flex;
    justify-content: start;
    gap: 5px;
    align-items: center;
`;

const Wellcome = styled.p`
    margin: 0;
    padding: 0;
    font-size: 18px;
    text-decoration: none;
    text-shadow: #FFA500 1px 0 4px;
    color: #DAF7A6 ;
`;

const WrapperUserNavMenu = styled.div`

@media (max-width: 767px) {
    display: none;
    }
@media (min-width: 768px) {
    display: flex;
    justify-content: start;
    // flex-direction: row;
    
    // align-items: baseline;
    // gap: 20px;
    }
    
`;

const ListItemsUserMenu = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    gap: 70px;
    // flex-direction: row;
    // justify-content: space-around;
 
    // align-items: baseline;
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

const BtnLogOut = styled.button`
        position: absolute;
        top: 10px;
        right: 10px;

        padding: 4px;
        text-align: center;
        text-decoration: none;
        text-shadow: #FFF 1px 0 5px;
        font-size: 18px;
        cursor: pointer;
        border-radius: 10px;
        color: white;
        text-shadow: 1px 1px 1px black, 0 0 0.1em blue, 0 0 0.1em blue;
        border: transparent;
        background-color: rgba(230, 230, 250, 0.2);

        &hover,
        &focus {
            background-color: rgba(72, 102, 157, .6);
            color: #2c5777;
}
`;

const AuthNavLinkBlock = styled.div`
    margin-right: 10px;
`;


export {NavBarStyled, ListNavBar, WellcomeBlock, NavBarLink, LogoLink, HomeNavLinkItem, ListItemsUserMenu, LogInLinkItem, AuthNavLinkBlock, BtnLogOut, Wellcome, WrapperUserNavMenu, BurgerMenu};