import styled from 'styled-components';
import img from 'images/phonebook-img.jpg';

const ConteinerLoginPage = styled.div`
    width: '100vw';
    border: 1px solid #000;
    background-image: linear-gradient( to right, rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4) ), url(${img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

const LoginFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 350px;
`;

const TitleLogPage = styled.h2`
    text-color: #fafaf5;
    font-size: 18px;
    text-shadow: #FC0 1px 0 2px;
`;

const ButtonStyled = styled.button`
  margin: 0 auto;
  line-height: 28px;
  padding: 0 20px;
  background: #ffa580;
  letter-spacing: 2px;
  transition: .2s all ease-in-out;
  outline: none;
  border: 1px solid rgba(0,0,0,1);
  box-shadow: 3px 3px 1px 1px #95a4ff, 3px 3px 1px 2px rgba(0,0,0,1);
  
  &:hover
    background: rgba(0,0,0,1);
    color: white;
    border: 1px solid rgba(0,0,0,1);
`;

export { ConteinerLoginPage, LoginFormStyled, TitleLogPage, ButtonStyled};