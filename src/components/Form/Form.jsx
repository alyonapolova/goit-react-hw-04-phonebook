import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form, Button } from './Form.styled';
import PropTypes from 'prop-types';

const ContactForm = ({ contacts, onSubmit, setContacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    //console.log(e.target.name);
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const findDuplicate = contacts.some(contact => contact.name === name);

    if (name.trim() === '') {
      return;
    }

    if (findDuplicate) {
      alert(`${name} is already in contacts!`);
    } else {
      const newContact = { id: nanoid(), name, number };
      setContacts(prevContacts => [...prevContacts, newContact]);
      setName('');
      setNumber('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        <input
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        ></input>
      </label>

      <label>
        <input
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          placeholder="Number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
