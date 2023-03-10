import React from 'react';
import { useSelector } from 'react-redux';
import { Title } from 'components/App/AppStyled';
import { ContactInf } from 'components/Contacts/ContactsStyled';
import { ConteinerFamilyPage } from './StyledFamilyContactsPage';

export default function FamilyContactsPage() {
  const familyContacts = useSelector(({contacts}) => contacts.family);
  const elements = familyContacts.map(item => {
    return <li key={item.id}>{item.name} : {item.number}</li>
  })
  return (
    <ConteinerFamilyPage>
        <Title>My family contacts:</Title>
        <ContactInf>{elements}</ContactInf>
    </ConteinerFamilyPage>
  )
}
