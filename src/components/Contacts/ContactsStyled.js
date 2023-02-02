import styled from 'styled-components';


const WrapperListContacts = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
`;

const ContactsListStyled = styled.ul`
    height: 400px;
    padding-inline-start: 10px;
    color: #fff;
    text-shadow: #FA0 1px 0 5px;
    overflow-y: scroll;
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

const DeleteContactBtn = styled.button`
    margin-left: 10px;
    // background-image: linear-gradient( 45%, #e1ecf4, #5181f0, #fff);

    align-items: center;
  background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;

    border-radius: 3px;
    border: 1px solid #7aa7c7;
    box-shadow: rgba(255, 255, 255, .7) 0 1px 0 0 inset;
    color: #39739d;
    outline: none;
    padding: 5px 5px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
}

&hover,
&focus {
  background-color: #b3d3ea;
  color: #2c5777;
}

&focus {
  box-shadow: 0 0 0 4px rgba(0, 149, 255, .15);
}

&active {
  background-color: #a0c7e4;
  box-shadow: none;
  color: #2c5777;
}
`;

const AddToFamilyBtn = styled.button`
    display: inline-block;
    margin-left: 15px;
    background-color: #e1ecf4;
    border-radius: 3px;
    border: 1px solid #7aa7c7;
    box-shadow: rgba(255, 255, 255, .7) 0 1px 0 0 inset;
    color: #39739d;
    outline: none;
    padding: 4px 4px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
}

&hover,
&focus {
  background-color: #b3d3ea;
  color: #2c5777;
}

&focus {
  box-shadow: 0 0 0 4px rgba(0, 149, 255, .15);
}

&active {
  background-color: #a0c7e4;
  box-shadow: none;
  color: #2c5777;
}

`;
export { WrapperListContacts, ContactsListStyled, ContactItemStyled, ContactInf, WrapperBtns, DeleteContactBtn, AddToFamilyBtn };