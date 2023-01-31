import styled from 'styled-components';

const ContactsListStyled = styled.ul`
    font-size: 18px;
    padding-inline-start: 10px;
`;
const ContactItemStyled = styled.li`
    display: flex;
    align-items: center;
`;

const DeleteContactBtn = styled.button`
    margin-left: 10px;
    background-color: #e1ecf4;
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
export { ContactsListStyled, ContactItemStyled, DeleteContactBtn, AddToFamilyBtn };