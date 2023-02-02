import styled from 'styled-components';

const Wrapper = styled.div`
    height: '100vh',
    fontSize: 40,                                                                        
    color: '#010101';
`;

const Title = styled.h2`
    font-size: 24px;
    background: #fff;
    background-image: linear-gradient(60deg, #FFA500, #1f0c99);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (min-width: 767px) {
        font-size: 36px;
        }

`;
const InputName = styled.label`
    margin: 5px;
    padding: 4px;
    font-size: 16px;
    font-style: italic;
    color: #fff;
    text-shadow: #FA0 1px 0 5px;

    @media (min-width: 768px) {
        font-size: 24px;
    }

`;

export { Wrapper, Title, InputName };