import styled from 'styled-components';


const Wrapper = styled.div`
    height: '100vh',
    fontSize: 40,                                                                        
    color: '#010101';
`;

const Title = styled.h2`
    font-size: 24px;
    text-shadow: #FC0 1px 0 5px;
`;
const InputName = styled.label`
    margin: 5px;
    padding: 4px;
    font-size: 16px;
    font-style: italic;
    text-shadow: #FA0 1px 0 5px;
`;

export { Wrapper, Title, InputName };