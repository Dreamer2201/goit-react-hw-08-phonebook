import PropTypes from "prop-types";
import { ContactItemStyled, DeleteContactBtn, AddToFamilyBtn } from "./ContactsStyled"
import { Btn } from "components/PhonebookForm/PhonebookFormStyled";
import { WrapperListContacts, ContactInf, WrapperBtns } from "./ContactsStyled";

export default function ContactItem({ contact, deleteContact, addToFamily }) {
    const { id, name, number } = contact;

    return (
        <>
            <ContactItemStyled>
                <ContactInf> {name}: {number}</ContactInf>
                <WrapperBtns>
                <Btn type='button'
                    onClick={() => deleteContact({ id })}
                > Delete
                </Btn>
                <Btn type="button"
                onClick={() => addToFamily({id})}
                >Add to family</Btn>
                </WrapperBtns>    
            </ContactItemStyled>
        </>
    )
}

ContactItem.propTypes = {
    contact: PropTypes.object,
    deleteContact: PropTypes.func,
    addToFamily: PropTypes.func,
}

