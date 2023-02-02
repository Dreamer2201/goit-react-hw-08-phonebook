import PropTypes from "prop-types";
import { ContactItemStyled, DeleteContactBtn, AddToFamilyBtn } from "./ContactsStyled"
import { Btn } from "components/PhonebookForm/PhonebookFormStyled";

export default function ContactItem({ contact, deleteContact, addToFamily }) {
    const { id, name, number } = contact;

    return (
        <div>
            <ContactItemStyled> {name}: {number}
                <Btn type='button'
                    onClick={() => deleteContact({ id })}
                > Delete
                </Btn>
                <Btn type="button"
                onClick={() => addToFamily({id})}
                >Add to family</Btn>
            </ContactItemStyled>
        </div>
    )
}

ContactItem.propTypes = {
    contact: PropTypes.object,
    deleteContact: PropTypes.func,
    addToFamily: PropTypes.func,
}

