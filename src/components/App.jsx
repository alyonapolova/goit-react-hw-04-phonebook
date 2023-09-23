import { useEffect, useState } from 'react';
import { ContactForm } from './Form/Form';
import { Filter } from './Form/Filter';
import { ContactList } from './Form/ContactList';
import React from 'react';

import { FormDiv, ContactsDiv } from './Form/Form.styled';
export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  // state = {
  //   contacts: [],
  //   filter: '',
  // };

  useEffect(() => {
    const allContacts = localStorage.getItem('contacts');
    if (allContacts) setContacts(JSON.parse(allContacts));
  }, []);

  // componentDidMount() {
  //   const allContacts = localStorage.getItem('contacts');
  //   if (allContacts && JSON.parse(allContacts)) {
  //     this.setState({ contacts: JSON.parse(allContacts) });
  //   } else this.setState(this.state.contacts);
  // }

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // componentDidUpdate(_, prevState) {
  //     if (prevState.contacts.length !== this.state.contacts.length) {
  //       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //     }
  //   }

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
        <ContactForm onSubmit={handleAddContact} contacts={contacts} />
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
