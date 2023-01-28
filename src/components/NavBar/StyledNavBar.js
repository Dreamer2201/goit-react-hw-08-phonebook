import styled from 'styled-components';
import { Link, NavLink } from "react-router-dom";

const NavBarStyled = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 30px;
`;

const ListNavBar = styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-around;
    align-items: center;
`;
const NavBarLink = styled(NavLink)`
    font-size: 18px;
    text-decoration: none;
    text-shadow: #FFF 1px 0 5px;

    &.active {
        padding: 5px;
        color: #ffffff;
        background-color: rgba(72, 102, 157, .6);
        border-radius: 10px;
      }
`;
const LogoLink = styled(Link)`
    font-size: 24px;
    text-decoration: none;
    
`;

const Wellcome = styled.p`
    font-size: 18px;
    text-shadow: #FFF 1px 0 5px;
`;

const BtnLogOut = styled.button`
        padding: 5px 5px;
        text-align: center;
        text-decoration: none;
        text-shadow: #FFF 1px 0 5px;
        font-size: 16px;
        cursor: pointer;
        border-radius: 10px;
        color: #000000;
        border: transparent;
        background-color: transparent;

        &hover,
        &focus {
            background-color: rgba(72, 102, 157, .6);
            color: #2c5777;
}

`;

export {NavBarStyled, ListNavBar, NavBarLink, LogoLink, BtnLogOut, Wellcome};