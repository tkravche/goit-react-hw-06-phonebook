import { useSelector } from 'react-redux';

import { selectContacts, selectFilter } from 'redux/selectors';
import { Contact } from 'components/Contact/Contact';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const handlefilteredContacts = () => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };
  return (
    <ul>
      {handlefilteredContacts().map(({ name, number, id }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};
