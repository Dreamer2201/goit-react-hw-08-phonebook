import styled from 'styled-components';

const LoginFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 350px;
`;

const ButtonStyled = styled.button`
    display: inline-block;
    width: 150px;
    height: 30px;
    border-radius: 10px;
`;

export {LoginFormStyled, ButtonStyled};