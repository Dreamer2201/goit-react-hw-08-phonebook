import styled from 'styled-components';
import img from 'images/phonebook-img.jpg';

const ConteinerRegisrationPage = styled.div`
    width: '100vw';
    border: 1px solid #000;
    background-image: linear-gradient( to right, rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4) ), url(${img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

const RegFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 350px;
`;
const TitleRegPage = styled.h2`
    font-size: 18px;
    text-shadow: #FC0 1px 0 2px;
`;

export {ConteinerRegisrationPage, RegFormStyled, TitleRegPage};
