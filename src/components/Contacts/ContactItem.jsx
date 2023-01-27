import { ContactItemStyled, DeleteContactBtn} from "./ContactsStyled"

export default function ContactItem({ contact, deleteContact }) {
    const { id, name, number } = contact;

    return (
        <div>
            <ContactItemStyled> {name}: {number}
                <DeleteContactBtn type='button'
                    onClick={() => deleteContact({ id })}
                > Delete
                </DeleteContactBtn>
            </ContactItemStyled>
        </div>
    )
}
