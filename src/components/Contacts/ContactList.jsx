import { useEffect } from "react";
import { ContactsListStyled } from "./ContactsStyled";
import { useSelector, useDispatch } from 'react-redux';
import ContactItem from "./ContactItem";
import filterContact from 'redux/contacts/contacts-selectors';
import { deleteContact } from "redux/api/contactsAPI";
import { fetchContacts } from "redux/api/contactsAPI";

export function ContactsList() {
    const items = useSelector(filterContact);
    const dispatch = useDispatch();
    const onDelete = (id) => dispatch(deleteContact(id));

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);   

    const elements = items.map((item) => {
         return (<ContactItem key={item.id} contact={item} deleteContact={onDelete} />)
    });
    return (
        <div>
            <ContactsListStyled> {elements}</ContactsListStyled>
        </div>
    )
}