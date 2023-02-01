import styled from 'styled-components';
import img from 'images/phonetalking.jpg';
import imgContent from 'images/phonebook-img.jpg';

const HeaderStyled = styled.header`
    height: 100px;
    background-image: linear-gradient( to right, rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4) ), url(${img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 20px 15px;
`;

const HeaderContainer = styled.nav`
    width: 1200px;
`;

const StyledMainContainer = styled.div`
    padding: 15px;
    height: calc(100vh - 180px);
    background-image: linear-gradient( to right, rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4) ), url(${imgContent});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

const StyledFooter = styled.footer`
    height: 80px;
    background-image: linear-gradient( to right, rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4) ), url(${img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

export {HeaderStyled, HeaderContainer, StyledMainContainer, StyledFooter};