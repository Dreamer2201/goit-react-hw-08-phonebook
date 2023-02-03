import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { Form, Btn } from './PhonebookFormStyled';
import { addNewContact } from 'redux/api/contactsAPI';
import filterContact from 'redux/contacts/contacts-selectors';
   
import { InputAddContact } from './PhonebookFormStyled';

export default function PhonebookForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contacts = useSelector(filterContact);
    const dispatch = useDispatch();
 
    const isDuplicate = (contact) => {
        const result = contacts.find((item) => item.name === contact.name);
        return result;
    };
    
    const notifyDublicate = (str) => toast.info(str);

    const handleChangeInput = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case "name":
                setName(value);
                break;
            case "number":
                setNumber(value);
                break;
            default: return;
        }
    }

    const handleSubmitPhonebookForm = (e) => {
        e.preventDefault();
        const contact = {
            name,
            number,
        };
        setName('');
        setNumber('');
        if (isDuplicate(contact)) {
            return notifyDublicate(`${contact.name} is already in Phonebook List`);
        }
        dispatch(addNewContact(contact));
    };

    let contactNameId = nanoid();
    let contactTelNumId = nanoid();
    return (
            <Form onSubmit={handleSubmitPhonebookForm}>
                <label htmlFor={contactNameId} />
                    <InputAddContact
                        type="text"
                        name="name"
                        value={name}
                        id={contactNameId}
                        placeholder='Name'
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={handleChangeInput}
                    />
                <label htmlFor={contactTelNumId} />
                    <InputAddContact
                        type="tel"
                        name="number"
                        value={number}
                        id={contactTelNumId}
                        placeholder='Tel.number'
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={handleChangeInput}
                    />
                <Btn type="submit">Add</Btn>
            </Form>
        )
    }

