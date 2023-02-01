import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NameHomePage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`;

const TitleHomePage = styled.h2`
    font-family: 'Lobster Two', cursive;
    font-size: 24px;
`;

const LogoContacts = styled(Link)`
    margin-right: 5px;
`
const Content = styled.p`
    display: block;
    padding: 10px;
    font-family: 'Kalam', cursive;
    font-size: 24px;
    text-align: justify;
    text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue;
  color: white;
`;
const LetsGo = styled.p`
    font-family: 'Acme', sans-serif;
    font-size: 28px;
    font-style: italic;
    text-align: center;
    color: #F28C28;
    text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em white;
`;




export { NameHomePage, TitleHomePage, LogoContacts, LetsGo ,Content};