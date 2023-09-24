import { useEffect, useState } from 'react';
import ContactForm from './Form/Form';
import Filter from './Form/Filter';
import ContactList from './Form/ContactList';
import React from 'react';

import { FormDiv, ContactsDiv } from './Form/Form.styled';

const useLocalStorage = defaultValue => {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? defaultValue
  );
  useEffect(
    () => localStorage.setItem('contacts', JSON.stringify(state)),
    [state]
  );
  return [state, setState];
};
export const App = () => {
  const [contacts, setContacts] = useLocalStorage([]);
  const [filter, setFilter] = useState('');

  const handleAddContact = newContact => {
    setContacts(prevContacts => [...prevContacts, newContact]);
  };
  // handleAddContact = newContact => {
  //   this.setState(prevState => ({
  //     contacts: [...prevState.contacts, newContact],
  //   }));
  // };

  const handleFilterChange = e => {
    setFilter(e.currentTarget.value);
  };
  // handleFilterChange = e => {
  //   this.setState({ filter: e.currentTarget.value });
  // };

  const handleDelete = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  // handleDelete = id => {
  //   this.setState(prev => ({
  //     contacts: prev.contacts.filter(contact => contact.id !== id),
  //   }));
  // };

  return (
    <>
      <FormDiv>
        <h1>Phonebook</h1>
        <ContactForm
          setContacts={setContacts}
          onSubmit={handleAddContact}
          contacts={contacts}
        />
        <h2>Contacts</h2>
        <ContactsDiv>
          <Filter value={filter} onChange={handleFilterChange} />
          <ContactList
            contacts={contacts}
            filter={filter}
            handleDelete={handleDelete}
          />
        </ContactsDiv>
      </FormDiv>
    </>
  );
};
