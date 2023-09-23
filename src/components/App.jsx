import { Component } from 'react';
import { ContactForm } from './Form/Form';
import { Filter } from './Form/Filter';
import { ContactList } from './Form/ContactList';
import React from 'react';

import { FormDiv, ContactsDiv } from './Form/Form.styled';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const allContacts = localStorage.getItem('contacts');
    if (allContacts && JSON.parse(allContacts)) {
      this.setState({ contacts: JSON.parse(allContacts) });
    } else this.setState(this.state.contacts);
  }
  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleAddContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };
  handleFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  handleDelete = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <>
        <FormDiv>
          <h1>Phonebook</h1>
          <ContactForm
            onSubmit={this.handleAddContact}
            contacts={this.state.contacts}
          />
          <h2>Contacts</h2>
          <ContactsDiv>
            <Filter value={filter} onChange={this.handleFilterChange} />
            <ContactList
              contacts={contacts}
              filter={filter}
              handleDelete={this.handleDelete}
            />
          </ContactsDiv>
        </FormDiv>
      </>
    );
  }
}
