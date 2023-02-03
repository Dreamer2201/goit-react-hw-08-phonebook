import { useSelector } from 'react-redux';
import { Dna } from  'react-loader-spinner';
import { ContactsList } from './ContactList';
import { WrapperLoader } from './ContactsStyled';

export default function Contacts() {
    const items = useSelector(({ contacts }) => contacts.contacts);
    const isLoading = useSelector(({ contacts }) => contacts.loading);
    const isError = useSelector(({ contacts }) => contacts.error);

    return (
        <div>
            {items && <ContactsList />}
            {isLoading &&
            <WrapperLoader>
                <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
            </WrapperLoader>}
            {isError && <p>Sorry, something is wrong. Please, try again later.</p>}
        </div>
    )
}
