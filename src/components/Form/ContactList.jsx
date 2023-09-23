import React from 'react';
import PropTypes from 'prop-types';
import { ListUl, ListLi, ButtonLi } from './Form.styled';
export const ContactList = ({ contacts, filter, handleDelete }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ListUl>
      {filteredContacts.map(contact => (
        <ListLi key={contact.id}>
          {contact.name}: {contact.number}{' '}
          <ButtonLi onClick={() => handleDelete(contact.id)}>Delete</ButtonLi>
        </ListLi>
      ))}
    </ListUl>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
