import React from 'react';
import { useSelector } from 'react-redux';
import { Title, FamilyListStyled } from './StyledFamilyPage';

export default function FamilyContactsPage() {
  const familyContacts = useSelector(({contacts}) => contacts.family);
  const elements = familyContacts.map(item => {
    return <li key={item.id}>{item.name} : {item.number}</li>
  })
  return (
    <>
      <Title>My family contacts:</Title>
      <FamilyListStyled>{elements}</FamilyListStyled>
      </>
  )
}
