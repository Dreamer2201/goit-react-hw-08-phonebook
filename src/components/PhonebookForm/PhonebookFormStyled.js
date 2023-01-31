import styled from 'styled-components';

const Form = styled.form`
    width: 250px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    border: 0px solid #FFF;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;;
`;

const Btn = styled.button`
    display: inline-block;
    cursor: pointer;

    margin-top: 20px;
    width: 100px;
    padding: 5px;

    background-color: #1899D6;
    border: solid transparent;
    border-radius: 16px;
    border-width: 0 0 4px;
    box-sizing: border-box;
            
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.8px;
    line-height: 20px;
    color: #FFFFFF;
    text-align: center;
`;

export { Form, Btn };
