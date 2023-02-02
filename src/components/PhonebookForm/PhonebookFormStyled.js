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

const InputAddContact = styled.input`
font-family: font-family: 'Acme', sans-serif;
text-decoration: none;
position: relative;
width: 80%;
display: block;
margin: 9px auto;
font-size: 17px;
color: #fff;
padding: 8px;
border-radius: 6px;
border: none;
background: rgba(3,3,3,.1);
transition: all 0.2s ease-in-out;
}

&:focus {
outline: none;
box-shadow: 3px 3px 10px #333;
background: rgba(3,3,3,.18);
}
`;

const Btn = styled.button`
    display: inline-block;
    cursor: pointer;

    margin-top: 20px;
    width: 150px;
    padding: 5px;

    background-color: orange;
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

export { Form, Btn, InputAddContact };
