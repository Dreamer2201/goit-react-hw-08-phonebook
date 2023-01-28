import { ContactItemStyled, DeleteContactBtn, AddToFamilyBtn } from "./ContactsStyled"

export default function ContactItem({ contact, deleteContact, addToFamily }) {
    const { id, name, number } = contact;

    return (
        <div>
            <ContactItemStyled> {name}: {number}
                <DeleteContactBtn type='button'
                    onClick={() => deleteContact({ id })}
                > Delete
                </DeleteContactBtn>
                <AddToFamilyBtn type="button"
                onClick={() => addToFamily({id})}
                >Add to family</AddToFamilyBtn>
            </ContactItemStyled>
        </div>
    )
}
