import styled from 'styled-components';
import img from 'images/light.jpg';
import imgContent from 'images/network.jpg';
import imgDark from 'images/dark.jpg';

const HeaderStyled = styled.header`
    height: 70px;
    position: relative;
    background-image: linear-gradient( to right, rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4) ), url(${img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 20px 15px;

    @media (min-width: 767px) {
        height: 100px;
        }
`;

const HeaderContainer = styled.nav`
    width: 1200px;
`;

const StyledMainContainer = styled.div`
    padding: 15px 50px;
    height: calc(100vh - 140px);
    background-image: linear-gradient( to right, rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4) ), url(${imgContent});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media (min-width: 767px) {
        height: calc(100vh - 200px);
        }

`;

const StyledFooter = styled.footer`
    height: 70px;
    background-image: linear-gradient( to right, rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4) ), url(${imgDark});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 767px) {
        height: 100px;
        }
`;


export {HeaderStyled, HeaderContainer, StyledMainContainer, StyledFooter };