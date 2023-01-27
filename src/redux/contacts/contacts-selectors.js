const filterContact = ({ auth, contacts, filter }) => {
  const arrContacts = contacts.contacts;
  console.log(arrContacts);
    const filterNormolaze = filter.toLocaleLowerCase();
    if (!filter) {
      return arrContacts;
    }

    const filterContacts = arrContacts.filter(({ name }) => {
      const nameContactNormolaze = name.toLocaleLowerCase();
      const resultFilter = nameContactNormolaze.includes(filterNormolaze);
      return resultFilter;
    })
    return filterContacts;
  }

export default filterContact;
