import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const ListNavBar = styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-around;
`;
const NavBarLink = styled(NavLink)`
    text-decoration: none;

    &.active {
        padding: 5px;
        color: #ffffff;
        background-color: rgba(72, 102, 157, .6);
        border-radius: 10px;
      }
`

export {ListNavBar, NavBarLink};