import styled from 'styled-components';

const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 250px;
    margin-top: 10px;
    background: #f8f4e5;
  padding: 15px 15px;
  border: 2px solid rgba(0,0,0,1);
  box-shadow: 15px 15px 1px #ffa580, 15px 15px 1px 2px rgba(0,0,0,1);

  @media (min-width: 768px) {
    width: 450px;
    padding: 50px 100px;
  }
`;
const TitleFormPage = styled.h2`
    color: #de733a;
    margin: 0;
    padding: 0;
    font-family: 'Lobster Two', cursive;
    font-size: 24px;
    text-shadow: #575351 2px 0 2px;

    @media (min-width: 768px) {
        font-size: 32px;
    text-shadow: #575351 2px 0 2px;
      }
`;

const InputStyled = styled.input`
    display: block;
    width: 100%;
    font-size: 14px;
    line-height: 28px;
    font-family: font-family: 'Acme', sans-serif;
    margin-bottom: 28px;
    border: none;
    border-bottom: 5px solid rgba(0,0,0,1);
    background: #f8f4e5;
    min-width: 250px;
    padding-left: 5px;
    outline: none;
    color: rgba(0,0,0,1);
  
    &:focus {
        border-bottom: 5px solid #ffa580;
    }
  
`;


export { ContainerForm, FormStyled, TitleFormPage, InputStyled};
