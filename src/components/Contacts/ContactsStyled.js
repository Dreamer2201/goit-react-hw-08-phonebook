import styled from 'styled-components';

const WrapperLoader = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const ContactsListStyled = styled.ul`
    height: 200px;
    padding-inline-start: 10px;
    color: #fff;
    text-shadow: #FA0 1px 0 5px;
    overflow-y: auto;

    @media (min-width: 768px) {
        height: 300px;
    }
`;
const ContactItemStyled = styled.li`
    margin-top: 10px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
    background-color: rgba(232, 230, 245, 0.3);
    border: 0px solid #FFF;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
`;

const ContactInf = styled.div`
    margin-top: 10px;
    font-size: 16px;
    color: #fff;
    text-shadow: #FA0 1px 0 5px;

    @media (min-width: 767px) {
      font-size: 18px;
      }
`;

const WrapperBtns = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
`;

export { WrapperLoader, ContactsListStyled, ContactItemStyled, ContactInf, WrapperBtns };