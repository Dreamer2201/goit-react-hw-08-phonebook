import styled from 'styled-components';
import img from 'images/phonebook-img.jpg';

const ConteinerHomePage = styled.div`
    width: '100vw';
border: 1px solid #000;
background-image: linear-gradient( to right, rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4) ), url(${img});
background-repeat: no-repeat;
background-position: center;
background-size: cover;
`;

const Content = styled.p`
    margin-left: auto;
    margin-right: auto;
    width: 320px;
    text-align: left;
    font-size: 22px;
    text-shadow: #FFF 1px 0 5px;
`;

export {ConteinerHomePage, Content};