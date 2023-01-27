import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Dna } from  'react-loader-spinner'
import filterContact from 'redux/contacts/contacts-selectors';
import { ContactsList } from './ContactList';
// import { fetchContacts } from "redux/api/contactsAPI";

export default function Contacts() {
    const dispatch = useDispatch();
    const items = useSelector(({ auth, contacts, filter }) => contacts.contacts);
    const isLoading = useSelector(({ auth, contacts, filter }) => contacts.loading);
    const isError = useSelector(({ auth, contacts, filter }) => contacts.error);

    // useEffect(() => {
    //     dispatch(fetchContacts());
    // }, [dispatch]);   
 
    return (
        <div>
            {isLoading && <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />}
            {items && <ContactsList />}
            {isError && <p>Sorry, something is wrong. Please, try again later.</p>}
        </div>
    )
}
