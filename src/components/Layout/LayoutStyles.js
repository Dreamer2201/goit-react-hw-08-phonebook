import styled from 'styled-components';
import img from 'images/light.jpg';
import imgContent from 'images/network.jpg';
import imgDark from 'images/dark.jpg';


const Container = styled.div`
        min-width: 320px;
        padding-left: 20px;
        padding-right: 20px;
        margin-left: auto;
        margin-right: auto;
        font-size: 14px;
        
        @media (min-width: 480) {
            padding-left: 30px;
            padding-right: 30px;
            max-width: 480px;
        }
        @media (min-width: 768px) {
            max-width: 768px;
        }
        @media (min-width: 1200px) {
            width: 1200px;
        }

`;

const HeaderStyled = styled.header`
    height: 70px;
    position: relative;
    display: flex;
    align-items: center;
    background-image: linear-gradient( to right, rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4) ), url(${img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media (min-width: 767px) {
        height: 100px;
        }
`;

const StyledMainContainer = styled.main`
    padding: 0;
    height: calc(100vh - 120px);
    background-image: linear-gradient( to right, rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4) ), url(${imgContent});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media (min-width: 767px) {
        padding: 0;
        height: calc(100vh - 170px);
        }

`;

const StyledFooter = styled.footer`
    height: 50px;
    background-image: linear-gradient( to right, rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4) ), url(${imgDark});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 767px) {
        height: 70px;
        }
`;
 const FooterContent = styled.p`
        text-align: center;
 `;

export {Container, HeaderStyled, StyledMainContainer, FooterContent, StyledFooter };