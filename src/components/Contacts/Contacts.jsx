import { useSelector } from 'react-redux';
import { Dna } from  'react-loader-spinner'
// import filterContact from 'redux/contacts/contacts-selectors';
import { ContactsList } from './ContactList';

export default function Contacts() {
    const items = useSelector(({ contacts }) => contacts.contacts);
    const isLoading = useSelector(({ contacts }) => contacts.loading);
    const isError = useSelector(({ contacts }) => contacts.error);

 
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
