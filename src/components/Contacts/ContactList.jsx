import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactsListStyled } from "./ContactsStyled";
import ContactItem from "./ContactItem";
import filterContact from 'redux/contacts/contacts-selectors';
import { fetchContacts, deleteContact } from "redux/api/contactsAPI";
import { addFamilyContact } from "redux/contacts/contacts-Slice";


export function ContactsList() {
    const items = useSelector(filterContact);
    const dispatch = useDispatch();
    const onDelete = (id) => dispatch(deleteContact(id));
    
    const onAddToFamilyContacts = (id) => dispatch(addFamilyContact(id));

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);   


    const elements = items.map((item) => {
         return (<ContactItem key={item.id} contact={item} deleteContact={onDelete} addToFamily={onAddToFamilyContacts} />)
    });
    return (
        <div>
            <ContactsListStyled> {elements}</ContactsListStyled>
            <ToastContainer />
        </div>
    )
}