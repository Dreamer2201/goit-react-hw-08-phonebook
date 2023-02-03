import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NameHomePage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    @media (min-width: 767px) {
        margin-bottom: 5px;
        }
`;

const TitleHomePage = styled.h2`
    font-family: 'Lobster Two', cursive;
    font-size: 18px;
    color: #aaedf2;
    text-shadow: 1px 1px 1px black, 0 0 0.1em blue, 0 0 0.1em blue;

    @media (min-width: 767px) {
        font-size: 32px;
        }
`;

const LogoContacts = styled(Link)`
    margin-right: 5px;
`
const Content = styled.p`
    padding: 0;
    margin: 0;
    font-family: 'Kalam', cursive;
    font-size: 14px;
    text-align: justify;
    text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue;
  color: white;

  @media (min-width: 767px) {
    font-size: 28px;
    }
`;

const HomePageWrapper = styled.div`
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
`;

const WrapperLetsGo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LetsGo = styled.p`
    margin-right: 12px;
    font-family: 'Acme', sans-serif;
    font-size: 14px;
    font-style: italic;
    text-align: center;
    color: #aaedf2;
    text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em white;

    @media (min-width: 767px) {
        font-size: 32px;
        }
`;




export { NameHomePage, WrapperLetsGo, HomePageWrapper, TitleHomePage, LogoContacts, LetsGo ,Content};