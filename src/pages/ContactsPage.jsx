import React from 'react'
import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import Contacts from 'components/Contacts/Contacts';
import FilterContacts from 'components/FilterContacts';
import { Title } from 'components/App/AppStyled';
import { ConteinerContactsPage } from './StyledContactPage';

export default function ContactsPage() {
    return (
        <ConteinerContactsPage>
            <div>
                <Title>Phonebook</Title>
                <PhonebookForm />
            </div>
            <div>
                <Title>Contacts</Title>
                <FilterContacts />
                <Contacts />
            </div>
        </ConteinerContactsPage>
  )
}
