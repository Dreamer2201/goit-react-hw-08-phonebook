import styled from 'styled-components';
import img from 'images/phonetalking.jpg';

const ConteinerFamilyPage = styled.div`
    width: '100vw';
border: 1px solid #000;
background-image: linear-gradient( to right, rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4) ), url(${img});
background-repeat: no-repeat;
background-position: center;
background-size: cover;
`;

const Title = styled.h2`
    font-size: 24px;
    text-shadow: #FFF 1px 0 5px;
`;

const FamilyListStyled = styled.ul`
    list-style: none;
    font-size: 24px;
`;

export {ConteinerFamilyPage, Title, FamilyListStyled};