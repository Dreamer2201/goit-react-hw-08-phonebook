import styled from 'styled-components';

const Form = styled.form`
    width: 250px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    border: 0px solid #FFF;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    @media (width: 768px) {
        width: 450px;
    }
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
    margin-top: 10px;
    width: 150px;
    padding: 5px;

    align-items: center;
  background-image: linear-gradient(144deg, #FFA500, #5B42F3 50%,#00DDEB);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;

            
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.8px;
    line-height: 20px;
    color: #FFFFFF;
    text-align: center;
`;

export { Form, Btn, InputAddContact };
