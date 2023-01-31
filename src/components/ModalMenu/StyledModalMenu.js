import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const OverlayModal = styled.div`
    width: 75%;
    height: 100%;
    background-color: grey;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 99;
`;

const Modal = styled.div`
    max-width: 100%;
    position: relative;

`
const WellcomeModal = styled.p`
    font-size: 22px;
    text-decoration: none;
    text-shadow: #FFF 1px 0 4px;
    color: #DAF7A6 ;
`;

const BtnUserMenuModal = styled.button`
    position: fixed;
    top: 10px;
    right: 10px;
    color: red;
    font-size: 16px;
    cursor: pointer;
`

const WrapperModalNavMenu = styled.div`
    @media (max-width: 767px) {
        justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    }
`;

const NavBurgerLink = styled(NavLink)`
    font-size: 18px;
    text-decoration: none;
    text-shadow: #FFF 1px 0 1px;
    color: #DAF7A6;

    &.active {
        padding: 5px;
        background-color: rgba(72, 102, 157, .6);
        border-radius: 10px;
      }
`;

const BtnLogOutModal = styled.button`
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

export {OverlayModal, Modal, BtnUserMenuModal, WrapperModalNavMenu, NavBurgerLink, WellcomeModal, BtnLogOutModal};