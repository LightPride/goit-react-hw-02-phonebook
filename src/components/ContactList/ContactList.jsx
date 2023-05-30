import React from 'react';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDeteleContact }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <p>{contact.name}:</p> <span>{contact.number}</span>
            <button
              type="button"
              onClick={() => onDeteleContact(contact.id)}
            ></button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
};
