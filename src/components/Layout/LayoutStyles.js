import styled from 'styled-components';
import img from 'images/phone.jpg';

const HeaderStyled = styled.header`
height: 120px;
border: 1px solid #000;
background-image: linear-gradient( to right, rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4) ), url(${img});
background-repeat: no-repeat;
background-position: center;
background-size: cover;
`;

export {HeaderStyled};